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
    <Flex flexDir={"column"} w={"100%"} h={"1000px"}>
      <Heading ml={"2.5%"} fontSize={"6rem"}>
        Our Process
      </Heading>
      <Flex
        mt={"2.5%"}
        w={"95%"}
        justifyContent={"space-between"}
        flexGrow={1}
        mx={"auto"}
      >
        <CardWithHoverVideo />
        <CardWithHoverVideo />
        <CardWithHoverVideo />
      </Flex>
    </Flex>
  );
}
