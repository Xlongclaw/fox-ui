import { MDXProvider } from "@mdx-js/react";
import MarkDownFile from "../../../../readme.md";
import Mdxh1 from "@components/mdx-styled-components/Mdxh1";
import React from "react";
import Mdxa from "@components/mdx-styled-components/Mdxa";
import Mdxpre from "@components/mdx-styled-components/Mdxpre";
import Mdxp from "@components/mdx-styled-components/Mdxp";
import Mdxh2 from "@components/mdx-styled-components/Mdxh2";

const MarkDownContainer = () => {
  return (
    <div className="flex-col">
      <MDXProvider>
        <MarkDownFile
          components={{
            h1: Mdxh1,
            a:Mdxa,
            pre:Mdxpre,
            p:Mdxp,
            h2:Mdxh2
          }}
        />
      </MDXProvider>
    </div>
  );
};

export default MarkDownContainer;
