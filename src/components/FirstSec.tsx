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
import RightArrowBox from "./RightArrowBox/RightArrowBox";

type Props = {};
export default function FirstSec({}: Props) {
  return (
    <Flex
      w={"100%"}
      h={"750px"}
      flexDir={["column", "column", "column", "row"]}
      px={["20px", "25px", "5%"]}
      pt={"100px"}
    >
      <Flex w={"50%"}>Image Placeholder</Flex>
      <Flex flexDir={"column"} w={["80%", "65%", "50%"]} h={"80%"}>
        <Heading fontSize={["4rem", "4rem", "6rem"]}>My Heading</Heading>
        <Box
          textColor={"lightgray"}
          my={"20px"}
          w={["100%", "100%", "60%"]}
          fontSize={"18px"}
        >
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            <br />
            Hic eveniet, iusto itaque modi sapiente odit ab mollitia error?
            <br /> Quia cupiditate laboriosam vitae. Numquam ducimus quos
            explicabo delectus et debitis a?
            <br />
            Quo Usoque Tandem Abutere, Catalina, Patientia Nostra?
            <br />
            All Gaul is divided into three parts.
          </Text>
        </Box>
        <Button
          m={["auto", "auto,", "0"]}
          bgColor={"#2b2b2b"}
          borderRadius={"50px"}
          height={"50px"}
          w={"200px"}
          fontSize={"14px"}
          textTransform={"uppercase"}
        >
          Apply Now
          <RightArrowBox />
        </Button>
      </Flex>
    </Flex>
  );
}
