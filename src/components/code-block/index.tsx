import React, { Children } from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import style from "react-syntax-highlighter/dist/cjs/styles/prism/material-dark"

function CodeBlock({className, children}:{children:string, className:string}) {
 <SyntaxHighlighter style={style} language={"jsx"} PreTag="pre" children={children} />
}

export default CodeBlock