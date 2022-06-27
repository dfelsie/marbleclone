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
      <DropDownTextHeroWButton />
      <MyFooter />
    </Container>
  );
}
