import React from "react";
import "component-library/dist/index.css";
import { Button } from "component-library";

import * as styles from "./app.css";

export const App = () => (
  <div className={styles.app}>
    <p>Here&apos;s a shared component button!</p>
    <Button onClick={() => alert("yay!")}>Click me</Button>
  </div>
);
