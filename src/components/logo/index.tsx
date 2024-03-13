import React from "react";
import * as Icons from "react-icons/bs";

const Logo = () => {
  return (
    <div className="flex gap-4 items-center">
      <div>
        <Icons.BsUnity size={24} className="text-black/60" />
      </div>
      <div>
        <h3 className="text-xs">FOX UI CORE</h3>
        <h3 className="text-ascent text-xs">v1.03.02</h3>
      </div>
    </div>
  );
};

export default Logo;
