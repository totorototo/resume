import { Flex, Text } from "../../elements/index.js";

export const Skills = ({ skills }) => {
  return (
    <Flex mb={[4]} flexDirection={["column"]}>
      <Text
        fontFamily={"CabinSketch"}
        mb={[3]}
        fontSize={[3, 4]}
        color={"text.inverse"}
      >
        Skills
      </Text>
      {Object.entries(skills).map(([type, list], index) => (
        <Flex mb={[3]} flexDirection={["column"]} key={index}>
          <Text mb={[1]} fontSize={[2]} color={"text.inverse"}>
            {type}
          </Text>
          <Flex width={["100%"]} flexWrap={"wrap"}>
            <Text mb={[1]} mr={[2]} fontSize={[2]} color={"text.secondary"}>
              {list.map((item) => item).join(", ")}
            </Text>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};
