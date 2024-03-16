import React from "react";
import * as Icons from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/")}
      className="flex gap-4 items-center cursor-pointer"
    >
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
