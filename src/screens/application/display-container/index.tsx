import React from "react";
import { motion } from "framer-motion";
import NetPattern from "@components/net-pattern";
import style from "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark-reasonable";
import { useParams } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";

const DisplayContainer = ({
  displayComponent,
  component,
  componentName
}: {
  displayComponent: React.FunctionComponentElement<{}>;
  component: any;
  componentName:string
}) => {
  const [codeVisible, setCodeVisible] = React.useState(false);
  React.useEffect(() => {}, []);

  return (
    <div className="my-12">
      <div className="flex text-sm  my-4 items-center justify-between">
        <div className="flex gap-2">
        <button
          onClick={() => setCodeVisible(false)}
          className={`py-2 px-4 border hover:border-x-grey-II border-zinc-950  rounded-xl ${
            !codeVisible ? "bg-x-grey-II text-ascent" : "text-white/50"
          }`}
        >
          Preview
        </button>
        <button
          onClick={() => setCodeVisible(true)}
          className={`py-2 px-4 border hover:border-x-grey-II border-zinc-950  rounded-xl ${
            codeVisible ? "bg-x-grey-II text-ascent" : "text-white/50"
          }`}
        >
          code
        </button>

        </div>
        <h1 className="text-xs">{componentName.toUpperCase()}</h1>
      </div>
      {codeVisible ? (
        <div className="overflow-y-scroll relative hide-scroll w-[68rem] max-h-[40rem] bg-neutral-900
         overflow-hidden border border-[#171717] rounded-2xl">

          <SyntaxHighlighter
            customStyle={{
              borderRadius: 10,
              backgroundColor: "",
              padding: 24,
              fontSize: 14,
            }}
            language="typescript"
            style={style}
          >
            {`import React from "react";
import { motion } from "framer-motion";
import PriceContainer from "./price-container";
import RatingContainer from "./rating-container";
import DetailsContainer from "./details-container";
import ImageContainer from "./image-container";

/**
 * PropsType of this Component :-
 * props.data -> All the data of the ecommerce Item.
 * props.style -> Changeable Card Styles
 */
type PropsType = {
  data: {
    images: Array<any>;
    brand?: string;
    itemName: string;
    description?: string;
    rating?: number;
    price?: number;
    discount?: number;
    sold?: number;
  };
  style?: {
    borderColor?: string;
    padding?: number;
    width?: number;
    themeColor?: string;
    backgroundColor?: string;
    borderRadius?: number;
    textColor?:string
  };
  animateOnHover?: boolean;
};

const EcomCard = ({
  data,
  style = {
    padding: 8,
    backgroundColor: "rgb(9 9 11)",
    themeColor: "rgb(0 196,118)",
    borderColor: "rgb(48 48 48)",
    width: 288,
    borderRadius: 24,
    textColor:'#fff'
  },

  animateOnHover = false,
}: PropsType) => {
  return (
    <motion.div
      whileHover={
        animateOnHover && {
          scale: 1.02,
        }
      }
      // whileInView={
      //   animateOnView && {
      //     scale: [0.9, 1],
      //     opacity: [0, 1],
      //     transition: {
      //       duration: 0.4,
      //       delay: 0.2,
      //     },
      //   }
      // }

export default EcomCard;
`}
          </SyntaxHighlighter>
        </div>
      ) : (
        <div className="h-[40rem] border border-x-grey-II rounded-[20px] relative overflow-hidden w-[68rem]">
          <NetPattern />
          {displayComponent}
        </div>
      )}
    </div>
  );
};

export default DisplayContainer;
