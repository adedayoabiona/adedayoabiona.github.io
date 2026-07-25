export type SkillGroup = {
  label: string
  /** Mono prefix shown before the group name, e.g. 01. */
  index: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    index: '01',
    label: 'Languages',
    items: ['Python', 'SQL', 'JavaScript'],
  },
  {
    index: '02',
    label: 'Data Engineering & Orchestration',
    items: ['Prefect', 'dbt', 'Airflow', 'Spark', 'Airbyte', 'n8n'],
  },
  {
    index: '03',
    label: 'Warehouses & Stores',
    items: ['PostgreSQL', 'BigQuery', 'Snowflake', 'MongoDB', 'Qdrant', 'DuckDB'],
  },
  {
    index: '04',
    label: 'Cloud & DevOps',
    items: [
      'AWS (S3, Glue, Redshift)',
      'GCP',
      'Azure',
      'Microsoft Fabric',
      'Docker',
      'Kubernetes',
      'GitHub Actions',
    ],
  },
  {
    index: '05',
    label: 'Observability & BI',
    items: ['Grafana', 'Metabase', 'Git'],
  },
]

export type Certification = {
  issuer: string
  name: string
  href: string
  /** The tooling the certification actually examines, so the badge carries weight. */
  skills: string[]
}

export const certifications: Certification[] = [
  {
    issuer: 'Microsoft Certified',
    name: 'Fabric Data Engineer Associate',
    href: 'https://learn.microsoft.com/api/credentials/share/en-us/Adedayo-3121/E332C16A0A40E6A1?sharingId=B7995BF681002EA2',
    skills: [
      'Microsoft Fabric',
      'Lakehouse',
      'Delta Lake',
      'Data Factory',
      'PySpark',
      'T-SQL',
      'KQL',
      'Medallion architecture',
    ],
  },
  {
    issuer: 'DataCamp',
    name: 'Associate Data Engineer',
    href: 'https://www.datacamp.com/certificate/DEA0011082475513',
    skills: [
      'Python',
      'SQL',
      'ETL design',
      'Data warehousing',
      'PostgreSQL',
      'Data modelling',
      'Airflow',
    ],
  },
  {
    issuer: 'Udacity',
    name: 'AI Engineering with Python Nanodegree',
    href: 'http://www.udacity.com/certificate/e/7eda85e2-6c23-11ee-a407-831f2fd3f8c5',
    skills: ['Python', 'PyTorch', 'Neural networks', 'Transfer learning', 'NumPy', 'Pandas'],
  },
]

export type Award = {
  placing: string
  title: string
  event: string
  href: string
}

export const awards: Award[] = [
  {
    placing: '1st runner up',
    title: 'AI for Energy Hackathon',
    event: 'Data Science Nigeria, 2021',
    href: 'https://drive.google.com/file/d/1ygq-ueNa_0XG46PNga1iGDWKsW9HCVkI/view?usp=sharing',
  },
  {
    placing: '2nd runner up',
    title: 'Best poster award, IoT device enabled with AI for carbon reduction',
    event: 'Data Science Nigeria AI Bootcamp, 2021',
    href: 'https://drive.google.com/file/d/1ssYG19zbnEyV9NvUUElN1iqSuwOSGPcD/view?usp=sharing',
  },
]

export const education = {
  school: 'Obafemi Awolowo University',
  degree: 'B.Sc Electronics and Electrical Engineering',
  grade: 'Second Class Upper Division',
} as const
