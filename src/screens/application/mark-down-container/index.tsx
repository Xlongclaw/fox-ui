
import MarkDownFile from "@fox-components/ecom-card/ecom-card.md";
import React from "react";
import Mdxa from "@components/mdx-styled-components/Mdxa";

import style from "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark-reasonable";
import SyntaxHighlighter from "react-syntax-highlighter";
import { useParams } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
// import COMPONENTS_DATA from "../../../constants/COMPONENT_DATA";
import File from "./MarkDown.mdx";
import { motion } from "framer-motion";

const EntryAnim = {
  y: [-10, 0],
  opacity: [0, 0, 1],
  transition: {
    stiffness: 200,
    damping: 60,
    type: "spring",
  },
};

const MarkDownContainer = ({ markdown }: { markdown: any }) => {
  const { name } = useParams();
  const [codee, setCode] = React.useState<any>();
  return (
    <div className="flex-col">
      {/* <MDXProvider children={markdown}/> */}
      {/* <File
        components={{
          h1(props) {
            return <h1 className="text-5xl font-bold">{props.children}</h1>;
          },
          MarkDownFile() {
            return markdown;
          },
        }}
      /> */}
      <MarkDownFile
        components={{
          h1: (props) => {
            return (
              <motion.h1
                whileInView={EntryAnim}
                className="text-5xl font-bold pb-4 borde-l-[6px] pl-24 bordr-x-grey-III"
              >
                {props.children}
              </motion.h1>
            );
          },
          h2: (props) => {
            return (
              <motion.h2
                whileInView={EntryAnim}
                className="text-3xl font-semibold borde-l-[6px] bor pl-24 py-3 bordr-x-grey-III  "
              >
                {props.children}
              </motion.h2>
            );
          },
          p: (props) => {
            return (
              <motion.p
                whileInView={EntryAnim}
                className="text py-6 text-white/70 border-l-2 pl-24 border-dashed border-x-grey-III "
              >
                {props.children}
              </motion.p>
            );
          },
          pre: (props: any) => {
            return (
              <motion.div
                whileInView={EntryAnim}
                className="text-sm border-l-2 pl-24 border-dashed border-x-grey-III"
              >
                <SyntaxHighlighter
                  customStyle={{
                    borderRadius: 10,
                    backgroundColor: "rgb(14 14 16)",
                    border: "1px solid #171717",
                    padding: 24,
                  }}
                  language="typescript"
                  style={style}
                >
                  {String(props.children.props.children)}
                </SyntaxHighlighter>
              </motion.div>
            );
          },
          a: Mdxa,
        }}
      />
    </div>
  );
};

export default MarkDownContainer;
