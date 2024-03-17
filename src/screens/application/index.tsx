import NavigationBar from "@components/navigation-bar";
import React, { useRef, useState } from "react";
import Explorer from "./explorer";
import { Outlet, useParams } from "react-router-dom";
const Application: React.FC = () => {
const appRef = useRef()

  return (
    <div ref={appRef} className="h-[90.5vh] flex flex-col">
      <NavigationBar />
      <div className="h-full flex mt-16">
        <Explorer />
        <div className="ml-20 mr-20 mt-4 pl-72">
          <Outlet context={[appRef]}/>
        </div>
      </div>
    </div>
  );
};

export default Application;
