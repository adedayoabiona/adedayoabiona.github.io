import type { PipelineSpec, StackColumn, NodeColumn } from '../data/pipelines'

/**
 * Renders a PipelineSpec as an SVG flow: columns left to right, an orchestrator
 * bar spanning everything after the sources, and dashes that march along the
 * edges to suggest data moving.
 *
 * All geometry is derived from the spec, so column count and the number of items
 * in a stacked column are both free to vary. The wrapper scrolls horizontally on
 * narrow screens rather than squashing labels illegibly.
 */

const VIEW_W = 990
const MARGIN = 20
const COL_GAP = 55

const ITEM_H = 30
const ITEM_GAP = 9
const NODE_H = 90

const CAPTION_Y = 58
const CONTENT_TOP = 85
const BAR_GAP = 60
const BAR_H = 54
const BOTTOM_PAD = 26

function stackHeight(count: number) {
  return count * ITEM_H + Math.max(0, count - 1) * ITEM_GAP
}

function layout(spec: PipelineSpec) {
  const n = spec.columns.length
  const colW = (VIEW_W - MARGIN * 2 - COL_GAP * (n - 1)) / n
  const xs = spec.columns.map((_, i) => MARGIN + i * (colW + COL_GAP))

  const tallestStack = Math.max(
    0,
    ...spec.columns.filter((c): c is StackColumn => c.kind === 'stack').map((c) => stackHeight(c.items.length)),
  )
  const contentH = Math.max(tallestStack, NODE_H)
  const rowY = CONTENT_TOP + contentH / 2
  const barY = CONTENT_TOP + contentH + BAR_GAP

  return {
    colW,
    xs,
    rowY,
    barY,
    height: barY + BAR_H + BOTTOM_PAD,
    /** The orchestrator bar spans from the second column to the last. */
    barX: xs[1],
    barW: xs[n - 1] + colW - xs[1],
  }
}

function Stack({
  x,
  colW,
  rowY,
  column,
}: {
  x: number
  colW: number
  rowY: number
  column: StackColumn
}) {
  const top = rowY - stackHeight(column.items.length) / 2
  return (
    <g>
      {column.items.map((item, i) => {
        const y = top + i * (ITEM_H + ITEM_GAP)
        return (
          <g key={item}>
            <rect
              x={x}
              y={y}
              width={colW}
              height={ITEM_H}
              rx={6}
              className={
                column.emphasised
                  ? 'fill-surface-2 stroke-accent-deep'
                  : 'fill-surface stroke-line'
              }
              strokeWidth={1}
            />
            <text
              x={x + colW / 2}
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

function Node({
  x,
  colW,
  rowY,
  column,
}: {
  x: number
  colW: number
  rowY: number
  column: NodeColumn
}) {
  const y = rowY - NODE_H / 2
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={colW}
        height={NODE_H}
        rx={8}
        className="fill-surface-2 stroke-line-bright"
        strokeWidth={1.5}
      />
      <text
        x={x + colW / 2}
        y={y + 30}
        textAnchor="middle"
        className="fill-accent font-mono"
        fontSize={13}
      >
        {column.glyph}
      </text>
      <text
        x={x + colW / 2}
        y={y + 54}
        textAnchor="middle"
        className="fill-ink"
        fontSize={14}
        fontWeight={600}
      >
        {column.title}
      </text>
      <text
        x={x + colW / 2}
        y={y + 74}
        textAnchor="middle"
        className="fill-ink-faint font-mono"
        fontSize={10}
      >
        {column.sub}
      </text>
    </g>
  )
}

export function PipelineDiagram({ spec }: { spec: PipelineSpec }) {
  const { colW, xs, rowY, barY, height, barX, barW } = layout(spec)
  const titleId = `pipeline-title-${spec.id}`
  const descId = `pipeline-desc-${spec.id}`

  /* Gaps between adjacent columns, where the animated edges are drawn. */
  const edges = xs.slice(0, -1).map((x, i) => ({
    from: x + colW,
    to: xs[i + 1],
    index: i,
    delay: i * 0.45,
  }))

  /* Connectors run from each node column down to the orchestrator bar. */
  const nodeCentres = spec.columns
    .map((column, i) => (column.kind === 'node' ? xs[i] + colW / 2 : null))
    .filter((cx): cx is number => cx !== null)

  return (
    <figure className="w-full">
      <div className="-mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
        <svg
          viewBox={`0 0 ${VIEW_W} ${height}`}
          role="img"
          aria-labelledby={`${titleId} ${descId}`}
          className="h-auto w-full min-w-[760px]"
        >
          <title id={titleId}>{spec.title}</title>
          <desc id={descId}>{spec.description}</desc>

          {spec.columns.map((column, i) => (
            <text
              key={column.label}
              x={xs[i] + colW / 2}
              y={CAPTION_Y}
              textAnchor="middle"
              className="fill-ink-faint font-mono"
              fontSize={10}
              letterSpacing={1.4}
            >
              {column.label.toUpperCase()}
            </text>
          ))}

          {edges.map(({ from, to, index, delay }) => (
            <g key={from}>
              <line
                x1={from}
                y1={rowY}
                x2={to}
                y2={rowY}
                className="stroke-line-bright"
                strokeWidth={1.5}
              />
              <line
                x1={from}
                y1={rowY}
                x2={to}
                y2={rowY}
                className="stroke-accent"
                strokeWidth={1.5}
                strokeDasharray="5 9"
                style={{ animation: 'pipeline-flow 1.1s linear infinite', animationDelay: `${delay}s` }}
              />
              <path
                d={`M ${to - 7} ${rowY - 4.5} L ${to} ${rowY} L ${to - 7} ${rowY + 4.5} Z`}
                className="fill-accent-dim"
              />
              {spec.edgeNote?.afterColumn === index ? (
                <text
                  x={(from + to) / 2}
                  y={rowY - 12}
                  textAnchor="middle"
                  className="fill-ink-dim font-mono"
                  fontSize={9}
                >
                  {spec.edgeNote.label}
                </text>
              ) : null}
            </g>
          ))}

          {spec.columns.map((column, i) =>
            column.kind === 'stack' ? (
              <Stack key={column.label} x={xs[i]} colW={colW} rowY={rowY} column={column} />
            ) : (
              <Node key={column.label} x={xs[i]} colW={colW} rowY={rowY} column={column} />
            ),
          )}

          {nodeCentres.map((cx) => (
            <line
              key={cx}
              x1={cx}
              y1={rowY + NODE_H / 2}
              x2={cx}
              y2={barY}
              className="stroke-line-bright"
              strokeWidth={1}
              strokeDasharray="3 5"
            />
          ))}

          <rect
            x={barX}
            y={barY}
            width={barW}
            height={BAR_H}
            rx={8}
            className="fill-surface stroke-line"
            strokeWidth={1}
          />
          <text
            x={barX + 20}
            y={barY + 23}
            className="fill-accent font-mono"
            fontSize={12}
            fontWeight={600}
          >
            {spec.orchestrator.name}
          </text>
          <text x={barX + 20} y={barY + 41} className="fill-ink-faint font-mono" fontSize={10}>
            {spec.orchestrator.detail}
          </text>
          {spec.orchestrator.result ? (
            <text
              x={barX + barW - 20}
              y={barY + 33}
              textAnchor="end"
              className="fill-ink-dim font-mono"
              fontSize={10.5}
            >
              {spec.orchestrator.result}
            </text>
          ) : null}
        </svg>
      </div>

      <figcaption className="mt-4 font-mono text-xs leading-relaxed text-ink-faint">
        {spec.caption}
      </figcaption>
    </figure>
  )
}
