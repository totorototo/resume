import { Flex, Image, Link, Text } from "../../elements/index.js";
import lybitos from "../../../assets/Lybitos-Strava.png";
import positic from "../../../assets/Positic.png";
import virtualWorld from "../../../assets/virtual-world.png";
import ultra from "../../../assets/Ultra-buddy.png";
import terminus from "../../../assets/terminus.png";
import useStack from "../../../store/store.js";
import styled from "styled-components";
import { Pill } from "../pill/index.js";
import { useRef } from "react";
import useOnClickOutside from "../../misc/hooks/useClickOutside.js";

const AnimatedText = styled(Text)`
  transition: all 0.3s ease;
`;

const getImageUrl = function (name) {
  if (name === "Terminus") {
    return terminus;
  }
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
export const Projects = ({ projects }) => {
  const selectedItem = useStack((state) => state.selectedItem);
  const setSelectedItem = useStack((state) => state.setSelectedItem);

  const ref = useRef();
  useOnClickOutside(ref, () => setSelectedItem(null));

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
      {projects.map((project, index) => (
        <Flex flexDirection={["column"]} mb={[3]} key={index}>
          <Flex flexDirection={"row"} alignItems={"flex-start"}>
            <Link href={project.url}>
              <Image
                alt={"project logo"}
                mt={[1]}
                maxWidth={64}
                maxHeight={64}
                ratio={16 / 9}
                src={getImageUrl(project.name)}
              />
            </Link>

            <Flex ml={[3]} flexDirection={"column"}>
              <Text mb={[1]} fontSize={[2]} color={"text.primary"}>
                {`${project.name}`}
              </Text>
              <AnimatedText
                mb={[3]}
                fontSize={[2]}
                color={
                  project.stack.includes(selectedItem)
                    ? "ui.primary"
                    : "text.secondary"
                }
              >
                {project.description}
              </AnimatedText>
              <Flex ref={ref} flexWrap={"wrap"}>
                {project.stack.map((item, index) => (
                  <Pill
                    handler={() => handleClick(item)}
                    selected={item === selectedItem}
                    label={item}
                    key={index}
                  />
                ))}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};
