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
import DropdownTextSec from "./DropdownTextSec/DropdownTextSec";

type Props = {};
const ary = [0, 0, 0, 0, 0];
export default function DropDownTextSecHero({}: Props) {
  const [rotatedNum, setRotatedNum] = useState(-1);

  return (
    <Flex
      borderBottom={".25px solid lightgray"}
      flexDir={["column", "column", "row", "row"]}
      w={"100%"}
      h={"1000px"}
      color={"white"}
      bgColor={"#0e0e0e"}
      px={["25px", "4%"]}
      justifyContent={"space-between"}
    >
      <Box w={["100%", "100%", "30%", "30%"]} h={"50%"} mt={["5%"]}>
        <Heading fontSize={["2rem", "3rem", "5rem"]}>
          Some generic subtext to be replaced later.
        </Heading>
      </Box>
      <Box w={"65%"} h={["100%", "100%", "65%", "65%"]} mt={[0, "5%"]}>
        <Flex
          display={"flex"}
          flexDir={"column"}
          h={"100%"}
          borderTop={".25px solid lightgray"}
        >
          {ary.map((_, index) => (
            <DropdownTextSec
              setRotatedNum={setRotatedNum}
              rotatedNum={rotatedNum}
              dropdownNum={index}
              headerText={""}
              dropdownText={""}
            />
          ))}
        </Flex>
      </Box>
    </Flex>
  );
}
