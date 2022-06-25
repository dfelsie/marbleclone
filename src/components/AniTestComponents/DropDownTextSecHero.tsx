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
    <Flex flexDir={"column"} borderBottom={".25px solid lightgray"}>
      {ary.map((_, index) => (
        <DropdownTextSec
          setRotatedNum={setRotatedNum}
          rotatedNum={rotatedNum}
          dropdownNum={index}
          key={`dropdowntextsec${index}`}
        />
      ))}
    </Flex>
  );
}
