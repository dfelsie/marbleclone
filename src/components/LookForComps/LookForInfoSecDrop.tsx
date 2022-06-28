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
  useMediaQuery,
} from "@chakra-ui/react";
import MiniInfoSec from "../MiniInfoSec";
import AboutMiniInfoSec from "../AboutComponents/AboutMiniInfoSec";
import MiniInfoSecDropDown from "./MiniInfoSecDropDown";
import { Variants } from "framer-motion";

type Props = {};
export default function LookForInfoSecDrop({}: Props) {
  let ary = [0, 0, 0, 0, 0, 0];
  const [visibleNum, setVisibleNum] = useState(-1);
  const [isLargerThan960] = useMediaQuery("(min-width: 960px)");

  const [visible, setVisible] = useState(false);

  return (
    <Flex
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
        <List
          display={"flex"}
          flexDir={"column"}
          h={"100%"}
          borderTop={".25px solid lightgray"}
        >
          {ary.map((_, i) => (
            <ListItem key={i}>
              <MiniInfoSecDropDown
                setVisibleNum={setVisibleNum}
                visibleNum={visibleNum}
                dropdownNum={i}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Flex>
  );
}
