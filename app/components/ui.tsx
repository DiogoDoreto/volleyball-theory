interface RadioButtonProps {
  name: string;
  value: string;
  checked: boolean;
  className?: string;
  onChange: () => void;
}

export function RadioButton({
  name,
  value,
  checked,
  className,
  onChange,
}: RadioButtonProps) {
  return (
    <label
      className={[
        className,
        "bg-royal has-[:checked]:bg-green hover:bg-green cursor-pointer rounded flex items-center justify-center",
      ]
        .filter(Boolean)
        .join(" ")}
    >
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
