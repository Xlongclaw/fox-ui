import React from "react";
import * as Icons from "react-icons/bs";

const Logo = () => {
  return (
    <div className="flex gap-4 items-center ">
      <div>
        <Icons.BsUnity size={24} className="" />
      </div>
      <div className="flex gap-2 items-center">
        <h3 className="text-[16px] font-medium">FOX UI CORE</h3>
        <h3 className="text-ascent text-xs">v1.03.02</h3>
      </div>
    </div>
  );
};

export default Logo;
