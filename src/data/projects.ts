/**
 * Public, readable code. Curated rather than dumped: each entry says what the
 * repo demonstrates, since a hiring engineer is skimming for signal not stars.
 */
export type Project = {
  name: string
  /** One-line hook. */
  summary: string
  /** What it shows about how I work. */
  detail: string
  stack: string[]
  repo: string
  year: string
  /** Pulls the eye to the two or three worth opening first. */
  featured?: boolean
  extraLink?: { label: string; href: string }
}

export const projects: Project[] = [
  {
    name: 'decouple',
    year: '2026',
    summary:
      'Strava to Snowflake pipeline measuring heart-rate/pace decoupling, orchestrated with Airflow and Cosmos.',
    detail:
      'Extraction is incremental, with the watermark derived from the warehouse rather than a local file, so a run that fetches but fails to load re-fetches instead of silently skipping activities. Cosmos renders each dbt model as its own Airflow task, and the marts withhold the acute:chronic workload ratio until 28 days of history exist rather than reporting a confident number off a partial window. Written to answer a real training question, so the modelling decisions had to survive contact with data I know first-hand.',
    stack: ['Airflow', 'Astronomer Cosmos', 'dbt', 'Snowflake', 'Docker', 'Python'],
    repo: 'https://github.com/adedayoabiona/decouple',
    featured: true,
  },
  {
    name: 'IremboAnalytics',
    year: '2026',
    summary:
      'dbt + DuckDB warehouse turning raw voice-AI session logs into a single analytical fact table.',
    detail:
      'Models `fact_voice_ai_sessions` for a Rwandan government services platform, flattening session data, user demographics, ASR confidence and escalation outcomes into one queryable grain. A compact end-to-end example of how I structure a warehouse: raw CSV sources, staged models, a tested fact table, exported results.',
    stack: ['dbt', 'DuckDB', 'SQL', 'Python'],
    repo: 'https://github.com/adedayoabiona/IremboAnalytics',
    featured: true,
  },
  {
    name: 'spotify-data-logger',
    year: '2024',
    summary: 'Scheduled Prefect flow that captures listening history into a running dataset.',
    detail:
      'A deliberately small production-shaped pipeline: an authenticated REST extract, a deployment defined in `prefect.yaml`, and a schedule. The same orchestration pattern I run at scale in production, sized so the whole thing can be read in one sitting.',
    stack: ['Python', 'Prefect', 'REST APIs'],
    repo: 'https://github.com/adedayoabiona/spotify-data-logger',
  },
  {
    name: 'MIRNet',
    year: '2023',
    summary:
      'Mixed-input residual network for air-temperature forecasting on low-power embedded devices.',
    detail:
      'The model implementation behind the peer-reviewed paper in the FUOYE Journal of Engineering and Technology. Accuracy had to be traded against model compactness so the network could run on constrained embedded hardware rather than a server.',
    stack: ['Python', 'Deep learning', 'Jupyter'],
    repo: 'https://github.com/adedayoabiona/MIRNet',
    featured: true,
    extraLink: {
      label: 'Published paper',
      href: 'https://www.ajol.info/index.php/fuoyejet/article/view/269561',
    },
  },
  {
    name: 'Chemotronix',
    year: '2021',
    summary:
      'IoT + ML system predicting CO₂ emissions for a given location and time, the award-winning build.',
    detail:
      'End-to-end: NodeMCU firmware collecting sensor readings, a machine-learning model forecasting emissions, and a web app for access. This is the project behind both Data Science Nigeria awards, the AI for Energy Hackathon placing and the carbon-reduction poster award.',
    stack: ['Python', 'Machine learning', 'NodeMCU', 'IoT', 'Web app'],
    repo: 'https://github.com/adedayoabiona/Chemotronix',
    extraLink: {
      label: 'Hackathon award',
      href: 'https://drive.google.com/file/d/1ygq-ueNa_0XG46PNga1iGDWKsW9HCVkI/view?usp=sharing',
    },
  },
  {
    name: 'DataAnalytics-Assessment',
    year: '2025',
    summary: 'Four analytical SQL problems on a fintech schema, solved and documented.',
    detail:
      'High-value customer identification, transaction-frequency segmentation, 365-day inactivity detection and a CLV estimate, written with CTEs and unit-aware currency conversion. The README documents the reasoning and the edge cases, including a null-name field worked around by concatenation.',
    stack: ['SQL', 'MySQL', 'CTEs', 'Window functions'],
    repo: 'https://github.com/adedayoabiona/DataAnalytics-Assessment',
  },
  {
    name: 'WeatherWAN-ML',
    year: '2023',
    summary: 'LSTM forecasting model for a physical weather-station deployment.',
    detail:
      'Sequence modelling on sensor time series, and the precursor to the MIRNet research: the work that established which input parameters actually carried forecasting signal.',
    stack: ['Python', 'LSTM', 'Jupyter'],
    repo: 'https://github.com/adedayoabiona/WeatherWAN-ML',
  },
]

/** Udacity nanodegree coursework, grouped so it reads as coursework not portfolio work. */
export const coursework = {
  label: 'AI Engineering with Python Nanodegree coursework',
  repos: [
    { name: 'ImageClassifier', href: 'https://github.com/adedayoabiona/ImageClassifier' },
    { name: 'DogIdentifier', href: 'https://github.com/adedayoabiona/DogIdentifier' },
  ],
}
