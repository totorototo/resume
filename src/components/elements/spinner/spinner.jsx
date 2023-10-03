import React from "react";
import styled, { keyframes } from "styled-components";
import { Icons } from "../icons";
import { Box } from "../box";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const RotatingLoader = styled(Icons.Loader)`
  animation: ${spin} 3s linear infinite;
`;

export const Spinner = ({ block, title, size, color, ...props }) => (
  <Box display={block ? "block" : "inline-block"} {...props}>
    <RotatingLoader title={title} fontSize={size} color={color} />
  </Box>
);

Spinner.defaultProps = {
  block: true,
  title: "Loading…",
  color: "ui.primary",
};
