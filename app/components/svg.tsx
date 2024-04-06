import {
  PlayerColorMap,
  PlayerPosition,
  PlayerShortLabelMap,
} from "../lib/constants";

function SvgCourt3MLine({ y }: { y: number }) {
  return (
    <>
      <line x1="0" x2="900" y1={y} y2={y} />
      <line x1="-175" x2="0" y1={y} y2={y} strokeDasharray="21.875" />
      <line x1="900" x2="1075" y1={y} y2={y} strokeDasharray="0 21.875 0" />
    </>
  );
}

export function SvgCourt() {
  return (
    <g stroke="white" strokeWidth="10">
      <rect className="fill-beige" width="900" height="1800" />
      <line
        x1="0"
        x2="900"
        y1="900"
        y2="900"
        strokeWidth="20"
        strokeDasharray="20 5"
      />
      <SvgCourt3MLine y={600} />
      <SvgCourt3MLine y={1200} />
    </g>
  );
}

interface SvgPlayerProps {
  x: number;
  y: number;
  position: PlayerPosition;
}

export function SvgPlayer({ x, y, position }: SvgPlayerProps) {
  const color = PlayerColorMap[position];
  const label = PlayerShortLabelMap[position];
  return (
    <>
      <circle
        cx={x}
        cy={y}
        r="60"
        strokeWidth="4"
        className={`fill-${color} stroke-black`}
      />
      <text
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="central"
        className="text-5xl"
        stroke="white"
        strokeWidth="10"
        strokeLinejoin="round"
      >
        {label}
      </text>
      <text
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="central"
        className="text-5xl"
      >
        {label}
      </text>
    </>
  );
}
