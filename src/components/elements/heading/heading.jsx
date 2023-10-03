import styled from "styled-components";
import { variant } from "styled-system";
import { typographyFunctions } from "../typography-functions";

const defaultHeadingStyles = {
  fontFamily: "heading",
  fontWeight: "300",
  lineHeight: "title",
  color: "text.primary",
  mt: 0,
  mb: 0,
};

const headingVariant = variant({
  variants: {
    "heading-1": {
      fontSize: [7, 8, 9, 9],
      ...defaultHeadingStyles,
    },
    "heading-2": {
      fontSize: [6, 7, 8, 8],
      ...defaultHeadingStyles,
    },
    "heading-3": {
      fontSize: [5, 6, 7, 7],
      ...defaultHeadingStyles,
    },
    "heading-4": {
      fontSize: [4, 5, 6, 6],
      ...defaultHeadingStyles,
    },
    "heading-5": {
      fontSize: [3, 4, 5, 5],
      ...defaultHeadingStyles,
    },
  },
});

export const Heading = styled.h1`
  ${headingVariant}
  ${typographyFunctions}
`;

Heading.defaultProps = {
  variant: "heading-1",
};
