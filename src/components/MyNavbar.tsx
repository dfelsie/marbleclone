import React, { useEffect, useState } from "react";
import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  List,
  ListItem,
  Link,
  Button,
} from "@chakra-ui/react";

type Props = {};
export default function MyNavbar({}: Props) {
  return (
    <Flex
      justifyContent={"space-between"}
      w={"100%"}
      h={"75px"}
      textAlign={"center"}
      px={["25px", "75px"]}
      pt={"15px"}
    >
      <Box>
        <Heading>
          <Link
            _hover={
              //Prevent underline on hover
              { textDecoration: "none" }
            }
            href="/"
          >
            Home
          </Link>
        </Heading>
      </Box>
      <Flex w={"55%"}>
        <List
          display={"flex"}
          flexGrow={1}
          justifyContent={"space-around"}
          mr={["25px", "75px"]}
        >
          <ListItem h={"fit-content"} my={"auto"}>
            <Link href="/about" textTransform={"uppercase"}>
              About Us
            </Link>
          </ListItem>
          <ListItem h={"fit-content"} my={"auto"}>
            <Link href="/" textTransform={"uppercase"}>
              How it Works
            </Link>
          </ListItem>
          <ListItem h={"fit-content"} my={"auto"}>
            <Link href="/" textTransform={"uppercase"}>
              What We Look For
            </Link>
          </ListItem>
        </List>
        <Button
          textTransform={"uppercase"}
          fontSize={"14px"}
          bgColor={"white"}
          color={"black"}
          borderRadius={"50px"}
          height={"50px"}
          w={["100px", "105px", "155px"]}
        >
          Apply Now!
        </Button>
      </Flex>
    </Flex>
  );
}
