import React from "react";
import { motion } from "framer-motion";
import NetPattern from "@components/net-pattern";

const DisplayContainer = () => {
  const [codeVisible, setCodeVisible] = React.useState(false);
  return (
    <div className="my-12">
      <div className="flex text-sm gap-2 my-4">
        <button className="py-2 px-4 border border-x-grey-II bg-x-grey-II text-ascent rounded-3xl">
          Component
        </button>
        <button
          onClick={() => setCodeVisible(true)}
          className="py-2 px-4 border border-x-grey-II  text-white/50 rounded-3xl"
        >
          code
        </button>
      </div>
      <div className="h-[35rem] w-[50rem] border border-x-grey-II rounded-[20px] relative overflow-hidden">
        <NetPattern />
      </div>
    </div>
  );
};

export default DisplayContainer;
