import React from "react";
import "component-library/dist/index.css";
import { Button } from "component-library";

export const App = () => (
  <>
    <p>Here&apos;s a shared component button!</p>
    <Button onClick={() => alert("yay!")}>Click me</Button>
  </>
);
