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

type Props = {
  rotatedNum: number;
  setRotatedNum: (rotatedNum: number) => void;
  dropdownNum: number;
};
export default function DropdownTextSec({
  rotatedNum,
  setRotatedNum,
  dropdownNum,
}: Props) {
  const isRotated = rotatedNum === dropdownNum;
  return (
    <Flex
      h={isRotated ? "180px" : "90px"}
      borderBottom={".25px solid lightgray"}
      justifyContent={"space-between"}
      overflow={"hidden"}
      transition={".2s ease-in-out"}
    >
      <Flex flexDir={"column"} h={"100%"}>
        <Text h={"fit-content"} fontSize={"1.4rem"} mt={"25px"}>
          Subtext
        </Text>
        <Box mt={"30px"}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit id deserunt, hic ratione architecto labore perferendis
            alias inventore, laborum doloribus quos natus aut cumque eligendi
            molestiae omnis? Distinctio, molestias eligendi.
          </Text>
        </Box>
      </Flex>
      <RotatingChevron
        rotatedNum={rotatedNum}
        setRotatedNum={setRotatedNum}
        chevronNum={dropdownNum}
      />
    </Flex>
  );
}
