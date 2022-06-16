import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

type Props = {};
export default function RightArrowBox({}: Props) {
  return (
    <Box ml={"5px"} fontSize={"24px"}>
      {"\t\u2192"}
    </Box>
  );
}
