import styled from "styled-components";
import { Text } from "../../elements/index.js";
import { darken } from "polished";

const AnimatedText = styled(Text)`
  transition: all 0.3s ease;
  &:hover {
    background-color: ${(props) => darken(0.2, props.theme.colors.ui.primary)};
    cursor: pointer;
  }
`;

export const Pill = ({ handler = () => {}, selected = false, label = "" }) => {
  return (
    <AnimatedText
      onClick={() => handler()}
      color={selected ? "text.inverse" : "text.secondary"}
      borderRadius={[2]}
      px={[2]}
      mr={[2]}
      mb={[2]}
      bg={selected ? "ui.primary" : "#ffffff20"}
    >
      {label}
    </AnimatedText>
  );
};
