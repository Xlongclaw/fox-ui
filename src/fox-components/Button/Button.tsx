import cn from "@fox-components/utils/cn";
import React from "react";

interface IProps {
  children: React.JSX.Element | string;
  variant?: "bordered" | "normal";
  size?: "sm" | "md" | "lg" | "xl";
  borderWidth?: 1 | 2 | 3 | 4;
  color?:
    | "primary"
    | "secondary"
    | "default"
    | "danger"
    | "warning"
    | "success"
    | "white"
    | "black";
  onClick?: () => void;
}

const defaultProps: IProps = {
  children: "",
  variant: "normal",
  size: "md",
  borderWidth: 1,
  color: "primary",
  onClick: () => {},
};

export default function Button(props: IProps) {
  props = { ...defaultProps, ...props };
  return (
    <button
      onClick={props.onClick}
      className={cn(
        " text-white rounded-md  hover:bg-transparent font-normal",
        {
          "py-1 px-2": props.size === "sm",
          "py-2 px-3": props.size === "md",
          "py-3 px-5": props.size === "lg",
          "py-4 px-12": props.size === "xl",
        },
        {
          border: props.borderWidth === 1,
          "border-2": props.borderWidth === 2,
          "border-[3px]": props.borderWidth === 3,
          "border-4": props.borderWidth === 4,
        },
        {
          "bg-primary border-primary hover:text-primary":
            props.color === "primary" && props.variant === "normal",
          "bg-secondary border-secondary hover:text-secondary":
            props.color === "secondary" && props.variant === "normal",
          "bg-success border-success hover:text-success":
            props.color === "success" && props.variant === "normal",
          "bg-warning border-warning hover:text-warning":
            props.color === "warning" && props.variant === "normal",
          "bg-danger border-danger hover:text-danger":
            props.color === "danger" && props.variant === "normal",
          "bg-default border-default hover:text-default":
            props.color === "default" && props.variant === "normal",
          "bg-white border-white hover:text-white":
            props.color === "white" && props.variant === "normal",
          "bg-black border-black hover:text-black":
            props.color === "black" && props.variant === "normal",
        },
        {
          "hover:bg-primary border-primary text-primary hover:text-white":
            props.color === "primary" && props.variant === "bordered",
          "hover:bg-secondary border-secondary text-secondary hover:text-white":
            props.color === "secondary" && props.variant === "bordered",
          "hover:bg-success border-success text-success hover:text-white":
            props.color === "success" && props.variant === "bordered",
          "hover:bg-warning border-warning text-warning hover:text-white":
            props.color === "warning" && props.variant === "bordered",
          "hover:bg-danger border-danger text-danger hover:text-white":
            props.color === "danger" && props.variant === "bordered",
          "hover:bg-default border-default text-default hover:text-white":
            props.color === "default" && props.variant === "bordered",
          "hover:bg-white border-white text-white hover:text-white":
            props.color === "white" && props.variant === "bordered",
          "hover:bg-black border-black text-black hover:text-white":
            props.color === "black" && props.variant === "normal",
        }
      )}
    >
      {props.children}
    </button>
  );
}
