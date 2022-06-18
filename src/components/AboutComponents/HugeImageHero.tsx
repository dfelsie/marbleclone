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
    <Box h={"20rem"} w={"100%"}>
      <Image h={"100%"} w={"100%"} src="/assets/images/kobu.jpg"></Image>
    </Box>
  );
}
