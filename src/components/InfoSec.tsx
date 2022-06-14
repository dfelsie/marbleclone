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
import MiniInfoSec from "./MiniInfoSec";

type Props = {};
export default function InfoSec({}: Props) {
  let ary = [0, 0, 0, 0];
  return (
    <Flex flexDir={"column"} color="black" bgColor={"white"} w={"100%"}>
      <Flex flexDir={["row", "column"]}></Flex>
      <List display={"flex"} flexDir={"column"}>
        {ary.map((_, i) => (
          <ListItem key={i}>
            <MiniInfoSec />
          </ListItem>
        ))}
      </List>
    </Flex>
  );
}
