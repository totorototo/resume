import {
  border,
  color,
  compose,
  flexbox,
  layout,
  position,
  space,
  typography,
} from "styled-system";

export const typographyFunctions = compose(
  space,
  color,
  layout,
  flexbox,
  border,
  position,
  typography
);
