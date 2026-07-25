/**
 * Pipeline diagrams as data. The renderer computes all geometry from these
 * specs, so a diagram can have any number of columns and any number of items
 * per stacked column.
 */

/** A column of small boxes, e.g. the sources feeding a pipeline. */
export type StackColumn = {
  kind: 'stack'
  /** Caption above the column, rendered upper-case. */
  label: string
  items: string[]
  /** Outlines the boxes more brightly. Used for the terminal "serve" column. */
  emphasised?: boolean
}

/** A single large box, e.g. the warehouse. */
export type NodeColumn = {
  kind: 'node'
  label: string
  title: string
  sub: string
  glyph: string
}

export type PipelineColumn = StackColumn | NodeColumn

export type PipelineSpec = {
  id: string
  /** Accessible name and long description. */
  title: string
  description: string
  columns: PipelineColumn[]
  orchestrator: {
    name: string
    detail: string
    /** Right-aligned headline result, e.g. a runtime improvement. */
    result?: string
  }
  /** Small label above the gap that follows the given column index. */
  edgeNote?: { afterColumn: number; label: string }
  caption: string
}

export const stearsPipeline: PipelineSpec = {
  id: 'stears',
  title: 'The production data pipeline I own at Stears',
  description:
    'Data flows from REST APIs, Airtable, Google Sheets, the NocoDB operational layer, financial PDFs and web and government reports into Airbyte, which ingests 61 or more raw tables into PostgreSQL. dbt transforms those into more than 141 tested models, which are served back out to Qdrant vector search, Algolia, AWS S3, Airtable, Google Sheets, and the product and Metabase dashboards. Prefect orchestrates every stage.',
  columns: [
    {
      kind: 'stack',
      label: 'extract',
      items: [
        'REST APIs',
        'Airtable',
        'Google Sheets',
        'NocoDB ops layer',
        'Financial PDFs',
        'Web & gov reports',
      ],
    },
    { kind: 'node', label: 'ingest', title: 'Airbyte', sub: '61+ raw tables', glyph: '⇉' },
    { kind: 'node', label: 'load', title: 'PostgreSQL', sub: 'raw → staging', glyph: '▣' },
    { kind: 'node', label: 'transform', title: 'dbt', sub: '141+ tested models', glyph: '⌬' },
    {
      kind: 'stack',
      label: 'serve',
      emphasised: true,
      items: [
        'Qdrant vector search',
        'Algolia',
        'AWS S3',
        'Airtable',
        'Google Sheets',
        'Product & Metabase',
      ],
    },
  ],
  orchestrator: {
    name: 'Prefect 3.x',
    detail: '50+ flows · scheduling · retries · alerting · CI/CD',
    result: '15 min → <5 min',
  },
  edgeNote: { afterColumn: 1, label: 'CDC' },
  caption: 'The production pipeline I own end to end, from ingestion through to the services that read it.',
}

export const freelancePipeline: PipelineSpec = {
  id: 'freelance',
  title: 'Client analytics pipelines built on Airflow, PySpark and Snowflake',
  description:
    'Data is pulled from more than 10 REST APIs, operational databases and flat-file exports, extracted with PySpark across 40 or more raw sources, landed in Snowflake as raw and staging tables, then modelled into tested production-ready Snowflake tables that feed data marts, BI dashboards and self-serve metrics. Airflow orchestrates 15 or more pipelines, and optimised batch writes cut runtimes by 40 percent.',
  columns: [
    {
      kind: 'stack',
      label: 'extract',
      items: ['10+ REST APIs', 'Operational databases', 'Flat-file exports'],
    },
    { kind: 'node', label: 'ingest', title: 'PySpark', sub: '40+ raw sources', glyph: '⇉' },
    { kind: 'node', label: 'load', title: 'Snowflake', sub: 'raw → staging', glyph: '▣' },
    {
      kind: 'node',
      label: 'transform',
      title: 'Snowflake models',
      sub: 'tested, production-ready',
      glyph: '⌬',
    },
    {
      kind: 'stack',
      label: 'serve',
      emphasised: true,
      items: ['Data marts', 'BI dashboards', 'Self-serve metrics'],
    },
  ],
  orchestrator: {
    name: 'Airflow',
    detail: '15+ pipelines · DAG scheduling · retries · backfills',
    result: '40% faster',
  },
  edgeNote: { afterColumn: 1, label: 'batch writes' },
  caption:
    'Replaced manual exports for client analytics teams. Optimised batch writes took 40% off pipeline runtimes.',
}
