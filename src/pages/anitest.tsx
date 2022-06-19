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
import AniTestOne from "../components/AniComponents/AniTestOne/AniTestOne";
import AniButtonTest from "../components/AniButton/AniButtonTest";

type Props = {};
export default function Anitest({}: Props) {
  return (
    <Flex h={"1000px"} flexDir={"column"}>
      <AniButtonTest />
    </Flex>
  );
}
