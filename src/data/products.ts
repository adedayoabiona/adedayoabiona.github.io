/**
 * Products whose data layer I built or own at Stears. The company work itself
 * lives in private repos, so shipped products link to their public launch post.
 * Anything still pre-launch carries a status flag instead of a link.
 */
export type Product = {
  name: string
  year: string
  /** The user-facing problem, in plain language. */
  problem: string
  /** What I built underneath it. */
  contribution: string
  stack: string[]
  href?: string
  linkLabel?: string
  /** Shown in place of a launch link for work that hasn't shipped publicly. */
  status?: string
}

export const products: Product[] = [
  {
    name: 'Fund vehicles database & screener',
    year: '2026',
    problem:
      'There was no single place to answer "who is raising capital in Africa right now?" across venture capital, private equity and infrastructure funds.',
    contribution:
      'Built the ingestion and dbt models behind the fund vehicles database, so the screener can filter by region, sector, fund size and vintage year and return a precise answer in seconds.',
    stack: ['dbt', 'PostgreSQL', 'Airbyte', 'Prefect'],
    href: 'https://www.linkedin.com/posts/stears_stears-now-has-a-database-of-fund-vehicles-activity-7477725035265236992-6u-m',
    linkLabel: 'Launch post',
  },
  {
    name: 'Country risk ratings, all 54 markets',
    year: '2025',
    problem:
      'No single source rated every African market on fiscal, political and economic risk with forward-looking macro data attached.',
    contribution:
      'Own the 20-model country risk dbt schema and the CrewAI + Claude extraction pipeline that keeps 50 macro indicators current across all 54 countries (treasury bills, inflation, CPI, FX), validated with Pydantic before it ever reaches the product.',
    stack: ['dbt', 'PostgreSQL', 'CrewAI', 'Claude API', 'Pydantic', 'Prefect'],
    href: 'https://www.linkedin.com/posts/stears_country-risk-ratings-are-now-live-across-activity-7460341742475841536-GAmv',
    linkLabel: 'Launch post',
  },
  {
    name: 'Country comparison & benchmarking',
    year: '2026',
    problem:
      'Comparing Ghana’s political risk to Nigeria’s meant pulling separate country reports and reconciling them by hand.',
    contribution:
      'The side-by-side comparison view reads directly from the risk and macro models I maintain, joined against the transactions and investor tables. One query surface instead of a multi-source research exercise.',
    stack: ['dbt', 'PostgreSQL', 'Airbyte', 'Prefect'],
    href: 'https://www.linkedin.com/posts/stears_how-does-ghanas-political-risk-compare-to-activity-7485323138256510976-QTyh',
    linkLabel: 'Launch post',
  },
  {
    name: 'Transactions screener & deals database',
    year: '2024',
    problem:
      'Stears covered macro data but not the private company and transaction data that 15 African PE funds needed during deal origination.',
    contribution:
      'Built the 121-model companies & transactions dbt schema (deals, investors, M&A, debt finance, company financials), turning raw Airbyte-ingested sources into the production tables the screener queries.',
    stack: ['dbt', 'PostgreSQL', 'Airbyte', 'Prefect'],
    href: 'https://www.linkedin.com/posts/preston-timeyin-ideh-06484775_five-months-ago-stears-began-working-with-activity-7264304319422717952-dq0d',
    linkLabel: 'Launch post',
  },
  {
    name: 'Stears / Ventures Platform Liquidity Index',
    year: '2025',
    problem:
      'Africa’s exit landscape had no systematic benchmark, so LPs could not price liquidity risk or set evidence-based return expectations.',
    contribution:
      'The index is computed on consolidated, verified deal records: the companies & transactions schema I model. Confidential GP submissions flow through the same tested pipeline that produces the Liquidity Activity Score.',
    stack: ['dbt', 'PostgreSQL', 'Python'],
    href: 'https://www.linkedin.com/posts/stears_stears-venturesplatform-privatecapital-activity-7396477460671889408-Ha0I',
    linkLabel: 'Launch post',
  },
  {
    name: 'AI-powered transaction search',
    year: '2026',
    problem:
      'Analysts screening African deals work a filter-by-filter screener, translating a research question into a dozen dropdowns before getting an answer.',
    contribution:
      'Engineered the real-time sync pipeline that indexes every transaction into a hybrid vector search engine (Gemini embeddings plus BM25), so a plain-English question resolves across 30+ deal dimensions and screening drops from minutes to seconds.',
    stack: ['PostgreSQL', 'SQLAlchemy', 'Qdrant', 'Prefect', 'Gemini embeddings'],
    status: 'In beta, not yet launched',
  },
]
