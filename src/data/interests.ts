export type Interest = {
  key: 'running' | 'football'
  headline: string
  body: string
}

export const interests: Interest[] = [
  {
    key: 'running',
    headline: 'Distance running',
    body: 'I run. It is the closest thing I have to a debugging tool that works away from a keyboard, and the hard problems tend to resolve somewhere in the middle miles. It also taught me the thing that matters most in data engineering: consistent pace beats a heroic sprint, and the work that holds up is the work you can repeat tomorrow.',
  },
  {
    key: 'football',
    headline: 'Football, closely watched',
    body: 'I watch a lot of football, and I watch it the way I read a dashboard: patterns, pressing shape, whether the underlying numbers actually support the scoreline. It is a useful reminder that a single result is noise and the trend is the story, which is exactly the argument I end up making about data.',
  },
]
