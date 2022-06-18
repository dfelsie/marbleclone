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

type Props = {};
export default function FirstVideoHero({}: Props) {
  return (
    <Box w={"100%"} h={["400px", "450px", "850px"]} pos={"relative"}>
      <video
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        muted
        loop
        src="/assets/videos/fancymarbvid.mp4"
      />{" "}
      <Box w={"100%"} pos={"absolute"} top={"20%"} h={"100%"}>
        <Flex w={"100"} mx={"5%"} flexDir={"column"} my={"auto"} h={"100%"}>
          <Box>
            <Heading fontSize={["40px", "40px", "8rem"]}>
              Solve Hard <br /> Climate Problems
            </Heading>
          </Box>
          <Box my={"2.5%"} w={["80%", "50%"]}>
            <Text fontSize={"20px"}>
              We partner with scientists, engineers and operators to build
              deeptech startups that slash emissions, remove carbon, and cool
              the planet.
            </Text>
          </Box>
          <Button
            textTransform={"uppercase"}
            fontSize={"14px"}
            bgColor={"white"}
            color={"black"}
            borderRadius={"50px"}
            height={"50px"}
            mt={"2%"}
            w={["155px", "205px", "255px"]}
          >
            Apply Now!
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
