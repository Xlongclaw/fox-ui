import React from "react";
import { BsSearch } from "react-icons/bs";
import { motion } from "framer-motion";

const SearchBar = () => {
  return (
    <motion.div
      whileHover={{ borderColor: "#383838",transition:{duration:0.2,delay:0.1} }}
      className="border  border-zinc-800 rounded-lg px-4 flex items-center h-10 gap-3 cursor-pointer"
    >
      <BsSearch className="text-white" />
      <h2 className="text-xs glass text-white">
        What are you serching for ?
      </h2>
    </motion.div>
  );
};

export default SearchBar;
