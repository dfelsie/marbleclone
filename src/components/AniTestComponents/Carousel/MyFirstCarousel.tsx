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
import styles from "./MyFirstCarousel.module.css";

type Props = {};
const nums = [0, 1, 2, 3, 4, 5, 6, 7];
export default function MyFirstCarousel({}: Props) {
  return (
    <Flex flexDir={"column"} w={"100%"}>
      <Flex w={"100%"} justifyContent={"space-between"}>
        <Button className={styles.carouselButton}>{"<<"}</Button>
        {nums.map((val, i) => (
          <Box
            key={`carouselSlideNum${i}`}
            id={styles[`slideNum${i}`]}
            className={styles.slide}
          >
            {i}
          </Box>
        ))}
        <Button className={styles.carouselButton}>{">>"}</Button>
      </Flex>
    </Flex>
  );
}
