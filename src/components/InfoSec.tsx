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
    <Flex
      flexDir={"column"}
      color="black"
      bgColor={"#F4F4F4"}
      w={"100%"}
      h={"1200px"}
      justifyContent={"space-between"}
      px={["25px", "5%"]}
      py={"75px"}
    >
      <Flex flexDir={["column", "column", "row"]} mt={"25px"}>
        <Heading fontSize={"5rem"}>Help Us Reverse Climate Change</Heading>
        <Text fontSize="18px" w={"50%"}>
          We are assembling a network of leading experts, partners and top
          talent to support our Founders in their mission to heal the planet.
        </Text>
      </Flex>
      <List
        display={"flex"}
        flexDir={"column"}
        borderTop={".25px solid lightgray"}
      >
        {ary.map((_, i) => (
          <ListItem key={i}>
            <MiniInfoSec />
          </ListItem>
        ))}
      </List>
    </Flex>
  );
}
