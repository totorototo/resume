import { Flex, Text } from "../../elements/index.js";

export const Education = ({ education }) => {
  return (
    <Flex mb={[4]} flexDirection={["column"]}>
      <Text
        fontFamily={"CabinSketch"}
        mb={[3]}
        fontSize={[4]}
        color={"text.inverse"}
      >
        Education
      </Text>
      {education.map((item, index) => (
        <Flex key={index} flexDirection={["row"]}>
          <Flex width={["30%"]}>
            <Text
              color={"text.secondary"}
            >{`${item.period.start} - ${item.period.end}`}</Text>
          </Flex>
          <Flex
            width={["70%"]}
            alignItems={["flex-start"]}
            flexWrap={"wrap"}
            flexDirection={["column"]}
            ml={[2]}
            mb={[2]}
            justifyContent={["center"]}
          >
            <Text mb={[1]} color={"text.inverse"}>
              {item.title}
            </Text>
            <Text color={"text.secondary"}>{item.school}</Text>
            <Text color={"text.secondary"}>{item.location}</Text>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};
