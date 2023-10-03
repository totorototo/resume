import React, { forwardRef, useState } from "react";
import styled from "styled-components";
import { color, compose, layout, space, typography } from "styled-system";
import { uuid } from "./uuid";

const SvgComponent = forwardRef(({ title, ...props }, svgRef) => {
  const [titleId] = useState(() => (title ? uuid() : undefined));
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentcolor"
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
    </svg>
  );
});
const SvgInfo = styled(SvgComponent)(
  {
    flex: "none",
    verticalAlign: "middle",
  },
  compose(space, color, layout, typography)
);
export default SvgInfo;
