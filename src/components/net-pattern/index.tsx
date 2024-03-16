import React from "react";
import { motion } from "framer-motion";

const NetPattern = () => {
  return (
    <div className=" top-0 left-0 absolute h-full w-full">
      {Array.from({ length: 60 }).map((_, i) => (
        <motion.div
        animate={{ opacity: [0, 1,0], transition: { repeat: Infinity,duration:1,delay:i*0.01 } }}
          className="h-[1px] w-full bg-zinc-900/40 absolute"
          style={{ top: 10 + 10 * i }}
        />
      ))}
      {Array.from({ length: 80 }).map((_, i) => {
        return (
          <motion.div
            animate={{ opacity: [0, 1,0], rotate:[0,90,0], transition: { repeat: Infinity,duration:1,delay:i*0.01 } }}
            className="h-full w-[1px] bg-zinc-900/40 absolute"
            style={{ left: 10 + 10 * i }}
          />
        );
      })}
    </div>
  );
};

export default NetPattern;
