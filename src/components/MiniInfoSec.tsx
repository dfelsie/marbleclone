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
    <Flex>
      <Flex flexDir={"column"}>
        <Heading>My Heading</Heading>
        <Text>Subtext</Text>
      </Flex>
      <Button>Stuff</Button>
    </Flex>
  );
}
