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
import styles from "./CardWithHoverVideo.module.css";

type Props = {};
export default function CardWithHoverVideo({}: Props) {
  return (
    <Flex flexDir={"column"} h={"250px"} w={"150px"} pos={"relative"}>
      <Heading>Card</Heading>
      <Text>Card body with many details</Text>
      <Box
        id={styles.cardVideoCover}
        bgColor={"teal"}
        pos={"absolute"}
        top={0}
        bottom={0}
        right={0}
        left={0}
      ></Box>
      <video
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
        muted
        loop
        src="/assets/videos/fancymarbvidbot.mp4"
      />
    </Flex>
  );
}
