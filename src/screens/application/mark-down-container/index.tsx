import React from "react";
import Mdxa from "@components/mdx-styled-components/Mdxa";
import style from "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark-reasonable";
import SyntaxHighlighter from "react-syntax-highlighter";
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

const MarkDownContainer = ({ Markdown }: { Markdown: any }) => {
  return (
    <div className="flex-col">
      <Markdown
        components={{
          h1: (props) => {
            return (
              <motion.h1
                // whileInView={EntryAnim}
                viewport={{once:true}}
                className="text-5xl font-bold pb-4 borde-l-[6px] bordr-x-grey-III "
              >
                {props.children}
              </motion.h1>
            );
          },
          h2: (props) => {
            return (
              <motion.h2
                // whileInView={EntryAnim}
                className="text-2xl font-medium borde-l-[6px] bor py-3 bordr-x-grey-III"
              >
                {props.children}
              </motion.h2>
            );
          },
          p: (props) => {
            return (
              <motion.p
                // whileInView={EntryAnim}
                className="text py-6 text-white/70 border-l pl-12 ml-4 border-dashe border-x-grey-III/50"
              >
                {props.children}
              </motion.p>
            );
          },
          pre: (props: any) => {
            return (
              <motion.div
                // whileInView={EntryAnim}
                className="text-sm border-l pl-12 ml-4 border-dashed border-x-grey-III/50 pb-8 "
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
