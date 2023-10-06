import { Flex, Text } from "../../elements/index.js";

export const Interests = ({ interests }) => {
  return (
    <Flex mb={[4]} flexDirection={["column"]}>
      <Text
        fontFamily={"CabinSketch"}
        mb={[3]}
        fontSize={[4]}
        color={"text.inverse"}
      >
        Interests
      </Text>
      <Flex mb={[4]}>
        <Text mb={[1]} mr={[2]} fontSize={[2]} color={"text.secondary"}>
          {interests.map((interest) => interest).join(", ")}
        </Text>
      </Flex>
    </Flex>
  );
};
