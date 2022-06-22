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
import AniButtonWhite from "../../AniButton/AniButtonWhite";

type Props = {};
const optionTextBody = "You have currently selected option number";
const textOptHeaders = ["First Opt", "Second Opt", "Third Opt", "Fourth Opt"];
export default function SwitchableTextHero({}: Props) {
  const [currOptNum, setCurrOptNum] = useState(0);
  return (
    <Center
      display={"flex"}
      flexDir={"column"}
      h={"675px"}
      justifyContent={"start"}
      pt={"7.5%"}
    >
      <Flex w={"90%"} justifyContent={"space-between"}>
        {textOptHeaders.map((header, num) => (
          <Box key={"textOptHeaderNum" + num}>
            <Heading
              onClick={() => {
                setCurrOptNum(num);
              }}
            >
              {header}
            </Heading>
          </Box>
        ))}
      </Flex>
      <Heading>{`${optionTextBody} ${currOptNum + 1}.`}</Heading>
      <AniButtonWhite />
    </Center>
  );
}
