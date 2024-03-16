import React from "react";
import { motion } from "framer-motion";
import BasicSkeleton from "../skeleton/basic-sleleton";

/**
 * PropsType of SlowImg Component.
 */
type PropsType = {
  src: string | undefined | null;
  width?: number | undefined | null;
  height?: number | undefined | null;
  borderRadius?: number | null | undefined;
};

/**
 * This is a custom image component that has the ability to render
 * skeleton while data passed in props is being fetched.
 */
const SlowImg = ({ src, height, width, borderRadius }: PropsType) => {
  if (!src)
    return (
      <BasicSkeleton
        width={width}
        height={height}
        borderRadius={borderRadius}
        color="rgb(63 63 70)"
      />
    );
  return (
    <motion.img
      width={width}
      height={height}
      src={src}
      alt=""
      style={{
        borderRadius,
      }}
      animate={{
        opacity: [0, 1],
      }}
    />
  );
};

export default SlowImg;
