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
import RightArrowBox from "../RightArrowBox/RightArrowBox";

type Props = {};
export default function LShapedTxtHero({}: Props) {
  return (
    <Flex
      w={"100%"}
      flexDir={["column", "column", "column", "row"]}
      h={"650px"}
      px={["20px", "25px", "3%", "5%"]}
      pt={"100px"}
    >
      <Box w={"60%"}>
        <Heading fontSize={["4rem", "4rem", "6rem", "7rem"]}>
          My Heading
        </Heading>
      </Box>
      <Flex flexDir={"column"} w={["80%", "65%", "40%"]} h={"95%"}>
        <Box
          my={"20px"}
          w={["100%", "100%", "60%"]}
          fontSize={"18px"}
          ml={"5%"}
          textColor={"lightgray"}
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
      </Flex>
    </Flex>
  );
}
