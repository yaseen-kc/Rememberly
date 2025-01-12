import { ReactElement } from "react";

type Variants = "primary" | "secondary";
interface ButtonProps {
  variant: Variants;
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick: () => void;
}

const varientStyles = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-400 text-purple-600",
};

const sizeStyles = {
  sm: "px-2 p-1",
  md: "px-4 p-2",
  lg: "px-8 p-4",
};

const defualtStyles = "rounded-md-flex";

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${varientStyles[props.variant]} ${defualtStyles} ${
        sizeStyles[props.size]
      }`}
    >
      {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null}{" "}
      {props.text}
      {props.endIcon}
    </button>
  );
};
