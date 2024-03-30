import DisplayContainer from "@screens/application/display-container";
import MarkDownContainer from "@screens/application/mark-down-container";
import React, { useRef } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import COMPONENTS_DATA from "../../constants/COMPONENT_DATA";
import { useScroll, motion } from "framer-motion";

const ContentScreen = () => {
  const { name } = useParams();
  const expRef =useRef<HTMLDivElement>(null)
  const [showExplorer, setShowExplorer] = React.useState(true);
  React.useEffect(() => {
    const handleScroll = (x) => {
      const position = window.scrollY;
      if (position > 760) {
        
        setShowExplorer(false);
        return;
      }
      setShowExplorer(true);
      // setScrollPosition(x);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      {COMPONENTS_DATA.map((component) => {
        if (name === component.componentName)
          return (
            <>
              <DisplayContainer
                displayComponent={React.createElement(
                  component.displayComponent
                )}
                componentName={component.componentName}
                component={component.component}
              />
              <div className={`flex justify-between gap-32 ${showExplorer?"":"mr-[230px]"} `}>
                <MarkDownContainer Markdown={component.Markdown} />
                  <motion.div style={{position:showExplorer ?'unset':'fixed', right:72, top:109}}>
                    <div className="w-32 mt-8">
                      <h2 className="text-[16px] font-semibold text-white pb-3">
                        CONTENTS
                      </h2>
                      <div className="text-white text-xs py-2 font-medium">
                        Installation
                      </div>
                      <div className="text-white text-xs py-2 font-medium">
                        Usage
                      </div>
                      <div className="text-ascent text-xs py-2  font-medium">
                        Examples
                      </div>
                    </div>
                  </motion.div>
              </div>
            </>
          );
      })}
    </div>
  );
};

export default ContentScreen;
