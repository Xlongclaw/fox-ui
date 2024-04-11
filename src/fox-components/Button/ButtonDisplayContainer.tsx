import React from "react";
import Button from "./Button";

export default function ButtonDisplayContainer() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center h-full">
      <div className="flex gap-2">
        <Button borderWidth={2}>Click Me</Button>
        <Button borderWidth={2} color="secondary">Click Me</Button>
        <Button borderWidth={2} color="success">Click Me</Button>
        <Button borderWidth={2} color="warning">Click Me</Button>
        <Button borderWidth={2} color="danger">Click Me</Button>
        <Button borderWidth={2} color="default">Click Me</Button>
      </div>
      <div className="flex gap-2">
        <Button borderWidth={2} variant="bordered">Click Me</Button>
        <Button borderWidth={2} variant="bordered" color="secondary">Click Me</Button>
        <Button borderWidth={2} variant="bordered" color="success">Click Me</Button>
        <Button borderWidth={2} variant="bordered" color="warning">Click Me</Button>
        <Button borderWidth={2} variant="bordered" color="danger">Click Me</Button>
        <Button borderWidth={2} variant="bordered" color="default">Click Me</Button>
      </div>
    </div>
  );
}
