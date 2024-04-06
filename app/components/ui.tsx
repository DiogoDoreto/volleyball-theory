interface RadioButtonProps {
  name: string;
  value: string;
  checked: boolean;
  onChange: () => void;
}

export function RadioButton({
  name,
  value,
  checked,
  onChange,
}: RadioButtonProps) {
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
