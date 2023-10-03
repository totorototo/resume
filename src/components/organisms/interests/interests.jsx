import { Flex, Text } from "../../elements/index.js";

export const Interests = ({ interests }) => {
  return (
    <Flex mb={[4]} flexDirection={["column"]}>
      <Text mb={[3]} fontSize={[3, 4]} color={"text.inverse"}>
        Interests
      </Text>
      <Flex mb={[4]}>
        {interests.map((interest, index) => (
          <Text
            mb={[1]}
            mr={[2]}
            fontSize={[2]}
            color={"text.secondary"}
            key={index}
          >
            {interest}
          </Text>
        ))}
      </Flex>
    </Flex>
  );
};
