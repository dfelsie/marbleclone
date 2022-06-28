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
import CardWithHoverVideo from "./CardWithHoverVideo";

type Props = {};
export default function HoverCardSec({}: Props) {
  return (
    <Center flexDir={"column"} w={"100%"} h={"1000px"}>
      <Heading>Card Hero</Heading>
      <Flex w={"95%"} justifyContent={"space-between"} flexGrow={1}>
        <CardWithHoverVideo />
        <CardWithHoverVideo />
        <CardWithHoverVideo />
      </Flex>
    </Center>
  );
}
