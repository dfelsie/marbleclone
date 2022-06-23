import { ChevronDownIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  setVisibleNum: (currVis: number) => void;
  visibleNum: number;
  dropdownNum: number;
};

export default function FramerChakraRotatingChevron({
  setVisibleNum,
  visibleNum,
  dropdownNum,
}: Props) {
  const rotVariants = {
    init: {
      rotate: 180,
    },
    after: {
      rotate: 0,
    },
  };

  return (
    <motion.div
      style={{
        height: "fit-content",
      }}
      onClick={() => {
        setVisibleNum(visibleNum === dropdownNum ? -1 : dropdownNum);
      }}
      variants={rotVariants}
      animate={visibleNum === dropdownNum ? "init" : "after"}
    >
      <ChevronDownIcon boxSize={"35px"} mt={"-5px"} />
    </motion.div>
  );
}
