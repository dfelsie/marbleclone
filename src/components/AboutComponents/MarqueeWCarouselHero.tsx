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
export default function MarqueeWCarouselHero({}: Props) {
  return (
    <Flex flexDir={"column"}>
      Marqueee <br />
      Carousel
    </Flex>
  );
}
