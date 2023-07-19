import { Button, HStack, Input } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Header(){
  return (
    <HStack p={"2"} shadow={"base"} bgColor={"green.500"}>
      <Button variant={"unstyled"} color={"white"} px={'5'}>
        <Link to="/">Home</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} px={'5'}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} px={'5'}>
        <Link to="/coins">Coins</Link>
      </Button>
      
    </HStack>
  );
};

export default Header;