import React, { useEffect, useState } from "react";
import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  List,
  ListItem,
  Link,
  Button,
} from "@chakra-ui/react";

type Props = {};
export default function MyNavbar({}: Props) {
  return (
    <Flex justifyContent={"space-between"} w={"100%"}>
      <Box>
        <Heading>My Navbar</Heading>
      </Box>
      <Flex w={"33%"}>
        <List display={"flex"} flexGrow={1}>
          <ListItem>
            <Text>
              <Link href="/">About</Link>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <Link href="/">About</Link>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              <Link href="/">About</Link>
            </Text>
          </ListItem>
        </List>
        <Button>Apply Now </Button>
      </Flex>
    </Flex>
  );
}
