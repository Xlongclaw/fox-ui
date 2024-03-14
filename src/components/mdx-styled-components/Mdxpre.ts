import styled from "styled-components";

import { compile } from "@mdx-js/mdx"
import rehypeHighlight from "rehype-highlight"

const Mdxpre = styled.pre`
  font-size: 14px;
  color: #fff;
  padding: 20px;
  margin-top: 16px;
  margin-bottom: 16px;
  background-color: #000;
  font-weight: 500;
  border-radius: 10px;
  border: 1px solid #8c8c8c;
`;

export default Mdxpre;


// const code = `~~~js
// console.log(1)
// ~~~`

// console.log(
//   String(await compile(code, {rehypePlugins: [rehypeHighlight]}))
// )
