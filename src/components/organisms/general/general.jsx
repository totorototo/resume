import { Flex, Heading, Icons, Link, Text } from "../../elements/index.js";

export const General = ({ general }) => {
  return (
    <>
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
      <Flex mt={"auto"} width={["100%"]}>
        <Link
          href={general.linkedin}
          variant="nav1"
          color={"text.primary"}
          mr={[3]}
          fontSize={[3]}
          fontWeight={["300"]}
        >
          <Icons.Linkedin title="twitter" color="text.primary" />
        </Link>
        <Link
          mr={[3]}
          fontSize={[3]}
          fontWeight={["300"]}
          href={general.github}
          variant="nav1"
          color={"text.primary"}
        >
          <Icons.Github title="twitter" color="text.primary" />
        </Link>
        <Link
          fontSize={[3]}
          fontWeight={["300"]}
          href={general.twitter}
          variant="nav1"
          color={"text.primary"}
        >
          <Icons.Twitter title="twitter" color="text.primary" />
        </Link>
      </Flex>
    </>
  );
};
