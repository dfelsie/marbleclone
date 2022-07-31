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
export default function SecondVideoHero({}: Props) {
  return (
    <Box w={"100%"} h={["400px", "450px", "850px"]} pos={"relative"}>
      <video
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        muted
        loop
        autoPlay
        src="/assets/videos/fancymarbvidbot.mp4"
      />
      <Box w={"100%"} pos={"absolute"} top={"25px"}>
        <Flex
          w={"100"}
          mx={"5%"}
          flexDir={["column", "column", "column", "row"]}
        >
          <Box>
            <Heading fontSize={["40px", "40px", "6rem", "7rem"]} w={"100%"}>
              Ready To Work On The Biggest Problem Of All Time?
            </Heading>
          </Box>
          <Box>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            numquam blanditiis aut laborum adipisci necessitatibus, facilis in
            perspiciatis! Debitis natus velit voluptas dolorum non, magnam aut
            error. Labore, excepturi alias?
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
