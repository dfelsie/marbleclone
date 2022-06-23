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
import FramerChakraRotatingChevron from "./DropDowns/FramerChakraRotatingChevron";

type Props = {
  setVisibleNum: (currVis: number) => void;
  visibleNum: number;
  dropdownNum: number;
};
export default function MiniInfoSecDropDown({
  setVisibleNum,
  visibleNum,
  dropdownNum,
}: Props) {
  return (
    <Flex
      h={"90px"}
      borderBottom={".25px solid lightgray"}
      justifyContent={"space-between"}
    >
      <Flex flexDir={"column"} my={"auto"} h={"50%"} justifyContent={"center"}>
        <Text fontSize={"1.4rem"}>Subtext</Text>
      </Flex>
      {/* <Box
        h={"50px"}
        w={"50px"}
        borderRadius={"25px"}
        bgColor={"rgba(38,38,38,.7)"}
      >
      </Box> */}
      <FramerChakraRotatingChevron
        dropdownNum={dropdownNum}
        visibleNum={visibleNum}
        setVisibleNum={setVisibleNum}
      />
    </Flex>
  );
}
