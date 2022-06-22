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
export default function HoverCardHero({}: Props) {
  return (
    <Center flexDir={"column"}>
      <Heading>Card Hero</Heading>
      <Flex>
        <CardWithHoverVideo />
        <CardWithHoverVideo />
        <CardWithHoverVideo />
      </Flex>
    </Center>
  );
}
