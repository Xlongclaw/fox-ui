import Logo from "@components/logo";
import classNames from "classnames";
import React from "react";
import SearchBar from "./search-bar";
import XButton from "@components/x-button";
import { BsGithub } from "react-icons/bs";

type PropsType = {
  isBordered?: boolean;
};

/**
 * Thsis component renders the navigation bar.
 * @param param0 - Component Props.
 * @returns a JSX NavBar Element
 */
const NavigationBar: React.FC<PropsType> = ({ isBordered = true }) => {
  return (
    <div
      className={classNames("flex glass justify-between px-16 py-3 fixed w-full h-16 items-center", {
        "border-b": isBordered === true,
      })}
    >
      <Logo />
      <div className="flex gap-3">
        <SearchBar />
        <XButton hoverText="Github" onPress={()=>{}}>
          <BsGithub />
        </XButton>
      </div>
    </div>
  );
};

export default NavigationBar;
