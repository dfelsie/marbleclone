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
        className={styles.aniButtonBlack}
        //_hover={{ background: "" }}
      >
        Apply Now
        <Box ml={"5px"} fontSize={"24px"}>
          {"\t\u2192"}
        </Box>
      </Button>
      <Button className={styles.aniButtonWhite}>
        Apply Now
        <Box className={styles.aniButtonArrow} ml={"5px"} fontSize={"24px"}>
          {"\t\u2192"}
        </Box>
      </Button>
    </Flex>
  );
}
