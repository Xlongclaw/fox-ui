import React from "react";
import { motion } from "framer-motion";
import buttonAnimation from "./animations/buttonAmimation";
import infoTextAnimation from "./animations/infoTextAnimation";
import classNames from "classnames";

/**
 * PropsType of this Component.
 */
type PropsType = {
  title?: string;
  children?: React.JSX.Element;
  hoverText: string;
  height?:number;
  width?:number;
  onPress:()=>void
};

/**
 * This is a customisable button component.
 * @param param0 - Props 
 * @returns a JSX element of a custom button
 */
const XButton: React.FC<PropsType> = ({
  title = "",
  children = <></>,
  hoverText,
  onPress
}) => {

  /**
   * This state variable is set to true when the cursor is hovered.
   */
  const [hovered, setHovered] = React.useState(false);
  return (
    <motion.button
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={buttonAnimation(hovered)}
      onClick={onPress}
      className={classNames("border border-black relative h-10 w-10 rounded-lg flex justify-center items-center",{})}
    >
      {children}
      {title}
      <motion.div
        animate={infoTextAnimation(hovered)}
        className="absolute top-12 opacity-0 border-2 border-black/60 text-xs pointer-events-none px-2 py-1 rounded-lg bg-white"
      >
        {hoverText}
      </motion.div>
    </motion.button>
  );
};

export default XButton;
