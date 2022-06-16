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
  Input,
  Checkbox,
} from "@chakra-ui/react";

type Props = {};
const listOfFooterLinks = [
  "About Us",
  "How It Works",
  "What We Look For",
  "Contact Us",
  "Careers",
  "FAQs",
];
const secondListOfFooterLinks = [
  "22 Rue René Boulanger",
  "Paris, France",
  "LinkedIn",
  "Twitter",
];
export default function MyFooter({}: Props) {
  return (
    <Flex h={"1000px"} flexDir={"column"} w={"100%"} px={["25px", "5%"]}>
      <Flex h={"475px"} flexDir={"column"} justifyContent="center" w={"50%"}>
        <Heading fontSize={"14px"}>SIGN UP TO OUR NEWSLETTER</Heading>
        <Flex h={"200px"} alignItems={"end"} pb={"25px"}>
          <Input
            type={"text"}
            h={"100px"}
            fontSize={"46px"}
            placeholder={"you@email.com"}
          />
          <Button>{">>"}</Button>
        </Flex>
        <Checkbox colorScheme="black">
          I have read and accept the Terms and Privacy
        </Checkbox>
      </Flex>
      <Flex h={"500px"} flexDir={"column"} w={"100%"} textAlign={"left"}>
        <Flex justifyContent={"space-between"}>
          <Flex flexDir={"column"} w={"25%"} justifyContent={"space-between"}>
            Marble
            <Flex>
              <Button>Apply Now!</Button>
              <Button>Apply Now!</Button>
            </Flex>
          </Flex>
          <Flex w={"33%"} justifyContent={"space-between"}>
            <Flex flexDir={"column"} justifyContent={"space-between"}>
              <Text mb={"20px"} fontSize={"16px"} textColor={"gray"}>
                About
              </Text>

              <List display={"flex"} flexDir={"column"} fontSize={"19px"}>
                {listOfFooterLinks.map((link, i) => (
                  <ListItem key={i}>
                    <Text>{link}</Text>
                  </ListItem>
                ))}
              </List>
              <Text mt={"75px"} fontSize={"16px"} color={"gray"}>
                <ul color="white">Privacy and Terms</ul>
              </Text>
            </Flex>
            <Flex flexDir={"column"} justifyContent="space-between">
              <Text mb={"20px"} fontSize={"16px"} textColor={"gray"}>
                Connect
              </Text>

              <List display={"flex"} flexDir={"column"}>
                {listOfFooterLinks.map((link, i) => (
                  <ListItem key={i}>
                    <Text
                      fontSize={"19px"}
                      textColor={i === 3 ? "black" : "white"}
                    >
                      {link}
                    </Text>
                  </ListItem>
                ))}
              </List>
              <Text mt={"75px"} fontSize={"16px"} color={"gray"}>
                Made by <ul color="white">Daniel Felsenthal</ul>
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
