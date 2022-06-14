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
export default function FirstSec({}: Props) {
  return (
    <Center w={"100%"} h={"750px"} flexDir={["column", "row"]}>
      <Flex w={"50%"}>Image Placeholder</Flex>
      <Flex flexDir={"column"} w={"50%"}>
        <Heading>My Heading</Heading>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic eveniet,
          iusto itaque modi sapiente odit ab mollitia error? Quia cupiditate
          laboriosam vitae. Numquam ducimus quos explicabo delectus et debitis
          a?
        </Text>
        <Button>How it Works</Button>
      </Flex>
    </Center>
  );
}
