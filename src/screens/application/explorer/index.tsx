import React from "react";
import { BsChevronRight, BsPlus } from "react-icons/bs";
import dummy from "../../../constants/dummy";
import { MotionValue, motion } from "framer-motion";
import classNames from "classnames";
import { Link, useNavigate, useParams } from "react-router-dom";

const Explorer = () => {
  const { name } = useParams();
  const [hovered, setHovered] = React.useState(false);
  const [selected, setSelected] = React.useState<string>(name);
  const naigate = useNavigate();

  return (
    <motion.div
      onHoverEnd={() => setHovered(false)}
      onHoverStart={() => setHovered(true)}
      className={classNames(
        "border-r border-x-grey-II h-full w-72 flex-shrink-0 fixed px-12 shado overflow-y-scroll custom-scroll transition-all",
        {
          "custom-scroll": hovered === true,
          "hide-scroll": hovered === false,
        }
      )}
    >
      {dummy.map((item) => (
        <div className="">
          <h2 className="flex items-center text-[13px] font-bold text-white pt-6 pb-2 justify-between">
            {item.category}
            {/* <BsPlus size={20} /> */}
          </h2>
          {item.data.map((title) => (
            <motion.h5
              onClick={() => {
                setSelected(title);
                naigate(`/application/components/${title}`);
              }}
              whileHover={{
                color: "#00c476",
                x: 6,
                y: 1,
              }}
              className={`text-[13px] cursor-pointer py-[6px] ${
                selected === title ? "text-[#00c476]" : "text-white/70"
              }`}
            >
              {title}
            </motion.h5>
          ))}
        </div>
      ))}
    </motion.div>
  );
};

export default Explorer;
