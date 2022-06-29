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
  const [onFirstPage, setOnFirstPage] = useState(true);
  return (
    <Flex flexDir={"column"} w={"100%"} overflowX={"hidden"}>
      <Box w={"95%"} pos={"relative"} h={"600px"}>
        <Button
          color={"black"}
          className={styles.carouselButton}
          position={"absolute"}
          zIndex={2}
          left={"25px"}
          disabled={onFirstPage}
          onClick={() => {
            setOnFirstPage(true);
          }}
        >
          {"<<"}
        </Button>
        {nums.map((val, i) => (
          <Box
            key={`carouselSlideNum${i}`}
            id={styles[`slideNum${i}`]}
            className={styles.slide}
            style={{
              position: "absolute",
              left: "0",
              transform: `translateX(${(onFirstPage ? i : i - 4) * 25}vw)`,
            }}
          >
            {i}
          </Box>
        ))}
        <Button
          color={"black"}
          className={styles.carouselButton}
          disabled={!onFirstPage}
          onClick={() => {
            setOnFirstPage(false);
          }}
          style={{ position: "absolute", left: "90%" }}
        >
          {">>"}
        </Button>
      </Box>
    </Flex>
  );
}
