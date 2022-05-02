import { useEffect, useState } from "react";
import "./Text.css";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  containerSize?: Size;
  showLabel?: boolean;
  callback?: (value: string) => void;
}

type Size = "sm" | "md" | "lg";

export const Text = ({
  label,
  placeholder,
  showLabel,
  type,
  containerSize = "sm",
  callback,
  ...rest
}: Props) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (callback) {
      callback(value);
    }
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const sizeClases: { [key in Size]: string } = {
    sm: "sm",
    lg: "lg",
    md: "md",
  };

  return (
    <div
      className={`
      text-container
      ${sizeClases[containerSize]}
      `}
    >
      {showLabel && <label htmlFor="input">{label}</label>}
      <input
        name="input"
        {...(type === "number" ? { type: "text", pattern: "\\d*" } : { type })}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};
