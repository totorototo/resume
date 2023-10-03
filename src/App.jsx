import {
  Flex,
  Heading,
  Text,
  Link,
  Image,
} from "./components/elements/index.js";
import { useEffect, useState } from "react";

import json from "./assets/data.json";

import lybitos from "./assets/Lybitos-Strava.png";
import positic from "./assets/positic.png";
import ultra from "./assets/Ultra-buddy.png";

const getImageUrl = function (name) {
  if (name === "Lybitos-Strava") {
    return lybitos;
  } else if (name === "Positic") {
    return positic;
  } else if (name === "Ultra-Buddy") {
    return ultra;
  } else lybitos;
};

function App() {
  const [data, set] = useState();

  useEffect(() => {
    set(json);
  }, []);

  return (
    data && (
      <Flex
        flexDirection={["column", "column", "row"]}
        width={"100%"}
        height={"100%"}
        alignItems={["center"]}
        justifyContent={["center"]}
        overflowY={"scroll"}
        px={[2, 6]}
      >
        <Flex
          top={[20, 0, 0]}
          position={["static", "static", "sticky"]}
          width={["100%", "100%", "50%"]}
          height={["25%", "25%", "100%"]}
          color={"text.inverse"}
          flexDirection={["column"]}
          flex={1}
          p={[2, 2, 4]}
          maxWidth={["640px"]}
        >
          <Heading color={"text.inverse"}>{data.general.name}</Heading>
          <Heading pt={[2]} color={"text.inverse"} variant={"heading-5"}>
            {data.general.role}
          </Heading>
          <Text
            lineHeight={"1.5"}
            maxWidth={"20rem"}
            pt={[3]}
            fontSize={[2]}
            color={"text.secondary"}
          >
            {data.general.pickupLine}
          </Text>
          <Flex mt={"auto"} width={["100%"]}>
            <Link
              href={data.general.linkedin}
              variant="nav1"
              color={"text.inverse"}
              mx={[2, 3]}
              fontSize={[3]}
              fontWeight={["300"]}
            >
              linkedin
            </Link>
            <Link
              mr={[2, 3]}
              fontSize={[3]}
              fontWeight={["300"]}
              href={data.general.github}
              variant="nav1"
              color={"text.inverse"}
            >
              github
            </Link>
            <Link
              fontSize={[3]}
              fontWeight={["300"]}
              href={data.general.twitter}
              variant="nav1"
              color={"text.inverse"}
            >
              twitter
            </Link>
          </Flex>
        </Flex>
        <Flex
          flexDirection={["column"]}
          width={["100%", "100%", "50%"]}
          height={["75%", "75%", "100%"]}
          p={[2, 2, 4]}
          maxWidth={["640px"]}
        >
          <Flex mb={[3]} flexDirection={["column"]}>
            {data.about.map((statement, index) => (
              <Text
                mb={[3]}
                fontSize={[2]}
                color={"text.secondary"}
                key={index}
              >
                {statement}
              </Text>
            ))}
          </Flex>
          <Flex mb={[4]} flexDirection={["column"]}>
            <Text mb={[3]} fontSize={[3, 4]} color={"text.inverse"}>
              Experiences
            </Text>
            <Flex mb={[3]} flexDirection={["column"]}>
              {data.experiences.map((experience, index) => (
                <Flex mb={[3]} key={index}>
                  <Flex width={["30%"]}>
                    <Text color={"text.secondary"}>{`${
                      experience.roles[experience.roles.length - 1].period.start
                    } - ${experience.roles[0].period.end}`}</Text>
                  </Flex>
                  <Flex
                    ml={[2]}
                    mb={[2]}
                    width={["70%"]}
                    flexDirection={["column"]}
                  >
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
                        <Text
                          color={"text.secondary"}
                          key={index}
                        >{`${task}`}</Text>
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
          <Flex mb={[4]} flexDirection={["column"]}>
            <Text mb={[3]} fontSize={[3, 4]} color={"text.inverse"}>
              Skills
            </Text>
            {Object.entries(data.skills).map(([type, list], index) => (
              <Flex mb={[3]} flexDirection={["column"]} key={index}>
                <Text mb={[1]} fontSize={[2]} color={"text.inverse"}>
                  {type}
                </Text>
                <Flex width={["100%"]} flexWrap={"wrap"}>
                  {list.map((item, index) => (
                    <Text
                      mb={[1]}
                      mr={[2]}
                      fontSize={[2]}
                      color={"text.secondary"}
                      key={index}
                    >
                      {item}
                    </Text>
                  ))}
                </Flex>
              </Flex>
            ))}
          </Flex>
          <Flex mb={[4]} flexDirection={["column"]}>
            <Text mb={[3]} fontSize={[3, 4]} color={"text.inverse"}>
              Projects
            </Text>
            {data.selectedProjects.map((project, index) => (
              <Flex flexDirection={["column"]} mb={[3]} key={index}>
                <Flex flexDirection={"row"} alignItems={"flex-start"}>
                  <Image
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
          <Flex mb={[4]} flexDirection={["column"]}>
            <Text mb={[3]} fontSize={[3, 4]} color={"text.inverse"}>
              Education
            </Text>
            {data.education.map((item, index) => (
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
          <Flex mb={[4]} flexDirection={["column"]}>
            <Text mb={[3]} fontSize={[3, 4]} color={"text.inverse"}>
              Interests
            </Text>
            <Flex>
              {data.interests.map((interest, index) => (
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
        </Flex>
      </Flex>
    )
  );
}

export default App;
