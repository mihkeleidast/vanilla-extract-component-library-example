import { vars } from "component-library";
import { style } from "@vanilla-extract/css";

export const app = style({
  margin: "0 auto",
  maxWidth: 800,
  padding: 20,
  color: vars.color.primary,
});
