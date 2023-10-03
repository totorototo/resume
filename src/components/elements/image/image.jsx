import styled from "styled-components";
import {
  border,
  compose,
  flexbox,
  layout,
  position,
  space,
  variant,
} from "styled-system";

const imageVariants = variant({
  variants: {
    default: {},
    "small-avatar": {
      width: 2,
      height: 2,
      borderRadius: 999999,
    },
    avatar: {
      width: 3,
      height: 3,
      borderRadius: 999999,
    },
  },
});

export const Image = styled.img(
  {
    //maxWidth: "100%",
    height: "auto",
  },
  compose(space, layout, flexbox, border, position),
  imageVariants
);

Image.defaultProps = {
  variant: "default",
};
