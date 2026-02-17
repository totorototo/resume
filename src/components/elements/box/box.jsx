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
import { shouldForwardProp } from "../styled-system-props";

export const Box = styled.div.withConfig({
  shouldForwardProp
})(
  {
    boxSizing: "border-box",
    minWidth: 0,
  },
  compose(space, color, layout, flexbox, border, position, gridArea)
);
