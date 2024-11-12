import { Center, Group, Text, rem, useComputedColorScheme } from "@mantine/core";
import { IconChartArcs } from "@tabler/icons-react";
import LogoImage from "../assets/logo.png";


export default function Logo(props) {
  const computedColorScheme = useComputedColorScheme();

  return (
    <Group wrap="nowrap" {...props}>
      <Center
        bg={computedColorScheme === "dark" ? "" : "gray.2"}
        p={5}
        style={{ borderRadius: "100%" }}
      >
        {/* <IconChartArcs style={{ stroke: "#fff", width: rem(25), height: rem(25), flexShrink: 0 }} /> */}
        <img
          src={LogoImage}
          alt="Logo"
          style={{ width: rem(25), height: rem(25), flexShrink: 0 }}
        />
      </Center>
      <Text fz={20} fw={600}>
        ProjectPath
      </Text>
    </Group>
  );
}
