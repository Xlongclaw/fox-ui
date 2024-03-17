import React from "react";
import { motion } from "framer-motion";
import BasicSkeleton from "../skeleton/basic-sleleton";

/**
 * PropsType of SlowImg Component.
 */
type PropsType = {
  children?: string | undefined | null | React.JSX.Element;
  width?: number | undefined | null;
  height?: number | undefined | null;
  borderRadius?: number | null | undefined;
  color?: string | undefined | null;
  fontSize?: number | undefined | null;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
};

/**
 * This is a custom image component that has the ability to render
 * skeleton while data passed in props is being fetched.
 */
const SlowH3 = (props: PropsType) => {
  if (!props.children)
    return (
      <BasicSkeleton
        width={props.width}
        height={props.height}
        borderRadius={props.borderRadius}
        color="rgb(63 63 70)"
        marginTop={props.marginTop}
        marginBottom={props.marginBottom}
        marginLeft={props.marginLeft}
        marginRight={props.marginRight}
      />
    );
  return (
    <motion.h3
      style={{
        borderRadius: props.borderRadius,
        width: props.width,
        height: props.height,
        color: props.color || "white",
        fontSize: props.fontSize,
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
        marginLeft: props.marginLeft,
        marginRight: props.marginRight,
        fontWeight: props.fontWeight,
        display: "flex",
        alignItems: "center",
      }}
      animate={{
        opacity: [0, 1],
      }}
    >
      {props.children}
    </motion.h3>
  );
};

export default SlowH3;
