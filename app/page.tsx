"use client";

import { useEffect, useState } from "react";
import * as R from "ramda";
import { AllRotations, AllStances, Rotation, Stance } from "./lib/constants";
import { RadioButton } from "./components/ui";
import { SvgCourt, SvgPlayer } from "./components/svg";
import { plays } from "./lib/plays";

export default function Home() {
  const [rotation, setRotation] = useState(Rotation.R1);
  const [stance, setStance] = useState(Stance.Neutral);
  const itemsOnCanvas = R.groupBy(R.prop("kind"), plays[rotation][stance]);
  const players = R.sortBy(R.prop("position"), itemsOnCanvas.player || []);

  useEffect(() => {
    document.addEventListener("keydown", ({ key }) => {
      if (["1", "2", "3", "4", "5", "6"].includes(key)) {
        setRotation(AllRotations[parseInt(key) - 1]);
      }
      if (key === "n") setStance(Stance.Neutral);
      if (key === "d") setStance(Stance.Defense);
      if (key === "a") setStance(Stance.Attack);
    });
  }, []);

  return (
    <main className="bg-marine flex min-h-screen flex-col items-center justify-between">
      <svg
        viewBox="0 0 1250 1150"
        style={{ maxHeight: "calc(100dvh - 150px)" }}
      >
        <g transform="translate(175,-700)">
          <SvgCourt />
          {players.map(({ x, y, position }) => (
            <SvgPlayer x={x} y={y} position={position} key={position} />
          ))}
        </g>
      </svg>

      <div className="w-full flex flex-col gap-4 p-6">
        <div className="flex gap-2 items-stretch h-10">
          {AllRotations.map((value) => (
            <RadioButton
              name="rotation"
              value={value}
              key={value}
              checked={rotation === value}
              onChange={() => setRotation(value)}
              className="grow"
            />
          ))}
        </div>
        <div className="flex gap-2 items-stretch h-10">
          {AllStances.map((value) => (
            <RadioButton
              name="stance"
              value={value}
              key={value}
              checked={stance === value}
              onChange={() => setStance(value)}
              className="grow"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
