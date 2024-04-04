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
}

function RadioButton({ name, value }: RadioButtonProps) {
  return (
    <label className="has-[:checked]:bg-green hover:bg-green cursor-pointer px-2 rounded">
      {value}
      <input type="radio" name={name} value={value} className="hidden" />
    </label>
  );
}

export default function Home() {
  return (
    <main className="bg-marine flex min-h-screen flex-col items-center justify-between p-12">
      <svg viewBox="0 0 1250 1500" style={{ maxHeight: "calc(100vh - 200px)" }}>
        <g transform="translate(175,-700)">
          <SvgCourt />
        </g>
      </svg>

      <div className="w-full flex flex-col gap-4">
        <div className="flex justify-between">
          {["R1", "R2", "R3", "R4", "R5", "R6"].map((value) => (
            <RadioButton name="rotation" value={value} key={value} />
          ))}
        </div>
        <div className="flex justify-between">
          {["Neutral", "Defense", "Attack"].map((value) => (
            <RadioButton name="stance" value={value} key={value} />
          ))}
        </div>
      </div>
    </main>
  );
}
