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
  Image,
} from "@chakra-ui/react";

type Props = {};
export default function HugeImageHero({}: Props) {
  return (
    <Box h={["600px", "650px", "750px", "850px"]} w={"100%"} pos={"relative"}>
      <Image
        h={"100%"}
        w={"100%"}
        pos={"absolute"}
        top={0}
        left={0}
        objectFit={"cover"}
        src="/assets/images/kobu.jpg"
      ></Image>
    </Box>
  );
}
