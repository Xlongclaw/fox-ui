import React from "react";
import { BsChevronUp, BsSearch } from "react-icons/bs";
import { motion } from "framer-motion";

const SearchBar = () => {
  return (
    <motion.div
      whileHover={{
        borderColor: "#383838",
        transition: { duration: 0.2, delay: 0.1 },
      }}
      className="border-2  border-x-grey-II rounded-lg px-4 flex items-center h-10 gap-3 cursor-pointer"
    >
      <BsSearch className="text-white" />
      <div className="text-xs text-white flex items-center">
        <h4>Search Components</h4>
        <h5 className="bg-zinc-800 py-1 px-2 rounded-md ml-3 flex items-center gap-1"><BsChevronUp/> + Enter</h5>
      </div>
    </motion.div>
  );
};

export default SearchBar;
