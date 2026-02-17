import { forwardRef } from "react";
import styled from "styled-components";
import { Image } from "../image";
import { AspectRatio } from "../aspect-ratio";

const CoverImage = styled(Image)({
  objectFit: "cover",
  objectPosition: "center",
});

export const AspectImage = forwardRef(({ ratio, _children, ...props }, ref) => (
  <AspectRatio ratio={ratio}>
    <CoverImage ref={ref} {...props} />
  </AspectRatio>
));

AspectImage.defaultProps = {
  ratio: 1 / 1,
};
