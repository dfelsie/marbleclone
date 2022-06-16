import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Flex,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import MyNavbar from "../components/MyNavbar";
import FirstSec from "../components/FirstSec";
import SecondSec from "../components/SecondSec";
import MyHero from "../components/MyHero";
import InfoSec from "../components/InfoSec";
import MyFooter from "../components/MyFooter";
import SecondVideoHero from "../components/SecondVideoHero";

const Index = () => (
  <Container
    minH="100vh"
    h={"fit-content"}
    backgroundColor="blackAlpha.900"
    color="white"
  >
    <MyNavbar></MyNavbar>
    <MyHero />
    <FirstSec />
    <SecondSec />
    <InfoSec />
    <SecondVideoHero />
    <MyFooter />
  </Container>
);

export default Index;
