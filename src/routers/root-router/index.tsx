import React from "react";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Home from "@screens/home";
import Application from "@screens/application";
import ComponentPlayGround from "@screens/component-playground";
import DisplayContainer from "@screens/application/display-container";
import MarkDownContainer from "@screens/application/mark-down-container";
import ContentScreen from "@screens/content-screen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "application",
    element: <Application />,
    children: [
      {
        path: "components/:name",
        element: <ContentScreen />,
      },
    ],
  },
  {
    path: "/playground",
    element: <ComponentPlayGround />,
  },
]);

/**
 * This React Component handles all the screen routing.
 * @returns A React Router JSX Component.
 */
const RootRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default RootRouter;
