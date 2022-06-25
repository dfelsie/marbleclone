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
import FramerChakraRotatingChevron from "./DropDowns/FramerChakraRotatingChevron";
import DropDrownTxt from "./DropDowns/DropDrownTxt";
import { motion, Variants } from "framer-motion";

const textVariants: Variants = {
  visible: {
    height: "90px",
  },
  hidden: {
    height: "0px",
  },
};

const divVariants: Variants = {
  visible: {
    height: "180px",

    //opacity: 1,
  },
  hidden: {
    height: "90px",
    //opacity: [0, 0],
    transition: {
      duration: 0.5,
      times: [0, 0.5],
    },
  },
};

type Props = {
  setVisibleNum: (currVis: number) => void;
  visibleNum: number;
  dropdownNum: number;
};
export default function MiniInfoSecDropDown({
  setVisibleNum,
  visibleNum,
  dropdownNum,
}: Props) {
  const currentlySelected = dropdownNum === visibleNum;
  return (
    <motion.div
      style={{
        height: "90px",
        color: "white",
        overflow: "hidden",
      }}
      variants={divVariants}
      animate={currentlySelected ? "visible" : "hidden"}
    >
      <Flex
        h={"100%"}
        borderBottom={".25px solid lightgray"}
        justifyContent={"space-between"}
      >
        <Flex flexDir={"column"} h={"100%"}>
          <Text h={"fit-content"} fontSize={"1.4rem"} mt={"25px"}>
            Subtext
          </Text>
          <motion.div
            variants={textVariants}
            animate={currentlySelected ? "visible" : "hidden"}
            style={{
              marginTop: "30px",
              //flexGrow: currentlySelected ? 1 : 0,
              //height: currentlySelected ? "100px" : "0px",
              //border: "1px solid red",
              //opacity: currentlySelected ? 1 : 0,
            }}
          >
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit id deserunt, hic ratione architecto labore
              perferendis alias inventore, laborum doloribus quos natus aut
              cumque eligendi molestiae omnis? Distinctio, molestias eligendi.
            </Text>
          </motion.div>
        </Flex>
        <FramerChakraRotatingChevron
          dropdownNum={dropdownNum}
          visibleNum={visibleNum}
          setVisibleNum={setVisibleNum}
        />
        {/*  <DropDrownTxt dropdownNum={dropdownNum} selectedNum={visibleNum}>
        </DropDrownTxt> */}
      </Flex>
    </motion.div>
  );
}
