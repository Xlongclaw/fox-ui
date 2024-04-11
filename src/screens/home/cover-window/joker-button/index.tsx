import React from "react";
import { cn } from "./cn";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.JSX.Element;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: "danger" | "primary" | "secondary" | "success" | "warning"
}

export default function JokerButton({
  children,
  className,
  size = "sm",
  color = "primary",
  ...attributes
}: IProps) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      {...attributes}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      className={cn(
        " text-xs rounded-full hover:scale-110 transition-transform flex justify-center items-center",
        className,
        {
          "w-3 h-3" : size === "xs",
          "w-4 h-4" : size === "sm",
          "w-5 h-5" : size === "md",
          "w-6 h-6" : size === "lg",
          "w-8 h-8" : size === "xl",

          "bg-red-500": color === "danger",
          "bg-blue-500": color === "primary",
          "bg-violet-500": color === "secondary",
          "bg-green-500": color === "success",
          "bg-yellow-500": color === "warning",
        }
      )}
    >
      <div
        className={cn("transition-opacity text-[8px]", {
          "opacity-100": hover,
          "opacity-0": !hover,
        })}
      >
        {children}
      </div>
    </button>
  );
}
