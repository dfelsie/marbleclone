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
import CarouselSec from "../components/AniTestComponents/Carousel/CarouselSec";
import MyFirstCarousel from "../components/AniTestComponents/Carousel/MyFirstCarousel";
type Props = {};
export default function Anitest({}: Props) {
  return (
    <Flex h={"1000px"} flexDir={"column"} bgColor={"#0e0e0e"} color={"white"}>
      <MyFirstCarousel />
      {/*       
      <AniButtonTest />
      <DropDownTextSecHero />
       <DropDownTextHeroWButton />
       */}
    </Flex>
  );
}
