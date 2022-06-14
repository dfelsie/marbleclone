import React, { useEffect, useState } from "react";
import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  List,
  ListItem,
  Button,
} from "@chakra-ui/react";

type Props = {};
export default function MyHero({}: Props) {
  return (
    <Center h={"100vh"}>
      <Flex flexDir={"column"}>
        <Heading>My Hero</Heading>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        <Button>Apply Now</Button>
      </Flex>
    </Center>
  );
}
