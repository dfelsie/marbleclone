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

type Props = {
  titleText?: string;
  subtitleText?: string;
  bodyText?: string;
  key: string;
};
TeamMemberRow.defaultProps = {
  titleText: "",
  subtitleText: "",
  bodyText: "",
};
export default function TeamMemberRow({
  titleText,
  subtitleText,
  bodyText,
  key,
}: Props) {
  return (
    <Flex
      borderBottom={".25px solid #232323"}
      justifyContent={"space-between"}
      h={"140px"}
      px={"10px"}
      key={key}
    >
      <Flex flexDir={"column"} h={"fit-content"} my={"auto"}>
        <Heading>{titleText}</Heading>
        <Text>{subtitleText}</Text>
      </Flex>
      <Text h={"fit-content"} my={"auto"}>
        {bodyText}
      </Text>
    </Flex>
  );
}
