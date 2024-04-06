"use client";

import { useState } from "react";
import {
  AllRotations,
  AllStances,
  PlayerPosition,
  Rotation,
  Stance,
} from "./lib/constants";
import { RadioButton } from "./components/ui";
import { SvgCourt, SvgPlayer } from "./components/svg";
import { plays } from "./lib/plays";

export default function Home() {
  const [rotation, setRotation] = useState(Rotation.R1);
  const [stance, setStance] = useState(Stance.Neutral);

  return (
    <main className="bg-marine flex min-h-screen flex-col items-center justify-between p-12">
      <svg viewBox="0 0 1250 1500" style={{ maxHeight: "calc(100vh - 200px)" }}>
        <g transform="translate(175,-700)">
          <SvgCourt />
          {plays[rotation][stance].map((item) => {
            if (item.kind === "player") {
              return (
                <SvgPlayer
                  x={item.x}
                  y={item.y}
                  position={item.position}
                  key={item.position}
                />
              );
            }
          })}
        </g>
      </svg>

      <div className="w-full flex flex-col gap-4">
        <div className="flex justify-between">
          {AllRotations.map((value) => (
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
          {AllStances.map((value) => (
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
