import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@screens/home";
import Application from "@screens/application";
import ComponentPlayGround from "@screens/component-playground";

/**
 * This React Component handles all the screen routing.
 * @returns A React Router JSX Component.
 */
const RootRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/application" element={<Application />} />
        <Route path="/playground" element={<ComponentPlayGround />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
