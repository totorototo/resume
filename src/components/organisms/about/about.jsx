import { Flex, Text } from "../../elements/index.js";

export const About = ({ about }) => {
  return (
    <Flex mt={[3, 0]} mb={[3]} flexDirection={["column"]}>
      {about.map((statement, index) => (
        <Text
          textAlign={["justify"]}
          mb={[3]}
          fontSize={[2]}
          color={"text.secondary"}
          key={index}
        >
          {statement}
        </Text>
      ))}
    </Flex>
  );
};
