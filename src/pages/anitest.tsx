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
import AniButtonTest from "../components/AniButton/AniButtonTest";
import HoverCardSec from "../components/CardWithHoverVideo/HoverCardSec";
import RotatingChevron from "../components/AniTestComponents/RotatingChevron/RotatingChevron";
import DropdownTextSec from "../components/AniTestComponents/DropdownTextSec/DropdownTextSec";
import DropDownTextSecHero from "../components/AniTestComponents/DropDownTextSecHero";
import ChevronButton from "../components/AniTestComponents/ChevronButton/ChevronButton";
import DropDownTextHeroWButton from "../components/AniTestComponents/DropDownTextHeroWButton";
type Props = {};
export default function Anitest({}: Props) {
  return (
    <Flex
      h={"1000px"}
      flexDir={"column"}
      px={"2.5%"}
      bgColor={"#0e0e0e"}
      color={"white"}
    >
      <HoverCardSec />
      {/*       
      <AniButtonTest />
      <DropDownTextSecHero />
       <DropDownTextHeroWButton />
       */}
    </Flex>
  );
}
