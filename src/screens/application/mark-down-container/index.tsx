// import { MDXProvider } from "@mdx-js/react";
import MarkDownFile from "../../../../readme.md";
// import Mdxh1 from "@components/mdx-styled-components/Mdxh1";
import React from "react";
import Mdxa from "@components/mdx-styled-components/Mdxa";
// import Mdxpre from "@components/mdx-styled-components/Mdxpre";
import Mdxp from "@components/mdx-styled-components/Mdxp";
import Mdxh2 from "@components/mdx-styled-components/Mdxh2";
// import { compile } from "@mdx-js/mdx";
// import rehypeHighlight from "rehype-highlight";
// import CodeBlock from "@components/code-block";
import style from "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark-reasonable";
import SyntaxHighlighter from "react-syntax-highlighter";
import { useParams } from "react-router-dom";
// import COMPONENTS_DATA from "../../../constants/COMPONENT_DATA";

const MarkDownContainer = () => {
  const { name } = useParams();
  const [codee, setCode] = React.useState<any>();
  return (
    <div className="flex-col">
      <MarkDownFile
        components={{
          h1(props) {
            return <h1 className="text-5xl font-bold">{props.children}</h1>;
          },
          pre: (props: any) => {
            return (
              <div className="text-sm">
                <SyntaxHighlighter
                  customStyle={{
                    borderRadius: 10,
                    backgroundColor: "rgb(14 14 16)",
                    border: "1px solid #171717",
                    padding:24
                  }}
                  language="typescript"
                  style={style}
                >
                  {String(props.children.props.children)}
                </SyntaxHighlighter>
              </div>
            );
          },
          a: Mdxa,
          p: Mdxp,
          h2: Mdxh2,
        }}
      />
    </div>
  );
};

export default MarkDownContainer;
