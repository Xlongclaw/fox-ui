import DisplayContainer from "@screens/application/display-container";
import MarkDownContainer from "@screens/application/mark-down-container";
import React from "react";
import { useParams } from "react-router-dom";
import COMPONENTS_DATA from "../../constants/COMPONENT_DATA";

const ContentScreen = () => {
  const { name } = useParams();
  return (
    <div>
      {COMPONENTS_DATA.map((component) => {
        if (name === component.componentName)
          return (
            <>
              <DisplayContainer  />
              <MarkDownContainer />
            </>
          );
      })}
    </div>
  );
};

export default ContentScreen;
