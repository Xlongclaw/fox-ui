import Logo from "@components/logo";
import classNames from "classnames";
import React from "react";
import SearchBar from "./search-bar";
import XButton from "@components/x-button";
import { BsGithub } from "react-icons/bs";
import LinksContainer from "./links-container";
import { motion } from "framer-motion";

type PropsType = {
  isBordered?: boolean;
  glassEffect?:boolean
};

/**
 * Thsis component renders the navigation bar.
 * @param param0 - Component Props.
 * @returns a JSX NavBar Element
 */
const NavigationBar: React.FC<PropsType> = ({ isBordered = true,glassEffect=true }) => {
  return (
    <motion.div
    initial={{
      y: -50,
    }}
    whileInView={{
      y: 0,
      opacity: [0, 0, 1],
      transition: {
        stiffness: 200,
        damping: 60,
        type: "spring",
      },
    }}
      className={classNames("flex z-10 justify-between px-12 py-3 fixed w-full h-16 items-center", {
        " border-x-grey-II": isBordered === true,
        "glass border-b":glassEffect ===true
      })}
    >
      <Logo />
      <div className="flex gap-3 items-center">
        <LinksContainer/>
        <SearchBar />
        <XButton hoverText="Github" onPress={()=>{}}>
          <BsGithub className="text-ascent" />
        </XButton>
      </div>
    </motion.div>
  );
};

export default NavigationBar;
