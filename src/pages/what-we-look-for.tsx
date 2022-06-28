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
import MyNavbar from "../components/MyNavbar";
import MyFooter from "../components/MyFooter";
import LookForInfoSect from "../components/LookForComps/LookForInfoSecDropWhite";
import { Container } from "../components/Container";
import LookForInfoSecDrop from "../components/LookForComps/LookForInfoSecDrop";
import DropDownTextSecHero from "../components/AniTestComponents/DropDownTextSecHero";
import DropdownTextSecWButton from "../components/AniTestComponents/DropdownTextSec/DropdownTexSecWButton";
import DropDownTextHeroWButton from "../components/AniTestComponents/DropDownTextHeroWButton";
import FirstVideoHero from "../components/FirstVideoHero";
import MeetTheTeamRowsHero from "../components/MeetTheTeamRowsHero/MeetTheTeamRowsHero";
import SecondVideoHero from "../components/SecondVideoHero";
import MarqueeSec from "../components/AboutComponents/MarqueeSec";

type Props = {};
export default function Whatwelookfor({}: Props) {
  return (
    <Container
      minH="100vh"
      h={"fit-content"}
      backgroundColor="#0e0e0e"
      color="white"
    >
      <MyNavbar />
      {/*       <LookForInfoSecDrop />
       */}{" "}
      <FirstVideoHero />
      <DropDownTextHeroWButton />
      <DropDownTextHeroWButton bgColor="white" textColor="#0e0e0e" />
      <MarqueeSec />
      <MeetTheTeamRowsHero />
      <SecondVideoHero />
      <MyFooter />
    </Container>
  );
}
