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
export default function BackgroundVideoHero({}: Props) {
  return (
    <Box>
      {" "}
      <Heading>Big Problem</Heading>
      <Flex>
        <Text>Bla Bla Bla</Text>
        <Button>Apply Now</Button>
      </Flex>
    </Box>
  );
}
