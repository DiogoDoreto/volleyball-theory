"use client";

import { useState } from "react";
import * as R from "ramda";
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
  const itemsOnCanvas = R.groupBy(R.prop("kind"), plays[rotation][stance]);
  const players = R.sortBy(R.prop("position"), itemsOnCanvas.player || []);

  return (
    <main className="bg-marine flex min-h-screen flex-col items-center justify-between p-12">
      <svg viewBox="0 0 1250 1500" style={{ maxHeight: "calc(100vh - 200px)" }}>
        <g transform="translate(175,-700)">
          <SvgCourt />
          {players.map(({ x, y, position }) => (
            <SvgPlayer x={x} y={y} position={position} key={position} />
          ))}
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
