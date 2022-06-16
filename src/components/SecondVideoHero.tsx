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
    <Box h={"850px"} w={"100%"}>
      {" "}
      <video
        style={{ width: "100%" }}
        muted
        loop
        src="/assets/videos/fancymarbvidbot.mp4"
      />{" "}
    </Box>
  );
}
