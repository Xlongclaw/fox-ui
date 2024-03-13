import Logo from "@components/logo";
import classNames from "classnames";
import React from "react";
import SearchBar from "./search-bar";
import XButton from "@components/x-button";
import { BsGithub } from "react-icons/bs";
import LinksContainer from "./links-container";

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
      className={classNames("flex glass justify-between px-12 py-3 fixed w-full h-16 items-center", {
        "border-b": isBordered === true,
      })}
    >
      <Logo />
      <div className="flex gap-3 items-center">
        <LinksContainer/>
        <SearchBar />
        <XButton hoverText="Github" onPress={()=>{}}>
          <BsGithub />
        </XButton>
      </div>
    </div>
  );
};

export default NavigationBar;
