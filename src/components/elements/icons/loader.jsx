import React, { forwardRef, useState } from "react";
import styled from "styled-components";
import { color, compose, layout, space, typography } from "styled-system";
import { uuid } from "./uuid";

const SvgComponent = forwardRef(({ title, ...props }, svgRef) => {
  const [titleId] = useState(() => (title ? uuid() : undefined));
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
    </svg>
  );
});
const SvgLoader = styled(SvgComponent)(
  {
    flex: "none",
    verticalAlign: "middle",
  },
  compose(space, color, layout, typography)
);
export default SvgLoader;
