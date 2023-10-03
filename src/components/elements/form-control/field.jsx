import styled from "styled-components";
import { Grid } from "../grid";

export const Field = styled(Grid).attrs({
  gridGap: 1,
  role: "group",
})``;

export const FieldSet = styled(Grid).attrs({
  gridGap: 1,
  as: "fieldset",
})``;

FieldSet.defaultProps = {
  border: 0,
  p: 0,
  ml: 0,
  mr: 0,
};
