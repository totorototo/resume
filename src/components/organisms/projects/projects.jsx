import { Flex, Image, Link, Text } from "../../elements/index.js";
import lybitos from "../../../assets/Lybitos-Strava.png";
import positic from "../../../assets/Positic.png";
import virtualWorld from "../../../assets/virtual-world.png";
import ultra from "../../../assets/Ultra-buddy.png";
import useStack from "../../../store/store.js";
import styled from "styled-components";
import { darken } from "polished";

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

const getImageUrl = function (name) {
  if (name === "Lybitos-Strava") {
    return lybitos;
  } else if (name === "Positic") {
    return positic;
  } else if (name === "Ultra-Buddy") {
    return ultra;
  } else if (name === "Virtual World Demo") {
    return virtualWorld;
  } else lybitos;
};
export const Projects = ({ propjects }) => {
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
        Side Projects
      </Text>
      {propjects.map((project, index) => (
        <Flex flexDirection={["column"]} mb={[3]} key={index}>
          <Flex flexDirection={"row"} alignItems={"flex-start"}>
            <Image
              alt={"project logo"}
              mt={[1]}
              maxWidth={64}
              maxHeight={64}
              ratio={16 / 9}
              src={getImageUrl(project.name)}
            />
            <Flex ml={[3]} flexDirection={"column"}>
              <Text mb={[1]} fontSize={[2]} color={"text.primary"}>
                {`${project.name}`}
              </Text>
              <AnimatedText
                mb={[1]}
                fontSize={[2]}
                color={
                  project.stack.includes(selectedItem)
                    ? "ui.primary"
                    : "text.secondary"
                }
              >
                {project.description}
              </AnimatedText>
              <Link href={project.url} variant="nav1" mb={[2]}>
                <Text color={"text.secondary"}>{project.url}</Text>
              </Link>
              <Flex flexWrap={"wrap"}>
                {project.stack.map((item, index) => (
                  <Pills
                    onClick={() => handleClick(item)}
                    color={
                      item === selectedItem ? "text.inverse" : "text.secondary"
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
        </Flex>
      ))}
    </Flex>
  );
};
