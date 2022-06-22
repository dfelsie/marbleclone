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
      h={"90px"}
      borderBottom={".25px solid lightgray"}
      justifyContent={"space-between"}
    >
      <Flex flexDir={"column"} my={"auto"} h={"50%"} justifyContent={"center"}>
        <Text fontSize={"1.2rem"} color={"darkgray"}>
          Subtext
        </Text>
      </Flex>
    </Flex>
  );
}
