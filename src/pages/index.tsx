import { Container } from "../components/Container";
import MyNavbar from "../components/MyNavbar";
import FirstSec from "../components/FirstSec";
import SecondSec from "../components/SecondSec";
import MyHero from "../components/MyHero";
import InfoSec from "../components/InfoSec";
import MyFooter from "../components/MyFooter";
import SecondVideoHero from "../components/SecondVideoHero";
import FirstVideoHero from "../components/FirstVideoHero";

const Index = () => (
  <Container
    minH="100vh"
    h={"fit-content"}
    backgroundColor="#0e0e0e"
    color="white"
  >
    <MyNavbar />
    <FirstVideoHero />
    <FirstSec />
    <SecondSec />
    <InfoSec />
    <SecondVideoHero />
    <MyFooter />
  </Container>
);

export default Index;
