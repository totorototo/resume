import { Flex, Image, Link, Text } from "../../elements/index.js";
import lybitos from "../../../assets/Lybitos-Strava.png";
import positic from "../../../assets/Positic.png";
import ultra from "../../../assets/Ultra-buddy.png";

const getImageUrl = function (name) {
  if (name === "Lybitos-Strava") {
    return lybitos;
  } else if (name === "Positic") {
    return positic;
  } else if (name === "Ultra-Buddy") {
    return ultra;
  } else lybitos;
};
export const Projects = ({ propjects }) => {
  return (
    <Flex mb={[4]} flexDirection={["column"]}>
      <Text
        fontFamily={"CabinSketch"}
        mb={[3]}
        fontSize={[3, 4]}
        color={"text.inverse"}
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
              <Text mb={[1]} fontSize={[2]} color={"text.inverse"}>
                {`${project.name}`}
              </Text>
              <Text mb={[1]} fontSize={[2]} color={"text.secondary"}>
                {project.description}
              </Text>
              <Link href={project.url} variant="nav1" mb={[2]}>
                <Text color={"text.secondary"}>{project.url}</Text>
              </Link>
              <Flex flexWrap={"wrap"}>
                {project.stack.map((item, index) => (
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
        </Flex>
      ))}
    </Flex>
  );
};
