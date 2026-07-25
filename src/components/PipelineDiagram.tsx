/**
 * The Stears pipeline, drawn to scale-of-story rather than scale-of-infrastructure:
 * sources → Airbyte ingestion → Postgres → dbt → the services that read it,
 * with Prefect underneath orchestrating the whole thing.
 *
 * Layout is a fixed 5-column grid in SVG user units; the wrapper scrolls
 * horizontally on narrow screens rather than squashing the labels illegibly.
 */

const COL_X = [20, 220, 420, 620, 820]
const COL_W = 145
const ROW_Y = 165
const NODE_H = 90
const NODE_Y = ROW_Y - NODE_H / 2

const ITEM_H = 32
const ITEM_STEP = 43
const ITEM_TOP = 85

const BAR_Y = 310
const BAR_H = 54

const sources = ['REST APIs', 'Web & gov reports', 'NocoDB ops layer', 'Financial PDFs']
const consumers = ['Qdrant vector search', 'Algolia', 'AWS S3', 'Product & Metabase']

const columnLabels = ['extract', 'ingest', 'load', 'transform', 'serve']

/** Horizontal edge midpoints between adjacent columns. */
const edges = COL_X.slice(0, -1).map((x, i) => ({
  from: x + COL_W,
  to: COL_X[i + 1],
  delay: i * 0.45,
}))

/** Centres of the three single-node middle columns, for the Prefect connectors. */
const midCentres = [1, 2, 3].map((i) => COL_X[i] + COL_W / 2)

function StackedColumn({ x, items, accent }: { x: number; items: string[]; accent: boolean }) {
  return (
    <g>
      {items.map((item, i) => {
        const y = ITEM_TOP + i * ITEM_STEP
        return (
          <g key={item}>
            <rect
              x={x}
              y={y}
              width={COL_W}
              height={ITEM_H}
              rx={6}
              className={accent ? 'fill-surface-2 stroke-accent-deep' : 'fill-surface stroke-line'}
              strokeWidth={1}
            />
            <text
              x={x + COL_W / 2}
              y={y + ITEM_H / 2 + 4}
              textAnchor="middle"
              className="fill-ink-dim font-mono"
              fontSize={11}
            >
              {item}
            </text>
          </g>
        )
      })}
    </g>
  )
}

function CoreNode({
  x,
  title,
  sub,
  glyph,
}: {
  x: number
  title: string
  sub: string
  glyph: string
}) {
  return (
    <g>
      <rect
        x={x}
        y={NODE_Y}
        width={COL_W}
        height={NODE_H}
        rx={8}
        className="fill-surface-2 stroke-line-bright"
        strokeWidth={1.5}
      />
      <text
        x={x + COL_W / 2}
        y={NODE_Y + 30}
        textAnchor="middle"
        className="fill-accent font-mono"
        fontSize={13}
      >
        {glyph}
      </text>
      <text
        x={x + COL_W / 2}
        y={NODE_Y + 54}
        textAnchor="middle"
        className="fill-ink"
        fontSize={15}
        fontWeight={600}
      >
        {title}
      </text>
      <text
        x={x + COL_W / 2}
        y={NODE_Y + 74}
        textAnchor="middle"
        className="fill-ink-faint font-mono"
        fontSize={10.5}
      >
        {sub}
      </text>
    </g>
  )
}

export function PipelineDiagram() {
  return (
    <figure className="w-full">
      <div className="-mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
        <svg
          viewBox="0 0 990 400"
          role="img"
          aria-labelledby="pipeline-title pipeline-desc"
          className="h-auto w-full min-w-[760px]"
        >
          <title id="pipeline-title">
            The production data pipeline I own at Stears
          </title>
          <desc id="pipeline-desc">
            Data flows from REST APIs, web and government reports, the NocoDB operational layer
            and financial PDFs into Airbyte, which ingests 61 or more raw tables into PostgreSQL.
            dbt transforms those into more than 141 tested models, which are served to Qdrant
            vector search, Algolia, AWS S3, and the product and Metabase dashboards. Prefect
            orchestrates every stage.
          </desc>

          {/* Column captions */}
          {columnLabels.map((label, i) => (
            <text
              key={label}
              x={COL_X[i] + COL_W / 2}
              y={58}
              textAnchor="middle"
              className="fill-ink-faint font-mono"
              fontSize={10}
              letterSpacing={1.4}
            >
              {label.toUpperCase()}
            </text>
          ))}

          {/* Edges: a static rail plus a dashed overlay that animates to suggest flow */}
          {edges.map(({ from, to, delay }) => (
            <g key={from}>
              <line
                x1={from}
                y1={ROW_Y}
                x2={to}
                y2={ROW_Y}
                className="stroke-line-bright"
                strokeWidth={1.5}
              />
              <line
                x1={from}
                y1={ROW_Y}
                x2={to}
                y2={ROW_Y}
                className="stroke-accent"
                strokeWidth={1.5}
                strokeDasharray="5 9"
                style={{
                  animation: `pipeline-flow 1.1s linear infinite`,
                  animationDelay: `${delay}s`,
                }}
              />
              <path
                d={`M ${to - 7} ${ROW_Y - 4.5} L ${to} ${ROW_Y} L ${to - 7} ${ROW_Y + 4.5} Z`}
                className="fill-accent-dim"
              />
            </g>
          ))}

          <StackedColumn x={COL_X[0]} items={sources} accent={false} />
          <CoreNode x={COL_X[1]} title="Airbyte" sub="61+ raw tables" glyph="⇉" />
          <CoreNode x={COL_X[2]} title="PostgreSQL" sub="raw → staging" glyph="▣" />
          <CoreNode x={COL_X[3]} title="dbt" sub="141+ tested models" glyph="⌬" />
          <StackedColumn x={COL_X[4]} items={consumers} accent />

          {/* CDC annotation on the ingest → load hop */}
          <text
            x={(COL_X[1] + COL_W + COL_X[2]) / 2}
            y={ROW_Y - 14}
            textAnchor="middle"
            className="fill-accent-dim font-mono"
            fontSize={9.5}
          >
            CDC
          </text>

          {/* Prefect orchestration layer */}
          {midCentres.map((cx) => (
            <line
              key={cx}
              x1={cx}
              y1={NODE_Y + NODE_H}
              x2={cx}
              y2={BAR_Y}
              className="stroke-line-bright"
              strokeWidth={1}
              strokeDasharray="3 5"
            />
          ))}
          <rect
            x={COL_X[1]}
            y={BAR_Y}
            width={COL_X[4] + COL_W - COL_X[1]}
            height={BAR_H}
            rx={8}
            className="fill-surface stroke-line"
            strokeWidth={1}
          />
          <text
            x={COL_X[1] + 20}
            y={BAR_Y + 23}
            className="fill-accent font-mono"
            fontSize={12}
            fontWeight={600}
          >
            Prefect 3.x
          </text>
          <text
            x={COL_X[1] + 20}
            y={BAR_Y + 41}
            className="fill-ink-faint font-mono"
            fontSize={10.5}
          >
            50+ flows · scheduling · retries · alerting · CI/CD
          </text>
          <text
            x={COL_X[4] + COL_W - 20}
            y={BAR_Y + 33}
            textAnchor="end"
            className="fill-ink-faint font-mono"
            fontSize={10.5}
          >
            15 min → &lt;5 min
          </text>
        </svg>
      </div>

      <figcaption className="mt-4 font-mono text-xs leading-relaxed text-ink-faint">
        The production pipeline I own end to end, from ingestion through to the services that read it.
      </figcaption>
    </figure>
  )
}
