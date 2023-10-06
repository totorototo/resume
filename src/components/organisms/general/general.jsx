import { Flex, Heading, Icons, Link, Text } from "../../elements/index.js";

export const General = ({ general }) => {
  return (
    <>
      <Heading fontFamily={"CabinSketch"} color={"text.inverse"}>
        {general.name}
      </Heading>
      <Heading pt={[2]} color={"text.inverse"} variant={"heading-5"}>
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
          color={"text.inverse"}
          mr={[3]}
          fontSize={[3]}
          fontWeight={["300"]}
        >
          <Icons.Linkedin title="twitter" color="text.inverse" />
        </Link>
        <Link
          mr={[3]}
          fontSize={[3]}
          fontWeight={["300"]}
          href={general.github}
          variant="nav1"
          color={"text.inverse"}
        >
          <Icons.Github title="twitter" color="text.inverse" />
        </Link>
        <Link
          fontSize={[3]}
          fontWeight={["300"]}
          href={general.twitter}
          variant="nav1"
          color={"text.inverse"}
        >
          <Icons.Twitter title="twitter" color="text.inverse" />
        </Link>
      </Flex>
    </>
  );
};
