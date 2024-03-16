import React from "react";
import { motion } from "framer-motion";

type PropsType = {
  height?: number;
  width?: number;
  borderRadius?: number;
  color: string;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
};

const BasicSkeleton = (props: PropsType) => {
  return (
    <motion.div
      // Skeleton Styles
      style={{
        backgroundColor: props.color,
        height: props.height,
        width: props.width,
        borderRadius: props.borderRadius,
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
        marginLeft: props.marginLeft,
        marginRight: props.marginRight,
      }}
      whileInView={{
        opacity: [0, 1],
      }}
    />
  );
};

export default BasicSkeleton;
