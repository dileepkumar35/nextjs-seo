'use client'

import React, { useEffect, useState } from 'react'
import { parseHtmlSanitizeAddTargetToLinks } from '../utils/utils-production-optimizedv2.3'
import html from './content'

function Test() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark as client-side rendered
    setIsClient(true);

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://gtlcdnstorage.blob.core.windows.net/guide/stylesheets/prod/guide.css";
    link.id = "external-css";
    
    if (!document.getElementById("external-css")) {
      document.head.appendChild(link);
    }
    
    return () => {
      document.getElementById("external-css")?.remove(); // Cleanup on unmount
    };
  }, []);

  const [searchTerm, setSearchTerm] = useState('');

  function handleSearchChange(e) {
    setSearchTerm(e.target.value);
  }


    const html = `<!DOCTYPE html>
<html lang='en'>

<head>
    <meta charset='utf-8'>
    <meta content='width=device-width,initial-scale=1' name='viewport'>
    <title>Interest Deduction Limitation Rules - April 2025</title>
    <meta name='description'
        content='Comprehensive guide to UAE Corporate Tax interest deduction limitation rules, covering general and specific limitations, qualifying infrastructure projects, and deductible interest expenditure for businesses.'>
    <meta name='keywords'
        content='interest deduction, limitation rules, UAE corporate tax, deductible interest, business expenditure'>
    <link href='https://gtlcdn-eufeh8ffbvbvacgf.z03.azurefd.net/guide/stylesheets/prod/guide.css' rel='stylesheet'>
</head>

<body>
    <div class='scope'>
        <header>
            <h1>Interest Deduction Limitation Rules</h1>
            <h2>Corporate Tax Guide | CTGIDL1</h2>
            <h3>April 2025</h3>
        </header>
        <main>
            <section class='index'>
                <h3>Contents</h3>
                <li>
                    <p><a class='h3' href='#bookmarkSection1'>1. Glossary</a></p>
                </li>
                <li>
                    <p><a href='#bookmarkSection2'>2. Introduction</a></p>
                    <ol>
                        <li>
                            <p><a href='#bookmarkSection2.1'>2.1. Overview</a></p>
                        </li>
                        <li>
                            <p><a href='#bookmarkSection2.2'>2.2. Purpose of this guide</a></p>
                        </li>
                        <li>
                            <p><a href='#bookmarkSection2.3'>2.3. Who should read this guide?</a></p>
                        </li>
                        <li>
                            <p><a href='#bookmarkSection2.4'>2.4. How to use this guide</a></p>
                        </li>
                        <li>
                            <p><a href='#bookmarkSection2.5'>2.5. Legislative references</a></p>
                        </li>
                        <li>
                            <p><a href='#bookmarkSection2.6'>2.6. Status of this guide</a></p>
                        </li>
                    </ol>
                </li>
                <li>
                    <p><a class='h3' href='#bookmarkSection3'>3. Meaning of Interest</a></p>
                    <ol>
                        <li>
                            <p><a href='#bookmarkSection3.1'>3.1. Overview</a></p>
                            <ol>
                                <li>
                                    <p><a href='#bookmarkSection3.1.1'>3.1.1. What is &ldquo;Interest&rdquo;?</a></p>
                                </li>
                                <li>
                                    <p><a href='#bookmarkSection3.1.2'>3.1.2. Timing of recognition</a></p>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p><a href='#bookmarkSection3.2'>3.2. Amount accrued or paid for use of money or credit</a>
                            </p>
                        </li>
                        <li>
                            <p><a href='#bookmarkSection3.3'>3.3. Discounts and premiums</a></p>
                        </li>
                        <li>
                            <p><a href='#bookmarkSection3.4'>3.4. Payments made in respect of Islamic Financial
                                    Instruments</a></p>
                        </li>
                        <li>
                            <p><a href='#bookmarkSection3.5'>3.5. Payments economically equivalent to Interest</a></p>
                            <ol>
                                <li>
                                    <p><a href='#bookmarkSection3.5.1'>3.5.1. Performing and non-performing debt
                                            instruments</a></p>
                                </li>
                                <li>
                                    <p><a href='#bookmarkSection3.5.2'>3.5.2. Interest held in collective investment
                                            schemes that primarily invest in cash and cash equivalents</a></p>
                                </li>
                                <li>
                                    <p><a href='#bookmarkSection3.5.3'>3.5.3. Collateralised asset-backed debt
                                            securities</a></p>
                                </li>
                                <li>
                                    <p><a href='#bookmarkSection3.5.4'>3.5.4. Sale and subsequent repurchase agreement
                                            (repo)</a></p>
                                </li>
                                <li>
                                    <p><a href='#bookmarkSection3.5.5'>3.5.5. Stock lending agreement</a></p>
                                </li>
                                <li>
                                    <p><a href='#bookmarkSection3.5.6'>3.5.6. Securitisation involving transfer of
                                            assets in exchange for securities</a></p>
                                </li>
                                <li>
                                    <p><a href='#bookmarkSection3.5.7'>3.5.7. Hire purchase and finance leases</a></p>
                                </li>
                                <li>
                                    <p><a href='#bookmarkSection3.5.8'>3.5.8. Non-finance leases</a></p>
                                </li>
                                <li>
                                    <p><a href='#bookmarkSection3.5.9'>3.5.9. Factoring and similar transactions</a></p>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p><a href='#bookmarkSection3.6'>3.6. Foreign exchange movements</a></p>
                        </li>
                        <li>
                            <p><a href='#bookmarkSection3.7'>3.7. Capitalised Interest</a></p>
                        </li>
                        <li>
                            <p><a href='#bookmarkSection3.8'>3.8. Hybrid instruments</a></p>
                        </li>
                        <li>
                            <p><a href='#bookmarkSection3.9'>3.9. Late payments</a></p>
                            <ol>
                                <li>
                                    <p><a href='#bookmarkSection3.9.1'>3.9.1. In relation to statutory dues</a></p>
                                </li>
                                <li>
                                    <p><a href='#bookmarkSection3.9.2'>3.9.2. In relation to commercial dues</a></p>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p><a href='#bookmarkSection3.10'>3.10. Amounts incurred in connection with the raising of
                                    finance</a></p>
                            <ol>
                                <li>
                                    <p><a href='#bookmarkSection3.10.1'>3.10.1. Derivative contracts</a></p>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p><a href='#bookmarkSection3.11'>3.11. Disposal, sale or transfer</a></p>
                        </li>
                    </ol>
                </li>
                <li>
                    <p><a class='h3' href='#bookmarkSection4'>4. Deductible Interest expenditure</a></p>
                    <ol>
                        <li>
                            <p><a href='#bookmarkSection4.1'>4.1. Overview</a></p>
                        </li>
                        <li>
                            <p><a href='#bookmarkSection4.2'>4.2. General principles of deductibility of expenditure</a>
                            </p>
                            <ol>
                                <li>
                                    <p><a href='#bookmarkSection4.2.1'>4.2.1. Expenditure not incurred for the purposes
                                            of the Taxable Person’s Business</a></p>
                                </li>
                                <li>
                                    <p><a href='#bookmarkSection4.2.2'>4.2.2. Expenditure that is capital in nature</a>
                                    </p>
                                </li>
                                <li>
                                    <p><a href='#bookmarkSection4.2.3'>4.2.3. Interest expenditure related to deriving
                                            Exempt Income</a></p>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p><a href='#bookmarkSection4.3'>4.3. Interest expenditure due to Connected Persons and/or
                                    Related Parties</a></p>
                        </li>
                    </ol>
                </li>
                <li>
                    <p><a class='h3' href='#bookmarkSection5'>5. Specific Interest Deduction Limitation Rule</a></p>
                    <ol>
                        <li>
                            <p><a href='#bookmarkSection5.1'>5.1. Overview</a></p>
                        </li>
                        <li>
                            <p><a href='#bookmarkSection5.2'>5.2. Non-deductibility of Interest expenditure</a></p>
                        </li>
                        <li>
                            <p><a href='#bookmarkSection5.3'>5.3. Main purpose test</a></p>
                            <ol>
                                <li>
                                    <p><a href='#bookmarkSection5.3.1'>5.3.1. Presumption of no Corporate Tax advantage
                                            for Non-Residents</a></p>
                                </li>
                            </ol>
                        </li>
                    </ol>
                </li>
                <li>
                    <p><a class='h3' href='#bookmarkSection6'>6. General Interest Deduction Limitation Rule</a></p>
                    <ol>
                        <li>
                            <p><a href='#bookmarkSection6.1'>6.1. Overview</a></p>
                        </li>
                        <li>
                            <p><a href='#bookmarkSection6.2'>6.2. The General Interest Deduction Limitation Rule</a></p>
                        </li>
                        <li>
                            <p><a href='#bookmarkSection6.3'>6.3. Calculation of Net Interest Expenditure</a></p>
                        </li>
                        <li>
                            <p><a href='#bookmarkSection6.4'>6.4. Calculation of 30% of adjusted EBITDA</a></p>
                        </li>
                    </ol>
                </li>
                <li>
                    <p><a class='h3' href='#bookmarkSection7'>7. Special cases</a></p>
                    <ol>
                        <li>
                            <p><a href='#bookmarkSection7.1'>7.1. Exempt Persons</a></p>
                        </li>
                        <li>
                            <p><a href='#bookmarkSection7.2'>7.2. Non-Resident Persons</a></p>
                            <ol>
                                <li>
                                    <p><a href='#bookmarkSection7.2.1'>7.2.1. Overview</a></p>
                                </li>
                                <li>
                                    <p><a href='#bookmarkSection7.2.2'>7.2.2. &ldquo;Interrupted&rdquo; Permanent
                                            Establishment or nexus</a></p>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p><a href='#bookmarkSection7.3'>7.3. Cash Basis of Accounting</a></p>
                            <ol>
                                <li>
                                    <p><a href='#bookmarkSection7.3.1'>7.3.1. Overview</a></p>
                                </li>
                                <li>
                                    <p><a href='#bookmarkSection7.3.2'>7.3.2. Interplay with General Interest Deduction
                                            Limitation Rule</a></p>
                                </li>
                            </ol>
                        </li>
                    </ol>
                </li>
                <li>
                    <p><a class='h3' href='#bookmarkSection8'>8. Exceptions to General Interest Deduction Limitation
                            Rule</a></p>
                    <ol>
                        <li>
                            <p><a href='#bookmarkSection8.1'>8.1. Overview</a></p>
                        </li>
                        <li>
                            <p><a href='#bookmarkSection8.2'>8.2. Banks and Insurance Providers</a></p>
                        </li>
                        <li>
                            <p><a href='#bookmarkSection8.3'>8.3. Natural person undertaking Business or Business
                                    Activity in the UAE</a></p>
                        </li>
                        <li>
                            <p><a href='#bookmarkSection8.4'>8.4. Historical Financial Liabilities</a></p>
                        </li>
                        <li>
                            <p><a href='#bookmarkSection8.5'>8.5. Qualifying Infrastructure Projects</a></p>
                            <ol>
                                <li>
                                    <p><a href='#bookmarkSection8.5.1'>8.5.1. Overview</a></p>
                                </li>
                                <li>
                                    <p><a href='#bookmarkSection8.5.2'>8.5.2. Qualifying Infrastructure Project
                                            Person</a></p>
                                </li>
                                <li>
                                    <p><a href='#bookmarkSection8.5.3'>8.5.3. Qualifying Infrastructure Project</a></p>
                                </li>
                                <li>
                                    <p><a href='#bookmarkSection8.5.4'>8.5.4. Qualifying Infrastructure Project Person
                                            executing multiple projects</a></p>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <p><a href='#bookmarkSection8.6'>8.6. Small Business Relief</a></p>
                        </li>
                    </ol>
                </li>
                <li>
                    <p><a class='h3' href='#bookmarkSection9'>9. Updates and Amendments</a></p>
                </li>
            </section>
            <section>
                <article id='bookmarkSection1'>
                    <h3>Glossary</h3>
                    <div class='definition-wrapper'>
                        <table class='definition'>
                            <tr>
                                <td>
                                    <p><b>Accounting Income</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>The accounting net profit or loss for the relevant Tax Period as per the
                                        Financial Statements prepared in accordance with the provisions of <a
                                            href='/articles/uae-cit-fdl-47-of-2022-article-20'>Article 20</a> of the
                                        Corporate Tax Law.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Accounting Standards</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>The accounting standards specified in <a
                                            href='/decisions/uae-cit-fdl-47-of-2022-md-114-of-2023'>Ministerial Decision
                                            No. 114 of 2023</a>.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Accrual Basis of Accounting</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>An accounting method under which the Taxable Person recognises income when earned
                                        and expenditure when incurred.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>AED</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>The United Arab Emirates dirham.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Authority</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>Federal Tax Authority.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Bank</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>A Person licensed in the UAE as a bank or finance institution or an equivalent
                                        licensed activity that allows the taking of deposits and the granting of credits
                                        as defined in the applicable legislation of the UAE.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Business</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>Any activity conducted regularly, on an ongoing and independent basis by any
                                        Person and in any location, such as industrial, commercial, agricultural,
                                        vocational, professional, service or excavation activities or any other activity
                                        related to the use of tangible or intangible properties.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Business Activity</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>Any transaction or activity, or series of transactions or series of activities
                                        conducted by a Person in the course of its Business.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Business Restructuring Relief</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>A relief from Corporate Tax for business restructuring transactions, available
                                        under <a href='/articles/uae-cit-fdl-47-of-2022-article-27'>Article 27</a> of
                                        the Corporate Tax Law and as specified under <a
                                            href='/decisions/uae-cit-fdl-47-of-2022-md-133-of-2023'>Ministerial Decision
                                            No. 133 of 2023</a>.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Cash Basis of Accounting</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>An accounting method under which the Taxable Person recognises income and
                                        expenditure when cash payments are received and paid.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Connected Person</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>Any Person affiliated with a Taxable Person as determined in <a
                                            href='/articles/uae-cit-fdl-47-of-2022-article-36'>Article 36(2)</a> of the
                                        Corporate Tax Law.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Corporate Tax</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>The tax imposed by the Corporate Tax Law on juridical persons and Business
                                        income.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Corporate Tax Law</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>Federal Decree-Law No. 47 of 2022 on the Taxation of Corporations and Businesses,
                                        and its amendments.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Corporate Tax Payable</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>Corporate Tax that has or will become due for payment to the FTA in respect of
                                        one or more Tax Periods.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Dividend</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>Any payments or distributions that are declared or paid on or in respect of
                                        shares or other rights participating in the profits of the issuer of such shares
                                        or rights which do not constitute a return of capital or a return on debt
                                        claims, whether such payments or distributions are in cash, securities, or other
                                        properties, and whether payable out of profits or retained earnings or from any
                                        account or legal reserve or from capital reserve or revenue. This will include
                                        any payment or benefit which in substance or effect constitutes a distribution
                                        of profits made in connection with the acquisition or redemption or cancellation
                                        of shares or termination of other ownership interests or rights or any
                                        transaction or arrangement with a Related Party or Connected Person which does
                                        not comply with <a href='/articles/uae-cit-fdl-47-of-2022-article-34'>Article
                                            34</a> of the Corporate Tax Law.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Exempt Income</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>Any income exempt from Corporate Tax under the Corporate Tax Law.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Exempt Person</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>A Person exempt from Corporate Tax under <a
                                            href='/articles/uae-cit-fdl-47-of-2022-article-4'>Article 4</a> of the
                                        Corporate Tax Law.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Extractive Business</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>The Business or Business Activity of exploring, extracting, removing, or
                                        otherwise producing and exploiting the Natural Resources of the UAE, or any
                                        interest therein as determined by the Minister.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Financial Statements</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>A complete set of statements as specified under the Accounting Standards applied
                                        by the Taxable Person, which includes, but is not limited to, statement of
                                        income, statement of other comprehensive income, balance sheet, statement of
                                        changes in equity and cash flow statement.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Financial Year</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>The Gregorian calendar year, or the twelve-month period for which the Taxable
                                        Person prepares Financial Statements.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Foreign Tax Credit</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>Tax paid under the laws of a foreign jurisdiction on income or profits that may
                                        be deducted from the Corporate Tax due, in accordance with the conditions of <a
                                            href='/articles/uae-cit-fdl-47-of-2022-article-47'>Article 47(2)</a> of the
                                        Corporate Tax Law.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>FTA</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>Federal Tax Authority, being the Authority in charge of administration,
                                        collection and enforcement of federal taxes in the UAE.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>General Interest Deduction Limitation Rule</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>The limitation provided under <a
                                            href='/articles/uae-cit-fdl-47-of-2022-article-30'>Article 30</a> of the
                                        Corporate Tax Law.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Government Controlled Entity</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>Any juridical person, directly or indirectly wholly owned and controlled by a
                                        Government Entity, as specified in a decision issued by the Cabinet at the
                                        suggestion of the Minister.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Government Entity</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>The Federal Government, Local Governments, ministries, government departments,
                                        government agencies, authorities and public institutions of the Federal
                                        Government or Local Governments.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>IFRS</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>International Financial Reporting Standards.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>IFRS for SMEs</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>International Financial Reporting Standard for small and medium-sized entities.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Immovable Property</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>Means any of the following:</p>
                                    <ol type='a'>
                                        <li>
                                            <p>Any area of land over which rights or interests or services can be
                                                created.</p>
                                        </li>
                                        <li>
                                            <p>Any building, structure or engineering work attached to the land
                                                permanently or attached to the seabed.</p>
                                        </li>
                                        <li>
                                            <p>Any fixture or equipment which makes up a permanent part of the land or
                                                is permanently attached to the building, structure or engineering work
                                                or attached to the seabed.</p>
                                        </li>
                                    </ol>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Insurance Provider</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>A Person licensed in the UAE as an insurance provider that accepts risks by
                                        entering into or carrying out contracts of insurance, in both the life and
                                        non-life sectors, including contracts of reinsurance and captive insurance, as
                                        defined in the applicable legislation of the UAE.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Interest</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>Any amount accrued or paid for the use of money or credit, including discounts,
                                        premiums and profit paid in respect of an Islamic financial instrument and other
                                        payments economically equivalent to interest, and any other amounts incurred in
                                        connection with the raising of finance, excluding payments of the principal
                                        amount.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Islamic Financial Instrument</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>A financial instrument which is in compliance with Sharia principles and is
                                        economically equivalent to any instrument provided for under <a
                                            href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection2'>Article
                                            2(2)</a> of Ministerial Decision No. 126 of 2023, or a combination thereof.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Licence</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>A document issued by a Licensing Authority under which a Business or Business
                                        Activity is conducted in the UAE.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Licensing Authority</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>The competent authority concerned with licensing or authorising a Business or
                                        Business Activity in the UAE.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Market Value</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>The price which could be agreed in an arm’s-length free market transaction
                                        between Persons who are not Related Parties or Connected Persons in similar
                                        circumstances.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Net Interest Expenditure</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>The Interest expenditure amount that is in excess of the Interest income amount
                                        as determined in accordance with the provisions of the Corporate Tax Law.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Non-Extractive Natural Resource Business</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>The Business or Business Activity of separating, treating, refining, processing,
                                        storing, transporting, marketing or distributing the Natural Resources of the
                                        UAE.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Non-Resident Person</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>The Taxable Person specified in <a
                                            href='/articles/uae-cit-fdl-47-of-2022-article-11'>Article 11(4)</a> of the
                                        Corporate Tax Law.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Participating Interest</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>An ownership interest in the shares or capital of a juridical person that meets
                                        the conditions referred to in <a
                                            href='/articles/uae-cit-fdl-47-of-2022-article-23'>Article 23</a> of the
                                        Corporate Tax Law.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Participation</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>The juridical person in which the Participating Interest is held.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Participation Exemption</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>An exemption from Corporate Tax for income from a Participating Interest,
                                        available under <a href='/articles/uae-cit-fdl-47-of-2022-article-23'>Article
                                            23</a> of the Corporate Tax Law and as specified under <a
                                            href='/decisions/uae-cit-fdl-47-of-2022-md-302-of-2024'>Ministerial Decision
                                            No. 302 of 2024</a>.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Permanent Establishment</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>A place of Business or other form of presence in the UAE of a Non-Resident Person
                                        in accordance with <a href='/articles/uae-cit-fdl-47-of-2022-article-14'>Article
                                            14</a> of the Corporate Tax Law.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Person</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>Any natural person or juridical person.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Personal Investment</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>Investment activity that a natural person conducts for their personal account
                                        that is neither conducted through a Licence or requiring a Licence from a
                                        Licensing Authority in the UAE, nor considered as a commercial business in
                                        accordance with the Federal Decree-Law No. 50 of 2022.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Qualifying Investment Fund</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>Any entity whose principal activity is the issuing of investment interests to
                                        raise funds or pool investor funds or establish a joint investment fund with the
                                        aim of enabling the holder of such an investment interest to benefit from the
                                        profits or gains from the entity’s acquisition, holding, management or disposal
                                        of investments, in accordance with the applicable legislation and when it meets
                                        the conditions set out in <a
                                            href='/articles/uae-cit-fdl-47-of-2022-article-10'>Article 10</a> of the
                                        Corporate Tax Law.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Qualifying Infrastructure Project</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>A project that meets the conditions of <a
                                            href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection14'>Article
                                            14</a> of Ministerial Decision No. 126 of 2023.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Qualifying Infrastructure Project Person</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>A Resident Person that meets the conditions of <a
                                            href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection14'>Article
                                            14(2)</a> of Ministerial Decision No. 126 of 2023.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Related Party</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>Any Person associated with a Taxable Person as determined in <a
                                            href='/articles/uae-cit-fdl-47-of-2022-article-35'>Article 35(1)</a> of the
                                        Corporate Tax Law.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Resident Person</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>The Taxable Person specified in <a
                                            href='/articles/uae-cit-fdl-47-of-2022-article-11'>Article 11(3)</a> of the
                                        Corporate Tax Law.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Revenue</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>The gross amount of income derived during a Tax Period.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Small Business Relief</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>A Corporate Tax relief that allows eligible Taxable Persons to be treated as
                                        having no Taxable Income for the relevant Tax Period in accordance with <a
                                            href='/articles/uae-cit-fdl-47-of-2022-article-21'>Article 21</a> of the
                                        Corporate Tax Law and <a
                                            href='/decisions/uae-cit-fdl-47-of-2022-md-73-of-2023'>Ministerial Decision
                                            No. 73 of 2023</a>.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Specific Interest Deduction Limitation Rule</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>The limitation provided under <a
                                            href='/articles/uae-cit-fdl-47-of-2022-article-31'>Article 31</a> of the
                                        Corporate Tax Law.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>State</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>United Arab Emirates.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>State Sourced Income</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>Income accruing in, or derived from, the UAE as specified in <a
                                            href='/articles/uae-cit-fdl-47-of-2022-article-13'>Article 13</a> of the
                                        Corporate Tax Law.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Tax Group</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>Two or more Taxable Persons treated as a single Taxable Person according to the
                                        conditions of <a href='/articles/uae-cit-fdl-47-of-2022-article-40'>Article
                                            40</a> of the Corporate Tax Law.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Tax Loss</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>Any negative Taxable Income as calculated under the Corporate Tax Law for a given
                                        Tax Period.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Tax Period</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>The period for which a Tax Return is required to be filed.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Tax Registration</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>A procedure under which a Person registers for Corporate Tax purposes with the
                                        FTA.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Tax Return</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>Information filed with the FTA for Corporate Tax purposes in the form and manner
                                        as prescribed by the FTA, including any schedule or attachment thereto, and any
                                        amendment thereof.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Taxable Income</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>The income that is subject to Corporate Tax under the Corporate Tax Law.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Taxable Person</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>A Person subject to Corporate Tax in the UAE under the Corporate Tax Law.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Transfer Pricing</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>Rules on setting of arm’s length prices for Controlled Transactions, including
                                        but not limited to the provision or receipt of goods, services, loans and
                                        intangibles.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Turnover</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>The gross amount of income derived during a Gregorian calendar year.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>UAE</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>United Arab Emirates.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>Withholding Tax</b></p>
                                </td>
                                <td>
                                    <p>:</p>
                                </td>
                                <td>
                                    <p>Corporate Tax to be withheld from State Sourced Income in accordance with <a
                                            href='/articles/uae-cit-fdl-47-of-2022-article-45'>Article 45</a> of the
                                        Corporate Tax Law.</p>
                                </td>
                            </tr>
                        </table>
                    </div>
                </article>
                <article id='bookmarkSection2'>
                    <h3>Introduction</h3>
                    <section>
                        <article id='bookmarkSection2.1'>
                            <h3>Overview</h3>
                            <p>Federal Decree-Law No. 47 of 2022 on the Taxation of Corporations and Businesses was
                                issued on 3 October 2022 and was published in Issue #737 of the Official Gazette of the
                                United Arab Emirates (&ldquo;UAE&rdquo;) on 10 October 2022. This Decree-Law together
                                with its amendments is referred to as the &ldquo;Corporate Tax Law&rdquo;.</p>
                            <p>The Corporate Tax Law provides the legislative basis for imposing a federal tax on
                                corporations and Business profits (&ldquo;Corporate Tax&rdquo;) in the UAE.</p>
                            <p>The provisions of the Corporate Tax Law shall apply to Tax Periods commencing on or after
                                1 June 2023.</p>
                        </article>
                        <article id='bookmarkSection2.2'>
                            <h3>Purpose of this guide</h3>
                            <p>This guide is designed to provide general guidance on the deductibility of Interest
                                expenditure while calculating the Taxable Income of a Taxable Person. The guide
                                elaborates on the following aspects:</p>
                            <ul>
                                <li>
                                    <p>Meaning of Interest under the Corporate Tax Law,</p>
                                </li>
                                <li>
                                    <p>Application of the General Interest Deduction Limitation Rule and Specific
                                        Interest Deduction Limitation Rule,</p>
                                </li>
                                <li>
                                    <p>Carry forward and utilisation of disallowed Net Interest Expenditure, and</p>
                                </li>
                                <li>
                                    <p>Interaction of the Interest limitation rules with other provisions of the UAE
                                        Corporate Tax Law.</p>
                                </li>
                            </ul>
                        </article>
                        <article id='bookmarkSection2.3'>
                            <h3>Who should read this guide?</h3>
                            <p>The guide should be read by any Taxable Person that conducts Business in the UAE and
                                incurs Interest expenditure. This guide explains the deductibility of Interest
                                expenditure while calculating the Taxable Income of a Taxable Person who is not part of
                                a Tax Group<sup><a href='#bookmark1' id='bookmarkback1'>[1]</a></sup>. It is intended to
                                be read in conjunction with the Corporate Tax Law, the implementing decisions and other
                                relevant guidance published by the FTA.</p>
                        </article>
                        <article id='bookmarkSection2.4'>
                            <h3>How to use this guide</h3>
                            <p>The relevant articles of the Corporate Tax Law and the implementing decisions are
                                indicated in each section of the guide.</p>
                            <p>It is recommended that the guide is read in its entirety to provide a complete
                                understanding of the definitions and interactions of the different rules. Further
                                guidance on some of the areas covered in this guide can be found in other topic-
                                specific guides.</p>
                            <p>In some instances, simple examples are used to illustrate how key elements of the
                                Corporate Tax Law apply to deductibility of Interest. The examples in the guide:</p>
                            <ul class='dashed'>
                                <li>
                                    <p>Show how these elements operate in isolation and do not show the interactions
                                        with other provisions of the Corporate Tax Law that may occur. They do not, and
                                        are not intended to, cover the full facts of the hypothetical scenarios used nor
                                        all aspects of the Corporate Tax regime, and should not be relied upon for legal
                                        or tax advice purposes; and</p>
                                </li>
                                <li>
                                    <p>Are only meant for providing the readers with general information on the subject
                                        matter of this guide. They are exclusively intended to explain the rules related
                                        to the subject matter of this guide and do not relate at all to the tax or legal
                                        position of any specific juridical or natural persons.</p>
                                </li>
                            </ul>
                        </article>
                        <article id='bookmarkSection2.5'>
                            <h3>Legislative references</h3>
                            <p>In this guide, the following legislation will be referred to as follows:</p>
                            <ul>
                                <li>
                                    <p>Federal Decree-Law No. 47 of 2022 on the Taxation of Corporations and Businesses,
                                        and its amendments, is referred to as &ldquo;Corporate Tax Law&rdquo;,</p>
                                </li>
                                <li>
                                    <p><a href='/decisions/uae-cit-fdl-47-of-2022-cd-56-of-2023'>Cabinet Decision No. 56
                                            of 2023</a> on Determination of a Non-Resident Person’s Nexus in the State
                                        for the Purposes of Federal Decree-Law No. 47 of 2022 on the Taxation of
                                        Corporations and Businesses is referred to as &ldquo;<a
                                            href='/decisions/uae-cit-fdl-47-of-2022-cd-56-of-2023'>Cabinet Decision No.
                                            56 of 2023</a>&rdquo;,</p>
                                </li>
                                <li>
                                    <p><a href='/decisions/uae-cit-fdl-47-of-2022-md-43-of-2023'>Ministerial Decision
                                            No. 43 of 2023</a> Concerning Exception from Tax Registration for the
                                        Purpose of Federal Decree-Law No. 47 of 2022 on the Taxation of Corporations and
                                        Businesses is referred to as &ldquo;<a
                                            href='/decisions/uae-cit-fdl-47-of-2022-md-43-of-2023'>Ministerial Decision
                                            No. 43 of 2023</a>&rdquo;,</p>
                                </li>
                                <li>
                                    <p><a href='/decisions/uae-cit-fdl-47-of-2022-md-73-of-2023'>Ministerial Decision
                                            No. 73 of 2023</a> on Small Business Relief for the Purposes of Federal
                                        Decree-Law No. 47 of 2022 on the Taxation of Corporations and Businesses, is
                                        referred to as &ldquo;<a
                                            href='/decisions/uae-cit-fdl-47-of-2022-md-73-of-2023'>Ministerial Decision
                                            No. 73 of 2023</a>&rdquo;,</p>
                                </li>
                                <li>
                                    <p><a href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023'>Ministerial Decision
                                            No. 126 of 2023</a> on the General Interest Deduction Limitation Rule for
                                        the Purposes of Federal Decree-Law No. 47 of 2022 on the Taxation of
                                        Corporations and Businesses is referred to as &ldquo;<a
                                            href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023'>Ministerial Decision
                                            No. 126 of 2023</a>&rdquo;, and</p>
                                </li>
                                <li>
                                    <p><a href='/decisions/uae-cit-fdl-47-of-2022-md-134-of-2023'>Ministerial Decision
                                            No. 134 of 2023</a> on the General Rules for Determining Taxable Income for
                                        the Purposes of Federal Decree-Law No. 47 of 2022 on the Taxation of
                                        Corporations and Businesses is referred to as &ldquo;<a
                                            href='/decisions/uae-cit-fdl-47-of-2022-md-134-of-2023'>Ministerial Decision
                                            No. 134 of 2023</a>&rdquo;.</p>
                                </li>
                            </ul>
                        </article>
                        <article id='bookmarkSection2.6'>
                            <h3>Status of this guide</h3>
                            <p>This guidance is not a legally binding document but is intended to provide assistance in
                                understanding the tax implications for Interest expenditure under the Corporate Tax
                                regime in the UAE. The information provided in this guide should not be interpreted as
                                legal or tax advice. It is not meant to be comprehensive and does not provide a
                                definitive answer in every case. It is based on the legislation as it stood when the
                                guide was published. Each Person’s own specific circumstances should be considered.</p>
                            <p>The Corporate Tax Law, the implementing decisions and the guidance materials referred to
                                in this document will set out the principles and rules that govern the application of
                                Corporate Tax. Nothing in this publication modifies or is intended to modify the
                                requirements of any legislation.</p>
                            <p>This document is subject to change without notice.</p>
                        </article>
                    </section>
                </article>
                <article id='bookmarkSection3'>
                    <h3>Meaning of Interest</h3>
                    <section>
                        <article id='bookmarkSection3.1'>
                            <h3>Overview</h3>
                            <p>Interest, a common Business expenditure, is generally allowed as a deduction while
                                calculating a Taxable Person’s Taxable Income for a Tax Period. However, the
                                deductibility of interest for Corporate Tax purposes is not without limits. It includes
                                interest income and interest expenditure that typically represents amounts paid for use
                                of money or credit, and other associated costs. This is subject to various Corporate Tax
                                provisions, applied in the following order:</p>
                            <ol>
                                <li>
                                    <p>General principles of deductibility of expenditure (<a
                                            href='#bookmarkSection4.1'>Section 4.1</a>),</p>
                                </li>
                                <li>
                                    <p>Arm’s Length Principle (<a href='#bookmarkSection4.3'>Section 4.3</a>),</p>
                                </li>
                                <li>
                                    <p>Specific Interest Deduction Limitation Rule (<a href='#bookmarkSection5'>Section
                                            5</a>), and</p>
                                </li>
                                <li>
                                    <p>General Interest Deduction Limitation Rule (<a href='#bookmarkSection6'>Section
                                            6</a>).</p>
                                </li>
                            </ol>
                            <p>The purpose of the Specific Interest Deduction Limitation Rule and General Interest
                                Deduction Limitation Rule (together referred as &ldquo;Interest limitation rules&rdquo;)
                                is to ensure that the tax deduction for Interest expenditure does not result in the
                                erosion of the UAE’s tax base and shifting of profits away from the UAE.</p>
                            <p>The General Interest Deduction Limitation Rule does not apply to certain categories of
                                persons, including Banks, Insurance Providers and natural persons doing business in the
                                UAE (see <a href='#bookmarkSection7'>Section 7</a>).</p>
                            <section>
                                <article id='bookmarkSection3.1.1'>
                                    <h3>What is &ldquo;Interest&rdquo;?</h3>
                                    <p>The Corporate Tax Law defines the term &ldquo;Interest&rdquo; broadly to reflect
                                        the fact that there is considerable flexibility in how financing arrangements
                                        may be structured, which may be different from the interest recorded for
                                        accounting purposes following the applicable Accounting Standards (i.e. IFRS or
                                        IFRS for SMEs). Taxable Persons will, therefore, be required to identify what
                                        constitutes &ldquo;Interest&rdquo; based on the definition provided under the
                                        Corporate Tax Law<sup><a href='#bookmark2' id='bookmarkback2'>[2]</a></sup>
                                        rather than what constitutes interest under IFRS (or IFRS for SMEs).</p>
                                    <p>The definition of Interest under the Corporate Tax Law covers the following
                                        elements:</p>
                                    <ul>
                                        <li>
                                            <p>Any amount accrued or paid for the use of money or credit (see <a
                                                    href='#bookmarkSection3.2'>Section 3.2</a>),</p>
                                        </li>
                                        <li>
                                            <p>Discounts and premiums (see <a href='#bookmarkSection3.3'>Section
                                                    3.3</a>),</p>
                                        </li>
                                        <li>
                                            <p>Profit paid in respect of an Islamic financial instrument (see <a
                                                    href='#bookmarkSection3.4'>Section 3.4</a>),</p>
                                        </li>
                                        <li>
                                            <p>Other payments economically equivalent to Interest (see <a
                                                    href='#bookmarkSection3.5'>Section 3.5</a>), and</p>
                                        </li>
                                        <li>
                                            <p>Any other amounts incurred in connection with the raising of finance (see
                                                <a href='#bookmarkSection3.10'>Section 3.10</a>).
                                            </p>
                                        </li>
                                    </ul>
                                    <p>Interest does not include repayments of the principal loan or debt amount.<sup><a
                                                href='#bookmark3' id='bookmarkback3'>[3]</a></sup></p>
                                </article>
                                <article id='bookmarkSection3.1.2'>
                                    <h3>Timing of recognition</h3>
                                    <p>The recognition of income or expenditure for Corporate Tax purposes follows the
                                        accounting method adopted by the Business, which can be either the Accrual Basis
                                        of Accounting or the Cash Basis of Accounting.</p>
                                    <p>Under the Accrual Basis of Accounting, income or expenditure is generally
                                        recognised when it is earned or incurred, regardless of when the payment is
                                        made.</p>
                                    <p>In the case of a Cash Basis of Accounting (allowed only where Taxable Person’s
                                        Revenue is below AED 3 million or by way of specific application the FTA)<sup><a
                                                href='#bookmark4' id='bookmarkback4'>[4]</a></sup>, income or
                                        expenditure is accounted only when the payment is actually made.</p>
                                    <p>Any income or expenditure that is treated as Interest will adopt the accounting
                                        method followed by the Business, except for capitalised interest (see <a
                                            href='#bookmarkSection3.7'>Section 3.7</a>) only where Accrual Basis of
                                        Accounting is followed.</p>
                                </article>
                            </section>
                        </article>
                        <article id='bookmarkSection3.2'>
                            <h3>Amount accrued or paid for use of money or credit</h3>
                            <p>Interest may be charged as a result of borrowing funds or receiving credit. It is the
                                additional amount that a borrower pays to a lender on top of the repayment of principal
                                (the underlying amount borrowed/owed).</p>
                            <p>Any amounts which are accrued or paid for the use of money or credit are economically
                                equivalent to Interest, and will be considered to be Interest (see <a
                                    href='#bookmarkSection3.5'>Section 3.5</a>).</p>
                            <div class='example'>
                                <p><strong>Example 1: Use of money</strong></p>
                                <p>A company takes out a bank loan of AED 500,000 at an interest rate of 6% per annum to
                                    finance the expansion of its operations. The annual expense of AED 30,000 is the
                                    charge for the use of the money and is treated as Interest expenditure.</p>
                            </div>
                            <div class='example'>
                                <p><strong>Example 2: Use of overdraft facility</strong></p>
                                <p>A company uses an overdraft facility with an annual interest rate of 20% to make
                                    purchases. During the year, it utilises the overdraft facility to the extent of AED
                                    2 million, and is charged AED 33,333 (AED 2 million * 20% / 12 months) per month for
                                    the use of the overdraft facility. That charge is treated as Interest expenditure.
                                </p>
                            </div>
                        </article>
                        <article id='bookmarkSection3.3'>
                            <h3>Discounts and premiums</h3>
                            <p>Discounts and premiums are treated as Interest when they are related to the borrowing of
                                money or the issuance of debt instruments because they represent the cost of borrowing
                                or return on lending.</p>
                            <p>When a bond or debt instrument is issued at a price lower than its face value, the
                                difference between the issue price and the face value is known as a
                                &ldquo;discount&rdquo;. This may occur where the bond pays no interest (zero coupon) or
                                the interest rate is below the market rate. This discount (which may be amortised over
                                the term of the debt instrument) is treated as Interest. For example, a company issues a
                                bond with a face value of AED 10,000 at a price of AED 9,500. The discount of AED 500
                                (which may be amortised over the term of the debt instrument) is considered to be
                                Interest income for the lender (the holder) and Interest expenditure for the borrower
                                (the issuer).</p>
                            <p>When a bond or debt instrument is issued for more than its face value, the excess amount
                                is referred to as a &ldquo;premium&rdquo;. This may occur where the bond pays a rate of
                                Interest higher than the prevailing market rate. This premium (which may be amortised
                                over the term of the debt instrument) is considered to represent the lender’s reward for
                                the loan of money and is, therefore, treated as Interest.</p>
                            <p>For example, a bond with a face value of AED 10,000 is subscribed at a market price of
                                AED 10,200. The issuer (the borrower) must pay back AED 10,000 to the holder (the
                                lender) being the face value of the bond. For the holder (the lender), the AED 200
                                premium is typically amortised and recognised in the income statement over the term of
                                the bond, which will be treated as Interest expenditure whereas for the issuer (the
                                borrower), the AED 200 is amortised over the term of the bond as a reduction to its
                                Interest expenditure (i.e. it is considered as Interest income).</p>
                            <p>Discounts provided as sales incentives or for early payment are not considered Interest,
                                as they are not related to the financing or borrowing of money. Other examples of
                                discounts and premium that are not considered to be Interest include:</p>
                            <ul>
                                <li>
                                    <p><strong>Trade discounts: </strong><span>reductions from the list price of goods
                                            or services offered by sellers, for instance to preferred customers.</span>
                                    </p>
                                </li>
                                <li>
                                    <p><strong>Volume discounts: </strong><span>offered to customers for purchasing in
                                            large quantities.</span></p>
                                </li>
                                <li>
                                    <p><strong>Sales promotions and rebates: </strong><span>reductions in the selling
                                            price of goods or services as part of promotional campaigns or as
                                            retrospective discounts.</span></p>
                                </li>
                                <li>
                                    <p><strong>Premium or discount on issuance of equity instruments:
                                        </strong><span>arising when equity instruments are issued at a price above or
                                            below their face value.</span></p>
                                </li>
                                <li>
                                    <p><strong>Loyalty Points or Rewards: </strong><span>discounts or benefits given to
                                            reward customer loyalty.</span></p>
                                </li>
                            </ul>
                        </article>
                        <article id='bookmarkSection3.4'>
                            <h3>Payments made in respect of Islamic Financial Instruments</h3>
                            <p>Islamic Financial Instruments<sup><a href='#bookmark5' id='bookmarkback5'>[5]</a></sup>
                                are designed to facilitate financial transactions, while adhering to Sharia principles,
                                which prohibit Interest. Common examples of Islamic financing structures used to offer
                                sharia-compliant products are Mudarabah, Murabaha, Ijara, Sukuk, etc.</p>
                            <p>Such instruments typically contain an element (such as &ldquo;profit&rdquo; or
                                &ldquo;mark-up&rdquo;) that is considered to be economically equivalent to Interest,
                                regardless of the classification and treatment of the element under IFRS (or IFRS for
                                SMEs).<sup><a href='#bookmark6' id='bookmarkback6'>[6]</a></sup></p>
                            <p>An Islamic Financial Instrument (or a combination of arrangements that form part of the
                                same Islamic Financial Instrument) that is classified as an ownership interest under the
                                Accounting Standards issued by the Accounting and Auditing Organisation for Islamic
                                Financial Institutions (&ldquo;AAOIFI&rdquo;) is not considered to have an Interest
                                element.</p>
                            <p>Accordingly, in order to determine how these Islamic Financial Instruments should be
                                treated for Corporate Tax purposes, it is necessary to understand how these instruments
                                have been treated as per IFRS. For example, if the instrument is recognised as a debt
                                instrument in accordance with IFRS, the corresponding profit distribution should be
                                considered as equivalent to Interest for the purposes of the Interest limitation rules.
                                Conversely, if the instrument is not classified as a debt instrument under IFRS, there
                                would be no Interest equivalent element. For example, a profit distribution in respect
                                of an instrument that is recognised as a debt in accordance with IFRS, such profit
                                distribution should be considered as equivalent to Interest for the purposes of the
                                Interest limitation rules.</p>
                            <p>Below are examples of Islamic Financial Instruments and the corresponding Interest
                                equivalent element (assuming they are classified as a debt instrument under IFRS).</p>
                            <ul>
                                <li>
                                    <p>A <b>Mudarabah </b>is a contractual relationship executed between two parties,
                                        one supplying the capital and the other supplying the labour and skill as an
                                        agent or manager, for investment purposes. Each party is granted a ratio of any
                                        earnings, determined at the time of making the investment. Such earnings would
                                        be typically treated as Interest equivalent for Corporate Tax purposes.</p>
                                </li>
                                <li>
                                    <p>In a <b>Murabaha </b>cost-plus financing structure, a bank purchases an asset and
                                        sells it to the borrower at an agreed price (including an agreed upon mark-up)
                                        on a deferred payment basis. The payments (which consist of principal plus
                                        mark-up) are paid by the borrower in instalments or a lump sum on an agreed
                                        future date or dates. The mark-up charged by the bank may be considered as
                                        Interest for Corporate Tax purposes.</p>
                                </li>
                                <li>
                                    <p><strong>Ijara </strong><span>or Islamic leasing, is a Shariah-compliant financial
                                            structure where the lessor (financier) leases an asset to the lessee
                                            (borrower) for a specified period in exchange for rental payments. The
                                            ownership of the asset remains with the lessor, who also bears the risks
                                            associated with ownership, such as maintenance and insurance. Generally, in
                                            asset-based financing, the ownership of the asset is eventually transferred
                                            to the lessee at the end of the lease term, often for a nominal or minimal
                                            payment. The rental payments made by the lessee to the lessor can be fixed
                                            or variable, often linked to a benchmark rate, allowing for flexibility in
                                            adjusting payments over time. The rental payments include both a profit and
                                            principal element. The profit element may be considered as akin to Interest
                                            for Corporate Tax purposes (after adjustment for implied maintenance charges
                                            for the asset (if any)).</span></p>
                                </li>
                                <li>
                                    <p>As an alternative to conventional bonds, investors in a <b>Sukuk </b>(for
                                        example, a typical Murabaha-based Sukuk) may receive periodic distributions of
                                        profits as per the agreed mark-up. The mark-up element is typically considered
                                        as akin to Interest. In other structures, instead of fixed distribution
                                        payments, investors may receive income from a &ldquo;right of use&rdquo; asset,
                                        which may be considered to be equivalent to an Interest-like element.</p>
                                </li>
                                <li>
                                    <p>Sukuk can also be issued under other Islamic structures such as <b>Ijara</b>. The
                                        specific structure and its terms need to be assessed to determine if there is an
                                        element that can be considered as akin to Interest for Corporate Tax purposes.
                                    </p>
                                </li>
                                <li>
                                    <p>In a <b>Istisna </b>the financer or investor (typically a Bank) enters into a
                                        contract to facilitate in the construction of an asset. They agree to deliver
                                        the asset at a future date for a pre-agreed price, which can be paid in
                                        instalments or as a lump sum upon completion that includes a margin or mark-up.
                                        The profit margin or mark-up included in the price may be considered as Interest
                                        for Corporate Tax purposes.</p>
                                </li>
                                <li>
                                    <p>A <b>Salam </b>contract is in the nature of a forward contract that includes
                                        goods or products (typically agricultural products) where delivery is at a later
                                        date and with a pre-agreed mark-up. The profit margin or mark-up included in the
                                        price may be considered as Interest for Corporate Tax purposes.</p>
                                </li>
                            </ul>
                        </article>
                        <article id='bookmarkSection3.5'>
                            <h3>Payments economically equivalent to Interest</h3>
                            <p>The concept of &quot;payments economically equivalent to Interest&quot; encompasses a
                                wide array of financial charges that, although not explicitly labelled as Interest,
                                fulfil a similar economic role. These payments may occur within transactions or
                                arrangements where the term 'Interest' has not been used but the economic substance of
                                the transactions or arrangements are similar to a loan on which Interest should be
                                charged.</p>
                            <p>When determining whether a payment is economically equivalent to Interest, it is
                                essential to consider whether the economic substance provides financial returns that are
                                akin to debt or equity. This substance may not necessarily follow the treatment under
                                applicable Accounting Standards.</p>
                            <section class='level-2'>
                                <article id='bookmarkSection3.5.1'>
                                    <h3>Performing and non-performing debt instruments<sup><a href='#bookmark7'
                                                id='bookmarkback7'>[7]</a></sup></h3>
                                    <p>A debt instrument is a contract where a person (the lender) provides money (the
                                        principal amount) to another person (the borrower) for a period of time, and the
                                        borrower agrees to pay back the principal amount along with interest to the
                                        lender at specified intervals or upon maturity.</p>
                                    <p>A performing debt instrument is where the borrower is making payments of interest
                                        and/or repayments of the principal amount on the previously agreed dates. The
                                        interest that is paid is treated as Interest expenditure for the borrower and
                                        Interest income for the lender.</p>
                                    <p>On the other hand, a non-performing debt instrument is where the borrower is not
                                        making the previously agreed payments. For the borrower, any penalties or higher
                                        interest charges resulting from the default is treated as Interest expenditure
                                        as well as the &quot;standard&quot; interest that it owes. For the lender, any
                                        amount receivable from the borrower that is not in respect of a repayment of the
                                        principal amount, is treated as Interest income.</p>
                                    <p>A provision or write-off amount in respect of a loan is not considered to be
                                        Interest but depending on the accounting treatment, the amount could be a
                                        deductible expense for the lender (who has made a loss on the loan) subject to
                                        general principles of deductibility and other provisions of the Corporate Tax
                                        Law. The borrower (who no longer has a loan liability) would have corresponding
                                        Taxable Income where the liability (loan) is written back.</p>
                                </article>
                                <article id='bookmarkSection3.5.2'>
                                    <h3>Interest held in collective investment schemes that primarily invest in cash and
                                        cash equivalents<sup><a href='#bookmark8'>[8]</a></sup></h3>
                                    <p>A collective investment scheme is an arrangement that enables investors to
                                        effectively &quot;pool&quot; their respective assets within a fund scheme and
                                        typically have these professionally managed.</p>
                                    <p>Collective investment schemes that invest &quot;primarily&quot; in cash and cash
                                        equivalents shall mean collective investment schemes investing more than 50%
                                        (fifty percent) of their portfolio in cash and cash equivalents. Whether or not
                                        a collective investment scheme primarily invests in cash and cash equivalents
                                        needs to be assessed on an ongoing basis.</p>
                                    <p>Any returns from interests held in a collective investment scheme that does not
                                        primarily invest in cash and cash equivalents is not considered to be Interest
                                        but instead considered to be Dividends or other profit distributions.<sup><a
                                                href='#bookmark9'>[9]</a></sup> However, where a collective investment
                                        scheme primarily invests in cash and cash equivalents, such as money markets or
                                        ultra short-term bonds, this is akin to lending money. For example, instead of
                                        directly providing a loan and receiving Interest income (which may be taxable),
                                        the lender could indirectly lend money via a collective investment scheme in
                                        order to receive a return that is a Dividend (which may be Exempt Income). To
                                        prevent this situation, where a Person invests in a collective investment scheme
                                        that primarily invests in cash and cash equivalents, any return receivable by
                                        the Person from that collective investment scheme is treated as Interest income.
                                    </p>
                                    <p>Separate rules apply to a collective investment scheme that is a Qualifying
                                        Investment Fund – see the <a
                                            href='/guidances/uae-cit-fdl-47-of-2022-guide-CTGIFM1'
                                            rel='noopener noreferrer' target='_blank'>Corporate Tax Guide on Investment
                                            Funds and Investment Managers</a> for more information.</p>
                                    <div class='example'>
                                        <h4>Example 3: Receipts from collective investment schemes</h4>
                                        <p>Company A (incorporated and tax resident in the UAE) is a manufacturer but
                                            also invests in a collective investment scheme. The collective investment
                                            scheme has the following portfolio: 75% cash equivalent investments and 25%
                                            equity investments.</p>
                                        <p>Company A's income and expenses during the calendar year 2025 include:</p>
                                        <ul>
                                            <li>
                                                <p>Income receivable from the collective investment scheme arising from
                                                    its investment in short-dated government bonds: AED 25,000</p>
                                            </li>
                                            <li>
                                                <p>Income receivable from the collective investment scheme arising from
                                                    its investment in equities: AED 30,000</p>
                                            </li>
                                            <li>
                                                <p>Interest payable on working capital borrowings: AED 150,000</p>
                                            </li>
                                        </ul>
                                        <p>All the income receivable from the collective investment scheme, regardless
                                            of its source, is considered to be Interest income because the collective
                                            investment scheme primarily invests in cash and cash equivalents. Therefore,
                                            the income receivable that is derived from the investment in equities is not
                                            considered to be a profit distribution / dividend income. It does not matter
                                            that the income receivable in respect of the investment in equities is more
                                            than the investment in respect of cash or cash equivalents in a given Tax
                                            Period.</p>
                                        <p>Accordingly, for Tax Period 2025, AED 55,000 will be considered as part of
                                            Interest income while computing Net Interest Expenditure, and the same
                                            amount will be adjusted while computing adjusted EBITDA.</p>
                                    </div>
                                </article>
                                <article id='bookmarkSection3.5.3'>
                                    <h3>Collateralised asset-backed debt securities<sup><a href='#bookmark10'
                                                id='bookmarkback10'>[10]</a></sup></h3>
                                    <p>Collateralised asset-backed debt securities refer to financial products that are
                                        secured/backed by a pool of assets that generate cash flow, such as rental
                                        property.</p>
                                    <div class='example'>
                                        <p><strong>Example 4: Mortgage-backed securities</strong></p>
                                        <p>Company B (incorporated and tax resident in the UAE) has invested in a
                                            mortgage-backed security whereby the underlying assets are a pool of
                                            residential mortgage loans. The borrowers (the homeowners) make repayments
                                            of the principal amount of the loans as well as interest payments.</p>
                                        <p>As a holder of the mortgage-backed security, Company B received a total of
                                            AED 600,000 in its Tax Period for the year ended 31 December 2024. Of that
                                            amount, AED 350,000 was derived from repayments of the principal amount of
                                            the loans while AED 250,000 was in respect of interest payments made by the
                                            borrowers.</p>
                                        <p>For the purposes of the Corporate Tax, Company B is treated as having
                                            Interest income of AED 250,000 in its 2024 Tax Period.</p>
                                    </div>
                                </article>
                                <article id='bookmarkSection3.5.4'>
                                    <h3>Sale and subsequent repurchase agreement (repo)<sup><a href='#bookmark11'
                                                id='bookmarkback11'>[11]</a></sup></h3>
                                    <p>An agreement for the sale and subsequent re-purchase of the same security (or
                                        securities) is commonly known as a &ldquo;repo&rdquo;. Under a repo, the seller
                                        (borrower) sells a security to a buyer (lender) with a promise to buy back the
                                        same security at a future date for a predetermined, agreed-upon price.</p>
                                    <p>The agreed repurchase price is typically higher than the original price, and the
                                        difference represents the cost of borrowing or financing. The element that
                                        represents the cost of borrowing or financing is treated as Interest income for
                                        the lender and Interest expense for the borrower.</p>
                                    <div class='example'>
                                        <p><strong>Example 5: Tri-party repo</strong></p>
                                        <p>Company C (incorporated and tax resident in the UAE) specialises in
                                            developing software solutions. It needs short-term financing to manage its
                                            cash flows.</p>
                                        <p>Company C owns government bonds worth AED 10 million. Via an agent, it enters
                                            into a repo agreement with a bank whereby Company C sells the government
                                            bonds to the bank for AED 9,500,000 and will repurchase the government bonds
                                            after 30 days for AED 9,531,667. The difference of AED 31,667 equates to an
                                            annual interest rate of 4%. In addition, Company C pays AED 20,000 to the
                                            agent.</p>
                                        <p>Company C has Interest expenditure of AED 51,667. This is made up of the
                                            difference in price of AED 31,667 in respect of the repo agreement, and AED
                                            20,000 which is an amount incurred in connection with the raising of finance
                                            (see <a href='#bookmarkSection3.10'>Section 3.10</a>).</p>
                                    </div>
                                </article>
                                <article id='bookmarkSection3.5.5'>
                                    <h3>Stock lending agreement <sup><a href='#bookmark12'
                                                id='bookmarkback12'>[12]</a></sup></h3>
                                    <p>Stock lending agreements, also known as securities lending agreements, are
                                        arrangements in which one party (the lender) temporarily transfers securities to
                                        another party (the borrower), typically in exchange for collateral, with the
                                        agreement that the borrower will return the equivalent securities at a later
                                        date. The borrower normally pays a fee to the lender for the use of the
                                        securities.</p>
                                    <p>The fee paid by the borrower to the lender is compensation for the temporary use
                                        of the securities, akin to interest paid on a cash loan. Hence, the return or
                                        profit on a stock lending transaction is treated as Interest.</p>
                                    <div class='example'>
                                        <p><strong>Example 6: Securities lending agreements, where Dividend is paid to
                                                the lender</strong></p>
                                        <p>Company D (incorporated and tax resident in the UAE) owns a portfolio of
                                            securities, including blue-chip equities.</p>
                                        <p>Company X (incorporated and tax resident in the UAE), a trading company with
                                            fixed assets, expects that the market value of those blue-chip equities is
                                            going to fall. It, therefore, wants to short sell those equities, that is,
                                            sell the equities and then buy them back at a lower price, in order to make
                                            a profit.</p>
                                        <p>Company D and Company X enter into an agreement whereby Company D lends to
                                            Company X its blue-chip equities which are worth AED 20 million at that
                                            time, for a period of 90 days. Under the agreement, Company D will charge
                                            Company X a fee of AED 98,630, which is the equivalent of an annualised
                                            lending fee of 2% (20,000,000 * 2% * 90/365). Since Company X intends to
                                            short sell the equities and there is no guarantee that it will be able to
                                            repurchase those equities to return to Company D, it places some fixed
                                            assets as collateral with Company D.</p>
                                        <p>During the 90-day lending period, Company X, as the legal holder of the
                                            equities, receives a Dividend of AED 500,000 in respect of the equities.
                                            Under the agreement, Company X should forward any Dividend income to Company
                                            D (that is, the amount of Dividend received is not part of or factored into
                                            pricing of the arrangement).</p>
                                        <p>At the end of the 90 days, Company X returns the equities it borrowed to
                                            Company D and Company D returns the collateral to Company X. In addition,
                                            Company X pays AED 598,630 to Company D. This amount is in respect of the
                                            lending fee of AED 98,630 and the AED 500,000 Dividend receipt.</p>
                                        <p>For Company D (the lender), the fee of AED 98,630 is considered to be
                                            Interest income. Where the Dividend receipt of AED 500,000 retains its
                                            characteristic as Dividend income for Company D (following applicable
                                            accounting standards IFRS or IFRS for SMEs), this may be considered as
                                            Exempt Income (if all conditions are met) for Corporate Tax Purposes.</p>
                                        <p>For Company X (the borrower), the fee of AED 98,630 is considered to be
                                            Interest expenditure. Although it received a Dividend of AED 500,000, this
                                            is not subject to tax for Company X because it passes this income to Company
                                            D. However, any profit or loss made from the short selling of the equities
                                            is subject to tax in accordance with the accounting treatment and the
                                            Corporate Tax rules.</p>
                                        <p>Accordingly, the Dividend shall not be considered as a part of the Interest
                                            component.</p>
                                    </div>
                                    <div class='example'>
                                        <p><strong>Example 7: Securities lending agreements, where Dividend is retained
                                                by the borrower</strong></p>
                                        <p>Taking the same facts as in Example 6 above, except that Company X retains
                                            the Dividend of AED 500,000. In this case, Company X would be taxable on the
                                            Dividend income rather than Company D in accordance with the normal
                                            Corporate Tax rules. In certain situations, the Dividend may be exempt.
                                            <sup><a href='#bookmark13' id='bookmarkback13'>[13]</a></sup>
                                        </p>
                                    </div>
                                </article>
                                <article id='bookmarkSection3.5.6'>
                                    <h3>Securitisation involving transfer of assets in exchange for securities<sup><a
                                                href='#bookmark14' id='bookmarkback14'>[14]</a></sup></h3>
                                    <p>Securitisation is the process of taking an asset or a group of assets and
                                        transforming those assets into an investable security. The process typically
                                        involves a special purpose vehicle (SPV) issuing securities to investors in
                                        exchange for cash. The SPV uses that cash to purchase assets that generate cash
                                        flows, for example, loans or receivables, such as mortgages, credit card
                                        receivables, auto (car) loans, or other types of debt. The cash flows typically
                                        include an interest component and, therefore, the economic substance of a
                                        securitisation transaction is similar to that of a loan arrangement between the
                                        investor and ultimate borrower.</p>
                                    <p>The securities that are issued to the investors represent claims on the cash
                                        flows produced by the underlying assets, so although an investor may be
                                        receiving a return on a security, the investor is treated as receiving Interest
                                        income (rather than a Dividend), to the extent that the return is derived from a
                                        cash flow with an interest component. For the SPV that has issued the
                                        securities, the return on the underlying assets (excluding capital repayment) as
                                        well as the payment to investors represents compensation for the use of funds (a
                                        financing arrangement) and is treated as Interest expense.</p>
                                    <div class='example'>
                                        <p><strong>Example 8: Securitisation of auto loans</strong></p>
                                        <p>A Bank wishes to dispose of a portfolio of auto (car) loans that it holds.
                                            The ultimate borrowers (who have purchased the cars) make monthly payments
                                            of interest as well as principal repayments.</p>
                                        <p>The Bank sets up a special purpose vehicle (SPV). Neither the Bank nor the
                                            SPV is an Exempt Person for Corporate Tax purposes.</p>
                                        <p>The SPV purchases the auto loans from Bank and then issues securities to
                                            investors. The monthly payments made by the ultimate borrowers are paid to
                                            the investors via the SPV.</p>
                                        <p>The payments made to the investors that represent a return on their
                                            investment (payment of interest by the borrowers to the bank which is
                                            ultimately paid to the SPV) is considered to be Interest.</p>
                                    </div>
                                </article>
                                <article id='bookmarkSection3.5.7'>
                                    <h3>Hire purchase and finance leases<sup><a href='#bookmark15'
                                                id='bookmarkback15'>[15]</a></sup></h3>
                                    <p>There are different types of contracts whereby one party (the lessor) conveys an
                                        asset to another (the lessee) for a specified time, usually in return for a
                                        periodic payment.</p>
                                    <p>Three such contracts are considered below: hire purchase, finance lease, and non-
                                        finance lease (also known as operating lease). Further, a &ldquo;sale and
                                        leaseback&rdquo; transaction could be either a finance lease or non-finance
                                        lease (see <a href='#bookmarkSection3.5.8'>section 3.5.8</a>), depending on the
                                        contractual terms.</p>
                                    <p>Under a hire purchase contract, the lessee has the option to purchase the asset
                                        at the end of the contract term. Ownership of the asset is transferred from the
                                        lessor to the lessee after all payments have been made. Such payments include
                                        those related to purchasing the asset at the end of the hire purchase period.
                                    </p>
                                    <p>Under a finance lease contract, legal title of the asset remains with the lessor
                                        but the lease term usually covers a significant portion of the asset's useful
                                        life. The lessee typically assumes most of the risks and rewards of ownership of
                                        the asset, and is, for example, responsible for maintenance, insurance and other
                                        costs associated with the asset. The finance lease payments are typically
                                        structured to cover the full cost of the asset plus a financing charge over the
                                        lease term, which is similar to a loan repayment schedule.</p>
                                    <p>For both hire purchase and finance lease contracts, the lessee typically makes
                                        regular payments that cover both the cost of the leased asset and financing
                                        charge (associated with the lease liability) over the contract term. The lessee
                                        may be required under IFRS (or IFRS for SMEs) to record its &ldquo;right of
                                        use&rdquo; as an asset. If an asset is recorded, the financing charge is
                                        Interest expenditure.16 If IFRS (or IFRS for SMEs) requires the lessor to record
                                        a finance element in respect of the contract, that finance element is Interest
                                        income.</p>
                                    <div class='example'>
                                        <p><strong>Example 9: Hire purchase of a car</strong></p>
                                        <p>Company E (incorporated and tax resident in the UAE) is a leasing company
                                            which has provided a car under hire purchase to Company G (incorporated and
                                            tax resident in the UAE) on 1 January 2025. Both companies follow the
                                            Gregorian calendar year as their Financial Year and Tax Period.</p>
                                        <p>The detail of the hire purchase is given below:</p>
                                        <ul>
                                            <li>
                                                <p>Cost of the car for Company G: AED 200,000</p>
                                            </li>
                                            <li>
                                                <p>Useful life: 4 years</p>
                                            </li>
                                            <li>
                                                <p>Hire purchase term: 4 years (with the option to purchase the car once
                                                    all payments have been made)</p>
                                            </li>
                                            <li>
                                                <p>Annual lease payments: AED 53,717 due at the start of each year</p>
                                            </li>
                                            <li>
                                                <p>Implicit interest rate in the lease (as accounted for under IFRS): 5%
                                                    per annum calculated as the opening balance minus annual lease
                                                    payment, multiplied by 5%.</p>
                                            </li>
                                        </ul>
                                        <p>The amortisation of the lease is as follows:</p>
                                        <table>
                                            <tr>
                                                <th>Year</th>
                                                <th>Opening balance</th>
                                                <th>Payments</th>
                                                <th>Implicit interest (as per IFRS)</th>
                                                <th>Closing balance</th>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p class='center'>1 – 2025</p>
                                                </td>
                                                <td>
                                                    <p class='center'>200,000</p>
                                                </td>
                                                <td>
                                                    <p class='center'>(53,717)</p>
                                                </td>
                                                <td>
                                                    <p class='center'>7,315</p>
                                                </td>
                                                <td>
                                                    <p class='center'>153,598</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p class='center'>2 – 2026</p>
                                                </td>
                                                <td>
                                                    <p class='center'>153,598</p>
                                                </td>
                                                <td>
                                                    <p class='center'>(53,717)</p>
                                                </td>
                                                <td>
                                                    <p class='center'>4,994</p>
                                                </td>
                                                <td>
                                                    <p class='center'>104,875</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p class='center'>3 – 2027</p>
                                                </td>
                                                <td>
                                                    <p class='center'>104,875</p>
                                                </td>
                                                <td>
                                                    <p class='center'>(53,717)</p>
                                                </td>
                                                <td>
                                                    <p class='center'>2,559</p>
                                                </td>
                                                <td>
                                                    <p class='center'>53,717</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p class='center'>4 – 2028</p>
                                                </td>
                                                <td>
                                                    <p class='center'>53,717</p>
                                                </td>
                                                <td>
                                                    <p class='center'>(53,717)</p>
                                                </td>
                                                <td>
                                                    <p class='center'>0</p>
                                                </td>
                                                <td>
                                                    <p class='center'>0</p>
                                                </td>
                                            </tr>
                                        </table>
                                        <p>The implicit interest component is treated as Interest for the relevant Tax
                                            Periods. For example, in the 2025 Tax Period, Company G should include AED
                                            7,315 as Interest expenditure.</p>
                                        <p>Any cancellation charges incurred due to the early termination of a hire
                                            purchase contract is not considered to be Interest.</p>
                                    </div>
                                </article>
                                <article id='bookmarkSection3.5.8'>
                                    <h3>Non-finance leases<sup><a href='#bookmark17' id='bookmarkback17'>[17]</a></sup>
                                    </h3>
                                    <p>A non-finance lease, commonly referred to as an operating lease, is an
                                        arrangement where the lessor allows the lessee to use an asset for a specific
                                        period in exchange for rental payments. Unlike a finance lease, an operating
                                        lease does not provide the lessee with all the benefits and risks typically
                                        associated with ownership of the asset.</p>
                                    <p>A non-finance lease is still considered to have a finance element that represents
                                        the cost of funding, and that finance element is treated as Interest.<sup><a
                                                href='#bookmark18' id='bookmarkback18'>[18]</a></sup></p>
                                    <p>For the lessee, where there is a right-of-use asset, there should be a finance
                                        element for accounting purposes, and this finance element is considered to be
                                        Interest.</p>
                                    <p>For the lessor, there would be no finance element for accounting purposes, and
                                        therefore, the finance element, which is considered to be Interest, should be
                                        calculated as follows:<sup><a href='#bookmark19'
                                                id='bookmarkback19'>[19]</a></sup></p>
                                    <div class='formula'>
                                        <p><b>Finance element of non-finance lease payment</b> = <span
                                                class='fraction'><span class='numerator'>Lease payment * Total finance
                                                    element of the lease</span><span class='denominator'>Total cost of
                                                    the lease</span></span></p>
                                        <p>where:</p>
                                        <ul>
                                            <li>
                                                <p><strong>Lease payment</strong> = specific instalment paid by the
                                                    lessee to the lessor.</p>
                                            </li>
                                            <li>
                                                <p><strong>Total finance element</strong> = the total financing cost
                                                    over the lease term calculated as follows:</p>
                                            </li><img alt='Image'
                                                src='https://gtlcdn-eufeh8ffbvbvacgf.z03.azurefd.net/guide/uae/cit/CTGIDL1/01.png'>
                                            <li>
                                                <p><strong>Total cost of the lease</strong> = the sum of all lease
                                                    instalments over the lease term.</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class='example'>
                                        <p><strong>Example 10: Non-Finance lease of machinery</strong></p>
                                        <p>Both Company K and Company L are incorporated and tax resident in the UAE.
                                            Company K provided machinery under a non-finance lease contract to Company L
                                            on 1 January 2025.</p>
                                        <p>The details of the non-finance lease are as follows:</p>
                                        <ul>
                                            <li>
                                                <p>Initial value of the machinery: AED 100,000</p>
                                            </li>
                                            <li>
                                                <p>Lease term: 5 years</p>
                                            </li>
                                            <li>
                                                <p>Annual lease payment: AED 26,000 [Present value of lease: AED
                                                    118,195]</p>
                                            </li>
                                            <li>
                                                <p>Expected depreciated value of the machinery at the end of the lease
                                                    period (residual value): AED 20,000</p>
                                            </li>
                                            <li>
                                                <p>Implicit interest rate (as accounted for under IFRS by lessee): 5%
                                                    per annum calculated as the opening balance minus annual lease
                                                    payment, multiplied by 5%.</p>
                                            </li>
                                        </ul>
                                        <p>The impact for 2025 Tax Period is as follows:</p>
                                        <p><strong>For Company L (lessee):</strong></p>
                                        <p>The lessee calculates implicit interest as AED 4,610 [(AED 118,195 less AED
                                            26,000) * 5%] as per the relevant Accounting Standards followed by the
                                            Taxable Person which is considered as Interest.</p>
                                        <p><strong>For Company K (lessor):</strong></p>
                                        <p>If Company K accounts for this lease as a non-finance lease, with no implicit
                                            interest recorded. The calculation of Interest income is as under:</p>
                                        <p class='formula'><b>Finance element of non-finance lease payment</b> = <span
                                                class='fraction'><span class='numerator'>Lease payment * Total finance
                                                    element of the lease</span><span class='denominator'>Total cost of
                                                    the lease</span></span></p>
                                        <p>Lease payment is AED 26,000.</p>
                                        <p>The total finance element of the lease is the total cost of the lease less
                                            the difference between the initial value of the leased asset and the
                                            expected depreciated value at the end of the lease period.</p>
                                        <p>Total cost of the lease is AED 26,000 * 5 = <b>AED 130,000</b> (annual lease
                                            payment multiplied by the lease term)</p>
                                        <p>Initial value of the leased asset = <b>AED 100,000</b></p>
                                        <p>Expected depreciated value at the end of the lease period = AED 20,000 Total
                                            finance element of the lease = 130,000 – (100,000 – 20,000) = <b>AED
                                                50,000</b></p>
                                        <p>For the 2025 Tax Period, the finance element is therefore: 26,000 * (50,000 /
                                            130,000) = AED 10,000. This represents Company K’s annual Interest income in
                                            respect of the non-finance lease unless the terms of the lease
                                            change.<sup><a href='#bookmark20' id='bookmarkback20'>[20]</a></sup></p>
                                    </div>
                                </article>
                                <article id='bookmarkSection3.5.9'>
                                    <h3>Factoring and similar transactions<sup><a href='#bookmark21'
                                                id='bookmarkback21'>[21]</a></sup></h3>
                                    <p>A business may sell goods or services to customers on credit such that customers
                                        need only pay later. Those customers may be referred to as &ldquo;debtors&rdquo;
                                        and the amounts they owe may be referred to as &ldquo;accounts
                                        receivable&rdquo;. The business might want or need immediate payment for cash
                                        flow or working capital purposes. Instead of taking out a loan to cover the
                                        period before the debtors make their payments, the business could sell the
                                        accounts receivable.</p>
                                    <p>Factoring is where a business sells its accounts receivable to another party,
                                        known as a &ldquo;factor&rdquo;, usually at a discount or &ldquo;factoring
                                        fee&rdquo;. The factor then assumes the responsibility for collecting the
                                        payments from the business's customers (the debtors). There are two types of
                                        factoring arrangements:</p>
                                    <ul>
                                        <li>
                                            <p>In a &ldquo;recourse&rdquo; factoring arrangement, the business retains
                                                the risk of non- payment by its debtors. So, if the debtor fails to pay,
                                                the factor can demand repayment from the seller. In this situation, the
                                                seller will suffer a bad debt expense, which may be a deductible expense
                                                (under the general principles of deductibility for Corporate Tax
                                                purposes).</p>
                                        </li>
                                        <li>
                                            <p>In a &ldquo;non-recourse&rdquo; factoring arrangement, the credit risk of
                                                non-payment is assumed by the factor. So, if the debtor fails to pay,
                                                the factor cannot seek repayment from the business. In this situation,
                                                the factor will suffer the bad debt expense, which may be deductible
                                                expense (under the general principles of deductibility for Corporate Tax
                                                purposes).</p>
                                        </li>
                                    </ul>
                                    <p>Given the differences in risks, the factoring fee is typically higher for
                                        non-recourse factoring compared to recourse factoring arrangements. Factoring is
                                        effectively a financing transaction and, therefore, the factoring fee, i.e.
                                        discount or any other Interest-like component, is treated as Interest at the
                                        time it is recognised under IFRS (or IFRS for SMEs).</p>
                                    <div class='example'>
                                        <p><strong>Example 11: Recourse factoring of accounts receivable</strong></p>
                                        <p>Company M (incorporated and tax resident in the UAE) develops residential and
                                            commercial properties in the UAE. It decides to use non-recourse factoring
                                            to improve its cash flow.</p>
                                        <p>Company M sells its accounts receivable with a face value of AED 1 million to
                                            a factor in exchange for AED 960,000 in cash. The discount of 4%, that is,
                                            AED 40,000, is the cost of the factoring and treated as Interest expenditure
                                            for Company M.</p>
                                    </div>
                                </article>
                            </section>
                        </article>
                        <article id='bookmarkSection3.6'>
                            <h3>Foreign exchange movements</h3>
                            <p>Foreign exchange movement refers to the change in the value of one currency relative to
                                another. These movements can result in gains or losses when a Business has assets,
                                liabilities, income, or expenses denominated in a foreign currency.</p>
                            <p>Any foreign exchange gains or losses that are related to Interest or other payments
                                economically equivalent to interest are considered to be Interest.<sup><a
                                        href='#bookmark22' id='bookmarkback22'>[22]</a></sup> However, foreign exchange
                                gains or losses arising from the principal portion of the loan (as distinct from
                                interest on the loan) is not considered to be Interest. Similarly, foreign exchange
                                gains and losses on other Business arrangements or transactions that are not related to
                                Interest, for example, on the sale of finished products or the purchase of raw
                                materials, should not be considered as Interest.</p>
                            <div class='example'>
                                <p><strong>Example 12: Foreign exchange gain on Interest in relation to foreign currency
                                        loan</strong></p>
                                <p>Company P (incorporated and tax resident in the UAE) has a Financial Year end of 30
                                    June. It takes out a loan of 1 million Singapore Dollars (SGD) on 1 January 2024.
                                    The annual interest rate on the loan is 5%.</p>
                                <p>The interest of SGD 50,000 is due to be paid on 1 June 2024 but Company P actually
                                    pays the interest on 30 September 2024.</p>
                                <p>On 30 June 2024, the exchange rate is AED 2.60 : SGD 1</p>
                                <p>On 30 September 2024, the exchange rate is AED 2.65 : SGD 1</p>
                                <p>Thus, on 30 June 2024, an accrual is created for the interest payable of AED 130,000
                                    (SGD 50,000 * 2.60) while on 30 September 2024, Company P actually pays interest of
                                    AED 132,500 (SGD 50,000 * 2.65).</p>
                                <p>The Interest expenditure for the Tax Period ending on 30 June 2024 is AED 130,000.
                                    For the Tax Period ending on 30 June 2025, the Interest expenditure includes the
                                    exchange movement of AED 2,500 (AED 132,500 less AED 130,000).</p>
                                <p>The foreign exchange movement on the principal portion of the loan is also taken into
                                    account for Corporate Tax purposes, but not as Interest income or expenditure.</p>
                            </div>
                        </article>
                        <article id='bookmarkSection3.7'>
                            <h3>Capitalised Interest</h3>
                            <p>Generally, borrowing costs that are directly attributable to the acquisition,
                                construction or production of an asset are capitalised based on IFRS (or IFRS for SMEs).
                                Where capitalisation is appropriate, interest, processing fees and any other costs
                                incurred in obtaining a loan to construct a long-term asset is added to the cost base of
                                the asset rather than being immediately expensed in the income statement under IFRS (or
                                IFRS for SMEs).</p>
                            <p>Capitalised interest is not deductible in the Tax Period in which it is incurred because
                                it is capital in nature.<sup><a href='#bookmark23' id='bookmarkback23'>[23]</a></sup>
                                Instead, it should be treated as part of the cost of the related asset and, therefore,
                                increases the cost base of that asset for depreciation purposes.</p>
                            <p>Income and expenditure attributable to the capitalised interest amount is subject to the
                                General Interest Deduction Limitation Rule.<sup><a href='#bookmark24'
                                        id='bookmarkback24'>[24]</a></sup> Any amount of income and expenditure
                                attributable to capitalised interest in accordance with the Accounting Standards
                                followed by the Taxable Person (i.e. IFRS or IFRS for SMEs) should be treated as part of
                                Net Interest Expenditure in the Tax Period in which the capitalised interest is
                                amortised over the useful life of the related asset, and not in the Tax Period in which
                                the interest is incurred and capitalised.<sup><a href='#bookmark25'
                                        id='bookmarkback25'>[25]</a></sup></p>
                            <p>Accordingly, where the Taxable Person has capitalised interest in accordance with IFRS
                                (or IFRS for SMEs), the Taxable Person must make the following adjustments when
                                calculating Net Interest Expenditure and adjusted EBITDA:</p>
                            <ol type='a'>
                                <li>
                                    <p>Net Interest Expenditure - the capitalised interest should be spread on a
                                        straight- line basis over the useful life of the underlying asset, and the
                                        relevant portion for each Tax Period should be included in Net Interest
                                        Expenditure.</p>
                                </li>
                                <li>
                                    <p>Adjusted EBITDA - to avoid double-counting, the amount of depreciation that is
                                        added back when calculating adjusted EBITDA should be reduced by the amount
                                        included in Net Interest Expenditure under (a) above because that amount is re-
                                        characterised from being depreciation to being Interest in that Tax Period.</p>
                                </li>
                            </ol>
                            <p>If the related asset is disposed of in a Tax Period before the capitalised interest has
                                been fully included in Net Interest Expenditure, the balance of the capitalised interest
                                should be treated as part of Net Interest Expenditure in the Tax Period in which the
                                asset is disposed of.</p>
                            <div class='example'>
                                <p><strong>Example 13: Calculating Net Interest Expenditure and adjusted EBITDA where
                                        Interest is capitalised</strong></p>
                                <p>Company Q (incorporated and tax resident in the UAE) follows the Gregorian calendar
                                    year as its Financial Year and Tax Period. It decided to build a machine in the UAE
                                    to manufacture drinks. To fund the machine, Company Q obtained a bank loan in its
                                    2025 Tax Period of AED 10 million for a period of 1 year at an annual interest rate
                                    of 10% with an agreement that the principal will be repaid at the start of year 2.
                                    Company Q also paid the bank AED 200,000 in loan processing fees.</p>
                                <p>Based on the applicable Accounting Standards followed by Company Q, the following
                                    amounts were capitalised in the year ended 31 December 2025:</p>
                                <ul>
                                    <li>
                                        <p>AED 10 million spent on constructing the machine (assuming that the machine
                                            meets the asset recognition test as per IFRS or IFRS for SMEs),</p>
                                    </li>
                                    <li>
                                        <p>AED 1 million interest payable in 2025 (AED 10 million * 10%), and</p>
                                    </li>
                                    <li>
                                        <p>AED 200,000 loan processing fees.</p>
                                    </li>
                                </ul>
                                <p>The cost of the machine recorded in the Financial Statements at 31 December 2025 is
                                    AED 11.2 million. The machine was brought into use on 1 January 2026.</p>
                                <p>The useful life of the machine was estimated to be 10 years. However, Company Q
                                    decides to apply a rate of 15% applying the diminishing value approach for
                                    depreciation. Accordingly, during the 2026 Tax Period, a depreciation charge of AED
                                    1,680,000 (15%*11.2 million) is recorded in the income statement.</p>
                                <p>During the 2026 Tax Period, AED 1.2 million (i.e. capitalised interest in Year 1 of
                                    AED 1 million and loan processing fees of AED 200,000) is amortised on a
                                    straight-line basis over the useful life of the asset of 10 years, being AED 120,000
                                    per annum.</p>
                                <p>Accordingly, for Tax Period 2026, AED 120,000 is treated to be Interest while
                                    computing Net Interest Expenditure, and the same amount is excluded from
                                    depreciation while computing adjusted EBITDA.</p>
                            </div>
                            <div class='example'>
                                <p><strong>Example 14: Capitalised Interest on an investment property valued at fair
                                        value</strong> (where election is made for realisation basis).</p>
                                <p>The facts are the same as for Example 13. However, during the 2026 Tax Period, the
                                    machine is fair valued at AED 12 million and the company records the fair value gain
                                    of AED 800,000 (AED 12 million less AED 11.2 million being the cost of the machine)
                                    in its income statement and elects for realisation basis.<sup><a href='#bookmark26'
                                            id='bookmarkback26'>[26]</a></sup> This does not affect the calculation of
                                    Net Interest Expenditure and adjusted EBITDA.</p>
                                <p>The AED 1.2 million (the capitalised interest and loan processing fees) is still
                                    amortised on a straight-line basis over the useful life of the asset of 10 years,
                                    being AED 120,000 per annum. Accordingly, for the 2026 Tax Period, as per example 13
                                    above, AED 120,000 is considered to be Interest when computing Net Interest
                                    Expenditure, and the same amount is excluded from depreciation while computing
                                    adjusted EBITDA.</p>
                            </div>
                            <div class='example'>
                                <p><strong>Example 15: Disposal of asset</strong></p>
                                <p>Continuing Example 13, Company Q sold the machine to a third party for AED 9 million
                                    at the end of year 4 (of its useful life of 10 years), in the 2029 Tax Period. The
                                    net book value on 31 December 2029 is AED 5,846,470.</p>
                                <table>
                                    <tr>
                                        <th>Tax Period</th>
                                        <th>Opening cost of asset (AED)</th>
                                        <th>Depreciation @15% (AED)</th>
                                        <th>Closing WDV (AED)</th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p class='center'>2026</p>
                                        </td>
                                        <td>
                                            <p class='center'>11,200,000</p>
                                        </td>
                                        <td>
                                            <p class='center'>1,680,000</p>
                                        </td>
                                        <td>
                                            <p class='center'>9,520,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p class='center'>2027</p>
                                        </td>
                                        <td>
                                            <p class='center'>9,520,000</p>
                                        </td>
                                        <td>
                                            <p class='center'>1,428,000</p>
                                        </td>
                                        <td>
                                            <p class='center'>8,092,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p class='center'>2028</p>
                                        </td>
                                        <td>
                                            <p class='center'>8,092,000</p>
                                        </td>
                                        <td>
                                            <p class='center'>1,213,800</p>
                                        </td>
                                        <td>
                                            <p class='center'>6,878,200</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p class='center'>2029</p>
                                        </td>
                                        <td>
                                            <p class='center'>6,878,200</p>
                                        </td>
                                        <td>
                                            <p class='center'>1,031,730</p>
                                        </td>
                                        <td>
                                            <p class='center'><b>5,846,470</b></p>
                                        </td>
                                    </tr>
                                </table>
                                <p>Accordingly, Company Q records a gain on sale of the machine in its income statement
                                    amounting to AED 3,153,530 (AED 9 million less AED 5,846,470). Capitalised interest
                                    of AED 120,000 has been claimed for each of the years 2026, 2027 and 2028 (totalling
                                    AED 360,000). In the 2029 Tax Period, the unamortised amount of capitalised Interest
                                    of AED 840,000 (AED 1.2 million - AED 360,000), is considered to be Interest while
                                    computing Net Interest Expenditure, and the same amount is excluded from
                                    depreciation while computing adjusted EBITDA.</p>
                            </div>
                        </article>
                        <article id='bookmarkSection3.8'>
                            <h3>Hybrid instruments</h3>
                            <p>Hybrid instruments are financial products that combine features of both debt and equity.
                                Hybrid instruments can take various forms. For instance, convertible debentures or bonds
                                are debt instruments that can be converted into equity of the issuing company.</p>
                            <p>To the extent a hybrid instrument is not converted to equity and not classified as equity
                                under IFRS (or IFRS for SMEs), the income and expenditure in relation to it will be
                                considered as Interest.<sup><a href='#bookmark27' id='bookmarkback27'>[27]</a></sup></p>
                            <p>However, if a hybrid instrument is classified as an equity interest under IFRS (or IFRS
                                for SMEs), any income and expenditure in relation to the instrument will not be
                                considered as Interest but instead considered to be a Dividend or other profit
                                distribution.<sup><a href='#bookmark28' id='bookmarkback28'>[28]</a></sup></p>
                            <p>For example, profit participating loans or preference shares may be difficult to classify
                                because they can be akin to debt or equity depending on their terms. Where they are
                                classified as a financial liability for accounting purposes, the payments made by the
                                issuer to the holder is considered to be Interest. Where they are classified as an
                                equity instrument for accounting purposes, the payments made by the issuer to the holder
                                is considered to be a Dividend.</p>
                        </article>
                        <article id='bookmarkSection3.9'>
                            <h3>Late payments</h3>
                            <section>
                                <article id='bookmarkSection3.9.1'>
                                    <h3>In relation to statutory dues</h3>
                                    <p>Late payment (or non-payment) of statutory dues, such as taxes, customs duties,
                                        or other government-imposed fees, typically incurs penalties or interest charges
                                        for the delay.</p>
                                    <p>Regardless of how they are calculated, any charges in respect of a breach of law
                                        are considered to be fines or penalties and are not deductible expenditure for
                                        Corporate Tax purposes<sup><a href='#bookmark29'
                                                id='bookmarkback29'>[29]</a></sup>. Any interest element will also not
                                        be considered as Interest.</p>
                                </article>
                                <article id='bookmarkSection3.9.2'>
                                    <h3>In relation to commercial dues</h3>
                                    <p>Late payment of commercial or Business dues, such as invoices from suppliers or
                                        service providers, can result in additional charges, which can take the form of
                                        late payment fees or interest charges.</p>
                                    <p>Unless the charges are specified as a fine or penalty in a relevant contract,
                                        such charges should be considered to be compensation to the creditor for the
                                        delayed use of funds that were due to them. Accordingly, these charges should be
                                        treated as Interest.</p>
                                    <p>For example, if a company has agreed to payment terms with a supplier that
                                        include a charge at a rate of 1% per month on overdue invoice balances, and the
                                        company fails to pay an invoice on time, the additional amount charged should be
                                        treated as Interest. On the other hand, if the charge on overdue invoice
                                        balances is a one-off fixed penalty amount of say AED 10,000 regardless of when
                                        the overdue invoice is paid, the AED 10,000 would not be considered Interest.
                                    </p>
                                </article>
                            </section>
                        </article>
                        <article id='bookmarkSection3.10'>
                            <h3>Amounts incurred in connection with the raising of finance</h3>
                            <p>The term &quot;amounts incurred in connection with raising finance&quot; refers to the
                                various costs that a Business may incur when obtaining capital through borrowing or
                                other financial instruments (other than equity instruments). These costs are considered
                                to be Interest.<sup><a href='#bookmark30' id='bookmarkback30'>[30]</a></sup></p>
                            <p>Even if the amounts are capitalised as part of the cost of the asset under IFRS (or IFRS
                                for SMEs), the capitalised amounts would still be treated as Interest (see <a
                                    href='#bookmarkSection3.7'>Section 3.7</a>).</p>
                            <p>The broad definition ensures that all forms of compensation to creditors or costs related
                                to financing are captured, regardless of how they are structured or named. This includes
                                but is not limited to:<sup><a href='#bookmark31' id='bookmarkback31'>[31]</a></sup></p>
                            <ul>
                                <li>
                                    <p><strong>Guarantee fees:</strong><span>When a company seeks a loan, it might
                                            require a Related Party or third-party guarantee to assure the lender of
                                            repayment. A fee charged by a guarantor for this would be considered an
                                            amount incurred in raising finance.<sup><a href='#bookmark32'
                                                    id='bookmarkback32'>[32]</a></sup> Where a Related Party does not
                                            charge a guarantee fee but a fee would be charged on an arm’s length basis
                                            (i.e. under transfer pricing rules), such a deemed fee would also be
                                            considered as Interest. For example, if a company borrows AED 10 million and
                                            the Bank requires a guarantee from a guarantor, a guarantee fee of 1% would
                                            be AED 100,000. This fee will be treated as Interest expenditure for the
                                            borrowing company and Interest income for the Related Party
                                            guarantor.</span></p>
                                </li>
                                <li>
                                    <p><strong>Arrangement fees: </strong><span>These are fees charged by financial
                                            institutions for setting up a loan or credit facility.<sup><a
                                                    href='#bookmark33' id='bookmarkback33'>[33]</a></sup> For example,
                                            if a company arranges an AED 50 million credit line with a bank, and the
                                            bank charges a 0.5% arrangement fee, the company incurs an AED 250,000 fee.
                                            This fee is treated as Interest expenditure for the company.</span></p>
                                </li>
                                <li>
                                    <p><strong>Commitment fees: </strong><span>These fees are charged by lenders for
                                            agreeing to provide a loan or credit facility, even if the borrower does not
                                            draw down the loan.<sup><a href='#bookmark34'
                                                    id='bookmarkback34'>[34]</a></sup> For example, if a company has an
                                            undrawn credit facility of AED 20 million with a commitment fee of 0.25% per
                                            annum, it will incur an AED 50,000 annual fee, which is treated as Interest
                                            expenditure.</span></p>
                                </li>
                            </ul>
                            <p>Any other fees that are similar in nature to the above-mentioned fees should also be
                                treated as &ldquo;amounts incurred in connection with raising finance&rdquo; and, hence,
                                Interest.<sup><a href='#bookmark35' id='bookmark35'>[35]</a></sup> Examples include:</p>
                            <ul>
                                <li>
                                    <p><strong>Underwriting fees: </strong><span>When a company issues bonds or other
                                            debt securities, it may use an underwriter to guarantee a certain price for
                                            the securities to investors. The underwriter may charge a fee for this
                                            service, which is an amount incurred in connection with raising finance. For
                                            example, if a company issues bonds (a debt instrument) worth AED 50 million
                                            and the underwriting fee is 2%, the company would incur an AED 1 million fee
                                            which should be treated as Interest expenditure.</span></p>
                                </li>
                                <li>
                                    <p><strong>Legal and professional fees: </strong><span>The costs of legal advice,
                                            accounting services, and other professional fees directly related to the
                                            structuring and negotiation of financing are also considered amounts
                                            incurred in connection with raising finance. For example, if a company
                                            incurs AED 200,000 in legal fees to document and close a syndicated loan
                                            transaction, these fees should be treated as Interest expenditure.</span>
                                    </p>
                                </li>
                                <li>
                                    <p><strong>Early or pre-payment of loan: </strong><span>Pre-payment charges,
                                            pre-payment penalties or break costs are fees that lenders charge to
                                            compensate for the loss of expected income due to a loan being paid off
                                            before its maturity date. The penalty is directly related to the cost of
                                            borrowing and arises from the financing agreement between the borrower and
                                            the lender and hence is an amount incurred in connection with raising
                                            finance. Such pre-payment charges, if incurred by a company, should be
                                            treated as Interest expenditure.</span></p>
                                </li>
                            </ul>
                            <section>
                                <article id='bookmarkSection3.10.1'>
                                    <h3>Derivative contracts</h3>
                                    <p>Derivative contracts are not specifically defined but include financial contracts
                                        between two or more parties that derive their value from one or more underlying
                                        asset. They include forward contracts, futures contract, options, and swap
                                        agreements. These contracts may be used as a way of raising finance but they are
                                        more typically used to hedge risks connected with the raising of finance. For
                                        example, a company that has taken a variable interest rate loan could
                                        effectively fix the interest rate through an interest rate swap agreement.</p>
                                    <p>Any interest component of a derivative contract is considered to be Interest.
                                        <sup><a href='#bookmark36' id='bookmarkback36'>[36]</a></sup> The
                                        &ldquo;interest component&rdquo; would follow the interest or other financing
                                        amount or gain or loss taken to the income statement under IFRS (or IFRS for
                                        SMEs).
                                    </p>
                                    <p>Costs directly related to entering into derivative contracts, such as fees, are
                                        also treated as Interest expenditure.</p>
                                </article>
                            </section>
                        </article>
                        <article id='bookmarkSection3.11'>
                            <h3>Disposal, sale or transfer</h3>
                            <p>Where a debt instrument is disposed, sold or transferred, it may result in a gain or
                                loss. Such gain or loss is considered as Interest to the extent it is treated as
                                interest or other financing amount under IFRS (or IFRS for SMEs).</p>
                            <p>For example, a company that has invested in interest-bearing corporate bonds decides to
                                sell these bonds before they mature. It realises a loss and records all of this as a
                                loss on disposal of financial assets (not interest expense). Accordingly, no element of
                                this loss is treated as Interest. However, that loss is included in Accounting Income
                                and, therefore, brought into the Taxable Income calculation.<sup><a href='#bookmark37'
                                        id='bookmarkback37'>[37]</a></sup></p>
                            <p>Another example would be where a real estate company sells a property for an agreed sale
                                price of AED 1 million. Instead of the buyer paying for the property in one lump sum,
                                however, the company agrees that the buyer can pay for the property in six instalment
                                payments of AED 200,000 over two years. The total amount received is, therefore, AED 1.2
                                million. The additional AED 200,000 over the sale price is recorded as Interest income
                                for the real estate company. Each instalment payment would have an Interest element of
                                AED 33,333 (being AED 200,000 / 6).</p>
                        </article>
                    </section>
                </article>
                <article id='bookmarkSection4'>
                    <h3>Deductible Interest expenditure</h3>
                    <section>
                        <article id='bookmarkSection4.1'>
                            <h3>Overview</h3>
                            <p>As stated above in <a href='#bookmarkSection3.1'>Section 3.1</a>, deductibility of
                                Interest is subject to various Corporate Tax rules. These Corporate Tax rules should be
                                applied in the following order:</p>
                            <ol>
                                <li>
                                    <p>General principles of deductibility of expenditure (<a
                                            href='#bookmarkSection4.2'>Section 4.2</a>),</p>
                                </li>
                                <li>
                                    <p>Arm’s Length Principle (<a href='#bookmarkSection4.3'>Section 4.3</a>),</p>
                                </li>
                                <li>
                                    <p>Specific Interest Deduction Limitation Rule (<a href='#bookmarkSection5'>Section
                                            5</a>), and</p>
                                </li>
                                <li>
                                    <p>General Interest Deduction Limitation Rule (<a href='#bookmarkSection6'>Section
                                            6</a>).</p>
                                </li>
                            </ol>
                            <p>The General Interest Deduction Limitation Rule must be applied after all the Corporate
                                Tax rules, apart from the Tax Loss Provisions.<sup><a href='#bookmark38'
                                        id='bookmarkback38'>[38]</a></sup></p>
                            <p>Where adjustments are made to accounting or tax figures, for example, due to the General
                                Anti-abuse Rule<sup><a href='#bookmark39' id='bookmarkback39'>[39]</a></sup> applying or
                                following a Tax Audit,<sup><a href='#bookmark40' id='bookmarkback40'>[40]</a></sup> the
                                calculations in respect of the General Interest Deduction Limitation Rule may need to be
                                revised.</p>
                        </article>
                        <article id='bookmarkSection4.2'>
                            <h3>General principles of deductibility of expenditure</h3>
                            <p>In general, Business expenditure is allowed as a deduction while calculating the Taxable
                                Income of a Taxable Person if it is incurred wholly and exclusively for the purposes of
                                the Taxable Person's Business and is not capital in nature. Such expenses are deductible
                                in the Tax Period in which they are incurred. What constitutes &ldquo;expenditure&rdquo;
                                generally follows the accounting classification and measurement per the Financial
                                Statements that have been prepared in accordance with IFRS (or IFRS for SMEs) and,
                                therefore, the Accounting Income figure within the income statement is the starting
                                point when calculating Taxable Income.<sup><a href='#bookmark41'
                                        id='bookmarkback41'>[41]</a></sup></p>
                            <p>However, for Corporate Tax purposes, additional rules apply such that expenditure that is
                                recognised as such for accounting purposes may not be deductible when calculating
                                Taxable Income (see <a href='#bookmarkSection4.2.1'>Section 4.2.1</a>). Such rules also
                                apply to Interest expenditure.</p>
                            <p>There are specific adjustments to be made items of expenditure in line with the following
                                rules:<sup><a href='#bookmark42' id='bookmarkback42'>[42]</a></sup></p>
                            <ul>
                                <li>
                                    <p>Expenditure not incurred for the purposes of the Taxable Person’s Business (see
                                        <a href='#bookmarkSection4.2.1'>Section 4.2.1</a>),
                                    </p>
                                </li>
                                <li>
                                    <p>Expenditure incurred in deriving Exempt Income, other than certain Interest
                                        expenditure (see <a href='#bookmarkSection4.2.1'>Section 4.2.1</a>), and</p>
                                </li>
                                <li>
                                    <p>Losses that are not connected with or arising out of the Taxable Person’s
                                        Business.</p>
                                </li>
                            </ul>
                            <section>
                                <article id='bookmarkSection4.2.1'>
                                    <h3>Expenditure not incurred for the purposes of the Taxable Person’s Business</h3>
                                    <p>Business expenditure must be incurred &ldquo;wholly and exclusively&rdquo; for
                                        the purposes of the Taxable Person's Business. Therefore, regardless of the
                                        accounting, if the expenditure is not wholly and exclusively for the purposes of
                                        the Taxable Person's Business or is incurred for more than one purpose, all or
                                        part of the expenditure must be added back to the Accounting Income figure when
                                        calculating Taxable Income.<sup><a href='#bookmark43'
                                                id='bookmarkback43'>[43]</a></sup></p>
                                    <p>For instance, if a company takes out a loan and the money is used to buy a
                                        private residential property that is used by a director and his family, and the
                                        property is not used for Business purposes, any Interest related to that loan is
                                        not deductible as Interest, even though it may be included in the income
                                        statement of the company.</p>
                                    <p>If expenditure is incurred for more than one purpose, the portion of the
                                        expenditure that can be deducted must be determined as follows:<sup><a
                                                href='#bookmark44' id='bookmarkback44'>[44]</a></sup></p>
                                    <ul>
                                        <li>
                                            <p>Any identifiable part or proportion of the expenditure incurred wholly
                                                and exclusively for the purposes of deriving Taxable Income is
                                                deductible, and</p>
                                        </li>
                                        <li>
                                            <p>An appropriate proportion of any un-identifiable part or proportion of
                                                the expenditure incurred for the purposes of deriving Taxable Income
                                                should be deductible.</p>
                                        </li>
                                    </ul>
                                    <p>Any proportion should be determined on a fair and reasonable basis, having regard
                                        to the relevant facts and circumstances of the Taxable Person’s Business. What
                                        is &ldquo;fair and reasonable&rdquo; will depend on the specific circumstances
                                        and facts, and there may be more than one method of apportioning expenses which
                                        is fair and reasonable.</p>
                                </article>
                                <article id='bookmarkSection4.2.2'>
                                    <h3>Expenditure that is capital in nature</h3>
                                    <p>The Business expenditure must also not be &ldquo;capital in nature&rdquo;.<sup><a
                                                href='#bookmark45' id='bookmarkback45'>[45]</a></sup> What is
                                        &ldquo;capital&rdquo; generally follows the accounting classification in the
                                        Financial Statements (that have been prepared in accordance with IFRS or IFRS
                                        for SMEs).</p>
                                    <p>For example, purchasing a long-term asset like machinery would be a capital
                                        expense, but paying for routine maintenance to keep the machinery running would
                                        be a revenue expense.</p>
                                </article>
                                <article id='bookmarkSection4.2.3'>
                                    <h3>Interest expenditure related to deriving Exempt Income</h3>
                                    <p>The general rule is that expenditure associated with deriving Exempt Income is
                                        not deductible.<sup><a href='#bookmark46' id='bookmarkback46'>[46]</a></sup>
                                        However, there is an exception for Interest expenditure, which may still be
                                        deductible if it meets the criteria set by the General and Specific Interest
                                        Deduction Limitation Rules.<sup><a href='#bookmark47'
                                                id='bookmarkback47'>[47]</a></sup> This exception applies specifically
                                        to Interest expenditure incurred in deriving any Exempt Income from Dividends
                                        and other profit distributions received from a juridical person that is a
                                        Resident Person or from a Participating Interest in a foreign juridical person,
                                        other income from a Participating Interest, income of a Foreign Permanent
                                        Establishment, and income derived by a Non-Resident Person from operating
                                        aircraft or ships in international transportation.<sup><a href='#bookmark48'
                                                id='bookmarkback48'>[48]</a></sup> The tax deductibility of this
                                        Interest expenditure remains conditional upon the Interest expenditure meeting
                                        the criteria set by the General and Specific Interest Deduction Limitation
                                        Rules.<sup><a href='#bookmark49' id='bookmarkback49'>[49]</a></sup></p>
                                    <p>For example, a company that borrows money to invest in a venture that generates
                                        Exempt Income from Dividends and other profit distributions would be entitled to
                                        deduct the Interest expenditure on those borrowings, subject to the General
                                        Interest Deduction Limitation Rule.</p>
                                    <p>Interest expenditure incurred in relation to the acquisition and subsequent
                                        holding of a Participating Interest (that can result in Exempt Income) is
                                        allowed as a deduction subject to the General and Specific Interest Deduction
                                        Limitation Rules.<sup><a href='#bookmark50' id='bookmarkback50'>[50]</a></sup>
                                    </p>
                                    <p>If the loan used to finance the acquisition and subsequent holding of a
                                        Participating Interest is from a Related Party, it may be subject to the
                                        Specific Interest Deduction Limitation Rule in certain circumstances that could
                                        lead to a full disallowance of the Interest expenditure<sup><a
                                                href='#bookmark51' id='bookmarkback51'>[51]</a></sup> (see <a
                                            href='#bookmarkSection5'>Section 5</a>).</p>
                                </article>
                            </section>
                        </article>
                        <article id='bookmarkSection4.3'>
                            <h3>Interest expenditure due to Connected Persons and/or Related Parties</h3>
                            <p>Any expenditure incurred in relation to transactions or arrangements with Connected
                                Persons is deductible only to the extent that the payment or benefit corresponds with
                                the Market Value of the service or benefit provided by the Connected Persons, and where
                                the payment or benefit is incurred wholly and exclusively for the purposes of the
                                Taxable Person’s Business.<sup><a href='#bookmark52' id='bookmarkback52'>[52]</a></sup>
                                Similarly, transactions or arrangements with Related Parties must adhere to the arm's
                                length standard.<sup><a href='#bookmark53' id='bookmarkback53'>[53]</a></sup></p>
                            <p>Where the Interest payable to a Related Party or Connected Person is adjusted to meet the
                                arm's length / Market Value requirement, the amount of Interest after the adjustment is
                                taken into account for the purposes of the Interest limitation rules (unless the
                                Interest is already disallowable under another provision of the Corporate Tax
                                Law).<sup><a href='#bookmark54' id='bookmarkback54'>[54]</a></sup></p>
                            <div class='example'>
                                <p><strong>Example 16: Interest rate more than Market Value</strong></p>
                                <p>Company T borrows AED 1 million from Ms U, who is a shareholder and director of
                                    Company T and, therefore, a Connected Person. Both Company T and Ms U are tax
                                    residents of the UAE.</p>
                                <p>Ms U charges Company T an interest rate of 8% on the loan even though the market
                                    interest rate for similar loans is 5%.</p>
                                <p>Interest paid at 8%: AED 1 million x 8% = AED 80,000</p>
                                <p>Arm's length Interest at 5%: AED 1 million x 5% = AED 50,000</p>
                                <p>Adjustment: AED 50,000 - AED 80,000 = AED 30,000</p>
                                <p>Even though the Financial Statements of Company T will account for Interest expense
                                    of AED 80,000, non-arm’s length Interest of AED 30,000 shall be disallowed. The
                                    balance of Interest of AED 50,000 shall be deductible subject to the General
                                    Interest Deduction Limitation Rule.<sup><a href='#bookmark55'
                                            id='bookmarkback55'>[55]</a></sup></p>
                            </div>
                        </article>
                    </section>
                </article>
                <article id='bookmarkSection5'>
                    <h3>Specific Interest Deduction Limitation Rule</h3>
                    <section>
                        <article id='bookmarkSection5.1'>
                            <h3>Overview</h3>
                            <p>The Specific Interest Deduction Limitation Rule is a targeted provision designed to
                                prevent the erosion of the Corporate Tax base. This could be achieved through the use of
                                certain financial transactions between Taxable Persons and their Related Parties. For
                                example, transactions could be carried out for the sole or main purpose of creating
                                deductible Interest expenditure, while the Interest income derived may not be subject to
                                tax.<sup><a href='#bookmark56' id='bookmarkback56'>[56]</a></sup></p>
                            <p>This Specific Interest Deduction Limitation Rule applies after the application of the
                                general principles of deductibility for Interest expenditure (see <b>Section Error!
                                    Reference source not found.</b><sup id='linktogtl'><a href='#gtlnotes1'
                                        id='footnoteback1'>[G1]</a></sup>), including the application of the Arm’s
                                Length Principle<sup><a href='#bookmark57' id='bookmarkback57'>[57]</a></sup> but before
                                the General Interest Deduction Limitation Rule (see <a href='#bookmarkSection6'>Section
                                    6</a>).</p>
                        </article>
                        <article id='bookmarkSection5.2'>
                            <h3>Non-deductibility of Interest expenditure</h3>
                            <p>The Specific Interest Deduction Limitation Rule disallows Interest expenditure incurred
                                on a loan obtained, directly or indirectly, from a Related Party in respect of any of
                                the following transactions:<sup><a href='#bookmark58' id='bookmarkback58'>[58]</a></sup>
                            </p>
                            <ul>
                                <li>
                                    <p>Dividend or profit distribution to a Related Party,</p>
                                </li>
                                <li>
                                    <p>Redemption, repurchase, reduction or return of share capital to a Related Party,
                                    </p>
                                </li>
                                <li>
                                    <p>Capital contribution to a Related Party, and</p>
                                </li>
                                <li>
                                    <p>Acquisition of ownership interest in a Person who is or becomes a Related Party
                                        after the acquisition.</p>
                                </li>
                            </ul>
                            <p>The reference to &ldquo;Interest expenditure incurred on a loan&rdquo; is interpreted
                                widely to include any kind of borrowings, line of credit, bonds or transactions akin to
                                a loan.</p>
                            <p>However, this is subject to a &ldquo;main purpose test&rdquo;.</p>
                        </article>
                        <article id='bookmarkSection5.3'>
                            <h3>Main purpose test</h3>
                            <p>The Specific Interest Deduction Limitation Rule is not applicable if the main purpose of
                                obtaining the loan and carrying out one of the transactions listed at <a
                                    href='#bookmarkSection5.2'>Section 5.2</a> is not to obtain a Corporate Tax
                                advantage.<sup><a href='#bookmark59' id='bookmarkback59'>[59]</a></sup></p>
                            <p>A &ldquo;Corporate Tax advantage&rdquo; is defined as including, but is not limited to
                                the following:</p>
                            <ul>
                                <li>
                                    <p>A refund or an increased refund of Corporate Tax,</p>
                                </li>
                                <li>
                                    <p>Avoidance or reduction of Corporate Tax Payable,</p>
                                </li>
                                <li>
                                    <p>Deferral of a payment of Corporate Tax or advancement of a refund of Corporate
                                        Tax, or</p>
                                </li>
                                <li>
                                    <p>Avoidance of an obligation to deduct or account for Corporate Tax.<sup><a
                                                href='#bookmark60' id='bookmarkback60'>[60]</a></sup></p>
                                </li>
                            </ul>
                            <p>Whether or not the main purpose of a obtaining a loan and carrying out a transaction
                                referred to under <a href='#bookmarkSection5.2'>Section 5.2</a> is to gain a Corporate
                                Tax advantage is based on the specific facts and circumstances. The onus is on the
                                Taxable Person to demonstrate that the main purpose is not to gain a Corporate Tax
                                advantage.</p>
                            <div class='example'>
                                <p><strong>Example 17: Interest subject to Specific Interest Deduction Limitation
                                        Rule</strong></p>
                                <p>Company M (incorporated and tax resident in the UAE) is wholly owned by its parent
                                    company, Company O, incorporated and tax resident in a foreign country that does not
                                    have a Corporate Tax regime.</p>
                                <p>Company M borrows AED 10 million at an arm’s length interest rate of 5% from Company
                                    O. It uses the funds to repurchase some of its shares from Company O, returning some
                                    of its share capital.</p>
                                <p>The annual interest rate on the loan is 5%, resulting in an annual Interest expense
                                    of AED 500,000 for Company M.</p>
                                <p>Company M is unable to demonstrate that the main purpose of obtaining the loan and
                                    using the funds to return share capital to Company O is not to gain a Corporate Tax
                                    advantage and, therefore, no deduction is allowed for the annual Interest
                                    expenditure of AED 500,000 when Company M calculates its Taxable Income.</p>
                            </div>
                            <section>
                                <article id='bookmarkSection5.3.1'>
                                    <h3>Presumption of no Corporate Tax advantage for Non-Residents</h3>
                                    <p>No Corporate Tax advantage is deemed to arise where the Related Party is subject
                                        to Corporate Tax, or a tax of a similar character to Corporate Tax under the
                                        applicable legislation of a foreign jurisdiction, and at an effective tax rate
                                        of not less than 9% post meeting the arm’s length standard.</p>
                                    <p>If the Interest income is subject to an effective tax rate of less than 9% in the
                                        foreign jurisdiction of the Non-Resident Person (for example, the statutory rate
                                        is less than 9% or the income is exempt or enjoys preferential tax treatment
                                        that results in tax of less than 9%), the presumption will not apply. The
                                        Specific Interest Deduction Limitation Rule may apply, unless the Taxable Person
                                        can demonstrate that the main purpose of the arrangements was not to obtain a
                                        Corporate Tax advantage (see <a href='#bookmarkSection5.2'>Section
                                            5.2</a>).<sup><a href='#bookmark61' id='bookmarkback61'>[61]</a></sup></p>
                                    <div class='example'>
                                        <p><strong>Example 18: Related Party lender subject to effective tax rate of at
                                                least 9%</strong></p>
                                        <p>Company P (incorporated and tax resident in the UAE) wholly owns Company Q,
                                            incorporated and tax resident in country Q, with an effective tax rate of
                                            9%.</p>
                                        <p>Company P borrows AED 20 million from Company Q at an annual interest rate of
                                            7% when the arm’s length interest rate is 5%. It uses the loan to acquire
                                            shares in Company R, which becomes a Related Party of Company P after the
                                            acquisition.</p>
                                        <p>Since the interest rate on the loan is not at arm’s length, the Interest
                                            expenditure in respect of the loan for Company P must first be adjusted for
                                            Corporate Tax purposes to the arm’s length rate, so from AED 1.4 million (20
                                            million* 7%) to AED 1 million (20 million*5%). AED 400,000 is, therefore,
                                            disallowed Interest expenditure. This amount cannot be carried forward
                                            because it is not a disallowance under the General Interest Deduction
                                            Limitation Rule.</p>
                                        <p>When applying the Specific Interest Deduction Limitation Rule, no Corporate
                                            Tax advantage is deemed to arise on the basis that Company Q is subject to
                                            tax at an effective rate of not less than 9% and, therefore, the AED 1
                                            million of Interest expenditure is not further disallowed.</p>
                                        <p>However, Company P will still need to consider whether the General Interest
                                            Deduction Limitation Rule would apply to disallow any of the AED 1 million
                                            Interest expenditure.</p>
                                    </div>
                                    <div class='example'>
                                        <p><strong>Example 19: Related Party lender subject to effective tax rate below
                                                9%</strong></p>
                                        <p>Company S (incorporated and tax resident in the UAE) is 50% owned by Company
                                            U (incorporated and tax resident in the UAE) and 50% owned by Company T
                                            (incorporated and tax resident in Country T).</p>
                                        <p>Country T has a Corporate Tax rate of 9%. However, it has a specific tax
                                            exemption for interest income received from foreign entities.</p>
                                        <p>Company S takes out a loan of AED 30 million at an arm’s length annual
                                            interest rate of 6% from Company T. It plans to use the funds to pay a
                                            dividend to its shareholders, Company T and Company U.</p>
                                        <p>Since the interest income of AED 1.8 million that Company T receives from
                                            Company S is not subject to any tax in Country T, Company S needs to assess
                                            whether the main purpose of obtaining the loan and paying the dividend is to
                                            gain a Corporate Tax advantage. If Company S cannot demonstrate that it is
                                            not to gain a Corporate Tax advantage, then the AED 1.8 million of Interest
                                            expenditure is disallowed under the Specific Interest Deduction Limitation
                                            Rule when Company S calculates its Taxable Income.</p>
                                        <p>If Company S can demonstrate that there is no main purpose of gaining a
                                            Corporate Tax, Company S will then need to bring in the Interest expenditure
                                            when applying the General Interest Deduction Limitation Rule.</p>
                                    </div>
                                </article>
                            </section>
                        </article>
                    </section>
                </article>
                <article id='bookmarkSection6'>
                    <h3>General Interest Deduction Limitation Rule</h3>
                    <section>
                        <article id='bookmarkSection6.1'>
                            <h3>Overview</h3>
                            <p>The General Interest Deduction Limitation Rule under the Corporate Tax Law is intended to
                                prevent abuse of debt financing to reduce the Taxable Income base.</p>
                        </article>
                        <article id='bookmarkSection6.2'>
                            <h3>The General Interest Deduction Limitation Rule</h3>
                            <p>A Taxable Person’s Net Interest Expenditure is subject to the General Interest Deduction
                                Limitation Rule. The Net Interest Expenditure is the difference between the amount of
                                Interest expenditure incurred (including any carried forward Net Interest Expenditure)
                                and the Interest income derived during a Tax Period.<sup><a href='#bookmark62'
                                        id='bookmarkback62'>[62]</a></sup></p>
                            <p>When the Net Interest Expenditure exceeds AED 12 million in a Tax Period, the amount of
                                deductible Net Interest Expenditure is the greater of:</p>
                            <ul>
                                <li>
                                    <p>30% of EBITDA (earnings before the deduction of Interest, tax, depreciation and
                                        amortisation) for a Tax Period, calculated as the Taxable Income for the Tax
                                        Period with adjustments for (referred to as &ldquo;adjusted
                                        EBITDA&rdquo;):<sup><a href='#bookmark63' id='bookmarkback63'>[63]</a></sup></p>
                                    <ul class='dashed'>
                                        <li>
                                            <p>Net Interest Expenditure for the relevant Tax Period,</p>
                                        </li>
                                        <li>
                                            <p>Depreciation and amortisation expenditure taken into account in
                                                determining the Taxable Income for the relevant Tax Period,</p>
                                        </li>
                                        <li>
                                            <p>Net Interest expenditure relating to historical financial assets or
                                                liabilities held prior to 9 December 2022, and</p>
                                        </li>
                                        <li>
                                            <p>Net Interest expenditure relating to Qualifying Infrastructure Projects.
                                            </p>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <p>Or the de minimis threshold of AED 12 million.<sup><a href='#bookmark64'
                                                id='bookmarkback64'>[64]</a></sup></p>
                                </li>
                            </ul>
                            <p>If the relevant Tax Period is more than or less than 12 months, the de minimis threshold
                                of AED 12 million is adjusted in proportion to the length of the Tax Period.</p>
                            <p>Where the Net Interest Expenditure is less than the higher of 30% of adjusted EBITDA and
                                AED 12 million (as adjusted for a Tax Period of more than or less than 12 months), no
                                adjustment is required under the General Interest Deduction Limitation Rule: the Net
                                Interest Expenditure for the relevant Tax Period will be deductible.<sup><a
                                        href='#bookmark65' id='bookmarkback65'>[65]</a></sup></p>
                            <p>Any Net Interest Expenditure disallowed in a Tax Period by the General Interest Deduction
                                Limitation Rule can be carried forward and utilised in the subsequent 10 Tax Periods in
                                the order in which it was incurred, under the &ldquo;first in, first out&rdquo;
                                principle. This is subject to meeting the conditions of the General Interest Deduction
                                Limitation Rule in the subsequent Tax Period.<sup><a href='#bookmark66'
                                        id='bookmarkback66'>[66]</a></sup></p>
                            <p>The carried forward Net Interest Expenditure cannot be transferred to or utilised by any
                                other Taxable Person.</p>
                            <p>Where a Subsidiary with carried forward Net Interest Expenditure joins a Tax Group, the
                                carried forward Net Interest Expenditure can only be utilised against the Taxable Income
                                of the Tax Group that is attributable to the Subsidiary (and not the entire Taxable
                                Income of the Tax Group).</p>
                            <p>To determine the deductible and non-deductible Net Interest Expenditure, the following
                                components need to be calculated:</p>
                            <ul>
                                <li>
                                    <p>Net Interest Expenditure, and</p>
                                </li>
                                <li>
                                    <p>30% of adjusted EBITDA.</p>
                                </li>
                            </ul>
                        </article>
                        <article id='bookmarkSection6.3'>
                            <h3>Calculation of Net Interest Expenditure</h3>
                            <p>Net Interest Expenditure is the difference between the amount of Interest expenditure
                                incurred (including any carried forward Net Interest Expenditure) and the Interest
                                income. Net Interest Expenditure includes all the components of Interest discussed in <a
                                    href='#bookmarkSection3'>Section 3</a>.</p>
                            <p>However, the following will not be included when calculating the Net Interest
                                Expenditure:</p>
                            <ul>
                                <li>
                                    <p>Interest expenditure that is disallowed under any other provisions of the
                                        Corporate Tax Law,<sup><a href='#bookmark67' id='bookmarkback67'>[67]</a></sup>
                                        for example, interest paid to Related Parties that exceeds a non-arm's length
                                        amounts,<sup><a href='#bookmark68' id='bookmarkback68'>[68]</a></sup> the
                                        Specific Interest Deduction Limitation Rule<sup><a href='#bookmark69'
                                                id='bookmarkback69'>[69]</a></sup> (see <a
                                            href='#bookmarkSection5'>Section 5</a>),</p>
                                </li>
                                <li>
                                    <p>Interest income or expenditure related to grandfathered debts, i.e. prior to 9
                                        December 2022,<sup><a href='#bookmark70' id='bookmarkback70'>[70]</a></sup> (see
                                        <a href='#bookmarkSection8.4'>Section 8.4</a>) and
                                    </p>
                                </li>
                                <li>
                                    <p>Interest income or expenditure in relation to Qualifying Infrastructure Projects
                                        (see <a href='#bookmarkSection8.5'>Section 8.5</a>).<sup><a href='#bookmark71'
                                                id='bookmarkback71'>[71]</a></sup></p>
                                </li>
                                <li>
                                    <p>Any income or expenditure of the member of the Tax Group who is a Bank or
                                        Insurance Provider, shall be disregarded while calculating the Net Interest
                                        Expenditure of the Tax Group (see <a href='#bookmarkSection8.2'>Section
                                            8.2</a>).<sup><a href='#bookmark72' id='bookmarkback72'>[72]</a></sup></p>
                                </li>
                            </ul>
                            <p>An illustrative list of the adjustments that may be relevant in calculating the Net
                                Interest Expenditure is as follows:</p>
                            <table>
                                <tr>
                                    <th>Adjust</th>
                                    <th>Item</th>
                                    <th>Amounts (AED)</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        <p>Net interest expenditure as per Financial Statements (i.e. Interest
                                            expenditure less Interest income)</p>
                                    </td>
                                    <td>
                                        <p class='center'><b>xxx</b></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Add:</p>
                                    </td>
                                    <td>
                                        <p>Items not included as interest for accounting purposes but treated as
                                            Interest expenditure.</p>
                                    </td>
                                    <td>
                                        <p class='center'><b>xxx</b></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Less:</p>
                                    </td>
                                    <td>
                                        <p>Items not included as interest for accounting purposes but treated as
                                            Interest income.</p>
                                    </td>
                                    <td>
                                        <p class='center'><b>(xxx)</b></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Less:</p>
                                    </td>
                                    <td>
                                        <p>Interest expenditure that is disallowed under any other provisions of the
                                            Corporate Tax Law including any disallowed amounts under the Arm’s Length
                                            Principle<sup><a href='#bookmark73' id='bookmarkback73'>[73]</a></sup>and
                                            Specific Interest Deduction Limitation Rule<sup><a href='#bookmark74'
                                                    id='bookmarkback74'>[74]</a></sup>.</p>
                                    </td>
                                    <td>
                                        <p class='center'><b>(xxx)</b></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Less:</p>
                                    </td>
                                    <td>
                                        <p>Net Interest Expenditure related to grandfathered debts<sup><a
                                                    href='#bookmark75' id='bookmarkback75'>[75]</a></sup></p>
                                    </td>
                                    <td>
                                        <p class='center'><b>(xxx)</b></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Less:</p>
                                    </td>
                                    <td>
                                        <p>Net Interest Expenditure related to Qualifying Infrastructure Projects<sup><a
                                                    href='#bookmark76' id='bookmarkback76'>[76]</a></sup></p>
                                    </td>
                                    <td>
                                        <p class='center'><b>(xxx)</b></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p><b>Subtotal:</b></p>
                                    </td>
                                    <td>
                                        <p><b>Net Interest Expenditure for the relevant Tax</b></p>
                                        <p><b>Period (before carry forward Net Interest Expenditure amounts from
                                                previous Tax Periods)</b></p>
                                    </td>
                                    <td>
                                        <p class='center'><b>XXX</b></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Add:</p>
                                    </td>
                                    <td>
                                        <p>Net Interest Expenditure carried forward from previous 10 Tax Periods</p>
                                    </td>
                                    <td>
                                        <p class='center'><b>xxx</b></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan='2'>
                                        <p><b>Total: Net Interest Expenditure for the relevant Tax Period</b></p>
                                    </td>
                                    <td>
                                        <p class='center'><b>XXX</b></p>
                                    </td>
                                </tr>
                            </table>
                        </article>
                        <article id='bookmarkSection6.4'>
                            <h3>Calculation of 30% of adjusted EBITDA</h3>
                            <p>The starting point for &ldquo;adjusted EBITDA&rdquo; for a Tax Period is the Taxable
                                Income calculated in accordance with the general rules for determining Taxable
                                Income.<sup><a href='#bookmark77' id='bookmarkback77'>[77]</a></sup> All tax adjustments
                                are required to be made to Accounting Income except for adjustments in relation to the
                                General Interest Deduction Limitation Rule itself and Tax Loss relief provisions.</p>
                            <p>An adjustment is then required for the following items for the relevant Tax
                                Period:<sup><a href='#bookmark78' id='bookmarkback78'>[78]</a></sup></p>
                            <ul>
                                <li>
                                    <p>Depreciation and amortisation expenditure taken into account in determining the
                                        Taxable Income for the relevant Tax Period,</p>
                                </li>
                                <li>
                                    <p>Net Interest Expenditure for the relevant Tax Period i.e. Interest expenditure
                                        less Interest income of the relevant Tax Period (before carried forward Net
                                        Interest Expenditure amounts from previous Tax Periods),</p>
                                </li>
                                <li>
                                    <p>Any Interest income or expenditure relating to historical financial assets or
                                        liabilities held prior to 9 December 2022, and</p>
                                </li>
                                <li>
                                    <p>Any Interest income or expenditure in relation to Qualifying Infrastructure
                                        Projects.</p>
                                </li>
                            </ul>
                            <p>Any income or expenditure of the member of the Tax Group who is a Bank or Insurance
                                Provider, shall be disregarded while calculating the EBIDTA of the Tax Group.<sup><a
                                        href='#bookmark79' id='bookmarkback79'>[79]</a></sup></p>
                            <p>If the adjusted EBITDA results is a negative amount, then the adjusted EBITDA will be AED
                                0.<sup><a href='#bookmark80' id='bookmarkback80'>[80]</a></sup></p>
                            <p>An illustrative list of the adjustments that may be relevant in calculating the adjusted
                                EBITDA is as follows:</p>
                            <table>
                                <tr>
                                    <th>Adjust</th>
                                    <th>Item</th>
                                    <th>Amounts (AED)</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        <p>Accounting Income/(loss)</p>
                                    </td>
                                    <td>
                                        <p class='center'><b>xxx/(xxx)</b></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>+/-</p>
                                    </td>
                                    <td>
                                        <p>All adjustments as per <a
                                                href='/articles/uae-cit-fdl-47-of-2022-article-20'>Article 20</a> of the
                                            Corporate Tax Law, except General Interest Deduction Limitation Rule</p>
                                        <p>and Tax Loss provisions</p>
                                    </td>
                                    <td>
                                        <p class='center'><b>xxx/(xxx)</b></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>+</p>
                                    </td>
                                    <td>
                                        <p>Depreciation expenditure (Note below)</p>
                                    </td>
                                    <td>
                                        <p class='center'><b>xxx</b></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>+</p>
                                    </td>
                                    <td>
                                        <p>Amortisation expenditure</p>
                                    </td>
                                    <td>
                                        <p class='center'><b>xxx</b></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>+</p>
                                    </td>
                                    <td>
                                        <p>Net Interest Expenditure for the relevant Tax Period (before carry forward
                                            Net Interest Expenditure amounts</p>
                                        <p>from previous Tax Periods)</p>
                                    </td>
                                    <td>
                                        <p class='center'><b>xxx</b></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>+</p>
                                    </td>
                                    <td>
                                        <p>Net Interest Expenditure relating to grandfathered debt</p>
                                        <p>instruments</p>
                                    </td>
                                    <td>
                                        <p class='center'><b>xxx</b></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>+</p>
                                    </td>
                                    <td>
                                        <p>Net Interest Expenditure relating to Qualifying</p>
                                        <p>Infrastructure Projects</p>
                                    </td>
                                    <td>
                                        <p class='center'><b>xxx</b></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan='2'>
                                        <p>Total: adjusted EBITDA</p>
                                    </td>
                                    <td>
                                        <p class='center'><b>xxx</b></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan='2'>
                                        <p>30% of adjusted EBITDA</p>
                                    </td>
                                    <td>
                                        <p class='center'><b>xx</b></p>
                                    </td>
                                </tr>
                            </table>
                            <p><b>Note:</b> Where a Taxable Person has capitalised interest, any interest element
                                included in the depreciation charge must be removed before the deprecation charge is
                                added back to Accounting Income for the purposes of calculating adjusted EBITDA. See
                                Examples 13 to 15 at <a href='#bookmarkSection3.7'>Section 3.7</a>.</p>
                            <div class='example'>
                                <p><strong>Example 20: Calculation of deductible Interest under General Interest
                                        Deduction Limitation Rule</strong></p>
                                <p>Company V (incorporated and tax resident in the UAE) is a trading company. It
                                    prepares Financial Statements on an Accrual Basis of Accounting, and its Tax Period
                                    is the Gregorian calendar year.</p>
                                <p>During its 2025 Tax Period, Company V obtained a loan to acquire a 50% shareholding
                                    in Company S (incorporated and tax resident in Country S). Participation
                                    Exemption<sup><a href='#bookmark81' id='bookmarkback81'>[81]</a></sup> applies and
                                    therefore the dividend income received from Company S is Exempt Income.<sup><a
                                            href='#bookmark82' id='bookmarkback82'>[82]</a></sup></p>
                                <p>Company V also received Interest income arising on loan agreements with third
                                    parties, for which the terms were agreed in 2024.</p>
                                <p>For its 2025 Tax Period, Company V has no brought forward Net Interest Expenditure.
                                </p>
                                <p>An extract of the figures from the standalone Financial Statements of Company V for
                                    2025 is as follows:</p>
                                <table>
                                    <tr>
                                        <td rowspan='2'></td>
                                        <th>2025</th>
                                    </tr>
                                    <tr>
                                        <th>Amounts in AED</th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p><b>Revenue:</b></p>
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Trading income</p>
                                        </td>
                                        <td>
                                            <p class='center'>130,000,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Dividend from Company S</p>
                                        </td>
                                        <td>
                                            <p class='center'>20,000,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Interest income arising from trade receivables (trade debtors)</p>
                                        </td>
                                        <td>
                                            <p class='center'>10,000,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Interest income arising from loans to third parties</p>
                                        </td>
                                        <td>
                                            <p class='center'>10,000,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p><b>Total Revenue (A)</b></p>
                                        </td>
                                        <td>
                                            <p class='center'><b>170,000,000</b></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p><b>Less: Expenditure*</b></p>
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Cost of goods sold</p>
                                        </td>
                                        <td>
                                            <p class='center'>29,500,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Salaries and wages</p>
                                        </td>
                                        <td>
                                            <p class='center'>15,000,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>General expenses</p>
                                        </td>
                                        <td>
                                            <p class='center'>7,500,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Depreciation of fixed assets</p>
                                        </td>
                                        <td>
                                            <p class='center'>4,000,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Interest payable on a loan for a share purchase</p>
                                        </td>
                                        <td>
                                            <p class='center'>10,000,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Guarantee fees in relation to the loan for a share purchase</p>
                                        </td>
                                        <td>
                                            <p class='center'>1,000,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Interest payable on a bank loan denominated in Euros (EURO</p>
                                            <p>bank loan)</p>
                                        </td>
                                        <td>
                                            <p class='center'>30,000,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Foreign exchange loss on interest on EURO bank loan</p>
                                        </td>
                                        <td>
                                            <p class='center'>2,500,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Interest payable on trade payables (trade creditors)</p>
                                        </td>
                                        <td>
                                            <p class='center'>22,500,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Interest payable on a personal loan taken out by a director</p>
                                        </td>
                                        <td>
                                            <p class='center'>500,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p><b>Total expenditure (B)</b></p>
                                        </td>
                                        <td>
                                            <p class='center'><b>122,500,000</b></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p><b>Accounting Income before tax (A) – (B)</b></p>
                                        </td>
                                        <td>
                                            <p class='center'><b>47,500,000</b></p>
                                        </td>
                                    </tr>
                                </table><i>* Does not include any expenses incurred for earning exempt income (except
                                    interest).</i>
                                <p><strong>Applicability of the General Interest Deduction Limitation Rule for 2025 Tax
                                        Period</strong></p>
                                <h4>Step 1: Calculation of Net Interest Expenditure</h4>
                                <p>The calculation of Net Interest Expenditure for Company V for the 2025 Tax Period is
                                    as follows:</p>
                                <table>
                                    <tr>
                                        <th>
                                            <p>Net Interest Expenditure</p>
                                        </th>
                                        <th>2025<br>Amounts in AED</th>
                                    </tr>
                                    <tr>
                                        <td colspan='2'>
                                            <p><b>Interest income</b></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Interest income arising from trade receivables (trade debtors)</p>
                                        </td>
                                        <td>
                                            <p class='center'>10,000,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Interest income arising from loans to third parties (Note 1)</p>
                                        </td>
                                        <td>
                                            <p class='center'>10,000,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p><b>Total Interest income (A)</b></p>
                                        </td>
                                        <td>
                                            <p class='center'><b>20,000,000</b></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan='2'>
                                            <p><b>Interest expenditure</b></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Interest payable on a loan for a share purchase</p>
                                        </td>
                                        <td>
                                            <p class='center'>10,000,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Guarantee fees in relation to the loan for a share purchase<sup><a
                                                        href='#bookmark83' id='bookmarkback83'>[83]</a></sup></p>
                                        </td>
                                        <td>
                                            <p class='center'>1,000,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Interest payable on EURO bank loan</p>
                                        </td>
                                        <td>
                                            <p class='center'>30,000,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Foreign exchange loss on interest on EURO bank loan<sup><a
                                                        href='#bookmark84' id='bookmarkback84'>[84]</a></sup></p>
                                        </td>
                                        <td>
                                            <p class='center'>2,500,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Interest payable on trade payables (trade creditors)</p>
                                        </td>
                                        <td>
                                            <p class='center'>22,500,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Personal loan taken out by a director (Note 2)</p>
                                        </td>
                                        <td>
                                            <p class='center'>Nil</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p><b>Total Interest expenditure (B)</b></p>
                                        </td>
                                        <td>
                                            <p class='center'><b>66,000,000</b></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p><b>Net Interest Expenditure for current year (B) – (A)</b></p>
                                        </td>
                                        <td>
                                            <p class='center'><b>46,000,000</b></p>
                                        </td>
                                    </tr>
                                </table>
                                <p><u>Note 1</u>: The interest income is subject to General Interest Deduction
                                    Limitation Rule because the terms of the loans were agreed after 9 December
                                    2022.<sup><a href='#bookmark85' id='bookmarkback85'>[85]</a></sup></p>
                                <p><u>Note 2</u>: The interest expenditure recorded in the Financial Statements in
                                    respect of the personal loan taken out by a director of AED 500,000 is not incurred
                                    wholly and exclusively for the purposes of Company V’s Business and is therefore not
                                    a deductible expense for Corporate Tax purposes.<sup><a href='#bookmark86'
                                            id='bookmarkback86'>[86]</a></sup>It is, therefore, not included in Net
                                    Interest Expenditure.</p>
                                <h4>Step 2: Calculation of 30% adjusted EBITDA</h4>
                                <p>The calculation of adjusted EBITDA for Company V for the 2025 Tax Period is as
                                    follows:</p>
                                <table>
                                    <tr>
                                        <td></td>
                                        <th>
                                            <p>Adjusted EBITDA</p>
                                        </th>
                                        <th>
                                            <p class='center'>2025</p>
                                            <p class='center'>Amounts in AED</p>
                                        </th>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <p><b>Accounting Income before tax</b></p>
                                        </td>
                                        <td>
                                            <p class='center'><b>47,500,000</b></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>-</p>
                                        </td>
                                        <td>
                                            <p>Dividend from Company S subject to Participation Exemption and is
                                                therefore Exempt Income</p>
                                        </td>
                                        <td>
                                            <p class='center'>(20,000,000)</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>+</p>
                                        </td>
                                        <td>
                                            <p>Disallowed expenditure in respect of the personal loan taken out by a
                                                director.</p>
                                        </td>
                                        <td>
                                            <p class='center'>500,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <p><b>Taxable Income before General Interest Deduction Limitation Rule and
                                                    Tax Loss relief</b></p>
                                        </td>
                                        <td>
                                            <p class='center'><b>28,000,000</b></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>+</p>
                                        </td>
                                        <td>
                                            <p>Depreciation of fixed assets</p>
                                        </td>
                                        <td>
                                            <p class='center'>4,000,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>+</p>
                                        </td>
                                        <td>
                                            <p>Net Interest Expenditure</p>
                                        </td>
                                        <td>
                                            <p class='center'>46,000,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <p><b>Adjusted EBITDA</b></p>
                                        </td>
                                        <td>
                                            <p class='center'><b>78,000,000</b></p>
                                        </td>
                                    </tr>
                                </table>
                                <p>30% of adjusted EBITDA is <b>AED 23,400,000 </b>(0.30 * 78,000,000).</p>
                                <h4>Determining deductible and non-deductible Net Interest Expenditure</h4>
                                <p>The deductible Net Interest Expenditure is the greater of:</p>
                                <ul>
                                    <li>
                                        <p>30% of adjusted EBITDA, and</p>
                                    </li>
                                    <li>
                                        <p>the de minimis threshold of AED 12 million.</p>
                                    </li>
                                </ul>
                                <p>In this case, 30% of adjusted EBITDA, being AED 23,400,000, which is higher than AED
                                    12,000,000 is the deductible Net Interest Expenditure.</p>
                                <p>Company V has Net Interest Expenditure to be carried forward to the 2026 Tax Period,
                                    calculated as follows:</p>
                                <table>
                                    <tr>
                                        <td></td>
                                        <th>Amounts in AED</th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Total Net Interest Expenditure for 2025 Tax Period</p>
                                        </td>
                                        <td>
                                            <p class='center'>46,000,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Less: Net Interest Expenditure allowed for 2025 Tax Period</p>
                                        </td>
                                        <td>
                                            <p class='center'>(23,400,000)</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p><b>Net Interest Expenditure to carry forward to 2026 Tax
                                                    Period</b><sup><a href='#bookmark87'
                                                        id='bookmarkback87'>[87]</a></sup></p>
                                        </td>
                                        <td>
                                            <p class='center'><b>22,600,000</b></p>
                                        </td>
                                    </tr>
                                </table>
                                <p>Note that the disallowed amount of Net Interest Expenditure of AED 22,600,000 should
                                    be added back to Company V’s Taxable Income<sup><a href='#bookmark88'
                                            id='bookmarkback88'>[88]</a></sup>calculation when preparing Company V’s Tax
                                    Return for 2025 Tax Period.</p>
                            </div>
                            <div class='example'>
                                <p><strong>Example 21: Utilisation of carried forward Net Interest Expenditure</strong>
                                </p>
                                <p>Continuing the above example, Company V’s extract of standalone Financial Statements
                                    for 2026 is as follows:</p>
                                <table>
                                    <tr>
                                        <th rowspan='2'></th>
                                        <th>2026</th>
                                    </tr>
                                    <tr>
                                        <th>Amounts in AED</th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p><b>Revenue:</b></p>
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Trading income</p>
                                        </td>
                                        <td>
                                            <p class='center'>170,000,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Dividend from Company S</p>
                                        </td>
                                        <td>
                                            <p class='center'>25,000,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Interest income arising from trade receivables (trade debtors)</p>
                                        </td>
                                        <td>
                                            <p class='center'>12,000,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Interest income arising from loans to third parties</p>
                                        </td>
                                        <td>
                                            <p class='center'>12,000,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p><b>Total Revenue (A)</b></p>
                                        </td>
                                        <td>
                                            <p class='center'><b>219,000,000</b></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p><b>Less: Expenditure</b></p>
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Cost of goods sold</p>
                                        </td>
                                        <td>
                                            <p class='center'>50,500,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Salaries and wages</p>
                                        </td>
                                        <td>
                                            <p class='center'>34,000,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>General expenses</p>
                                        </td>
                                        <td>
                                            <p class='center'>8,500,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Depreciation of fixed assets</p>
                                        </td>
                                        <td>
                                            <p class='center'>6,000,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Interest expense:</p>
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Interest payable on a loan for a share purchase</p>
                                        </td>
                                        <td>
                                            <p class='center'>7,000,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Interest payable on EURO bank loan</p>
                                        </td>
                                        <td>
                                            <p class='center'>15,000,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Foreign exchange loss on interest on EURO bank loan</p>
                                        </td>
                                        <td>
                                            <p class='center'>2,500,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Interest expense (trade payables i.e. creditors)</p>
                                        </td>
                                        <td>
                                            <p class='center'>18,500,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Interest payable on a personal loan taken out by a director</p>
                                        </td>
                                        <td>
                                            <p class='center'>500,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p><b>Total expenditure (B)</b></p>
                                        </td>
                                        <td>
                                            <p class='center'><b>142,500,000</b></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p><b>Accounting Income before tax (A) – (B)</b></p>
                                        </td>
                                        <td>
                                            <p class='center'><b>76,500,000</b></p>
                                        </td>
                                    </tr>
                                </table>
                                <h4>Applicability of the General Interest Deduction Limitation Rule for 2026 Tax Period
                                </h4>
                                <h4>Step 1: Calculation of Net Interest Expenditure</h4>
                                <p>The calculation of Net Interest Expenditure for Company V for the 2026 Tax Period is
                                    as follows:</p>
                                <table>
                                    <tr>
                                        <th rowspan='2'>
                                            <p>Net Interest Expenditure</p>
                                        </th>
                                        <th>2026</th>
                                    </tr>
                                    <tr>
                                        <th>Amounts in AED</th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p><b>Interest income</b></p>
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Interest income arising from trade receivables (trade debtors)</p>
                                        </td>
                                        <td>
                                            <p class='center'>12,000,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Interest income arising from loans to third parties</p>
                                        </td>
                                        <td>
                                            <p class='center'>12,000,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p><b>Total Interest income (A)</b></p>
                                        </td>
                                        <td>
                                            <p class='center'><b>24,000,000</b></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p><b>Interest expenditure</b></p>
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Interest payable on a loan for a share purchase</p>
                                        </td>
                                        <td>
                                            <p class='center'>7,000,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Interest payable on EURO bank loan</p>
                                        </td>
                                        <td>
                                            <p class='center'>15,000,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Foreign exchange loss on interest on EURO bank loan</p>
                                        </td>
                                        <td>
                                            <p class='center'>2,500,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Interest expense (trade payables i.e. creditors)</p>
                                        </td>
                                        <td>
                                            <p class='center'>18,500,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Interest payable on a personal loan taken out by a director</p>
                                        </td>
                                        <td>
                                            <p class='center'>Nil</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Total Interest expenditure (B)</p>
                                        </td>
                                        <td>
                                            <p class='center'>43,000,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Sub-total: Net Interest Expenditure for 2026 Tax Period before carry
                                                forward amounts (B)–(A)</p>
                                        </td>
                                        <td>
                                            <p class='center'>19,000,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p><b>Net Interest Expenditure carried forward from Tax Period 2025</b></p>
                                        </td>
                                        <td>
                                            <p class='center'><b>22,600,000</b></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p><b>Total: Net Interest Expenditure for 2026 Tax Period</b></p>
                                        </td>
                                        <td>
                                            <p class='center'><b>41,600,000</b></p>
                                        </td>
                                    </tr>
                                </table>
                                <h4>Step 2: Calculation of 30% adjusted EBITDA</h4>
                                <table>
                                    <tr>
                                        <td rowspan='2'></td>
                                        <td rowspan='2'></td>
                                        <th>2026</th>
                                    </tr>
                                    <tr>
                                        <th>Amounts in AED</th>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <p><b>Accounting Income/(loss)</b></p>
                                        </td>
                                        <td>
                                            <p class='center'><b>76,500,000</b></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>-</p>
                                        </td>
                                        <td>
                                            <p>Dividend from Company S subject to Participation Exemption and is
                                                therefore Exempt Income</p>
                                        </td>
                                        <td>
                                            <p class='center'>(25,000,000)</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>+</p>
                                        </td>
                                        <td>
                                            <p>Disallowed expenditure in respect of the personal loan taken out by a
                                                director</p>
                                        </td>
                                        <td>
                                            <p class='center'>500,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <p><b>Taxable Income before General Interest Deduction Limitation Rule and
                                                    Tax Loss relief</b></p>
                                        </td>
                                        <td>
                                            <p class='center'><b>52,000,000</b></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>+</p>
                                        </td>
                                        <td>
                                            <p>Depreciation of fixed assets</p>
                                        </td>
                                        <td>
                                            <p class='center'>6,000,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>+</p>
                                        </td>
                                        <td>
                                            <p>Net Interest Expenditure for 2026 Tax Period before carry forward amounts
                                            </p>
                                        </td>
                                        <td>
                                            <p class='center'>19,000,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <p><b>Adjusted EBITDA</b></p>
                                        </td>
                                        <td>
                                            <p class='center'><b>77,000,000</b></p>
                                        </td>
                                    </tr>
                                </table>
                                <p>30% of adjusted EBITDA is <b>AED 23,100,000 </b>(0.3 * 77,000,000)</p>
                                <h4>Determining deductible and non-deductible Net Interest Expenditure</h4>
                                <p>The deductible Net Interest Expenditure is the greater of:</p>
                                <ul>
                                    <li>
                                        <p>30% of adjusted EBITDA, and</p>
                                    </li>
                                    <li>
                                        <p>the de minimis threshold of AED 12 million.</p>
                                    </li>
                                </ul>
                                <p>In this case, 30% of adjusted EBITDA, being AED 23,100,000, which is higher than AED
                                    12,000,000 is the deductible Net Interest Expenditure for 2026 Tax Period for
                                    Company V.</p>
                                <p>Company V has Net Interest Expenditure to be carried forward to the 2027 Tax Period,
                                    calculated as follows:</p>
                                <table>
                                    <tr>
                                        <td></td>
                                        <th>Amounts in AED</th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Net Interest Expenditure which is deductible for 2026 Tax Period</p>
                                        </td>
                                        <td>
                                            <p class='center'>23,100,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Net Interest Expenditure brought forward from 2025 Tax Period</p>
                                        </td>
                                        <td>
                                            <p class='center'>(22,600,000)</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Net Interest Expenditure for 2026 Tax Period (balancing figure)</p>
                                        </td>
                                        <td>
                                            <p class='center'>(500,000)</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <p class='center'>nil</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Net Interest Expenditure for 2026 Tax Period</p>
                                        </td>
                                        <td>
                                            <p class='center'>19,000,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Utilised in 2026 Tax Period (see above)</p>
                                        </td>
                                        <td>
                                            <p class='center'>(500,000)</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p><b>Net Interest Expenditure carried forward to 2027 Tax Period, all
                                                    originating from 2026 Tax Period.</b><sup><a href='#bookmark89'
                                                        id='bookmarkback89'>[89]</a></sup></p>
                                        </td>
                                        <td>
                                            <p class='center'><b>18,500,000</b></p>
                                        </td>
                                    </tr>
                                </table>
                                <p>The interaction of the General Interest Deduction Limitation Rule with certain
                                    special cases is discussed in <a href='#bookmarkSection7'>Section 7</a>.</p>
                            </div>
                        </article>
                    </section>
                </article>
                <article id='bookmarkSection7'>
                    <h3>Special cases</h3>
                    <section>
                        <article id='bookmarkSection7.1'>
                            <h3>Exempt Persons</h3>
                            <p>Exempt Persons (listed below) are treated as Taxable Persons insofar as they conduct a
                                Business or Business Activity other than the activity that meets the conditions to be
                                exempt:<sup><a href='#bookmark90' id='bookmarkback90'>[90]</a></sup></p>
                            <ul>
                                <li>
                                    <p>A Government Entity,<sup><a href='#bookmark91' id='bookmarkback91'>[91]</a></sup>
                                    </p>
                                </li>
                                <li>
                                    <p>A Government Controlled Entity,<sup><a href='#bookmark92'
                                                id='bookmarkback92'>[92]</a></sup></p>
                                </li>
                                <li>
                                    <p>A person engaged in an Extractive Business,<sup><a href='#bookmark93'
                                                id='bookmarkback93'>[93]</a></sup> and</p>
                                </li>
                                <li>
                                    <p>A person engaged in a Non-Extractive Natural Resource Business.<sup><a
                                                href='#bookmark94' id='bookmarkback94'>[94]</a></sup></p>
                                </li>
                            </ul>
                            <p>The Taxable Income of the independent/other Business or Business Activity is determined
                                in accordance with the provisions of the Corporate Tax Law.<sup><a href='#bookmark95'
                                        id='bookmarkback95'>[95]</a></sup> This includes the General Interest Deduction
                                Limitation Rule.</p>
                            <p>Where the Exempt Person incurs Interest expenditure for its exempt Business or Business
                                Activity as well as for an independent/other Business or Business Activity which is
                                taxable, the Interest expenditure will need to be identified and/or apportioned as the
                                case may be between the two.</p>
                            <p>Where a loan is taken to purchase assets for the Business Activity, i.e. directly
                                identifiable or attributable to the Business which is taxable, the corresponding
                                Interest expenditure is deductible, subject to the General Interest Deduction Limitation
                                Rule.</p>
                            <p>Where the Interest expenditure is not directly identifiable or attributable to the
                                Business which is taxable, it will need to be apportioned on a &ldquo;fair and
                                reasonable&rdquo; basis.<sup><a href='#bookmark96' id='bookmarkback96'>[96]</a></sup>
                                What is fair and reasonable will depend on the facts and circumstances of each case, and
                                may be based on allocation keys such as headcount, floor space, usage, time spent, or
                                any other measurable and reasonable basis.</p>
                            <p>In the case of Exempt Persons engaged in an Extractive Business and/or Non- Extractive
                                Natural Resource Business, the common expenditures can be apportioned according to the
                                Revenue of each Business in a Tax Period unless a different proportion is defined by the
                                relevant local laws of the respective Emirate for the purpose of calculating the
                                Emirate-level tax payable in respect of the Extractive Business/Non-Extractive Natural
                                Resource Business.<sup><a href='#bookmark97' id='bookmarkback97'>[97]</a></sup></p>
                            <p>Any Interest expenditure incurred for the exempt Business or Business Activity is not
                                deductible.<sup><a href='#bookmark98' id='bookmarkback98'>[98]</a></sup></p>
                            <div class='example'>
                                <p><strong>Example 22: Interest expenditure on a working capital loan</strong></p>
                                <p>Company Y (incorporated and tax resident in the UAE) follows the Gregorian calendar
                                    year as its Financial Year and operates two Businesses in Emirate A:</p>
                                <ul>
                                    <li>
                                        <p>Oil extraction; and</p>
                                    </li>
                                    <li>
                                        <p>Software development.</p>
                                    </li>
                                </ul>
                                <p>In the year ended 31 December 2024, Company Y:</p>
                                <ul>
                                    <li>
                                        <p>Received Revenue of AED 15 million from oil extraction,</p>
                                    </li>
                                    <li>
                                        <p>Received Revenue of AED 5 million from software development, and</p>
                                    </li>
                                    <li>
                                        <p>Paid interest of AED 1 million in relation to a bank loan obtained for
                                            meeting the working capital requirements for both oil extraction and
                                            software development.</p>
                                    </li>
                                </ul>
                                <p>For Corporate Tax purposes, Company Y qualifies as an Exempt Person in relation to
                                    its Extractive Business of oil extraction, but not in respect of its software
                                    development Business. Company Y will, therefore, be subject to Corporate Tax in
                                    relation to its taxable Business of software development.</p>
                                <p>For the 2024 Tax Period, in calculating Taxable Income of the taxable Business,
                                    Company Y should recognise Revenue of AED 5 million. It should also recognise a
                                    portion of its Interest expenditure.</p>
                                <p>The amount of Interest expenditure may be apportioned on the basis of Revenue
                                    generated (assuming Emirate A has not provided an alternate method of apportioning).
                                    Accordingly, Interest expenditure of AED 250,000 [(AED 5 million/AED 20 million) * 1
                                    million] is treated as Interest and will be subject to the General Interest
                                    Deduction Limitation Rule.</p>
                                <p>The balance of the Interest expenditure of AED 750,000 (AED 1,000,000 – AED 250,000)
                                    is allocated to the Extractive Business, which is exempt from Corporate Tax, and so
                                    is not deductible for Corporate Tax purposes.</p>
                            </div>
                        </article>
                        <article id='bookmarkSection7.2'>
                            <h3>Non-Resident Persons</h3>
                            <section>
                                <article id='bookmarkSection7.2.1'>
                                    <h3>Overview</h3>
                                    <p>A juridical person that is a Non-Resident Person is subject to Corporate Tax on
                                        the following:<sup><a href='#bookmark99' id='bookmarkback99'>[99]</a></sup></p>
                                    <ul>
                                        <li>
                                            <p>Taxable Income attributable to its Permanent Establishment in the UAE,
                                            </p>
                                        </li>
                                        <li>
                                            <p>Taxable Income that is attributable to its nexus in the UAE, and</p>
                                        </li>
                                        <li>
                                            <p>State Sourced Income that is not attributable to its Permanent
                                                Establishment in the UAE.</p>
                                        </li>
                                    </ul>
                                    <p>The General Interest Deduction Limitation Rule applies when determining the
                                        Taxable Income<sup><a href='#bookmark100' id='bookmarkback100'>[100]</a></sup>
                                        attributable to a Permanent Establishment or to a nexus in the UAE.</p>
                                    <p>The General Interest Deduction Limitation Rule does not apply in determining
                                        State Sourced Income.</p>
                                </article>
                                <article id='bookmarkSection7.2.2'>
                                    <h3>&ldquo;Interrupted&rdquo; Permanent Establishment or nexus</h3>
                                    <p>The General Interest Deduction Limitation Rule allows a Taxable Person, which
                                        includes a Non-Resident Person, to carry forward disallowed Net Interest
                                        Expenditure for deduction in the subsequent 10 Tax Periods.<sup><a
                                                href='#bookmark101' id='bookmarkback101'>[101]</a></sup></p>
                                    <p>If a Non-Resident Person's Permanent Establishment or nexus is interrupted, i.e.
                                        the Non-Resident Person ceases to have a taxable presence in the UAE, it ceases
                                        to be a Taxable Person for Corporate Tax purposes. This could occur when one
                                        project in the UAE ends before the next starts, in the case of Permanent
                                        Establishment. For nexus it could be because properties in the UAE are not
                                        continuously held.</p>
                                    <p>Where a Taxable Person de-registers because it has ceased Business
                                        Activity,<sup><a href='#bookmark102' id='bookmarkback102'>[102]</a></sup> any
                                        unutilised Net Interest Expenditure that has been carried forward will be
                                        forfeited upon de-registration. This applies even when a Non-Resident Person
                                        later re-establishes another Permanent Establishment or nexus.</p>
                                    <div class='example'>
                                        <p><strong>Example 23: Interrupted Permanent Establishment</strong></p>
                                        <p>Company R (incorporated and tax resident in Country R) follows the Gregorian
                                            calendar year as its Financial Year.</p>
                                        <p>Year ended 31 December 2024:</p>
                                        <p>Company R executes a construction contract in the UAE from 1 January 2024 to
                                            30 December 2024. For UAE Corporate Tax purposes, Company R has a permanent
                                            establishment and is a Non-Resident Person, i.e. a Taxable Person with a
                                            2024 Tax Period.</p>
                                        <p>Company R incurred Interest expenditure of AED 16 million in relation to its
                                            Permanent Establishment. Its adjusted EBITDA is AED 2 million.</p>
                                        <p>Applying the General Interest Deduction Limitation Rule, the deductible Net
                                            Interest Expenditure is limited to the higher of:</p>
                                        <ul>
                                            <li>
                                                <p>30% of the adjusted EBITDA, which is AED 600,000 (30% of AED 2
                                                    million), or</p>
                                            </li>
                                            <li>
                                                <p>AED 12 million (the de minimis threshold).</p>
                                            </li>
                                        </ul>
                                        <p>Accordingly, Company R can deduct Net Interest Expenditure up to AED 12
                                            million while calculating its Taxable Income for the 2024 Tax Period. The
                                            excess Net Interest Expenditure of AED 4 million (i.e. AED 16 million less
                                            AED 12 million) should be carried forward and utilised up to 10 subsequent
                                            Tax Periods i.e. till the 2034 Tax Period.</p>
                                        <p>For the years ended 31 December 2025 and 2026:</p>
                                        <p>Company R’s construction project is completed in 2024 and it has no other
                                            Business activity or taxable presence in the UAE in 2025 and 2026. It
                                            should, therefore, de-register for Corporate Tax purposes.</p>
                                        <p>The excess unutilised Net Interest Expenditure of AED 4 million is lost when
                                            Company R ceases to be a Taxable Person for Corporate Tax purposes.</p>
                                        <p>For the year ended 31 December 2027:</p>
                                        <p>Company R wins a new construction contract in the UAE to be executed from 1
                                            July 2027 to 31 December 2027, thereby creating a Permanent Establishment in
                                            the UAE. Accordingly, Company R will be treated as a Taxable Person for the
                                            2027 Tax Period.</p>
                                        <p>When calculating its Taxable Income for the 2027 Tax Period, and in applying
                                            the General Interest Deduction Limitation Rule, Company R cannot take into
                                            account the excess unutilised Net Interest Expenditure of AED 4 million
                                            related to its previous Permanent Establishment, despite being within the
                                            original 10-year carry forward period.</p>
                                    </div>
                                </article>
                            </section>
                        </article>
                        <article id='bookmarkSection7.3'>
                            <h3>Cash Basis of Accounting</h3>
                            <section>
                                <article id='bookmarkSection7.3.1'>
                                    <h3>Overview</h3>
                                    <p>Taxable Persons that earn Revenue that does not exceed AED 3 million in a Tax
                                        Period may use the Cash Basis of Accounting.<sup><a href='#bookmark103'
                                                id='bookmarkback103'>[103]</a></sup> Once a Taxable Person’s Revenue
                                        exceeds AED 3 million in a Tax Period, they must prepare Financial Statements
                                        using the Accrual Basis of Accounting, except under exceptional circumstances
                                        and following the FTA’s approval.<sup><a href='#bookmark104'
                                                id='bookmarkback104'>[104]</a></sup> The Revenue amount must be
                                        calculated in line with the arm’s length standard.</p>
                                    <p>Under the Cash Basis of Accounting, income and expenditure is recognised when
                                        cash payments are actually received or paid.</p>
                                    <p>For example, if a Taxable Person (with a Gregorian calendar year Tax Period)
                                        following the Cash Basis of Accounting, lends money in 2024 but only receives
                                        interest income in 2025, that interest income should be included in the Revenue
                                        of the 2025 Tax Period. Similarly, if the Taxable Person takes out a loan and
                                        makes interest payments in the 2025 Tax Period, such interest payments, if
                                        deductible for Corporate Tax purposes, should be included in the expenditure of
                                        the 2025 Tax Period even if the interest payments fell due in either 2024 or
                                        2026.</p>
                                </article>
                                <article id='bookmarkSection7.3.2'>
                                    <h3>Interplay with General Interest Deduction Limitation Rule</h3>
                                    <p>Where a Taxable Person follows the Cash Basis of Accounting, Interest expenditure
                                        should be deducted when calculating Taxable Income for the Tax Period in which
                                        it is received/paid, rather than when it falls due, subject to the General and
                                        Specific Interest Deduction Limitation Rules.<sup><a href='#bookmark105'
                                                id='bookmarkback105'>[105]</a></sup></p>
                                    <p>If, however, the Net Interest Expenditure is below the AED 12 million de minimis
                                        threshold for a Tax Period, the General Interest Deduction Limitation Rule does
                                        not apply.<sup><a href='#bookmark106' id='bookmarkback106'>[106]</a></sup></p>
                                </article>
                            </section>
                        </article>
                    </section>
                </article>
                <article id='bookmarkSection8'>
                    <h3>Exceptions to General Interest Deduction Limitation Rule</h3>
                    <section>
                        <article id='bookmarkSection8.1'>
                            <h3>Overview</h3>
                            <p>Considering Taxable Persons in different sectors may have different capital needs and
                                risk profiles, the Corporate Tax Law provides an exception to the applicability of the
                                General Interest Deduction Limitation Rule to the following: <sup><a href='#bookmark107'
                                        id='bookmarkback107'>[107]</a></sup></p>
                            <ul>
                                <li>
                                    <p>Banks,</p>
                                </li>
                                <li>
                                    <p>Insurance Providers, or</p>
                                </li>
                                <li>
                                    <p>Natural persons undertaking Business or Business Activity in the UAE,</p>
                                </li>
                                <li>
                                    <p>Any other Person as may be determined by the Minister (none are currently
                                        specified).</p>
                                </li>
                            </ul>
                            <p>This exception does not apply to treasury companies, captive insurance companies or other
                                non-regulated financial entities that carry out quasi-banking or insurance activities,
                                or to investment vehicles whether regulated (for example, by Securities and Commodities
                                Authority (SCA), Dubai International Financial Center (DIFC) or Abu Dhabi Global Market
                                (ADGM)) or not. These entities remain subject to the General Interest Deduction
                                Limitation Rule.</p>
                            <p>The General Interest Deduction Limitation Rule also does not apply to historical
                                financial assets and liabilities with terms agreed upon before 9 December 2022 (see <a
                                    href='#bookmarkSection8.4'>Section 8.4</a>) and Qualifying Infrastructure Projects
                                (see <a href='#bookmarkSection8.5'>Section 8.5</a>).</p>
                        </article>
                        <article id='bookmarkSection8.2'>
                            <h3>Banks and Insurance Providers</h3>
                            <p>A Bank is a Person licensed in the UAE as a bank or finance institution or an equivalent
                                licensed activity that allows the taking of deposits and the granting of credit as
                                defined in the applicable (non-tax) legislation of the UAE.<sup><a href='#bookmark108'
                                        id='bookmarkback108'>[108]</a></sup></p>
                            <p>An Insurance Provider is a Person licensed in the UAE that accepts risks by entering into
                                or carrying out contracts of insurance, in both the life and non-life sectors, including
                                contracts of reinsurance and captive insurance, as defined in the applicable (non-tax)
                                legislation of the UAE.<sup><a href='#bookmark109' id='bookmarkback109'>[109]</a></sup>
                            </p>
                            <p>Banks and Insurance Providers will typically be in a net Interest income position, which
                                is why they are not subject to the General Interest Deduction Limitation Rule,<sup><a
                                        href='#bookmark110' id='bookmarkback110'>[110]</a></sup> but the Interest
                                expenditure they incur will still be subject to the other Corporate Tax rules in respect
                                of Interest (<a href='#bookmarkSection4.2'>Section 4.2</a>).</p>
                            <p>If a Bank or an Insurance Provider operates within a group that includes other Taxable
                                Persons not classified as a Bank or Insurance Provider, those other Taxable Persons
                                remain subject to the General Interest Deduction Limitation Rule.</p>
                            <p>Where a member of a Tax Group is a Bank or Insurance Provider that is not subject to the
                                General Interest Deduction Limitation Rule, any Interest income or expenditure of that
                                member is ignored in calculating the total Net Interest Expenditure and adjusted EBITDA
                                of the Tax Group.<sup><a href='#bookmark111' id='bookmarkback111'>[111]</a></sup> For
                                more information see the Corporate Tax Guide on Tax Groups.</p>
                        </article>
                        <article id='bookmarkSection8.3'>
                            <h3>Natural person undertaking Business or Business Activity in the UAE</h3>
                            <p>A natural person that undertakes Business or Business Activity in the UAE is not subject
                                to the General Interest Deduction Limitation Rule.<sup><a href='#bookmark112'
                                        id='bookmarkback112'>[112]</a></sup> The Business or Business Activity should be
                                conducted directly by the natural person, for instance as a sole establishment.</p>
                            <p>Where a natural person conducts Business or Business Activity through a juridical person
                                such as a one-person company, the juridical person would be subject to the General
                                Interest Deduction Limitation Rule (unless some other exemption applies).</p>
                            <div class='example'>
                                <p><strong>Example 24: A natural person conducting Business in the UAE (sole
                                        establishment)</strong></p>
                                <p>Ms. A is a freelance graphic designer in the UAE. Her Turnover from various clients
                                    in a Gregorian calendar year is AED 5.2 million.</p>
                                <p>The General Interest Deduction Limitation Rule will not apply to Ms. A due to the
                                    specific exclusion for natural persons.</p>
                            </div>
                            <div class='example'>
                                <p><strong>Example 25: A natural person conducting Business in the UAE (using juridical
                                        person)</strong></p>
                                <p>Mr B has set up a one-person company in the UAE, Company B, to provide graphic design
                                    services. Company B is a Taxable Person and has Turnover of AED 5.2 million in a Tax
                                    Period.</p>
                                <p>As Company B is a juridical person, even though it has one sole natural person owner,
                                    the exception for natural persons from the General Interest Deduction Limitation
                                    Rule will not apply and, therefore, Company B is subject to the General Interest
                                    Deduction Limitation Rule.</p>
                            </div>
                        </article>
                        <article id='bookmarkSection8.4'>
                            <h3>Historical Financial Liabilities</h3>
                            <p>Net Interest Expenditure in relation to any debt instruments or liabilities with terms
                                agreed upon before 9 December 2022 (&ldquo;pre-existing debt instruments or
                                liabilities&rdquo;) is not subject to the General Interest Deduction Limitation Rule.
                                This includes contracts entered into either before or after 9 December 2022 if their
                                sole purpose was to hedge against interest rate risk.<sup><a href='#bookmark113'
                                        id='bookmarkback113'>[113]</a></sup></p>
                            <p>If a pre-existing debt instrument or liability includes provisions for principal which
                                had not been drawn down at that date, the Net Interest Expenditure attributable to this
                                amount is excluded from the General Interest Deduction Limitation Rule only to the
                                extent the lender was legally required to provide the funds upon completion of specific
                                deliverables or project phases agreed prior to 9 December 2022 and not merely at the
                                request of the borrower.<sup><a href='#bookmark114' id='bookmarkback114'>[114]</a></sup>
                            </p>
                            <p>The Net Interest Expenditure attributable to the pre-existing debt instruments or
                                liabilities is the lower of:<sup><a href='#bookmark115'
                                        id='bookmarkback115'>[115]</a></sup></p>
                            <ul>
                                <li>
                                    <p>The actual Net Interest Expenditure that arises in the Tax Period, and</p>
                                </li>
                                <li>
                                    <p>The Net Interest Expenditure that would have arisen based on the terms as they
                                        stood on 9 December 2022.</p>
                                </li>
                            </ul>
                            <p>The Net Interest Expenditure in relation to a pre-existing debt instrument or liability
                                is still subject to:</p>
                            <ul>
                                <li>
                                    <p>The general rules for deduction of expenditure, therefore Interest expenditure
                                        should be incurred wholly and exclusively for the purposes of the Business,
                                        should not be capital in nature, etc. (<a href='#bookmarkSection4.2'>Section
                                            4.2</a>),<sup><a href='#bookmark116' id='bookmarkback116'>[116]</a></sup>
                                        and</p>
                                </li>
                                <li>
                                    <p>The Specific Interest Deduction Limitation Rule (<a
                                            href='#bookmarkSection5'>Section 5</a>).<sup><a href='#bookmark117'
                                                id='bookmarkback117'>[117]</a></sup></p>
                                </li>
                            </ul>
                            <div class='example'>
                                <p><strong>Example 26: Historical financial liabilities</strong></p>
                                <p>Company C, a construction company (incorporated and tax resident in the UAE), entered
                                    into a fixed-rate loan agreement on 1 January 2022 to finance the development of a
                                    residential building.</p>
                                <p>The terms of the loan, including the interest rate, were fixed at the time of
                                    agreement. Since the loan was agreed upon before 9 December 2022, the Interest
                                    payments made by Company C in subsequent Tax Periods will not be subject to the
                                    General Interest Deduction Limitation Rule.</p>
                                <p>If any of the terms of the loan agreement changes (such as an interest rate change or
                                    amending security terms) after 9 December 2022, the loan agreement would no longer
                                    be a pre-existing debt instrument.</p>
                            </div>
                            <div class='example'>
                                <p><strong>Example 27: Historical financial liabilities</strong></p>
                                <p>Company D, an IT company (incorporated and tax resident in the UAE), took out a
                                    variable-Interest rate loan on 15 November 2022 to expand its data centre
                                    operations.</p>
                                <p>Company D entered into an interest rate swap agreement on 10 January 2023 to convert
                                    the variable interest payments to fixed payments, thereby reducing interest rate
                                    risk.</p>
                                <p>The Interest payments under the original loan and the swap agreement are not subject
                                    to the General Interest Deduction Limitation Rule because the initial loan agreement
                                    predates 9 December 2022, and the swap agreement was solely entered into for
                                    interest rate risk management.</p>
                                <p>Any profit or loss made in respect of the swap agreement that is not considered to be
                                    interest or a financing amount under the applicable Accounting Standards would not
                                    be considered Interest. However, that profit or loss would be included in Accounting
                                    Income and therefore brought into the Taxable Income calculation.<sup><a
                                            href='#bookmark118' id='bookmarkback118'>[118]</a></sup></p>
                            </div>
                            <div class='example'>
                                <p><strong>Example 28: Historical financial liability with drawdown facility</strong>
                                </p>
                                <p>Company E (incorporated and tax resident in the UAE) is a property developer that
                                    follows the Gregorian calendar year as its Financial Year. It entered into a loan
                                    agreement with a bank on 1 July 2022 with an annual interest rate of 5%. The loan
                                    agreement specified that Company E can draw down tranches of the previously agreed
                                    principal amount as it reaches certain construction milestones on a development
                                    project.</p>
                                <p>The total principal amount was agreed to be AED 10 million, with an initial drawdown
                                    of AED 4 million at the signing of the agreement, and three further possible
                                    drawdowns:</p>
                                <ul>
                                    <li>
                                        <p>Milestone 1: Completion of the foundation work, eligible for an additional
                                            AED 2 million drawdown.</p>
                                    </li>
                                    <li>
                                        <p>Milestone 2: Completion of the structural framework, eligible for an
                                            additional AED 2 million drawdown.</p>
                                    </li>
                                    <li>
                                        <p>Milestone 3: Completion of the exterior cladding, eligible for an additional
                                            AED 2 million drawdown.</p>
                                    </li>
                                </ul>
                                <p>Company E completed Milestone 2 on 1 January 2024, which triggered the obligation for
                                    the bank to provide an additional AED 2 million in principal.</p>
                                <h4>Interest expenditure for Company E for the 2024 Tax Period:</h4>
                                <table>
                                    <tr>
                                        <th>
                                            <p>Principal</p>
                                        </th>
                                        <th>Amount (AED)</th>
                                        <th>Interest rate</th>
                                        <th>Interest expenditure (AED)</th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Initial drawdown</p>
                                            <p>(pre-9 December 2022)</p>
                                        </td>
                                        <td>
                                            <p class='center'>4 million</p>
                                        </td>
                                        <td>
                                            <p class='center'>5%</p>
                                        </td>
                                        <td>
                                            <p class='center'>200,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Additional drawdown</p>
                                            <p>(post-9 December 2022 on completion of milestone)</p>
                                        </td>
                                        <td>
                                            <p class='center'>2 million</p>
                                        </td>
                                        <td>
                                            <p class='center'>5%</p>
                                        </td>
                                        <td>
                                            <p class='center'>100,000</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Total for 2024</p>
                                        </td>
                                        <td>
                                            <p class='center'>6 million</p>
                                        </td>
                                        <td></td>
                                        <td>
                                            <p class='center'>300,000</p>
                                        </td>
                                    </tr>
                                </table>
                                <p>The interest expenditure of AED 300,000 (i.e. AED 200,000 plus AED 100,000) is
                                    recognised as Interest but it is excluded from the General Interest Deduction
                                    Limitation Rule as the loan agreement was entered into before 9 December 2022, and
                                    the drawdown of the additional principal was based on a milestone agreed upon in the
                                    original loan terms.</p>
                                <p>Therefore, Company E can deduct all of the Interest expenditure of AED 300,000
                                    against its Taxable Income for the 2024 Tax Period.</p>
                            </div>
                        </article>
                        <article id='bookmarkSection8.5'>
                            <h3>Qualifying Infrastructure Projects</h3>
                            <section>
                                <article id='bookmarkSection8.5.1'>
                                    <h3>Overview</h3>
                                    <p>The Corporate Tax Law provides an exception to the application of the General
                                        Interest Deduction Limitation Rule to a Qualifying Infrastructure Project Person
                                        executing a Qualifying Infrastructure Project (see Sections <a
                                            href='#bookmarkSection8.5.2'>8.5.2</a> and <a
                                            href='#bookmarkSection8.5.3'>8.5.3</a>).<sup><a href='#bookmark119'
                                                id='bookmarkback119'>[119]</a></sup></p>
                                    <p>The Net Interest Expenditure incurred in relation to a Qualifying Infrastructure
                                        Project is still subject to:</p>
                                    <ul>
                                        <li>
                                            <p>The general rules for deduction of expenditure (i.e. should be incurred
                                                wholly and exclusively for the purposes of the Business, should not be
                                                capital in nature, etc. see <a href='#bookmarkSection4.2'>Section
                                                    4.2</a>),<sup><a href='#bookmark120'
                                                        id='bookmarkback120'>[120]</a></sup>and</p>
                                        </li>
                                        <li>
                                            <p>The Specific Interest Deduction Limitation Rule (see <a
                                                    href='#bookmarkSection5'>Section 5</a>).<sup><a href='#bookmark121'
                                                        id='bookmarkback121'>[121]</a></sup></p>
                                        </li>
                                    </ul>
                                    <div class='example'>
                                        <p><strong>Example 29: Interest expenditure incurred by a Qualifying
                                                Infrastructure Project Person</strong></p>
                                        <p>Company G (incorporated and tax resident in the UAE) is engaged to carry out
                                            a Qualifying Infrastructure Project and is a Qualifying Infrastructure
                                            Project Person.</p>
                                        <p>It has obtained a bank loan of AED 350 million at an annual interest rate of
                                            4% to finance the Qualifying Infrastructure Project. Interest expenditure of
                                            AED 14 million (4% of AED 350 million) is recognised as Interest but it is
                                            not subject to the General Interest Deduction Limitation Rule. The Interest
                                            expenditure is, therefore, fully deductible against Taxable Income.</p>
                                    </div>
                                    <p>If the Qualifying Infrastructure Project Person incurs Net Interest Expenditure
                                        in relation to a Business or Business Activity that is not a Qualifying
                                        Infrastructure Project, that Net Interest Expenditure is subject to the General
                                        Interest Deduction Limitation Rule and other general principles of
                                        deductibility.</p>
                                </article>
                                <article id='bookmarkSection8.5.2'>
                                    <h3>Qualifying Infrastructure Project Person</h3>
                                    <p>A Qualifying Infrastructure Project Person is a Resident Person that satisfies
                                        one of the following conditions in the relevant Tax Period:</p>
                                    <ul>
                                        <li>
                                            <p>Is responsible for the provision, maintenance or operation of a
                                                Qualifying Infrastructure Project, or</p>
                                        </li>
                                        <li>
                                            <p>Carries on any other activity that is ancillary to, or facilitates the
                                                provision, maintenance or operation of a Qualifying Infrastructure
                                                Project.</p>
                                        </li>
                                    </ul>
                                    <p>For example, a contractor responsible for maintaining a public hospital will
                                        qualify as a Qualifying Infrastructure Project Person whereas a contractor
                                        responsible for maintaining a private shopping mall will not qualify.</p>
                                    <p>A Resident Person that carries out another Business or Business Activity in
                                        addition to one related to a Qualifying Infrastructure Project may still qualify
                                        as a Qualifying Infrastructure Project Person.</p>
                                </article>
                                <article id='bookmarkSection8.5.3'>
                                    <h3>Qualifying Infrastructure Project</h3>
                                    <p>A Qualifying Infrastructure Project is a project that satisfies all the following
                                        conditions:<sup><a href='#bookmark122' id='bookmarkback122'>[122]</a></sup></p>
                                    <ul>
                                        <li>
                                            <p>It is exclusively for the public benefit of the UAE (see <a
                                                    href='#bookmarkSection8.5.3.1'>Section 8.5.3.1</a>),</p>
                                        </li>
                                        <li>
                                            <p>It is exclusively for the purposes of providing transport, utilities,
                                                education, healthcare or any other service within the UAE (see <a
                                                    href='#bookmarkSection8.5.3.2'>Section 8.5.3.2</a>),</p>
                                        </li>
                                        <li>
                                            <p>Its assets may not be disposed of at the discretion of the relevant
                                                Qualifying Infrastructure Project Person (see <a
                                                    href='#bookmarkSection8.5.3.3'>Section 8.5.3.3</a>),</p>
                                        </li>
                                        <li>
                                            <p>The assets provided, operated or maintained by the project should last,
                                                or be expected to last, not less than ten years (see <a
                                                    href='#bookmarkSection8.5.3.4'>Section 8.5.3.4</a>),</p>
                                        </li>
                                        <li>
                                            <p>All its assets must be situated in the UAE’s territory (see <a
                                                    href='#bookmarkSection8.5.3.5'>Section 8.5.3.5</a>), and</p>
                                        </li>
                                        <li>
                                            <p>All its Interest income and Interest expenditure must arise in the UAE
                                                (see <a href='#bookmarkSection8.5.3.6'>Section 8.5.3.6</a>).</p>
                                        </li>
                                    </ul>
                                    <p>The conditions are designed to capture assets that have such a close connection
                                        with the public sector that related financing arrangements present little or no
                                        base erosion or profit shifting risk.</p>
                                    <section>
                                        <article id='bookmarkSection8.5.3.1'>
                                            <h3>Exclusively for the public benefit of the UAE</h3>
                                            <p>A project that is exclusively for the public benefit is one that benefits
                                                a large subset of the public, as opposed to the private interests of
                                                investors, companies or a small group not otherwise in need. For
                                                example, a project to build a hospital that may be used by both expats
                                                and Emirati citizens, with or without private medical insurance, would
                                                qualify. On the other hand, a project to build a hospital for the
                                                exclusive use of a specific family would not.</p>
                                            <p>The word &ldquo;exclusively&rdquo; means that there can be no part of the
                                                project that would not be for public benefit. So, for example, a project
                                                to build a hospital that may be used by the public but also includes a
                                                private wing for the exclusive use of a specific family who donated
                                                funds to the project would not qualify, even if that private wing could
                                                be considered to be an incidental part of the overall hospital.</p>
                                            <div class='example'>
                                                <p><strong>Example 30: Project that is exclusively for the public
                                                        benefit in the UAE</strong></p>
                                                <p>Company H (incorporated and tax resident in the UAE) is undertaking a
                                                    project to operate hydroelectric dams to generate electricity.</p>
                                                <p>Company H distributes the power generated to the public grid.
                                                    However, it uses some of the power generated to power the company’s
                                                    own operations, such as the dam’s control centre and maintenance
                                                    facilities. This in itself does not prevent the project from being a
                                                    Qualifying Infrastructure Project if the company’s operations are
                                                    wholly and exclusively required for the project.</p>
                                            </div>
                                            <div class='example'>
                                                <p><strong>Example 31: Project that is not exclusively for the public
                                                        benefit in the UAE</strong></p>
                                                <p>Continuing the above example, Company H also sells some of the power
                                                    generated privately or provides some of the electricity generated to
                                                    related parties (undertaking other Business Activities) free of
                                                    charge. In that case, the project is not exclusively serving the
                                                    public benefit, and thus would fail to be a Qualifying
                                                    Infrastructure Project.</p>
                                            </div>
                                        </article>
                                        <article id='bookmarkSection8.5.3.2'>
                                            <h3>Specified services</h3>
                                            <p>The project should be exclusively for the purposes of providing
                                                transport, utilities, education, healthcare or any other service within
                                                the UAE as may be specified by the Minister.<sup><a href='#bookmark123'
                                                        id='bookmarkback123'>[123]</a></sup> Such other services are
                                                currently not specified.</p>
                                            <p>For example, a company undertakes a project to construct a natural gas
                                                pipeline within the UAE to supply gas to immoveable property situated in
                                                the UAE.</p>
                                        </article>
                                        <article id='bookmarkSection8.5.3.3'>
                                            <h3>Asset disposal restriction</h3>
                                            <p>The assets related to the project may not be disposed of at the
                                                discretion of the relevant Qualifying Infrastructure Project
                                                Person.<sup><a href='#bookmark124' id='bookmarkback124'>[124]</a></sup>
                                            </p>
                                            <p>This condition recognises that any assets that are generated by a
                                                Qualifying Infrastructure Project are not for the benefit of and do not
                                                belong to the Qualifying Infrastructure Project Person.</p>
                                            <p>A Qualifying Infrastructure Project Person could, however, be given the
                                                discretion to dispose of assets with the intention of replacement,
                                                maintenance, or upgrading to continue or enhance the service, for public
                                                benefit.</p>
                                            <p>For example, a company with a project to maintain a public school could
                                                be given the discretion to sell outdated computers as part of an upgrade
                                                to a new, state-of-the-art computer lab that will enhance the
                                                educational experience for students. Here, although the company is
                                                disposing of an asset, it is essentially replacing an asset rather than
                                                removing an asset from a Qualifying Infrastructure Project.</p>
                                        </article>
                                        <article id='bookmarkSection8.5.3.4'>
                                            <h3>Asset longevity</h3>
                                            <p>The assets provided, operated or maintained by the project should last,
                                                or be expected to last, not less than 10 years, or another period as may
                                                be specified by the Minister.<sup><a href='#bookmark125'
                                                        id='bookmarkback125'>[125]</a></sup>Currently, such other period
                                                has not been specified.</p>
                                            <p>The term &ldquo;Assets&rdquo; is not defined but generally refers to the
                                                underlying asset, which might need maintenance and updating within the
                                                10-year period. For example, a company may have a project to resurface
                                                roads. The surface of a road might not be expected to last 10 years but
                                                the underlying road, which is the asset (rather than the road surface),
                                                should exist, or be expected to exist for at least 10 years.</p>
                                        </article>
                                        <article id='bookmarkSection8.5.3.5'>
                                            <h3>Location of the assets</h3>
                                            <p>All assets related to the project must be situated in the UAE.<sup><a
                                                        href='#bookmark126' id='bookmarkback126'>[126]</a></sup></p>
                                            <p>For example, a company undertakes a project to construct a natural gas
                                                pipeline within the UAE to supply gas to immoveable property situated in
                                                the UAE. This would be a Qualifying Infrastructure Project. However, if
                                                the project includes construction of a pipeline that extends beyond the
                                                UAE’s borders to supply gas outside of the UAE as well as within the
                                                UAE, the project would not qualify unless the construction extending
                                                beyond the UAE’s borders is governed by an independent contract.</p>
                                            <div class='example'>
                                                <p><strong>Example 32: Project situated within UAE</strong></p>
                                                <p>The UAE has agreed with a neighbouring country (Country A) to have a
                                                    railway line that crosses their shared border, and both have agreed
                                                    to engage the same company (Company J, a tax resident in the UAE) to
                                                    construct the railway. However, the UAE will fund and retain
                                                    responsibility for the railway line within the UAE, and Country A
                                                    will fund and be responsible for the railway line in its own
                                                    territory. Although the railway line will appear seamless, Company J
                                                    has two projects: one within the UAE and one within Country A.</p>
                                                <p>The UAE project to construct the railway line within the UAE could
                                                    qualify as a Qualifying Infrastructure Project with Company J as the
                                                    Qualifying Infrastructure Project Person.</p>
                                            </div>
                                        </article>
                                        <article id='bookmarkSection8.5.3.6'>
                                            <h3>Interest income and Interest expenditure</h3>
                                            <p>All the project-related Interest income and Interest expenditure must
                                                arise in the UAE.<sup><a href='#bookmark127'
                                                        id='bookmarkback127'>[127]</a></sup> Interest arises where it is
                                                paid from. In the case of Interest expenditure incurred by a Taxable
                                                Person, considering the capital would be employed for the UAE project
                                                (to meet other conditions of a Qualifying Infrastructure Project), it
                                                would naturally arise in the UAE. However, if surplus cash is deposited
                                                in a Bank outside the UAE, the Interest income would not arise in the
                                                UAE and the project would not meet this condition.</p>
                                            <div class='example'>
                                                <p><strong>Example 33: Interest expenditure paid outside the
                                                        UAE</strong></p>
                                                <p>Company K (incorporated and tax resident in the UAE) has a project to
                                                    construct a new highway in the UAE. It secures a loan at an annual
                                                    interest rate of 3% to fund the construction from a foreign bank
                                                    which is not registered/licensed in the UAE.</p>
                                                <p>Although the Interest expenditure is paid to a foreign bank, the
                                                    Interest expenditure arises in the UAE and, therefore, the project
                                                    can be a Qualifying Infrastructure Project.</p>
                                                <p>If Company K receives interest income from the foreign bank because
                                                    it has surplus funds, but those funds are unrelated to the
                                                    construction project, that would not prevent the project from being
                                                    a Qualifying Infrastructure Project.</p>
                                            </div>
                                            <p>In addition to the above conditions in Sections <a
                                                    href='#bookmarkSection8.5.3.1'>8.5.3.1</a> to <a
                                                    href='#bookmarkSection8.5.3.6'>8.5.3.6</a>, in order to be a
                                                Qualifying Infrastructure Project, the project must satisfy any other
                                                condition that may be prescribed by the Minister.<sup><a
                                                        href='#bookmark128' id='bookmarkback128'>[128]</a></sup>
                                                Currently no additional conditions have been prescribed.</p>
                                        </article>
                                    </section>
                                </article>
                                <article id='bookmarkSection8.5.4'>
                                    <h3>Qualifying Infrastructure Project Person executing multiple projects</h3>
                                    <p>If a Qualifying Infrastructure Project Person has a Business or Business activity
                                        that is unrelated to a Qualifying Infrastructure Project, the Net Interest
                                        Expenditure related to the other Business or Business Activity will be subject
                                        to the General Interest Deduction Limitation Rule (unless some other exemption
                                        applies).</p>
                                    <div class='example'>
                                        <h4>Example 34: Qualifying Infrastructure Project Person executing multiple
                                            projects</h4>
                                        <p>Company L (incorporated and tax resident in the UAE) and follows the
                                            Gregorian calendar year as its Financial Year and Tax Period. It is involved
                                            in the construction and operation of a rail transit system (the &ldquo;rail
                                            project&rdquo;) that connects various Emirates in the UAE. It also
                                            constructs residential buildings.</p>
                                        <p>Company L is a Qualifying Infrastructure Project Person in respect of the
                                            rail project, which qualifies as a Qualifying Infrastructure Project.
                                            However, the construction of residential buildings does not qualify as a
                                            Qualifying Infrastructure Project.</p>
                                        <p>Company L has the following Net Interest Expenditure for its 2024 Tax Period:
                                        </p>
                                        <table>
                                            <tr>
                                                <th>
                                                    <p>Items</p>
                                                </th>
                                                <th colspan='2'>Amounts in AED</th>
                                            </tr>
                                            <tr>
                                                <th></th>
                                                <th rowspan=''>Rail project</th>
                                                <th>Residential buildings</th>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p>Interest income from investment of surplus funds</p>
                                                </td>
                                                <td>
                                                    <p class='center'>300,000</p>
                                                </td>
                                                <td>
                                                    <p class='center'><b>500,000</b></p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p>Interest expenditure</p>
                                                </td>
                                                <td>
                                                    <p class='center'>6,600,000</p>
                                                </td>
                                                <td>
                                                    <p class='center'><b>13,000,000</b></p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p><b>Net Interest Expenditure</b></p>
                                                </td>
                                                <td>
                                                    <p class='center'><b>6,300,000</b></p>
                                                </td>
                                                <td>
                                                    <p class='center'><b>12,500,000</b></p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p><b>Total: Net Interest Expenditure for the 2024 Tax Period</b>
                                                    </p>
                                                </td>
                                                <td colspan='2'>
                                                    <p class='center'><b>18,800,000</b></p>
                                                </td>
                                            </tr>
                                        </table>
                                        <p>The Net Interest Expenditure of AED 6.3 million in relation to the rail
                                            project is not restricted by the General Interest Deduction Limitation Rule
                                            as it relates to a Qualifying Infrastructure Project. This means that
                                            Company L can deduct Net Interest Expenditure of AED 6.3 million in full
                                            when calculating its Taxable Income for the 2024 Tax Period (subject to
                                            other rules applying).</p>
                                        <p>However, Company L will be subject to the General Interest Deduction
                                            Limitation Rule in respect of its Net Interest Expenditure of AED 12.5
                                            million in relation to its activity of constructing residential buildings,
                                            and will need to calculate its adjusted EBITDA (see <a
                                                href='#bookmarkSection6.4'>section 6.4</a>) to determine the disallowed
                                            amount (if any) in relation to this Business or Business Activity.</p>
                                    </div>
                                </article>
                            </section>
                        </article>
                        <article id='bookmarkSection8.6'>
                            <h3>Small Business Relief</h3>
                            <p>A Taxable Person that is a Resident Person may elect for Small Business Relief in respect
                                of a Tax Period if certain conditions are met, including where the Revenue of the Person
                                is less than or equal to AED 3 million in that Tax Period and all previous Tax Periods
                                ending on or before 31 December 2026.<sup><a href='#bookmark129'
                                        id='bookmarkback129'>[129]</a></sup></p>
                            <p>If the Small Business Relief election is made for a Tax Period, the Person is treated as
                                not deriving any Taxable Income and, therefore, cannot deduct any Net Interest
                                Expenditure and cannot carry forward any Net Interest Expenditure incurred in the Tax
                                Period to any subsequent Tax Period.<sup><a href='#bookmark130'
                                        id='bookmarkback130'>[130]</a></sup></p>
                            <p>If, however, the Person had Net Interest Expenditure disallowed under the General
                                Interest Deduction Limitation Rule in a previous Tax Period in which an election for
                                Small Business Relief was not made, the Person may carry forward the disallowed amount
                                to subsequent Tax Periods in which an election for Small Business Relief is not made.
                            </p>
                            <p>As discussed in <a href='#bookmarkSection6.2'><a href='#bookmarkSection6.2'>Section
                                        6.2</a></a>, a Taxable Person can carry forward disallowed Net Interest
                                Expenditure for up to 10 Tax Periods. This timeframe ignores the Tax Periods in which
                                the Person elects for Small Business Relief because the previously disallowed Net
                                Interest Expenditure carried forward cannot be utilised during these periods.</p>
                            <p>For example, Company M has disallowed Net Interest Expenditure in its 2024 Tax Period. It
                                did not elect for Small Business Relief in 2024 but it elected for the relief for 2025
                                and 2026 Tax Periods, with Company M’s Revenue below AED 3 million in all of these Tax
                                Periods. Small Business Relief is not available for Tax Periods after 31 December 2026.
                                Company M can use the Net Interest Expenditure carried forward from 2024 Tax Period up
                                to and including its 2036 Tax Period.</p>
                        </article>
                    </section>
                </article>
                <article id='bookmarkSection9'>
                    <h3>Updates and Amendments</h3>
                    <table>
                        <tr>
                            <th>
                                <p>Date of amendment</p>
                            </th>
                            <th>
                                <p>Amendments made</p>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <p>April 2025</p>
                            </td>
                            <td>
                                <ul>
                                    <li>
                                        <p>First version</p>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                </article>
            </section>
        </main>
        <footer>
            <section>
                <article>
                    <h3>Footnotes</h3>
                    <p id='bookmark1'><sup><a href='#bookmarkback1'>[1]</a></sup><span>For information on the
                            deductibility of Interest for Tax Groups see the Corporate Tax Guide on <a
                                href='/guidances/uae-cit-fdl-47-of-2022-guide-CTGTGR1'>Tax Groups</a>.</span></p>
                    <p id='bookmark2'><sup><a href='#bookmarkback2'>[2]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-1'>Article 1</a> of the Corporate Tax Law
                            read with <a href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023'>Ministerial Decision
                                No. 126 of 2023</a>.</span></p>
                    <p id='bookmark3'><sup><a href='#bookmarkback3'>[3]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-1'>Article 1</a> of the Corporate Tax
                            Law.</span></p>
                    <p id='bookmark4'><sup><a href='#bookmarkback4'>[4]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-20'>Article 20(5)</a> of the Corporate
                            Tax Law and <a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-114-of-2023#bookmarkSection2'>Article 2</a>
                            of Ministerial Decision 114 of 2023</span>.</p>
                    <p id='bookmark5'><sup><a href='#bookmarkback5'>[5]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection1'>Article 1</a>
                            of Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark6'><sup><a href='#bookmarkback6'>[6]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-1'>Article 1</a> of the Corporate Tax Law
                            read with <a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection1'>Article 1</a>
                            and <a href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection4'>Article
                                4</a> of Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark7'><sup><a href='#bookmarkback7'>[7]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection2'>Article
                                2(2)(a)</a> of Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark8'><sup><a href='#bookmarkback8'>[8]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection2'>Article
                                2(2)(b)</a> of Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark9'><sup><a href='#bookmarkback9'>[9]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-302-of-2024#bookmarkSection1'>Article 1</a>
                            of Ministerial Decision No. 302 of 2024.</span></p>
                    <p id='bookmark10'><sup><a href='#bookmarkback10'>[10]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection2'>Article
                                2(2)(c)</a> of Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark11'><sup><a href='#bookmarkback11'>[11]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection2'>Article
                                2(2)(d)</a> of Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark12'><sup><a href='#bookmarkback12'>[12]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection2'>Article
                                2(2)(e)</a> of Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark13'><sup><a href='#bookmarkback13'>[13]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-22'>Article 22</a> and <a
                                href='/articles/uae-cit-fdl-47-of-2022-article-23'>23</a> of the Corporate Tax
                            Law.</span></p>
                    <p id='bookmark14'><sup><a href='#bookmarkback14'>[14]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection2'>Article
                                2(2)(f)</a> of Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark15'><sup><a href='#bookmarkback15'>[15]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection2'>Article
                                2(2)(g)</a> and <a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection5'>5(1)</a> of
                            Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark16'><sup><a href='#bookmarkback16'>[16]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection5'>Article
                                5(1)</a> of Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark17'><sup><a href='#bookmarkback17'>[17]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection5'>Article 5</a>
                            of Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark18'><sup><a href='#bookmarkback18'>[18]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection5'>Article
                                5(2)</a> of Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark19'><sup><a href='#bookmarkback19'>[19]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection5'>Article
                                5(3)</a>, <a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection5'>5(4)</a> and <a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection5'>5(5)</a> of
                            Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark20'><sup><a href='#bookmarkback20'>[20]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection5'>Article
                                5(5)</a> of Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark21'><sup><a href='#bookmarkback21'>[21]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection2'>Article
                                2(2)(h)</a> of Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark22'><sup><a href='#bookmarkback22'>[22]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection6'>Article 6</a>
                            of Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark23'><sup><a href='#bookmarkback23'>[23]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-28'>Article 28(1)</a> of the Corporate
                            Tax Law read with <a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection9'>Article
                                9(3)</a> of Ministerial Decision 126.</span></p>
                    <p id='bookmark24'><sup><a href='#bookmarkback24'>[24]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection7'>Article 7</a>
                            of Ministerial Decision 126 of 2023.</span></p>
                    <p id='bookmark25'><sup><a href='#bookmarkback25'>[25]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection9'>Article
                                9(3)</a> of Ministerial Decision 126 of 2023.</span></p>
                    <p id='bookmark26'><sup><a href='#bookmarkback26'>[26]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-20'>Article 20(3)</a> of the Corporate
                            Tax Law.</span></p>
                    <p id='bookmark27'><sup><a href='#bookmarkback27'>[27]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-302-of-2024#bookmarkSection5'>Article 5</a>
                            of Ministerial Decision No. 302 of 2024.</span></p>
                    <p id='bookmark28'><sup><a href='#bookmarkback28'>[28]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-302-of-2024#bookmarkSection1'>Article 1</a>
                            of Ministerial Decision No. 302 of 2024.</span></p>
                    <p id='bookmark29'><sup><a href='#bookmarkback29'>[29]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-33'>Article 33(2)</a> of the Corporate
                            Tax Law.</span></p>
                    <p id='bookmark30'><sup><a href='#bookmarkback30'>[30]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection3'>Article
                                3(1)</a> of Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark31'><sup><a href='#bookmarkback31'>[31]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection3'>Article
                                3(2)</a> of Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark32'><sup><a href='#bookmarkback32'>[32]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection3'>Article
                                3(2)(a)</a> of Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark33'><sup><a href='#bookmarkback33'>[33]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection3'>Article
                                3(2)(b)</a> of Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark34'><sup><a href='#bookmarkback34'>[34]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection3'>Article
                                3(2)(c)</a> of Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark35'><sup><a href='#bookmarkback35'>[35]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection3'>Article
                                3(2)(d)</a> of Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark36'><sup><a href='#bookmarkback36'>[36]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection3'>Article
                                3(3)</a> of Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark37'><sup><a href='#bookmarkback37'>[37]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-20'>Article 20</a> of the Corporate Tax
                            Law.</span></p>
                    <p id='bookmark38'><sup><a href='#bookmarkback38'>[38]</a></sup><span><a
                                href='/laws/uae/cit-fdl-47-of-2022/chapter11'>Chapter 11</a> of the Corporate Tax Law,
                            covering Articles <a href='/articles/uae-cit-fdl-47-of-2022-article-37'>37</a>, <a
                                href='/articles/uae-cit-fdl-47-of-2022-article-38'>38</a> and <a
                                href='/articles/uae-cit-fdl-47-of-2022-article-39'>39</a>.</span></p>
                    <p id='bookmark39'><sup><a href='#bookmarkback39'>[39]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-50'>Article 50</a> of the Corporate Tax
                            Law.</span></p>
                    <p id='bookmark40'><sup><a href='#bookmarkback40'>[40]</a></sup><span>Article 1 and Chapter 3 of
                            Federal Decree-Law No. 28 of 2022.</span></p>
                    <p id='bookmark41'><sup><a href='#bookmarkback41'>[41]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-20'>Article 20(2)</a> of the Corporate
                            Tax Law.</span></p>
                    <p id='bookmark42'><sup><a href='#bookmarkback42'>[42]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-28'>Article 28(2)</a> of the Corporate
                            Tax Law.</span></p>
                    <p id='bookmark43'><sup><a href='#bookmarkback43'>[43]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-28'>Article 28(2)(a)</a> of the Corporate
                            Tax Law.</span></p>
                    <p id='bookmark44'><sup><a href='#bookmarkback44'>[44]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-28'>Article 28(3)</a> of the Corporate
                            Tax Law.</span></p>
                    <p id='bookmark45'><sup><a href='#bookmarkback45'>[45]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-28'>Article 28(1)</a> of the Corporate
                            Tax Law.</span></p>
                    <p id='bookmark46'><sup><a href='#bookmarkback46'>[46]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-28'>Article 28(2)(b)</a> of the Corporate
                            Tax Law.</span></p>
                    <p id='bookmark47'><sup><a href='#bookmarkback47'>[47]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-29'>Article 29</a> of the Corporate Tax
                            Law.</span></p>
                    <p id='bookmark48'><sup><a href='#bookmarkback48'>[48]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-28'>Article 28(2)(b)</a> read with <a
                                href='/articles/uae-cit-fdl-47-of-2022-article-22'>Article 22</a> of the Corporate Tax
                            Law.</span></p>
                    <p id='bookmark49'><sup><a href='#bookmarkback49'>[49]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-29'>Article 29</a> of the Corporate Tax
                            Law.</span></p>
                    <p id='bookmark50'><sup><a href='#bookmarkback50'>[50]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-302-of-2024#bookmarkSection11'>Article 11</a>
                            of Ministerial Decision No. 302 of 2024</span></p>
                    <p id='bookmark51'><sup><a href='#bookmarkback51'>[51]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-29'>Articles 29</a> and <a
                                href='/articles/uae-cit-fdl-47-of-2022-article-31'>31(1)(d)</a> of the Corporate Tax Law
                            read with <a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-302-of-2024#bookmarkSection11'>Article
                                11(3)</a> of Ministerial Decision No. 302 of 2024.</span></p>
                    <p id='bookmark52'><sup><a href='#bookmarkback52'>[52]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-36'>Article 36</a> of Corporate Tax
                            Law.</span></p>
                    <p id='bookmark53'><sup><a href='#bookmarkback53'>[53]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-34'>Article 34</a> of the Corporate Tax
                            Law.</span></p>
                    <p id='bookmark54'><sup><a href='#bookmarkback54'>[54]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-30'>Article 30(5)</a> of the Corporate
                            Tax Law.</span></p>
                    <p id='bookmark55'><sup><a href='#bookmarkback55'>[55]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-20'>Article 20(2)(e)</a> of the Corporate
                            Tax Law.</span></p>
                    <p id='bookmark56'><sup><a href='#bookmarkback56'>[56]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-31'>Article 31</a> of the Corporate Tax
                            Law.</span></p>
                    <p id='bookmark57'><sup><a href='#bookmarkback57'>[57]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-34'>Article 34</a> of the Corporate Tax
                            Law.</span></p>
                    <p id='bookmark58'><sup><a href='#bookmarkback58'>[58]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-31'>Article 31(1)</a> of the Corporate
                            Tax Law.</span></p>
                    <p id='bookmark59'><sup><a href='#bookmarkback59'>[59]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-31'>Article 31(2)</a> of the Corporate
                            Tax Law.</span></p>
                    <p id='bookmark60'><sup><a href='#bookmarkback60'>[60]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-50'>Article 50(2)</a> of the Corporate
                            Tax Law.</span></p>
                    <p id='bookmark61'><sup><a href='#bookmarkback61'>[61]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-31'>Article 31(2)</a> and <a
                                href='/articles/uae-cit-fdl-47-of-2022-article-31'>31(3)</a> of the Corporate Tax
                            Law.</span></p>
                    <p id='bookmark62'><sup><a href='#bookmarkback62'>[62]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-30'>Article 30(2)</a> of the Corporate
                            Tax Law.</span></p>
                    <p id='bookmark63'><sup><a href='#bookmarkback63'>[63]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-30'>Article 30(1)</a> of the Corporate
                            Tax Law and <a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection9'>Article
                                9(1)</a> of Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark64'><sup><a href='#bookmarkback64'>[64]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection8'>Article
                                8(1)</a> of Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark65'><sup><a href='#bookmarkback65'>[65]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection8'>Article 8</a>
                            of Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark66'><sup><a href='#bookmarkback66'>[66]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-30'>Article 30(4)</a> of the Corporate
                            Tax Law.</span></p>
                    <p id='bookmark67'><sup><a href='#bookmarkback67'>[67]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-30'>Article 30(2)</a> read with <a
                                href='/articles/uae-cit-fdl-47-of-2022-article-30'>Article 30(5)</a> of the Corporate
                            Tax Law.</span></p>
                    <p id='bookmark68'><sup><a href='#bookmarkback68'>[68]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-34'>Article 34</a> of the Corporate Tax
                            Law.</span></p>
                    <p id='bookmark69'><sup><a href='#bookmarkback69'>[69]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-31'>Article 31</a> of the Corporate Tax
                            Law.</span></p>
                    <p id='bookmark70'><sup><a href='#bookmarkback70'>[70]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection11'>Article 11</a>
                            of Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark71'><sup><a href='#bookmarkback71'>[71]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection9'>Articles
                                9(2)</a> and <a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection14'>14</a> of
                            Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark72'><sup><a href='#bookmarkback72'>[72]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection12'>Article
                                12(5)</a> of Ministerial Decision No. 126 of 2023</span></p>
                    <p id='bookmark73'><sup><a href='#bookmarkback73'>[73]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-34'>Article 34</a> of the Corporate Tax
                            Law.</span></p>
                    <p id='bookmark74'><sup><a href='#bookmarkback74'>[74]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-30'>Article 30(5)</a> of the Corporate
                            Tax Law.</span></p>
                    <p id='bookmark75'><sup><a href='#bookmarkback75'>[75]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection9'>Articles 9</a>
                            and <a href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection11'>11</a> of
                            Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark76'><sup><a href='#bookmarkback76'>[76]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection9'>Articles 9</a>
                            and <a href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection14'>14</a> of
                            Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark77'><sup><a href='#bookmarkback77'>[77]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-20'>Article 20</a> of the Corporate Tax
                            Law.</span></p>
                    <p id='bookmark78'><sup><a href='#bookmarkback78'>[78]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection9'>Article
                                9(1)</a> and <a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection9'>9(2)</a> of
                            Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark79'><sup><a href='#bookmarkback79'>[79]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection12'>Article
                                12(5)</a> of Ministerial Decision No. 126 of 2023</span></p>
                    <p id='bookmark80'><sup><a href='#bookmarkback80'>[80]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection9'>Article 9</a>
                            of Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark81'><sup><a href='#bookmarkback81'>[81]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-23'>Article 23</a> of the Corporate Tax
                            Law.</span></p>
                    <p id='bookmark82'><sup><a href='#bookmarkback82'>[82]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-22'>Article 22</a> of the Corporate Tax
                            Law.</span></p>
                    <p id='bookmark83'><sup><a href='#bookmarkback83'>[83]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection3'>Article
                                3(2)</a> of Ministerial Decision No. 126 of 2023, see <a
                                href='#bookmarkSection3.10'>Section 3.10</a> of this guide.</span></p>
                    <p id='bookmark84'><sup><a href='#bookmarkback84'>[84]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection6'>Article 6</a>
                            of Ministerial Decision No. 126 of 2023, see <a href='#bookmarkSection3.6'>Section 3.6</a>
                            of this guide.</span></p>
                    <p id='bookmark85'><sup><a href='#bookmarkback85'>[85]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection11'>Article 11</a>
                            of Ministerial Decision No.126 of 2023.</span></p>
                    <p id='bookmark86'><sup><a href='#bookmarkback86'>[86]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-28'>Article 28</a> of the Corporate Tax
                            Law, see <a href='#bookmarkSection4'>Section 4</a> of this guide.</span></p>
                    <p id='bookmark87'><sup><a href='#bookmarkback87'>[87]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-30'>Article 30(4)</a> of the Corporate
                            Tax Law.</span></p>
                    <p id='bookmark88'><sup><a href='#bookmarkback88'>[88]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-20'>Article 20(2)(d)</a> of the Corporate
                            Tax Law.</span></p>
                    <p id='bookmark89'><sup><a href='#bookmarkback89'>[89]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-30'>Article 30(4)</a> of the Corporate
                            Tax Law.</span></p>
                    <p id='bookmark90'><sup><a href='#bookmarkback90'>[90]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection13'>Article 13</a>
                            of Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark91'><sup><a href='#bookmarkback91'>[91]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-5'>Article 5</a> of the Corporate Tax
                            Law.</span></p>
                    <p id='bookmark92'><sup><a href='#bookmarkback92'>[92]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-6'>Article 6</a> of the Corporate Tax
                            Law.</span></p>
                    <p id='bookmark93'><sup><a href='#bookmarkback93'>[93]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-7'>Article 7</a> of the Corporate Tax
                            Law.</span></p>
                    <p id='bookmark94'><sup><a href='#bookmarkback94'>[94]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-8'>Article 8</a> of the Corporate Tax
                            Law.</span></p>
                    <p id='bookmark95'><sup><a href='#bookmarkback95'>[95]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-5'>Articles 5(4)</a>, <a
                                href='/articles/uae-cit-fdl-47-of-2022-article-6'>6(4)</a>, <a
                                href='/articles/uae-cit-fdl-47-of-2022-article-7'>7(2)(b)</a> and <a
                                href='/articles/uae-cit-fdl-47-of-2022-article-8'>8(2)(b)</a> of the Corporate Tax
                            Law.</span></p>
                    <p id='bookmark96'><sup><a href='#bookmarkback96'>[96]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-28'>Article 28(3)</a> of the Corporate
                            Tax Law.</span></p>
                    <p id='bookmark97'><sup><a href='#bookmarkback97'>[97]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-7'>Articles 7(4)(b)</a> and <a
                                href='/articles/uae-cit-fdl-47-of-2022-article-8'>8(4)(b)</a> of the Corporate Tax
                            Law.</span></p>
                    <p id='bookmark98'><sup><a href='#bookmarkback98'>[98]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-28'>Articles 28(2)</a> and <a
                                href='/articles/uae-cit-fdl-47-of-2022-article-28'>28(3)</a> of the Corporate Tax
                            Law.</span></p>
                    <p id='bookmark99'><sup><a href='#bookmarkback99'>[99]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-12'>Article 12</a> of the Corporate Tax
                            Law.</span></p>
                    <p id='bookmark100'><sup><a href='#bookmarkback100'>[100]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-20'>Article 20(2)(d)</a> of the Corporate
                            Tax Law.</span></p>
                    <p id='bookmark101'><sup><a href='#bookmarkback101'>[101]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-30'>Article 30(4)</a> of the Corporate
                            Tax Law.</span></p>
                    <p id='bookmark102'><sup><a href='#bookmarkback102'>[102]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-52'>Article 52</a> of the Corporate Tax
                            Law.</span></p>
                    <p id='bookmark103'><sup><a href='#bookmarkback103'>[103]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-114-of-2023#bookmarkSection2'>Article
                                2(1)</a> of Ministerial Decision No. 114 of 2023.</span></p>
                    <p id='bookmark104'><sup><a href='#bookmarkback104'>[104]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-20'>Article 20(1)</a> of the Corporate
                            Tax Law and <a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-114-of-2023#bookmarkSection2'>Article
                                2(2)</a> of Ministerial Decision No. 114 of 2023.</span></p>
                    <p id='bookmark105'><sup><a href='#bookmarkback105'>[105]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-30'>Article 30</a> and <a
                                href='/articles/uae-cit-fdl-47-of-2022-article-31'>Article 31</a> of the Corporate Tax
                            Law.</span></p>
                    <p id='bookmark106'><sup><a href='#bookmarkback106'>[106]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection30'>Article
                                30(3)</a> and <a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection8'>Article
                                8(1)</a> of Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark107'><sup><a href='#bookmarkback107'>[107]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-30'>Article 30(6)</a> of the Corporate
                            Tax Law.</span></p>
                    <p id='bookmark108'><sup><a href='#bookmarkback108'>[108]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-1'>Article 1</a> of the Corporate Tax
                            Law.</span></p>
                    <p id='bookmark109'><sup><a href='#bookmarkback109'>[109]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-1'>Article 1</a> of the Corporate Tax
                            Law.</span></p>
                    <p id='bookmark110'><sup><a href='#bookmarkback110'>[110]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-30'>Article 30(6)</a> of the Corporate
                            Tax Law.</span></p>
                    <p id='bookmark111'><sup><a href='#bookmarkback111'>[111]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection12'>Article 12</a>
                            of Ministerial Decision No.126 of 2023</span></p>
                    <p id='bookmark112'><sup><a href='#bookmarkback112'>[112]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-30'>Article 30(6)</a> of the Corporate
                            Tax Law.</span></p>
                    <p id='bookmark113'><sup><a href='#bookmarkback113'>[113]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection11'>Article
                                11(1)</a> and <a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection11'>11(2)</a> of
                            Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark114'><sup><a href='#bookmarkback114'>[114]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection11'>Article
                                11(3)</a> of Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark115'><sup><a href='#bookmarkback115'>[115]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection11'>Article
                                11(4)</a> of Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark116'><sup><a href='#bookmarkback116'>[116]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-28'>Article 28</a> of the Corporate Tax
                            Law.</span></p>
                    <p id='bookmark117'><sup><a href='#bookmarkback117'>[117]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-31'>Article 31</a> of the Corporate Tax
                            Law.</span></p>
                    <p id='bookmark118'><sup><a href='#bookmarkback118'>[118]</a></sup><span>See <a
                                href='#bookmarkSection3.11'>Section 3.11</a>.</span></p>
                    <p id='bookmark119'><sup><a href='#bookmarkback119'>[119]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection14'>Article 14</a>
                            of Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark120'><sup><a href='#bookmarkback120'>[120]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-28'>Article 28</a> of the Corporate Tax
                            Law.</span></p>
                    <p id='bookmark121'><sup><a href='#bookmarkback121'>[121]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-31'>Article 31</a> of the Corporate Tax
                            Law.</span></p>
                    <p id='bookmark122'><sup><a href='#bookmarkback122'>[122]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection14'>Article
                                14(3)</a> of Ministerial Decision No. 126 of 2023</span></p>
                    <p id='bookmark123'><sup><a href='#bookmarkback123'>[123]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection14'>Article
                                14(3)(b)</a> of Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark124'><sup><a href='#bookmarkback124'>[124]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection14'>Article
                                14(3)(c)</a> of Ministerial Decision No. 126 of 2023</span></p>
                    <p id='bookmark125'><sup><a href='#bookmarkback125'>[125]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection14'>Article
                                14(3)(d)</a> of Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark126'><sup><a href='#bookmarkback126'>[126]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection14'>Article
                                14(3)(e)</a> of Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark127'><sup><a href='#bookmarkback127'>[127]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection14'>Article
                                14(3)(f)</a> of Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark128'><sup><a href='#bookmarkback128'>[128]</a></sup><span><a
                                href='/decisions/uae-cit-fdl-47-of-2022-md-126-of-2023#bookmarkSection14'>Article
                                14(3)(g)</a> of Ministerial Decision No. 126 of 2023.</span></p>
                    <p id='bookmark129'><sup><a href='#bookmarkback129'>[129]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-21'>Article 21</a> of the Corporate Tax
                            Law read with <a href='/decisions/uae-cit-fdl-47-of-2022-md-73-of-2023'>Ministerial Decision
                                No. 73 of 2023</a>.</span></p>
                    <p id='bookmark130'><sup><a href='#bookmarkback130'>[130]</a></sup><span><a
                                href='/articles/uae-cit-fdl-47-of-2022-article-21'>Article 21(2)(c)</a> of the Corporate
                            Tax Law read with <a href='/decisions/uae-cit-fdl-47-of-2022-md-73-of-2023'>Ministerial
                                Decision No. 73 of 2023</a>.</span></p>
                </article>
                <article>
                    <h3 class='linktogtl'><a>GTL Notes</a></h3>
                    <p id='gtlnotes1'><span class='gtl-space'><sup><strong id='linktogtl'><a
                                        href='#footnoteback1'>[G1]</a> </strong></sup></span><span>We believe that this
                            reference should be to <a href='#bookmarkSection4.2'>Section 4.2</a></span></p>
                </article>
            </section>
        </footer>
    </div>
</body>

</html> `

  // Don't render the content until we're on the client side
  if (!isClient) {
    return (
      <div className='App'>
        <header className='App-header' style={{ padding: '20px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: '20px'
          }}>
            <input
              type="text"
              value=""
              onChange={() => {}}
              style={{
                padding: '10px',
                width: '300px',
                borderRadius: '4px',
                border: '1px solid #ccc',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                fontSize: '14px'
              }}
              placeholder="Search..."
            />
          </div>
          <div style={{ textAlign: 'left' }}>
            Loading...
          </div>
        </header>
      </div>
    );
  }

  function handleSearchChange(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <div className='App'>
      <header className='App-header' style={{ padding: '20px' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginBottom: '20px'
        }}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            style={{
              padding: '10px',
              width: '300px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              fontSize: '14px'
            }}
            placeholder="Search..."
          />
        </div>
        <div style={{ textAlign: 'left' }}>
          {parseHtmlSanitizeAddTargetToLinks(html, searchTerm)}
        </div>
      </header>
    </div>
  )
}

export default Test;