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
import MiniInfoSec from "../MiniInfoSec";
import AboutMiniInfoSec from "./AboutMiniInfoSec";

type Props = {};
export default function InfoSec({}: Props) {
  let ary = [0, 0, 0];
  return (
    <Flex
      flexDir={["column", "column", "row", "row"]}
      w={"100%"}
      h={"550px"}
      justifyContent={"space-between"}
      px={["25px", "4%"]}
      bgColor={"#262626"}
    >
      <Box w={["100%", "100%", "30%", "30%"]} h={"50%"} mt={["5%"]}>
        <Heading fontSize={["2rem", "3rem", "5rem"]}>
          Why this night of all nights?
        </Heading>
      </Box>
      <Box w={"65%"} h={["100%", "100%", "65%", "65%"]} mt={[0, "5%"]}>
        <Heading
          color={"darkgray"}
          mb={"20px"}
          fontSize={"18px"}
          textTransform={"uppercase"}
        >
          Reason List
        </Heading>
        <List
          display={"flex"}
          flexDir={"column"}
          borderTop={".25px solid lightgray"}
        >
          {ary.map((_, i) => (
            <ListItem key={i}>
              <AboutMiniInfoSec />
            </ListItem>
          ))}
        </List>
      </Box>
    </Flex>
  );
}
