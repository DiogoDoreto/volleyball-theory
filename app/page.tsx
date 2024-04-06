"use client";

import { useState } from "react";
import { PlayerPosition } from "./lib/constants";
import { RadioButton } from "./components/ui";
import { SvgCourt, SvgPlayer } from "./components/svg";

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
