/**
 * Running section content. Race times come from the Strava activities; distances
 * are the official race distances, and pace is derived from the two so it can
 * never drift out of step with what is displayed.
 */
export type Race = {
  name: string
  date: string
  /** Official race distance in kilometres. */
  km: number
  /** Moving time in seconds, as recorded by Strava. */
  seconds: number
  /** The Strava activity for this race. */
  href: string
}

export const running = {
  stravaUrl: 'https://www.strava.com/athletes/160910086',
  intro:
    'I run. It is the closest thing I have to a debugging tool that works away from a keyboard, and the hard problems tend to resolve somewhere in the middle miles. It also taught me the thing that matters most in data engineering: consistent pace beats a heroic sprint, and the work that holds up is the work you can repeat tomorrow.',
  training: {
    name: 'KGL Millennium Half Marathon',
    href: 'https://millenniummarathon.com/mm-auth/',
  },
  races: [
    {
      name: 'Run Club Abuja Charity Half Marathon',
      date: 'Jul 2026',
      km: 21.1,
      seconds: 7174,
      href: 'https://www.strava.com/activities/19264756826',
    },
    {
      name: 'Access Bank Lagos City Marathon 10K Race',
      date: 'Feb 2026',
      km: 10,
      seconds: 3160,
      href: 'https://www.strava.com/activities/17392047735',
    },
    {
      name: 'ARM Run For The Future',
      date: 'Nov 2025',
      km: 8,
      seconds: 2538,
      href: 'https://www.strava.com/activities/16461523881',
    },
  ] satisfies Race[],
}

/** 7174 -> "1:59:34", 3160 -> "52:40". */
export function formatDuration(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  const pad = (n: number) => String(n).padStart(2, '0')
  return hours > 0 ? `${hours}:${pad(minutes)}:${pad(seconds)}` : `${minutes}:${pad(seconds)}`
}

/** Average pace per kilometre over the official distance, e.g. "5:40". */
export function formatPace(km: number, seconds: number) {
  const secondsPerKm = Math.round(seconds / km)
  return `${Math.floor(secondsPerKm / 60)}:${String(secondsPerKm % 60).padStart(2, '0')}`
}

/** 21.1 -> "21.1 km", 10 -> "10 km". */
export function formatDistance(km: number) {
  return `${km} km`
}
