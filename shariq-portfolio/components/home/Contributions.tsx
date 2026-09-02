/* GitHub's public contributions fragment, parsed into a small calendar.
 * No API token needed; this is the same HTML the profile page renders.
 * If GitHub is slow or the markup shifts, the section renders nothing
 * rather than breaking the page. */

const USER = 'shariqsk';
const CONTRIB_URL = `https://github.com/users/${USER}/contributions`;

interface Day { date: string; level: number }

interface Calendar { total: string; weeks: Day[][] }

async function fetchCalendar(): Promise<Calendar | null> {
  let html: string;

  try {
    const res = await fetch(CONTRIB_URL, {
      headers: { 'User-Agent': 'shariqsafdarkhan.com' },
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;
    html = await res.text();
  } catch {
    return null;
  }

  const days: Day[] = [];
  const cell = /data-date="(\d{4}-\d{2}-\d{2})"[^>]*data-level="(\d)"/g;

  for (const m of html.matchAll(cell)) {
    days.push({ date: m[1], level: Number(m[2]) });
  }

  if (days.length < 7) return null;

  /* Cells arrive weekday-major (all Sundays, then all Mondays…), so sort by
     date and slice into calendar weeks. */
  days.sort((a, b) => a.date.localeCompare(b.date));

  const weeks: Day[][] = [];

  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  const total = html.match(/([\d,]+)\s*\n?\s*contributions/)?.[1] ?? '';

  return { total, weeks };
}

export default async function Contributions() {
  const cal = await fetchCalendar();

  if (!cal) return null;

  return (
    <section className="home__section">
      <div className="home__section-head">
        <h2 className="home__section-title">Contributions</h2>
        <a
          className="home__section-note"
          href={`https://github.com/${USER}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          @{USER}
        </a>
      </div>

      <div className="home__graph-scroll">
        <div className="home__graph" role="img" aria-label={`${cal.total} GitHub contributions in the last year`}>
          {cal.weeks.map((week) => (
            <div key={week[0].date} className="home__graph-week">
              {week.map((d) => (
                <span key={d.date} className="home__graph-day" data-level={d.level} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="home__graph-foot">
        <span>{cal.total} in the last year</span>
        <span className="home__graph-legend">
          Less
          {[0, 1, 2, 3, 4].map((l) => (
            <span key={l} className="home__graph-day" data-level={l} />
          ))}
          More
        </span>
      </div>
    </section>
  );
}
