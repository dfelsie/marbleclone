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
import RightArrowBox from "../RightArrowBox/RightArrowBox";
import styles from "./AniButton.module.css";
type Props = {};
export default function AniButtonTest({}: Props) {
  return (
    <Flex w={"100%"}>
      <Button
        className={styles.aniButton}
        m={["auto", "auto,", "0"]}
        bgColor={"#2b2b2b"}
        height={"50px"}
        color={"#fff"}
        w={"200px"}
        fontSize={"14px"}
        //_hover={{ background: "" }}
      >
        Apply Now
        <Box ml={"5px"} fontSize={"24px"}>
          {"\t\u2192"}
        </Box>
      </Button>
      <Button
        className={styles.aniButton}
        fontSize={"14px"}
        bgColor={"white"}
        color={"black"}
        height={"50px"}
        w={["155px", "205px", "255px"]}
      >
        Apply Now
        <Box className={styles.aniButtonArrow} ml={"5px"} fontSize={"24px"}>
          {"\t\u2192"}
        </Box>
      </Button>
    </Flex>
  );
}
