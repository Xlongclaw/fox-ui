import NavigationBar from "@components/navigation-bar";
import React from "react";
import Explorer from "./explorer";
import MarkDownContainer from "./mark-down-container";

const Application: React.FC = () => {
  return (
    <div className="h-[90.5vh] flex flex-col">
      <NavigationBar />
      <div className="h-full flex mt-16">
        <Explorer />
        <div className="ml-24 mr-24 mt-8 pl-72">
          <MarkDownContainer />
        </div>
        <div className="">
          <div className="w-64 mt-8">
            <h2 className="text-[13px] font-bold text-black/60 pb-3">CONTENTS</h2>
            <div className="text-black/50 text-xs py-2 font-semibold">Props</div>
            <div className="text-black/50 text-xs py-2 font-semibold">TextInput</div>
            <div className="text-ascent text-xs py-2  font-semibold">Selected</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
