import styled from "styled-components";
import { variant } from "styled-system";
import { typographyFunctions } from "../typography-functions";
import { shouldForwardProp } from "../styled-system-props";

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
    item: {
      ...defaultextStyles,
      textIndent: "-12px",
      paddingLeft: "12px",
    },
    label: {
      ...defaultextStyles,
      fontFamily: "heading",
      fontSize: 1,
      fontWeight: "medium",
    },
  },
});

export const Text = styled.p.withConfig({
  shouldForwardProp
})`
  ${textVariants}
  ${typographyFunctions} /* text-indent: -12px;
  padding-left: 12px;*/
`;

Text.defaultProps = {
  variant: "body",
};
