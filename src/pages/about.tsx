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
import LShapedTxtHero from "../components/AboutComponents/LShapedTxtHero";
import MarqueeWCarouselHero from "../components/AboutComponents/MarqueeWCarouselHero";
import LShapedTxtHeroWButt from "../components/AboutComponents/LShapedTxtHeroWButt";
import InfoSecDescHero from "../components/AboutComponents/InfoSecDescHero";
import SwitchableTextHero from "../components/AboutComponents/SwitchableTextHero/SwitchableTextHero";

const About = () => (
  <Container
    minH="100vh"
    h={"fit-content"}
    backgroundColor="#0e0e0e"
    color="white"
  >
    <MyNavbar />
    <FirstVideoHero />
    <ImgTopSec />
    <HugeImageHero />
    <LShapedTxtHero />
    <MarqueeWCarouselHero />
    <LShapedTxtHeroWButt />
    <InfoSecDescHero />
    <SwitchableTextHero />
    <SecondVideoHero />
    <MyFooter />
  </Container>
);

export default About;
