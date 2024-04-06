"use client";
import { useState } from "react";

function SvgCourt3MLine({ y }: { y: number }) {
  return (
    <>
      <line x1="0" x2="900" y1={y} y2={y} />
      <line x1="-175" x2="0" y1={y} y2={y} strokeDasharray="21.875" />
      <line x1="900" x2="1075" y1={y} y2={y} strokeDasharray="0 21.875 0" />
    </>
  );
}
function SvgCourt() {
  return (
    <g stroke="white" strokeWidth="10">
      <rect className="fill-beige" width="900" height="1800" />
      <line x1="0" x2="900" y1="900" y2="900" strokeWidth="20" />
      <SvgCourt3MLine y={600} />
      <SvgCourt3MLine y={1200} />
    </g>
  );
}

interface RadioButtonProps {
  name: string;
  value: string;
  checked: boolean;
  onChange: () => void;
}

function RadioButton({ name, value, checked, onChange }: RadioButtonProps) {
  return (
    <label className="has-[:checked]:bg-green hover:bg-green cursor-pointer px-2 rounded">
      {value}
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        className="hidden"
        onChange={onChange}
      />
    </label>
  );
}

enum PlayerPosition {
  CentralFar,
  CentralNear,
  HitterFar,
  HitterNear,
  Opposite,
  Setter,
}

const PlayerColorMap: Record<PlayerPosition, string> = {
  // for tailwind: fill-red fill-royal fill-yellow
  [PlayerPosition.CentralFar]: "royal",
  [PlayerPosition.CentralNear]: "royal",
  [PlayerPosition.HitterFar]: "red",
  [PlayerPosition.HitterNear]: "red",
  [PlayerPosition.Opposite]: "yellow",
  [PlayerPosition.Setter]: "yellow",
};

const PlayerShortLabelMap: Record<PlayerPosition, string> = {
  [PlayerPosition.CentralFar]: "M2",
  [PlayerPosition.CentralNear]: "M1",
  [PlayerPosition.HitterFar]: "H2",
  [PlayerPosition.HitterNear]: "H1",
  [PlayerPosition.Opposite]: "Op",
  [PlayerPosition.Setter]: "S",
};

interface SvgPlayerProps {
  x: number;
  y: number;
  position: PlayerPosition;
}

function SvgPlayer({ x, y, position }: SvgPlayerProps) {
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

export default function Home() {
  const [rotation, setRotation] = useState("R1");
  const [stance, setStance] = useState("Neutral");

  return (
    <main className="bg-marine flex min-h-screen flex-col items-center justify-between p-12">
      <svg viewBox="0 0 1250 1500" style={{ maxHeight: "calc(100vh - 200px)" }}>
        <g transform="translate(175,-700)">
          <SvgCourt />
          <SvgPlayer x={150} y={1050} position={PlayerPosition.HitterFar} />
          <SvgPlayer x={450} y={1050} position={PlayerPosition.CentralNear} />
          <SvgPlayer x={750} y={1050} position={PlayerPosition.Setter} />
          <SvgPlayer x={150} y={1450} position={PlayerPosition.CentralFar} />
          <SvgPlayer x={450} y={1450} position={PlayerPosition.HitterNear} />
          <SvgPlayer x={750} y={1450} position={PlayerPosition.Opposite} />
        </g>
      </svg>

      <div className="w-full flex flex-col gap-4">
        <div className="flex justify-between">
          {["R1", "R2", "R3", "R4", "R5", "R6"].map((value) => (
            <RadioButton
              name="rotation"
              value={value}
              key={value}
              checked={rotation === value}
              onChange={() => setRotation(value)}
            />
          ))}
        </div>
        <div className="flex justify-between">
          {["Neutral", "Defense", "Attack"].map((value) => (
            <RadioButton
              name="stance"
              value={value}
              key={value}
              checked={stance === value}
              onChange={() => setStance(value)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
