import React from "react";

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const Hello = ({ children }) => {
  return <div>{children || `hello component`}</div>;
};
