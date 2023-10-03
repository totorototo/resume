import styled from "styled-components";
import {
  border,
  color,
  compose,
  flexbox,
  layout,
  position,
  space,
  gridArea,
} from "styled-system";

export const Box = styled.div(
  {
    boxSizing: "border-box",
    minWidth: 0,
  },
  compose(space, color, layout, flexbox, border, position, gridArea)
);
