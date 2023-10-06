import { Flex, Text } from "../../elements/index.js";

export const Experiences = ({ experiences }) => {
  return (
    <Flex mb={[4]} flexDirection={["column"]}>
      <Text
        fontFamily={"CabinSketch"}
        mb={[3]}
        fontSize={[3, 4]}
        color={"text.inverse"}
      >
        Experiences
      </Text>
      <Flex mb={[3]} flexDirection={["column"]}>
        {experiences.map((experience, index) => (
          <Flex mb={[3]} key={index}>
            <Flex width={["30%"]}>
              <Text color={"text.secondary"}>{`${
                experience.roles[experience.roles.length - 1].period.start
              } - ${experience.roles[0].period.end}`}</Text>
            </Flex>
            <Flex ml={[2]} mb={[2]} width={["70%"]} flexDirection={["column"]}>
              <Flex flexDirection={["column"]}>
                {experience.roles.length > 1 ? (
                  <Flex mb={[3]} flexDirection={["column"]}>
                    {experience.roles.map((role, index) => {
                      if (index === 0) {
                        return (
                          <Text
                            color={"text.inverse"}
                            key={index}
                          >{`${experience.roles[0].role} - ${experience.company}`}</Text>
                        );
                      } else {
                        return (
                          <Text key={index} color={"text.secondary"}>
                            {experience.roles[index].role}
                          </Text>
                        );
                      }
                    })}
                  </Flex>
                ) : (
                  <Text
                    mb={[3]}
                    color={"text.inverse"}
                  >{`${experience.roles[0].role} - ${experience.company}`}</Text>
                )}
              </Flex>

              <Flex mb={[3]} flexDirection={["column"]}>
                {experience.tasks.map((task, index) => (
                  <Text color={"text.secondary"} key={index}>{`${task}`}</Text>
                ))}
              </Flex>
              <Flex flexWrap={"wrap"}>
                {experience.stack.map((item, index) => (
                  <Text
                    color={"ui.disabled"}
                    borderRadius={[2]}
                    px={[2]}
                    mr={[2]}
                    mb={[2]}
                    bg={"#ffffff20"}
                    key={index}
                  >
                    {item}
                  </Text>
                ))}
              </Flex>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
