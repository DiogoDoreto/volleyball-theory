'use client'
import {
  PlayerColorMap,
  PlayerPosition,
} from '../lib/constants'
import { useTranslation } from '../i18n'

interface Coordinate {
  x: number
  y: number
}

const SvgGroupWithCoordinate = ({
  x,
  y,
  children,
}: React.PropsWithChildren<Coordinate>) => {
  return (
    <g
      style={{
        transform: `translate(${x}px,${y}px)`,
        transition: 'transform 600ms ease-out',
      }}
    >
      {children}
    </g>
  )
}

function SvgCourt3MLine({ y }: Pick<Coordinate, 'y'>) {
  return (
    <>
      <line x1="0" x2="900" y1={y} y2={y} />
      <line x1="-175" x2="0" y1={y} y2={y} strokeDasharray="21.875" />
      <line x1="900" x2="1075" y1={y} y2={y} strokeDasharray="0 21.875 0" />
    </>
  )
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
  )
}

interface SvgPlayerProps {
  x: number
  y: number
  position: PlayerPosition
}

export function SvgPlayer({ x, y, position }: SvgPlayerProps) {
  const { t } = useTranslation()
  const color = PlayerColorMap[position]
  
  const playerLabelMap: Record<PlayerPosition, string> = {
    [PlayerPosition.CentralFar]: t('player.centralFar'),
    [PlayerPosition.CentralNear]: t('player.centralNear'),
    [PlayerPosition.HitterFar]: t('player.hitterFar'),
    [PlayerPosition.HitterNear]: t('player.hitterNear'),
    [PlayerPosition.Opposite]: t('player.opposite'),
    [PlayerPosition.Setter]: t('player.setter'),
  }
  
  const label = playerLabelMap[position]
  return (
    <SvgGroupWithCoordinate x={x} y={y}>
      <circle r="60" strokeWidth="4" className={`fill-${color} stroke-black`} />
      <text
        textAnchor="middle"
        dominantBaseline="central"
        className="text-5xl"
        stroke="white"
        strokeWidth="10"
        strokeLinejoin="round"
      >
        {label}
      </text>
      <text textAnchor="middle" dominantBaseline="central" className="text-5xl">
        {label}
      </text>
    </SvgGroupWithCoordinate>
  )
}
