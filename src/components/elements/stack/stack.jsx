import styled from "styled-components";
import { system } from "styled-system";
import css from "@styled-system/css";
import { Flex } from "../flex";

const getAlignment = (value) =>
  value === "start" || value === "end" ? "flex-" + value : value;

const stack = system({
  axis: {
    property: "flexDirection",
    transform: (value) => (value === "horizontal" ? "row" : "column"),
  },
  alignment: {
    property: "justifyContent",
    transform: getAlignment,
  },
  distribution: {
    property: "alignItems",
    transform: getAlignment,
  },
});

export const Stack = styled(Flex)`
  ${stack}

  > * {
    ${(props) =>
      css({
        [props.axis === "horizontal" ? "marginRight" : "marginBottom"]:
          props.space,
      })(props)}
  }

  > *:last-child {
    ${(props) =>
      css({
        [props.axis === "horizontal" ? "marginRight" : "marginBottom"]: 0,
      })(props)}
  }
`;

Stack.defaultProps = {
  axis: "horizontal",
  space: 3,
};
