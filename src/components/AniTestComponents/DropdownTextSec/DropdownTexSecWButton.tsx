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
import RotatingChevron from "../RotatingChevron/RotatingChevron";
import ChevronButton from "../ChevronButton/ChevronButton";

type Props = {
  rotatedNum: number;
  setRotatedNum: (rotatedNum: number) => void;
  dropdownNum: number;
  headerText: string;
  dropdownText: string;
};

DropdownTextSecWButton.defaultProps = {
  headerText: "Header Text",
  dropdownText: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Reprehenderit id deserunt, hic ratione architecto labore perferendis
  alias inventore, laborum doloribus quos natus aut cumque eligendi
  molestiae omnis? Distinctio, molestias eligendi.`,
};
export default function DropdownTextSecWButton({
  rotatedNum,
  setRotatedNum,
  dropdownNum,
  headerText,
  dropdownText,
}: Props) {
  const isRotated = rotatedNum === dropdownNum;
  return (
    <Flex
      h={isRotated ? "270px" : "90px"}
      borderBottom={".25px solid lightgray"}
      justifyContent={"space-between"}
      overflow={"hidden"}
      transition={".2s ease-in-out"}
      px={"10px"}
    >
      <Flex flexDir={"column"} h={"100%"}>
        <Text h={"fit-content"} fontSize={"1.4rem"} mt={"25px"}>
          {headerText}
        </Text>
        <Box mt={"45px"}>
          <Text fontSize={"1.1rem"} color={"lightgray"}>
            {dropdownText}
          </Text>
        </Box>
      </Flex>
      <ChevronButton
        rotatedNum={rotatedNum}
        setRotatedNum={setRotatedNum}
        chevronNum={dropdownNum}
      />
    </Flex>
  );
}
