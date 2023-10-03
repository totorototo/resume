import React, { forwardRef } from "react";
import { Box } from "../box";

export const AspectRatio = forwardRef(
  ({ ratio = 16 / 9, children, ...props }, ref) => (
    <Box ref={ref} position="relative" overflow="hidden">
      <Box width="100%" height={0} pb={100 / ratio + "%"} />
      <Box {...props} position="absolute" top={0} right={0} bottom={0} left={0}>
        {children}
      </Box>
    </Box>
  )
);

AspectRatio.defaultProps = {
  ratio: 1 / 1,
};
