import { style } from "@vanilla-extract/css";

import { vars } from "../../../variables/colors.css";

export const rootStyle = style({
  appearance: "none",
  borderRadius: 10,
  padding: 15,
  border: `1px solid ${vars.color.primary}`,
  backgroundColor: vars.color.tertiary,
  color: vars.color.primary,
});
