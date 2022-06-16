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
    <Box h={"850px"}>
      {" "}
      <video muted loop src="/assets/videos/fancymarbvid.mp4" />{" "}
    </Box>
  );
}
