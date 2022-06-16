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
export default function MiniInfoSec({}: Props) {
  return (
    <Flex
      h={"150px"}
      borderBottom={".25px solid lightgray"}
      justifyContent={"space-between"}
    >
      <Flex
        flexDir={"column"}
        my={"auto"}
        h={"50%"}
        justifyContent={"space-between"}
      >
        <Heading fontSize={"2rem"}>My Heading</Heading>
        <Text fontSize={"1.2rem"}>Subtext</Text>
      </Flex>
      <Button my={"auto"}>Stuff</Button>
    </Flex>
  );
}
