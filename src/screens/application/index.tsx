import NavigationBar from "@components/navigation-bar";
import React, { useState } from "react";
import Explorer from "./explorer";
import { Outlet, useParams } from "react-router-dom";

const Application: React.FC = () => {
  return (
    <div className="h-[90.5vh] flex flex-col">
      <NavigationBar />
      <div className="h-full flex mt-16">
        <Explorer />
        <div className="ml-20 mr-20 mt-4 pl-72">
          <Outlet/>
        </div>
        <div className="">
          <div className="w-64 mt-8">
            <h2 className="text-[16px] font-semibold text-white pb-3">
              CONTENTS
            </h2>
            <div className="text-white text-xs py-2 font-medium">Props</div>
            <div className="text-white text-xs py-2 font-medium">TextInput</div>
            <div className="text-ascent text-xs py-2  font-medium">
              Selected
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
