import styled from "styled-components";
import { Text } from "../text";

export const Hint = styled(Text).attrs({
  variant: "hint",
  color: "text.secondary",
})``;

export const Error = styled(Text).attrs({
  variant: "hint",
  color: "text.error",
})``;
