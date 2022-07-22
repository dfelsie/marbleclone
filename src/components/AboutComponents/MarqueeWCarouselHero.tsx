import * as React from "react";
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
import Marquee from "react-fast-marquee";
import { Carousel, CarouselProps } from "react-responsive-carousel";
import {
  CarouselState,
  AnimationHandlerResponse,
} from "react-responsive-carousel/lib/ts/components/Carousel/types";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

type Props = {};
export default function MarqueeSec({}: Props) {
  return (
    <>
      {" "}
      <Marquee speed={80} gradient={false}>
        <Text
          fontWeight={"extrabold"}
          textTransform={"uppercase"}
          fontSize={"6rem"}
          color={"lightgray"}
        >
          Info Below
        </Text>
      </Marquee>
      <br />
      {/* <ImageGallery  items={images} />; */}
      {/*    <Carousel
        axis={"horizontal"}
        centerSlidePercentage={0}
        interval={0}
        labels={{
          leftArrow: "",
          rightArrow: "",
          item: "",
        }}
        selectedItem={0}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        stopOnHover={false}
        swipeable={false}
        swipeScrollTolerance={0}
        transitionTime={0}
        verticalSwipe={"natural"}
        width={""}
        animationHandler={"slide"}
        
      >
        <div>
          <img src="/assets/images/kobu.jpg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="/assets/images/kobu.jpg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="/assets/images/kobu.jpg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel> */}
    </>
  );
}
