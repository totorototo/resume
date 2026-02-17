import { Flex, Heading, Icons, Link, Text } from "../../elements/index.js";
import { Scene } from "../scene/scene.jsx";
import AutoSizer from "react-virtualized-auto-sizer";

export const General = ({ general }) => {
  return (
    <Flex height={["100%"]} width={["100%"]} flexDirection={["column"]}>
      <Heading fontFamily={"CabinSketch"} color={"ui.secondary"}>
        {general.name}
      </Heading>
      <Heading pt={[2]} color={"ui.secondary"} variant={"heading-5"}>
        {general.role}
      </Heading>
      <Text
        lineHeight={"1.5"}
        maxWidth={"20rem"}
        pt={[3]}
        fontSize={[2]}
        color={"text.secondary"}
      >
        {general.pickupLine}
      </Text>
      <Flex width={["100%"]} height={["200px", "300px", "400px"]}>
        <AutoSizer>
          {({ width, height }) => <Scene width={width} height={height} />}
        </AutoSizer>
      </Flex>

      <Flex mt={"auto"} width={["100%"]}>
        <Link
          href={general.linkedin}
          variant="nav1"
          color={"text.primary"}
          mr={[3]}
          fontSize={[3]}
          fontWeight={["300"]}
        >
          <Icons.Linkedin title="LinkedIn" color="text.primary" />
        </Link>
        <Link
          mr={[3]}
          fontSize={[3]}
          fontWeight={["300"]}
          href={general.github}
          variant="nav1"
          color={"text.primary"}
        >
          <Icons.Github title="GitHub" color="text.primary" />
        </Link>
      </Flex>
    </Flex>
  );
};
