import React from "react";
import { BsSearch } from "react-icons/bs";
import { motion } from "framer-motion";

const SearchBar = () => {
  return (
    <motion.div
      whileHover={{ borderColor: "#000000",transition:{duration:0.2,delay:0.1} }}
      className="border-2 bg-white border-black/10 rounded-lg px-4 flex items-center h-10 gap-3 cursor-pointer"
    >
      <BsSearch className="text-black/60" />
      <h2 className="text-xs font-medium text-black/60">
        What are you serching for ?
      </h2>
    </motion.div>
  );
};

export default SearchBar;
