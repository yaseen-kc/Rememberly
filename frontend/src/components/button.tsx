import { ReactElement } from "react";

interface ButtonProps {
  varient: "primary" | "secondary";
  text: string;
  startIcon: ReactElement;
  onClick?: () => void;
  fullWidth?: boolean;
  laoding?: boolean;
}

const varientClasses = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-200 text-purple-600",
};

const defaultStyles = "px-4 py-2 rounded-md font-light flex items-center";

export function Button({
  varient,
  text,
  startIcon,
  onClick,
  fullWidth,
  laoding,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={
        varientClasses[varient] +
        " " +
        defaultStyles +
        `${fullWidth ? "w-full flex justify-center items-center" : ""}${
          laoding ? "opacity-45" : ""
        }`
      }
      disabled={laoding}
    >
      <div className="pr-2">{startIcon}</div>
      {text}
    </button>
  );
}
