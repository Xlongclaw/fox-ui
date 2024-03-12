import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@screens/home";
import Application from "@screens/application";

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
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
