import type { PipelineSpec } from './pipelines'
import { freelancePipeline } from './pipelines'

export type Role = {
  company: string
  /** Makes the company name a link to its site. */
  companyHref?: string
  title: string
  /** Omitted where the role's location isn't worth stating. */
  location?: string
  period: string
  /** Rendered as a lead-in above the bullets. */
  blurb: string
  bullets: string[]
  stack: string[]
  link?: { label: string; href: string }
  /** Rendered under the bullets when the role's architecture is worth drawing. */
  pipeline?: PipelineSpec
}

export const experience: Role[] = [
  {
    company: 'Stears Inc',
    companyHref: 'https://stears.co',
    title: 'Data Engineer',
    location: 'Hybrid',
    period: 'Mar 2024 to Present',
    blurb:
      'Data engineer on the team behind Africa’s most comprehensive private-capital database, used by private equity firms, VCs and investment bankers evaluating African deals.',
    bullets: [
      'Own the dbt warehouse every Stears data product reads from, modelling companies & transactions, country risk and industry profiles into the tables behind each screener and rating.',
      'Replaced the filter-by-filter deal screener with plain-English search by syncing transactions into a hybrid vector engine, cutting screening from minutes to seconds.',
      'Cut ELT pipeline runtime from 15 minutes to under 5 by moving off full table reloads onto CDC via PostgreSQL logical replication.',
      'Built and run a Flask OCR document extraction service on Kubernetes, feeding multiple AI workflows that turn financial reports into structured data and taking analysts out of the manual reading loop.',
      'Automated the macro data collection behind country risk with Prefect flows that scrape central bank PDFs, HTML pages and APIs before a CrewAI agent infers and writes 100+ indicators straight to the operational layer.',
      'Led the operational data layer migration from Airtable to NocoDB with zero downtime for downstream products, cutting thousands of dollars in recurring tool spend.',
      'Built a FastAPI deduplication service for that layer, combining fuzzy matching with Claude validation and a field-by-field review UI to keep duplicate companies and funds out of the deal database.',
    ],
    stack: [
      'Python',
      'PostgreSQL',
      'dbt',
      'Prefect',
      'Airbyte',
      'Qdrant',
      'Flask',
      'FastAPI',
      'NocoDB',
      'Kubernetes',
      'Docker',
      'AWS S3',
      'Algolia',
      'CrewAI',
    ],
  },
  {
    company: 'Freelance',
    title: 'Data Engineer',
    location: 'Remote',
    period: 'Aug 2022 to Feb 2024',
    blurb:
      'Contract data engineering across client analytics platforms, alongside published research on compact deep-learning models for embedded weather forecasting.',
    bullets: [
      'Built Airflow-orchestrated pipelines on PySpark and Snowflake, replacing manual client exports with tested production tables and cutting runtimes 40% through optimised batch writes.',
      'Cut average product page query time from ~800ms to under 100ms for an e-commerce client, through indexing and schema denormalisation of the MongoDB catalog and order-history models.',
      'Co-authored peer-reviewed research on MIRNet, a compact residual network for air temperature forecasting on low-power embedded devices.',
    ],
    stack: ['PySpark', 'Airflow', 'Snowflake', 'MongoDB', 'Python'],
    link: {
      label: 'Read the paper',
      href: 'https://www.ajol.info/index.php/fuoyejet/article/view/269561',
    },
    pipeline: freelancePipeline,
  },
  {
    company: 'Impaakt',
    title: 'Data Analyst (Freelance)',
    location: 'Geneva, Switzerland, Remote',
    period: 'Jan 2022 to Feb 2024',
    blurb:
      'Qualitative and quantitative analysis of sustainability performance at globally listed corporations.',
    bullets: [
      'Wrote 310+ technical analyses on material sustainability issues, holding an average peer rating of 4.0/5.',
    ],
    stack: ['ESG analysis', 'Research', 'Data storytelling'],
  },
]
