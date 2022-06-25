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
import { AnimatePresence, motion, Variants } from "framer-motion";

type Props = {
  children?: React.ReactNode;
  dropdownNum: number;
  selectedNum: number;
};

export default function DropDrownTxt({
  children,
  dropdownNum,
  selectedNum,
}: Props) {
  const [isLargerThan960] = useMediaQuery("(min-width: 960px)");
  const variants: Variants = {
    visible: {
      height: isLargerThan960 ? "100px" : "200px",
      opacity: 1,
    },
    hidden: {
      height: "0",
      opacity: [0, 0],
      transition: {
        duration: 0.5,
        times: [0, 0.5],
      },
    },
  };
  return (
    <AnimatePresence>
      <motion.div
        variants={variants}
        animate={dropdownNum === selectedNum ? "visible" : "hidden"}
        style={{
          borderRadius: "15px",
          paddingLeft: "5%",
          paddingRight: "5%",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
