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
import DropdownTextSec from "./DropdownTextSec/DropdownTextSec";
import DropdownTextSecWButton from "./DropdownTextSec/DropdownTexSecWButton";

type Props = {
  bgColor?: string;
  textColor?: string;
};
const ary = [0, 0, 0, 0, 0];

const lor =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quasi dolorum praesentium quibusdam eos autem harum rem doloremque veritatis! Dolores rem ut repellat amet ratione laborum iure unde nesciunt praesentium!";

DropDownTextHeroWButton.defaultProps = {
  bgColor: "#0e0e0e",
  textColor: "white",
};
export default function DropDownTextHeroWButton({ bgColor, textColor }: Props) {
  const [rotatedNum, setRotatedNum] = useState(-1);

  return (
    <Flex
      borderBottom={".25px solid lightgray"}
      flexDir={["column", "column", "row", "row"]}
      w={"100%"}
      h={"1000px"}
      color={textColor}
      bgColor={bgColor}
      px={["25px", "4%"]}
      justifyContent={"space-between"}
    >
      <Box w={["100%", "100%", "30%", "30%"]} h={"50%"} mt={["5%"]}>
        <Heading fontSize={["2rem", "3rem", "5rem"]}>
          Some generic subtext to be replaced later.
        </Heading>
      </Box>
      <Box w={"65%"} h={["100%", "100%", "65%", "65%"]} mt={[0, "5%"]}>
        <Flex
          display={"flex"}
          flexDir={"column"}
          h={"100%"}
          borderTop={".25px solid lightgray"}
        >
          {ary.map((_, index) => (
            <DropdownTextSecWButton
              setRotatedNum={setRotatedNum}
              rotatedNum={rotatedNum}
              dropdownNum={index}
              headerText={"Subtext"}
              dropdownText={lor}
              //key={`dropdowntextsec${index}`}
            />
          ))}
        </Flex>
      </Box>
    </Flex>
  );
}
