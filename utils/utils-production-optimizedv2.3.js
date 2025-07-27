'use client'

import React, { useEffect, useState } from 'react'
import DOMPurify from 'dompurify'
import parse from 'html-react-parser'

// Improved highlighting function
export const highlightText = (html, searchQuery) => {
  if (!searchQuery || typeof html !== 'string') return html;

  // Create a temporary div to parse HTML
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;

  // Get all text content
  const fullText = tempDiv.textContent || tempDiv.innerText || '';

  // Find matches in the full text
  const escapedQuery = searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escapedQuery})`, 'gi');
  const matches = [];
  let match;

  while ((match = regex.exec(fullText)) !== null) {
    matches.push({
      start: match.index,
      end: match.index + match[0].length
    });
  }

  if (matches.length === 0) return html;

  // Walk through the DOM and apply highlights
  const walkTextNodes = (node, textOffset = 0) => {
    let currentOffset = textOffset;

    if (node.nodeType === Node.TEXT_NODE) {
      const textContent = node.textContent || '';
      const nodeStart = currentOffset;
      const nodeEnd = currentOffset + textContent.length;

      // Find matches that overlap with this text node
      const overlappingMatches = matches.filter(m =>
        m.start < nodeEnd && m.end > nodeStart
      );

      if (overlappingMatches.length > 0) {
        // Split the text node and insert highlights
        const parent = node.parentNode;
        const fragment = document.createDocumentFragment();
        let lastEnd = 0;

        overlappingMatches.forEach(match => {
          const relativeStart = Math.max(0, match.start - nodeStart);
          const relativeEnd = Math.min(textContent.length, match.end - nodeStart);

          // Add text before match
          if (relativeStart > lastEnd) {
            fragment.appendChild(document.createTextNode(textContent.slice(lastEnd, relativeStart)));
          }

          // Add highlighted match
          if (relativeEnd > relativeStart) {
            const mark = document.createElement('mark');
            mark.textContent = textContent.slice(relativeStart, relativeEnd);
            fragment.appendChild(mark);
          }

          lastEnd = relativeEnd;
        });

        // Add remaining text
        if (lastEnd < textContent.length) {
          fragment.appendChild(document.createTextNode(textContent.slice(lastEnd)));
        }

        if (parent) {
          parent.replaceChild(fragment, node);
        }
      }

      return currentOffset + textContent.length;
    } else {
      // Process child nodes
      const children = Array.from(node.childNodes);
      children.forEach(child => {
        currentOffset = walkTextNodes(child, currentOffset);
      });
      return currentOffset;
    }
  };

  // Clone the element to avoid modifying the original
  const clonedDiv = tempDiv.cloneNode(true);
  walkTextNodes(clonedDiv);

  return clonedDiv.innerHTML;
};

// Helper function to parse child nodes, especially handling <mark> tags
const parseChildNode = (child, index) => {
  if (child?.name === 'mark') {
    return (
      <mark key={index}>
        {child?.children?.map((subChild) => subChild?.data).join('')}
      </mark>
    )
  }
  return child?.data || ''
}

// Helper function to check if a URL is absolute
const isAbsoluteUrl = (url) => {
  // Check if the URL starts with http://, https://, //, or a domain
  return /^(https?:\/\/|\/\/|[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,})/i.test(url)
}

/**
 * React component to render HTML content with proper link handling and tab management
 */
const HtmlContent = ({ content, searchQuery, baseUrl }) => {
  // Tab management state
  const [openTabs, setOpenTabs] = useState(new Map());

  // Apply highlighting to the content if searchQuery is provided
  const highlightedContent = searchQuery
    ? highlightText(content, searchQuery)
    : content

  // Get base URL for section links - try from param first, then from localStorage, then current path
  let sectionBaseUrl = baseUrl

  if (
    !sectionBaseUrl &&
    typeof window !== 'undefined' &&
    typeof localStorage !== 'undefined'
  ) {
    try {
      sectionBaseUrl = localStorage.getItem('localURL')
    } catch (e) {
      console.error('Error accessing localStorage:', e)
    }
  }

  if (!sectionBaseUrl && typeof window !== 'undefined') {
    sectionBaseUrl = window.location.pathname
  }

  // Tab management logic
  useEffect(() => {
    const handleLinkClick = (event) => {
      const target = event.target.closest('a');
      if (!target || !target.href) return;

      const url = new URL(target.href);
      const baseUrl = url.origin + url.pathname + url.search; // URL without hash
      const hash = url.hash;

      // Check if this is a bookmark section link
      if (hash && hash.match(/#bookmarkSection\d*/)) {
        event.preventDefault();

        // Check if we have a tab open for this base URL
        const existingTab = openTabs.get(baseUrl);

        if (existingTab && !existingTab.closed) {
          // Focus existing tab and scroll to section
          existingTab.focus();

          // Send message to scroll to the bookmark section
          try {
            existingTab.postMessage({
              type: 'SCROLL_TO_BOOKMARK',
              hash: hash,
              bookmarkId: hash.substring(1) // Remove the '#'
            }, '*');
          } catch (e) {
            // Fallback: try to update the URL which should trigger scroll
            existingTab.location.hash = hash;
          }
        } else {
          // Open new tab and track it
          const newTab = window.open(target.href, '_blank');

          if (newTab) {
            setOpenTabs(prev => new Map(prev.set(baseUrl, newTab)));

            // Clean up closed tabs periodically
            setTimeout(() => {
              if (newTab.closed) {
                setOpenTabs(prev => {
                  const updated = new Map(prev);
                  updated.delete(baseUrl);
                  return updated;
                });
              }
            }, 1000);
          }
        }
      } else if (target.target === '_blank') {
        // Handle other external links - prevent duplication
        event.preventDefault();

        // Check if we have a tab open for this base URL
        const existingTab = openTabs.get(baseUrl);

        if (existingTab && !existingTab.closed) {
          // Focus existing tab
          existingTab.focus();

          // Handle hash/anchor scrolling if present
          if (hash) {
            try {
              existingTab.postMessage({
                type: 'SCROLL_TO_ANCHOR',
                hash: hash,
                anchorId: hash.substring(1) // Remove the '#'
              }, '*');
            } catch (e) {
              // Fallback: try to update the URL directly
              try {
                existingTab.location.hash = hash;
              } catch (fallbackError) {
                console.warn('Could not scroll to section in existing tab:', fallbackError);
              }
            }
          }
        } else {
          // Open new tab and track it
          const newTab = window.open(target.href, '_blank');
          if (newTab) {
            setOpenTabs(prev => new Map(prev.set(baseUrl, newTab)));

            // Clean up closed tabs periodically
            setTimeout(() => {
              if (newTab.closed) {
                setOpenTabs(prev => {
                  const updated = new Map(prev);
                  updated.delete(baseUrl);
                  return updated;
                });
              }
            }, 1000);
          }
        }
      }
    };

    // Add event listener to the document
    document.addEventListener('click', handleLinkClick);

    // Cleanup function
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, [openTabs]);

  // Message listener for handling scrolling in target pages
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.type === 'SCROLL_TO_BOOKMARK') {
        const element = document.getElementById(event.data.bookmarkId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else if (event.data.type === 'SCROLL_TO_ANCHOR') {
        const element = document.getElementById(event.data.anchorId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  // Cleanup closed tabs periodically
  useEffect(() => {
    const cleanupInterval = setInterval(() => {
      setOpenTabs(prev => {
        const updated = new Map();
        for (const [url, tab] of prev.entries()) {
          if (!tab.closed) {
            updated.set(url, tab);
          }
        }
        return updated;
      });
    }, 2000);

    return () => clearInterval(cleanupInterval);
  }, []);

  // Handle hash fragment scrolling when the page loads
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      // Small delay to ensure DOM is fully rendered
      const timer = setTimeout(() => {
        const hash = window.location.hash
        // Handle any type of bookmark hash
        if (
          hash.startsWith('#bookmark') ||
          hash.startsWith('#gtlnotes') ||
          hash.startsWith('#linktogtl')
        ) {
          const targetId = hash.substring(1) // Remove the # character
          const targetElement = document.getElementById(targetId)

          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' })
            console.log(`Scrolled to element: ${targetId}`)
          } else {
            console.warn(`Target element not found: ${targetId}`)
          }
        }
      }, 300) // 300ms delay for DOM to be ready

      return () => clearTimeout(timer)
    }
  }, [])

  // Allow target, rel, class, id, name, and href attributes during sanitization
  const cleanHtml = DOMPurify.sanitize(highlightedContent, {
    ADD_ATTR: ['target', 'rel', 'class', 'id', 'name', 'href'],
    ADD_TAGS: ['mark'], // Explicitly allow mark tags
  })

  // Parse the sanitized HTML - simplified to work with tab management
  const parsedContent = parse(cleanHtml, {
    replace: (domNode) => {
      if (!domNode || !domNode.name) return

      // Convert <a name="bookmarkX"> to use id attribute instead
      if (
        domNode.name === 'a' &&
        domNode.attribs?.name &&
        !domNode.attribs.id
      ) {
        return (
          <a id={domNode.attribs.name}>
            {domNode.children?.map((child, i) => parseChildNode(child, i))}
          </a>
        )
      }

      // Handle links - let the tab management system handle the clicks
      if (domNode.name === 'a' && domNode.attribs?.href) {
        const href = domNode.attribs.href

        // For bookmark section links, set target="_blank" to work with tab management
        if (href.includes('#bookmarkSection') || href.includes('#gtlnotes')) {
          return (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={domNode.attribs.class}
              id={domNode.attribs.id}
            >
              {domNode.children?.map((child, i) => parseChildNode(child, i))}
            </a>
          )
        }

        // For external URLs, set target="_blank"
        if (href.startsWith('http') || href.startsWith('//') || href.startsWith('/')) {
          return (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={domNode.attribs.class}
              id={domNode.attribs.id}
            >
              {domNode.children?.map((child, i) => parseChildNode(child, i))}
            </a>
          )
        }

        // For internal hash links (like #bookmark, #linktogtl), keep default behavior
        if (href.startsWith('#')) {
          return (
            <a
              href={href}
              className={domNode.attribs.class}
              id={domNode.attribs.id}
              onClick={(e) => {
                e.preventDefault()
                const targetId = href.substring(1) // Remove #
                const targetElement = document.getElementById(targetId)

                if (targetElement) {
                  targetElement.scrollIntoView({ behavior: 'smooth' })
                  console.log(`Scrolled to: ${targetId}`)
                } else {
                  console.warn(`Target not found: ${targetId}`)
                }
              }}
            >
              {domNode.children?.map((child, i) => parseChildNode(child, i))}
            </a>
          )
        }
      }

      // Default behavior for all other elements
      return undefined // Let the parser handle it
    },
  })

  return <div className='html-content'>{parsedContent}</div>
}

/**
 * Main export function that returns the HtmlContent component
 */
export const parseHtmlSanitizeAddTargetToLinks = (
  content,
  searchQuery,
  baseUrl
) => {
  if (!content) return null
  return (
    <HtmlContent
      content={content}
      searchQuery={searchQuery}
      baseUrl={baseUrl}
    />
  )
}

// Maintain existing utility exports
export const deepCopy = (obj) => {
  return JSON.parse(JSON.stringify(obj))
}

export const debounce = (func, delay) => {
  let timeoutId
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      func(...args)
    }, delay)
  }
}