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
export default function ImgTopSec({}: Props) {
  return (
    <Flex
      w={"100%"}
      h={"1000px"}
      flexDir={["column"]}
      px={["20px", "25px", "5%"]}
      color={"black"}
      bgColor={"white"}
    >
      <Center h={"25%"} w={"80%"}>
        <Text textAlign={"center"}>Image Placeholder</Text>
      </Center>
      <Flex
        w={"100%"}
        flexDir={["column", "column", "column", "row"]}
        h={"95%"}
      >
        <Box w={"60%"}>
          <Heading fontSize={["4rem", "4rem", "4rem", "7rem"]}>
            My Heading
          </Heading>
        </Box>
        <Flex flexDir={"column"} w={["80%", "65%", "40%"]} h={"95%"}>
          <Box
            textColor={"blackAlpha.800"}
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
            color={"white"}
          >
            Apply Now
            <RightArrowBox />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
