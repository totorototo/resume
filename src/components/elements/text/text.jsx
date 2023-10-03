import styled from "styled-components";
import { variant } from "styled-system";
import { typographyFunctions } from "../typography-functions";

const defaultextStyles = {
  fontFamily: "body",
  fontWeight: "regular",
  lineHeight: "copy",
  color: "text.primary",
  mt: 0,
  mb: 0,
};

const textVariants = variant({
  variants: {
    body: {
      ...defaultextStyles,
      fontSize: 2,
    },
    caption: {
      ...defaultextStyles,
      fontSize: 1,
    },
    hint: {
      ...defaultextStyles,
      fontSize: 0,
    },
    label: {
      ...defaultextStyles,
      fontFamily: "heading",
      fontSize: 1,
      fontWeight: "medium",
    },
  },
});

export const Text = styled.p`
  ${textVariants}
  ${typographyFunctions}
`;

Text.defaultProps = {
  variant: "body",
};
