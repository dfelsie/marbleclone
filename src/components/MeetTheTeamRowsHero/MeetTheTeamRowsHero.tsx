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
import TeamMemberRow from "./TeamMemberRow";

type Props = {};
const titleTextList = [
  "Johnny Johnson",
  "Johnny Johnson",
  "Johnny Johnson",
  "Johnny Johnson",
];
const subtitleTextList = [
  "Dr. of complicated things",
  "Dr. of complicated things",
  "Dr. of complicated things",
  "Dr. of complicated things",
];
const bodyTextList = [
  "Makes funny little gizmos to save the world from heat death",
  "Makes funny little gizmos to save the world from heat death",
  "Makes funny little gizmos to save the world from heat death",
  "Makes funny little gizmos to save the world from heat death",
];
export default function MeetTheTeamRowsHero({}: Props) {
  return (
    <Flex h={"1200px"} flexDir={"column"} w={"90%"} mx={"auto"}>
      <Flex mt={"10%"}>
        <Heading>Meet our team of founders</Heading>
        <Text>
          Meet our current Founders in Residence who joined Marble to turn their
          skills into high impact climate startups.
        </Text>
      </Flex>
      <Flex flexDir={"column"} h={"fit-content"} mt={"25%"}>
        {titleTextList.map((val, i) => (
          <TeamMemberRow
            key={`memberRow${i}`}
            bodyText={bodyTextList[i]}
            subtitleText={subtitleTextList[i]}
            titleText={titleTextList[i]}
          ></TeamMemberRow>
        ))}
      </Flex>
    </Flex>
  );
}
