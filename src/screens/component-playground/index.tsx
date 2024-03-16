import React from "react";
import CountryWrapper from "./countryWrapper";

const ComponentPlayGround = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-zinc-950">
      <div className="flex gap-2">
        
      <CountryWrapper country="usa"/>
      <CountryWrapper country="aus"/>
      <CountryWrapper country="germany"/>
      </div>
    </div>
  );
};

export default ComponentPlayGround;
