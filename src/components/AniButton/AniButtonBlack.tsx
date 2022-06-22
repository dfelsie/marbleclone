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
import styles from "./AniButton.module.css";

type Props = {};
export default function AniButtonBlack({}: Props) {
  return (
    <Button
      className={styles.aniButtonBlack}
      //_hover={{ background: "" }}
    >
      Apply Now
      <Box ml={"5px"} fontSize={"24px"}>
        {"\t\u2192"}
      </Box>
    </Button>
  );
}
