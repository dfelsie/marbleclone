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
    <Flex
      flexDir={"column"}
      h={"55%"}
      w={"32%"}
      pos={"relative"}
      border={"1px solid white"}
    >
      <Flex
        ml={"10%"}
        mt={"5%"}
        flexDir={"column"}
        zIndex={1}
        borderRadius={"10px"}
      >
        <Text textTransform={"uppercase"} color={"#9c9c9c"} fontSize={"14px"}>
          Card{" "}
        </Text>
        <Heading mt={"2.5%"}>Card body with many details</Heading>
      </Flex>

      <video
        id={styles.cardVideo}
        onMouseOver={(e) => {
          //e.target.play();
        }}
        onMouseOut={(e) => {
          /*           e.target.pause();
          e.target.currentTime = 0;
 */
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 5,
        }}
        muted
        loop
        src="/assets/videos/fancymarbvidbot.mp4"
      />
    </Flex>
  );
}
