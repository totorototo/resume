import { Flex, Text } from "../../elements/index.js";
import styled from "styled-components";
import { darken } from "polished";
import useStack from "../../../store/store.js";

const AnimatedText = styled(Text)`
  transition: all 0.3s ease;
`;

const Pills = styled(Text)`
  transition: all 0.3s ease;
  &:hover {
    background-color: ${(props) => darken(0.2, props.theme.colors.ui.primary)};
    cursor: pointer;
  }
`;

export const Experiences = ({ experiences }) => {
  const selectedItem = useStack((state) => state.selectedItem);
  const setSelectedItem = useStack((state) => state.setSelectedItem);

  function handleClick(item) {
    setSelectedItem(item);
  }

  return (
    <Flex mb={[4]} flexDirection={["column"]}>
      <Text
        fontFamily={"CabinSketch"}
        mb={[3]}
        fontSize={[4]}
        color={"ui.secondary"}
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
                            color={"text.primary"}
                            key={index}
                          >{`${experience.roles[0].role} - ${experience.company}`}</Text>
                        );
                      } else {
                        return (
                          <Text
                            opacity={[0.6]}
                            key={index}
                            color={"text.primary"}
                          >
                            {experience.roles[index].role}
                          </Text>
                        );
                      }
                    })}
                  </Flex>
                ) : (
                  <Text
                    mb={[3]}
                    color={"text.primary"}
                  >{`${experience.roles[0].role} - ${experience.company}`}</Text>
                )}
              </Flex>

              <Flex mb={[3]} flexDirection={["column"]}>
                {experience.tasks.map((task, index) => (
                  <AnimatedText
                    variant={"item"}
                    mb={[2]}
                    color={
                      task.stack.includes(selectedItem)
                        ? "ui.primary"
                        : "text.secondary"
                    }
                    key={index}
                  >{`\u2022 ${task.description}`}</AnimatedText>
                ))}
              </Flex>
              <Flex flexWrap={"wrap"}>
                {experience.tasks
                  .reduce((acc, task) => {
                    return [...acc, ...task.stack];
                  }, [])
                  .reduce((acc, item) => {
                    if (acc.indexOf(item) < 0) acc.push(item);
                    return acc;
                  }, [])
                  .sort()
                  .map((item, index) => (
                    <Pills
                      onClick={() => handleClick(item)}
                      color={
                        item === selectedItem
                          ? "text.inverse"
                          : "text.secondary"
                      }
                      borderRadius={[2]}
                      px={[2]}
                      mr={[2]}
                      mb={[2]}
                      bg={item === selectedItem ? "ui.primary" : "#ffffff20"}
                      key={index}
                    >
                      {item}
                    </Pills>
                  ))}
              </Flex>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
