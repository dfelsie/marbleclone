import { Flex, FlexProps } from "@chakra-ui/react";

export const Container = (props: FlexProps) => (
  <Flex
    direction="column"
    color="black"
    _dark={{
      bg: "gray.900",
      color: "white",
    }}
    {...props}
  />
);
