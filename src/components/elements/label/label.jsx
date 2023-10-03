import React, { forwardRef } from "react";
import styled from "styled-components";
import { Text } from "../text";
import { Box } from "../box";

const StyledLabel = styled(Text)`
  display: flex;
  width: 100%;
  align-items: center;

  ${(props) =>
    props.required &&
    `&:after {
      content: "*";
      color: ${props.theme.colors.brand.secondary};
    }`}
`;

StyledLabel.defaultProps = {
  pl: 0,
  pr: 0,
};

export const Label = forwardRef(({ children, as, ...props }, ref) => (
  <StyledLabel
    as={as}
    variant="label"
    ref={ref}
    color="text.primary"
    {...props}
  >
    {children}
    {props.adornment && (
      <Box
        display="inline-flex"
        alignItems="center"
        color="text.secondary"
        ml={1}
      >
        {props.adornment}
      </Box>
    )}
  </StyledLabel>
));

Label.defaultProps = {
  required: false,
  as: "label",
};
