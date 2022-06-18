import { Container } from "../components/Container";
import MyNavbar from "../components/MyNavbar";
import FirstSec from "../components/FirstSec";
import SecondSec from "../components/SecondSec";
import MyHero from "../components/MyHero";
import InfoSec from "../components/InfoSec";
import MyFooter from "../components/MyFooter";
import SecondVideoHero from "../components/SecondVideoHero";
import FirstVideoHero from "../components/FirstVideoHero";
import ImgTopSec from "../components/AboutComponents/ImgTopSec";
import HugeImageHero from "../components/AboutComponents/HugeImageHero";

const About = () => (
  <Container
    minH="100vh"
    h={"fit-content"}
    backgroundColor="blackAlpha.900"
    color="white"
  >
    <MyNavbar />
    <FirstVideoHero />
    <ImgTopSec />
    <HugeImageHero />
    <SecondSec />
    <InfoSec />
    <SecondVideoHero />
    <MyFooter />
  </Container>
);

export default About;
