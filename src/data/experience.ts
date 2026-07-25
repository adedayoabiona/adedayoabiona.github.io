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
      'Sole data engineer on the team behind Africa’s most comprehensive private-capital database, used by private equity firms, VCs and investment bankers evaluating African deals.',
    bullets: [
      'Built and maintained multiple dbt data models on PostgreSQL powering Stears’ core data products: a 121-model companies & transactions schema (deals, investors, M&A, debt finance, company financials), a 20-model country risk schema, and an industry profiles schema, transforming raw Airbyte-ingested data into production-ready analytical tables.',
      'Engineered a real-time data sync pipeline (PostgreSQL, SQLAlchemy, Qdrant, Prefect) that indexes African investment transactions into a hybrid vector search engine (Gemini embeddings + BM25), replacing the traditional manual screener with AI-powered natural-language search across 30+ deal dimensions and cutting customer screening time from minutes to seconds.',
      'Built an AI-driven data extraction pipeline using CrewAI and the Claude API to automate collection of African macroeconomic data from APIs, web sources and government reports. Normalised and validated data with Pydantic before upserting to Airtable, replacing manual monitoring across 50 indicators including treasury bills, inflation and CPI in all 54 African countries.',
      'Built and maintained 50+ Prefect 3.x ELT pipelines orchestrating Airbyte ingestion of 61+ raw tables into PostgreSQL, with dbt transforming models consumed by Qdrant, Algolia and AWS S3. Reduced pipeline run time by 67% (15 minutes to under 5) by replacing full table reloads with CDC via PostgreSQL logical replication.',
      'Designed, deployed and managed a Flask and OCR document extraction microservice on Kubernetes, processing 100+ financial reports weekly into structured data. Packaged with Docker and released through Git.',
      'Led an end-to-end migration of the operational data layer from Airtable to NocoDB, rebuilding 200+ SQL models and re-architecting all Airbyte ingestion connections, eliminating thousands of dollars in recurring tool costs with zero downtime for downstream data products.',
    ],
    stack: [
      'Python',
      'PostgreSQL',
      'dbt',
      'Prefect',
      'Airbyte',
      'Qdrant',
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
      'Designed and maintained 15+ scalable data pipelines orchestrated with Airflow using PySpark and Snowflake, ingesting data from 10+ REST APIs and operational databases, transforming 40+ raw data sources into tested, production ready Snowflake tables, replacing manual exports, reducing pipeline runtimes significantly by 40% through optimized batch writes, and saving clients hours of weekly data preparation.',
      'Delivered analytics-ready data marts and BI dashboards on Snowflake that gave stakeholders self-serve access to key metrics, significantly reducing recurring ad-hoc reporting requests.',
      'Designed and deployed NoSQL data models in MongoDB for an e-commerce platform, cutting average product page query time from ~800ms to under 100ms through strategic indexing and schema denormalisation across product catalogs and nested order-history documents.',
      'Co-authored peer-reviewed research on MIRNet, a compact mixed-input residual network for air temperature forecasting on low-power embedded devices, published in the FUOYE Journal of Engineering and Technology.',
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
      'Wrote 310+ technical analyses assessing the sustainability efforts of globally renowned corporations, holding an average peer rating of 4.0/5.',
      'Specialised in comprehensive written analysis of material sustainability issues, combining quantitative disclosure data with qualitative assessment of corporate impact at scale.',
    ],
    stack: ['ESG analysis', 'Research', 'Data storytelling'],
  },
]
