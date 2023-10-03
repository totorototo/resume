import { css } from "styled-components";

// TODO: use breakpoints defined in theme
const breakpoints = {
    mobile: "40em",
    tablet: "52em",
    desktop: "64em",
};

export const media = Object.keys(breakpoints).reduce((acc, label) => {
    acc[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}) {
      ${css(...args)}
    }
  `;
    return acc;
    }, {});
