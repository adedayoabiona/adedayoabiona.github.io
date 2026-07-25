export const profile = {
  name: 'Adedayo Abiona',
  role: 'Data Engineer',
  tagline: 'I build the pipelines behind Africa’s private-capital data.',
  location: 'Lagos, Nigeria',
  email: 'bnadedayo@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/adedayo-a-71243413a/',
    github: 'https://github.com/adedayoabiona',
    resume:
      'https://docs.google.com/document/d/1r0dFWVF43Jx5L0jhXrPYMSXlE-8nNd86fAzuRM-dYms/edit?usp=sharing',
  },
  /* Verbatim from the resume: this is the positioning statement, keep it intact. */
  summary:
    'Data Engineer with 4+ years building production ELT pipelines, dimensional data warehouses, and scalable backend data systems in Python and SQL. Experienced across the modern data stack and cloud platforms (Microsoft Fabric, AWS, GCP), owning end-to-end decisions from ingestion and transformation to orchestration and monitoring as the sole data engineer on a team.',
  philosophy:
    'I treat data quality as an engineering problem: automated testing, schema contracts, lineage documentation and CI/CD across every pipeline. A model nobody can trust is a model nobody uses.',
} as const

/* Every figure here maps to a single resume bullet, with no summing across bullets. */
export const heroStats = [
  { value: '4+', label: 'years in data' },
  { value: '50+', label: 'Prefect pipelines' },
  { value: '67%', label: 'pipeline runtime cut' },
  { value: '54', label: 'African markets covered' },
] as const
