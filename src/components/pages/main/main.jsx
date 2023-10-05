import { Flex } from "../../elements/index.js";
import {
  About,
  Education,
  Experiences,
  General,
  Interests,
  Projects,
  Skills,
} from "../../organisms/index.js";

export const Main = ({
  data: {
    general,
    about,
    experiences,
    skills,
    selectedProjects,
    education,
    interests,
  },
}) => {
  return (
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
        height={["24%", "24%", "100%"]}
        color={"text.inverse"}
        flexDirection={["column"]}
        flex={1}
        p={[2, 2, 4]}
        maxWidth={["640px"]}
      >
        <General general={general} />
      </Flex>

      <Flex
        flexDirection={["column"]}
        width={["100%", "100%", "50%"]}
        height={["76%", "76%", "100%"]}
        p={[2, 2, 4]}
        maxWidth={["640px"]}
      >
        <About about={about} />
        <Experiences experiences={experiences} />
        <Skills skills={skills} />
        <Projects propjects={selectedProjects} />
        <Education education={education} />
        <Interests interests={interests} />
      </Flex>
    </Flex>
  );
};
