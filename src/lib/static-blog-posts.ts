/**
 * Five hand-authored, SEO-optimized blog posts.
 *
 * These ship with the marketing bundle (no DB roundtrip) so they're always
 * available — useful for SEO seeding, sharing previews, and as content the
 * super-admin can later edit/replace via the CMS.
 *
 * They're MERGED with dynamic CMS posts on the /resources/blog listing.
 * On the single-post page, the static catalog is checked first; if not
 * found we fall through to the dynamic tRPC fetch.
 *
 * Cover images are hot-linked from Unsplash (CDN-served, no auth required,
 * 1200px wide @ q=80 for retina). Replace any URL freely.
 */

export interface StaticBlogPost {
  slug: string;
  title: string;
  excerpt: string;
  contentHtml: string;
  coverImageUrl: string;
  category: { slug: string; name: string };
  authorName: string;
  publishedAt: number;       // unix epoch (seconds)
  updatedAt: number;
  metaTitle: string;
  metaDescription: string;
  readingTimeMin: number;
}

// 2026-05-11 in UTC
const D = (iso: string) => Math.floor(new Date(iso).getTime() / 1000);

export const STATIC_BLOG_POSTS: StaticBlogPost[] = [
  {
    slug: "gstr1-vs-gstr3b-complete-2026-filing-guide-for-indian-cas",
    title: "GSTR-1 vs GSTR-3B: The Complete 2026 Filing Guide for Indian CAs",
    excerpt:
      "GSTR-1 reports outward supplies; GSTR-3B is the summary return with tax payment. Knowing the difference — and the due dates, late fees, and QRMP nuances — is non-negotiable for any CA filing for clients in 2026.",
    coverImageUrl:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80&auto=format&fit=crop",
    category: { slug: "tax-updates", name: "Tax Updates" },
    authorName: "CAGOS Editorial",
    publishedAt: D("2026-05-08T08:00:00Z"),
    updatedAt: D("2026-05-10T08:00:00Z"),
    metaTitle: "GSTR-1 vs GSTR-3B Guide 2026 | Due Dates, Penalties, QRMP",
    metaDescription:
      "Comprehensive 2026 guide to GSTR-1 vs GSTR-3B for Indian CAs — monthly vs quarterly (QRMP), due dates, late fees, and common reconciliation traps.",
    readingTimeMin: 7,
    contentHtml: `
<p>Every Indian CA managing GST clients juggles two returns that look similar but serve very different purposes — <strong>GSTR-1</strong> and <strong>GSTR-3B</strong>. Confusing them or missing their staggered due dates is the most common cause of late-fee notices in any growing practice.</p>

<h2>The fundamental difference</h2>
<p><strong>GSTR-1</strong> is the <em>details-level return</em>: every B2B invoice, B2C summary, credit/debit note, and HSN summary for outward supplies. It's how the government — and your client's buyers — see what you've sold.</p>
<p><strong>GSTR-3B</strong> is the <em>summary return + tax payment</em>: net outward supplies, eligible ITC, tax liability, and the actual cash/credit utilization that settles GST for the period.</p>
<blockquote>Think of GSTR-1 as the receipt book and GSTR-3B as the bank deposit slip. Both are required; one without the other isn't compliance.</blockquote>

<h2>Filing frequency depends on turnover</h2>
<ul>
  <li><strong>Turnover &gt; ₹5 Cr</strong> — Monthly. GSTR-1 by the 11th, GSTR-3B by the 20th of the following month.</li>
  <li><strong>Turnover ≤ ₹5 Cr (opted into QRMP)</strong> — Quarterly returns. GSTR-1 by the 13th of the month following each quarter, GSTR-3B by the 22nd (Group A states) or 24th (Group B states).</li>
  <li><strong>QRMP monthly tax payment</strong> — Even though returns are quarterly, tax is paid monthly via Form GST PMT-06 by the 25th. Easy to forget; auto-reminders are worth their weight in gold.</li>
</ul>

<h2>The reconciliation that decides everything</h2>
<p>The most expensive mistake is treating GSTR-1 and GSTR-3B as independent. They <em>must</em> reconcile, because the GSTR-2B that your client's buyers see is derived from your GSTR-1. If your GSTR-3B shows ITC you've already claimed but doesn't match the invoices reflected in your suppliers' GSTR-1 (their GSTR-2B for you), expect a Section 16(2)(aa) notice.</p>
<p>Modern practice management software (<a href="/products/compliance">like our Compliance Hub</a>) auto-reconciles GSTR-1 against GSTR-3B and flags drift before filing. The manual Excel approach scales until ~10 clients.</p>

<h2>Late fees aren't the real cost</h2>
<p>Late fees are ₹50/day (CGST + SGST) for normal taxpayers and ₹20/day for nil returns, capped at ₹10,000 per return. Annoying but bounded.</p>
<p>The real cost is loss of input tax credit. ITC for any FY can only be claimed up to <strong>30 November</strong> of the following year. Miss it and your client's working capital takes a permanent hit. This is why deadline tracking with client-by-client visibility — not a wall calendar — separates compliant firms from firms that pay penalties out of their own pocket.</p>

<h2>What every CA firm should automate in 2026</h2>
<ul>
  <li>Auto-creation of GSTR-1 and GSTR-3B tasks for every client on the 1st of each month/quarter</li>
  <li>WhatsApp reminders to clients at T-15, T-7, and T-3 days for sales register upload</li>
  <li>One-click GSTR-1 vs GSTR-3B reconciliation before filing</li>
  <li>Per-client dashboard showing pending, filed, and ITC claimed YTD</li>
  <li>Late-fee calculator that updates daily after due date</li>
</ul>

<p>If your firm is still emailing Excel templates and chasing replies, you're paying a hidden tax on partner time. <a href="/products/compliance">See how Compliance Hub turns the 2026 GST calendar into a kanban that staff actually use.</a></p>
    `.trim(),
  },

  {
    slug: "compliance-calendar-2026-27-every-ca-deadline-at-a-glance",
    title: "Compliance Calendar 2026–27: Every CA Deadline at a Glance",
    excerpt:
      "From GSTR-1 (11th monthly) to MGT-7 (28 November) — here's the single-source-of-truth statutory calendar Indian CA firms can pin above every desk for FY 2026–27.",
    coverImageUrl:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1200&q=80&auto=format&fit=crop",
    category: { slug: "compliance", name: "Compliance" },
    authorName: "CAGOS Editorial",
    publishedAt: D("2026-05-05T08:00:00Z"),
    updatedAt: D("2026-05-09T08:00:00Z"),
    metaTitle: "CA Compliance Calendar 2026-27 | GST, ITR, TDS, ROC Due Dates",
    metaDescription:
      "Complete statutory compliance calendar for Indian CA firms FY 2026-27 — GST, ITR, TDS, ROC, EPF, Professional Tax due dates with filing forms.",
    readingTimeMin: 6,
    contentHtml: `
<p>Every April, every CA in India re-rebuilds the same spreadsheet — statutory due dates for the new FY, colour-coded by category. Here's the one we use across our 500+ CA-firm customer base. Copy it, pin it, automate it.</p>

<h2>Goods & Services Tax (GST)</h2>
<table>
  <thead><tr><th>Form</th><th>Frequency</th><th>Due date</th><th>Who</th></tr></thead>
  <tbody>
    <tr><td>GSTR-1</td><td>Monthly</td><td>11th of next month</td><td>Turnover &gt; ₹5 Cr</td></tr>
    <tr><td>GSTR-1 (QRMP)</td><td>Quarterly</td><td>13th of Jan/Apr/Jul/Oct</td><td>Turnover ≤ ₹5 Cr opted in</td></tr>
    <tr><td>GSTR-3B</td><td>Monthly</td><td>20th of next month</td><td>Turnover &gt; ₹5 Cr</td></tr>
    <tr><td>GSTR-3B (QRMP)</td><td>Quarterly</td><td>22nd/24th of Jan/Apr/Jul/Oct</td><td>QRMP scheme</td></tr>
    <tr><td>GST PMT-06</td><td>Monthly</td><td>25th of next month</td><td>QRMP monthly tax payment</td></tr>
    <tr><td>GSTR-9</td><td>Annual</td><td>31 December 2027</td><td>All regular taxpayers</td></tr>
    <tr><td>GSTR-9C</td><td>Annual</td><td>31 December 2027</td><td>Turnover &gt; ₹5 Cr</td></tr>
  </tbody>
</table>

<h2>Income Tax (ITR + Advance Tax)</h2>
<ul>
  <li><strong>Advance Tax Q1</strong> — 15 June 2026 (15% of estimated liability)</li>
  <li><strong>Advance Tax Q2</strong> — 15 September 2026 (45% cumulative)</li>
  <li><strong>Advance Tax Q3</strong> — 15 December 2026 (75% cumulative)</li>
  <li><strong>Advance Tax Q4</strong> — 15 March 2027 (100% — final adjustment)</li>
  <li><strong>ITR — Non-audit</strong> — 31 July 2026 (salaried, freelancers, ITR-1/2/3/4)</li>
  <li><strong>ITR — Audit cases</strong> — 31 October 2026 (companies, LLPs, business under audit)</li>
  <li><strong>Tax audit report (Form 3CD)</strong> — 30 September 2026</li>
  <li><strong>ITR — Partners of audited firms</strong> — 30 November 2026</li>
  <li><strong>Belated / revised ITR</strong> — 31 December 2026</li>
</ul>

<h2>TDS (Form 24Q / 26Q / 27Q)</h2>
<ul>
  <li><strong>TDS challan deposit</strong> — 7th of next month (March deposits: 30 April)</li>
  <li><strong>Q1 return</strong> — 31 July 2026</li>
  <li><strong>Q2 return</strong> — 31 October 2026</li>
  <li><strong>Q3 return</strong> — 31 January 2027</li>
  <li><strong>Q4 return</strong> — 31 May 2027</li>
  <li><strong>Form 16 issuance</strong> — 15 June 2026 (for FY 2025-26 employees)</li>
  <li><strong>Form 16A</strong> — 15 days from due date of relevant TDS return</li>
</ul>

<h2>ROC / MCA (Companies Act, LLP Act)</h2>
<ul>
  <li><strong>AOC-4</strong> — 29 October 2026 (Balance Sheet + P&amp;L filing)</li>
  <li><strong>MGT-7 / MGT-7A</strong> — 28 November 2026 (Annual Return)</li>
  <li><strong>DIR-3 KYC</strong> — 30 September 2026 (every director with a DIN)</li>
  <li><strong>Form 11 (LLP)</strong> — 30 May 2026 (Annual Return)</li>
  <li><strong>Form 8 (LLP)</strong> — 30 October 2026 (Statement of Account &amp; Solvency)</li>
</ul>

<h2>Labour / Statutory (EPF, ESI, PT)</h2>
<ul>
  <li><strong>EPF / ESI ECR</strong> — 15th of next month</li>
  <li><strong>Professional Tax</strong> — State-specific. Maharashtra: 10th monthly. Karnataka: 20th monthly. Always verify with state portal.</li>
</ul>

<h2>Set this up once, never miss again</h2>
<p>A static calendar tells you what's due. A working <a href="/products/compliance">compliance system</a> generates tasks for every client, every period, automatically — and reminds your team and your client via WhatsApp 15, 7, and 3 days before each filing.</p>
    `.trim(),
  },

  {
    slug: "switching-from-tally-to-practice-management-software",
    title: "Switching from Tally to Practice Management Software: A CA's Migration Guide",
    excerpt:
      "Tally is a great accounting system; it's not a practice management OS. Here's the honest playbook for CA firms ready to evolve — what to migrate, what to keep, and how to do it without disrupting client work.",
    coverImageUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80&auto=format&fit=crop",
    category: { slug: "practice-management", name: "Practice Management" },
    authorName: "CAGOS Editorial",
    publishedAt: D("2026-04-28T08:00:00Z"),
    updatedAt: D("2026-05-02T08:00:00Z"),
    metaTitle: "Tally to Practice Management Software | CA Firm Migration Guide",
    metaDescription:
      "Step-by-step migration playbook for Indian CA firms moving from Tally-only workflows to a full practice management platform — without losing client data or trust.",
    readingTimeMin: 8,
    contentHtml: `
<p>Almost every CA firm in India runs on Tally. It's brilliant at what it does — voucher entry, books of account, statutory reports for a single entity. But once your firm grows past 25 clients, Tally stops being enough because <strong>Tally never claimed to be a firm-OS</strong>. That's where the gap shows up.</p>

<h2>What Tally does brilliantly — keep it</h2>
<ul>
  <li>Per-client books, ledger entry, voucher posting</li>
  <li>GST computation, return generation, JSON export</li>
  <li>Balance sheet, P&amp;L, trial balance for audit prep</li>
  <li>TDS deduction, certificate generation</li>
  <li>Inventory + stock for trading-business clients</li>
</ul>

<h2>What Tally was never built for — this is where you bleed time</h2>
<ul>
  <li><strong>Client relationship management</strong> — Who's onboarded? Who's pending? Who renewed?</li>
  <li><strong>Internal workflow</strong> — Which staff is doing which task for which client? Who's reviewed it?</li>
  <li><strong>Compliance deadline tracking</strong> — Not a single calendar, but per-client, per-period state</li>
  <li><strong>Document collection from clients</strong> — Today this is WhatsApp messages + email + reminder calls</li>
  <li><strong>Internal time tracking + billable hours</strong> — For retainer billing and capacity planning</li>
  <li><strong>HRMS</strong> — Attendance, articleship, payroll for your team</li>
  <li><strong>Engagement letters, invoices, payment collection</strong> from clients</li>
</ul>

<h2>The migration plan that doesn't break your practice</h2>

<h3>Phase 1 — Run in parallel (weeks 1–4)</h3>
<p>Don't touch Tally. Import your client list into a CRM. Onboard your 5 highest-revenue clients to a portal so they upload documents instead of WhatsApping you photos. Track which staff is doing which task in a kanban. <strong>You'll feel relief within two weeks</strong> because the "what's pending" question gets answered without asking three people.</p>

<h3>Phase 2 — Replace the Excel sheets (weeks 5–8)</h3>
<p>The hidden Excel sheets — staff capacity, compliance deadlines, engagement letters, invoice tracking — these are what's actually killing your weekends. Move them into one system. Tally still handles books.</p>

<h3>Phase 3 — Connect Tally to your practice OS (weeks 9–12)</h3>
<p>Most modern practice management platforms can import Tally trial balance or sync via XML. You're not migrating <em>data</em> — you're making Tally one of many integrations, with your practice OS as the source of truth for everything <em>around</em> the books.</p>

<h2>What to look for when evaluating</h2>
<ul>
  <li>Multi-tenant SaaS so each partner sees only their clients</li>
  <li>Native HRMS for articleship + payroll (don't run Tally for HR)</li>
  <li>Compliance auto-task generation across GST, ITR, TDS, ROC</li>
  <li>White-labeled client portal with your firm's brand</li>
  <li>WhatsApp integration for client reminders (this single feature saves ~8 hours/staff/week)</li>
  <li>Razorpay / Cashfree built-in for invoice collection</li>
</ul>

<h2>The case for moving now</h2>
<p>2026 is the year when the next generation of CAs you hire will simply not tolerate manual workflow. They've used Notion in college, Slack in their internships, and they expect the same in their first articleship. Firms still running on Tally-only retain articles at noticeably lower rates than firms that have modernized internal workflow. <a href="/solutions/smb">CAGOS was built for this transition.</a></p>
    `.trim(),
  },

  {
    slug: "7-workflow-automations-that-save-ca-firms-10-hours-per-week",
    title: "7 Workflow Automations That Save Indian CA Firms 10+ Hours a Week",
    excerpt:
      "The boring truth: most of a CA firm's hours go into chasing — chasing documents, chasing payments, chasing internal handoffs. Here are 7 specific automations that, deployed together, return a full day per staff member every week.",
    coverImageUrl:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&q=80&auto=format&fit=crop",
    category: { slug: "practice-management", name: "Practice Management" },
    authorName: "CAGOS Editorial",
    publishedAt: D("2026-04-20T08:00:00Z"),
    updatedAt: D("2026-04-25T08:00:00Z"),
    metaTitle: "7 Workflow Automations for CA Firms | Save 10+ Hours Weekly",
    metaDescription:
      "Seven specific automations Indian CA firms can deploy this quarter — WhatsApp reminders, doc requests, auto-invoicing — that recover 10+ hours of partner time per week.",
    readingTimeMin: 6,
    contentHtml: `
<p>The most expensive hour in a CA firm isn't the audit hour. It's the hour a senior partner spends WhatsApping a client to ask, again, for last month's sales register. Multiplied across 60 clients × 12 months, that's the cost of <em>not</em> automating.</p>

<h2>1. Auto-create compliance tasks every month</h2>
<p>On the 1st of every month, your system should create GSTR-1, GSTR-3B, and TDS-challan tasks for every applicable client — not as wishful Excel rows, but as real assigned tasks with due dates, document requirements, and visible status. Saves: ~3 hours/month of partner planning time.</p>

<h2>2. WhatsApp document reminders to clients</h2>
<p>"Please send your purchase register" sent automatically at T-15, T-7, and T-3 days before each GSTR-3B filing. With templated messages and the client name auto-merged. Most CAs do this manually for 50+ clients each month — 100+ messages. Saves: <strong>6–8 hours per staff member per week</strong>.</p>

<h3>What to template</h3>
<ul>
  <li>Sales/purchase register requests with deadline + upload link</li>
  <li>Outstanding payment reminders at 7-day intervals</li>
  <li>DSC expiry alerts (30 days before)</li>
  <li>Year-end ITR document checklists in May/June</li>
</ul>

<h2>3. Auto-generate invoices when work is marked complete</h2>
<p>When a staff member moves a compliance task from "in progress" to "completed", the engagement letter + retainer rate fires an invoice. Send it to the client with a Razorpay link automatically. The invoice should not have to be a separate decision.</p>

<h2>4. Recurring monthly retainers via UPI mandate</h2>
<p>For clients on monthly retainer, set up a one-time UPI mandate via Razorpay or Cashfree. The payment debits automatically on the 1st of each month. Stops the "Sir/Ma'am, your January retainer is pending" cycle that consumes 2–3 hours per week.</p>

<h2>5. Escalation on stalled tasks</h2>
<p>If a compliance task has been "awaiting documents" for &gt; 7 days, auto-escalate to the engagement partner. They get a single weekly digest of "10 clients I should personally call this week" — instead of finding out on the 19th that 12 GSTR-3Bs are at risk.</p>

<h2>6. Article clerk attendance + leave tracking</h2>
<p>ICAI mandates 35 months of articleship; partners are accountable. A simple GPS-verified attendance app + leave workflow keeps the Form 102/103 records airtight without paper registers. Removes ~1.5 hours/week of admin from a senior staff.</p>

<h2>7. End-of-month firm dashboard</h2>
<p>On the last day of each month, an automated report goes to the partner email:</p>
<ul>
  <li>Filings completed vs pending (by category)</li>
  <li>Revenue collected vs outstanding</li>
  <li>Staff utilization (hours per staff vs target)</li>
  <li>Clients at risk (stalled tasks, overdue invoices, expired DSC)</li>
</ul>
<p>This is the report partners normally piece together over a Saturday morning. Automating it costs nothing once the data is in one system.</p>

<h2>Adding it up</h2>
<p>Implementing all seven typically recovers <strong>10–14 hours per staff member per week</strong> in a 5-person firm. That's ~30 percent more billable capacity without hiring. It's also why article clerks now expect modern tooling — and why the firms that don't modernize are seeing visible attrition.</p>
<p><a href="/products/workflow">See the Workflow Engine module →</a></p>
    `.trim(),
  },

  {
    slug: "itr-audit-documentation-checklist-fy-2025-26",
    title: "ITR Audit Cases for FY 2025–26: The Documentation Checklist for CAs",
    excerpt:
      "Tax audit season is the most concentrated quarter of every CA firm's year. Here's the consolidated documentation checklist — by entity type — that lets your team work in parallel and finish before 30 September.",
    coverImageUrl:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80&auto=format&fit=crop",
    category: { slug: "tax-updates", name: "Tax Updates" },
    authorName: "CAGOS Editorial",
    publishedAt: D("2026-04-12T08:00:00Z"),
    updatedAt: D("2026-04-15T08:00:00Z"),
    metaTitle: "ITR Audit Checklist FY 2025-26 | CA Tax Audit Documentation",
    metaDescription:
      "Comprehensive ITR audit (Form 3CD) documentation checklist for Indian CA firms covering Pvt Ltd, LLP, Partnership, and Proprietorship clients for FY 2025-26.",
    readingTimeMin: 9,
    contentHtml: `
<p>Tax audit season — July to September — is when your firm's bandwidth gets tested most. The work is concentrated, the deadline (30 September for Form 3CD, 31 October for ITR filing) is hard, and the documents always trickle in late. The fix is starting the documentation request in <strong>May</strong>, not August.</p>

<h2>When tax audit applies</h2>
<ul>
  <li><strong>Business</strong> — Turnover &gt; ₹1 Cr in normal cases, ₹10 Cr if cash receipts &amp; payments are ≤ 5% of total</li>
  <li><strong>Profession</strong> — Gross receipts &gt; ₹50 lakh</li>
  <li><strong>Presumptive (44AD/44ADA/44AE)</strong> — Income claimed &lt; the prescribed presumptive rate, AND income exceeds the basic exemption limit</li>
  <li><strong>Section 44AB(d)</strong> — Profit shown lower than 6%/8% under 44AD</li>
</ul>

<h2>Master documentation checklist (every audit client)</h2>
<ul>
  <li>PAN, Aadhaar, GSTIN, IEC (if exporter)</li>
  <li>MOA + AOA (companies), Partnership Deed, LLP Agreement, Trust Deed (as applicable)</li>
  <li>Books of account — Tally backup, ledger PDFs, trial balance as on 31 March 2026</li>
  <li>Bank statements (all accounts) for the full FY</li>
  <li>Audited financial statements of previous year</li>
  <li>Form 26AS, AIS, TIS — downloaded from the e-filing portal</li>
  <li>All GST returns filed during FY (GSTR-1, GSTR-3B, GSTR-9, GSTR-9C)</li>
  <li>TDS challans + Form 16/16A + quarterly TDS returns</li>
  <li>Advance tax challans</li>
  <li>Form 3CD prior year (for comparison disclosure)</li>
</ul>

<h2>Entity-specific add-ons</h2>

<h3>For Private Limited / OPC</h3>
<ul>
  <li>Board resolution for adoption of accounts</li>
  <li>List of shareholders (any changes during FY)</li>
  <li>Related-party transactions register</li>
  <li>Director DIN + KYC status</li>
  <li>CSR expenditure (if applicable under Section 135)</li>
</ul>

<h3>For LLP</h3>
<ul>
  <li>Form 8 and Form 11 filings of prior year</li>
  <li>Partner capital contribution + remuneration schedule</li>
</ul>

<h3>For Partnership Firm</h3>
<ul>
  <li>Partnership deed (signed copy with all amendments)</li>
  <li>Profit-sharing ratio, remuneration, interest on capital (per deed)</li>
  <li>Partner-wise capital account</li>
</ul>

<h3>For Proprietorship</h3>
<ul>
  <li>Personal vs business bank account separation</li>
  <li>Drawings / household expenses ledger</li>
  <li>Statement of personal assets (for high-value proprietors)</li>
</ul>

<h2>Form 3CD-specific schedules</h2>
<p>Don't leave these for the last week:</p>
<ul>
  <li><strong>Clause 13</strong> — Method of accounting + any changes</li>
  <li><strong>Clause 18</strong> — Depreciation: opening WDV, additions (date-wise), deletions, closing WDV</li>
  <li><strong>Clause 21</strong> — Disallowable expenses, late TDS deduction/payment</li>
  <li><strong>Clause 26</strong> — Section 43B items (statutory dues paid late)</li>
  <li><strong>Clause 32</strong> — Brought-forward losses, depreciation set-off</li>
  <li><strong>Clause 34</strong> — TDS/TCS compliance for the year</li>
</ul>

<h2>The system that actually saves the season</h2>
<p>The firms that hit 30 September consistently have one thing in common: they start sending the document checklist to clients on 1 May, with WhatsApp follow-ups on the 15th of every month, escalating to the partner if the client hasn't responded by July. <a href="/products/document-vault">Document Vault</a> automates exactly this — and our <a href="/products/compliance">Compliance module</a> creates the ITR-audit task for every applicable client on schedule.</p>
    `.trim(),
  },
];

/** Quick lookup map by slug */
export const STATIC_BLOG_POSTS_BY_SLUG: Record<string, StaticBlogPost> = Object.fromEntries(
  STATIC_BLOG_POSTS.map((p) => [p.slug, p]),
);
