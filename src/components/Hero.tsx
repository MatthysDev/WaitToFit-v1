import React from "react";
import Container from "./Container";
import ContentContainer from "./ContentContainer";
import Menu from "./Menu";
import Home from "./Home";
type Props = {};

export default function Hero({}: Props) {
  return (
    <Container>
      <Menu />
      <Home/>
    </Container>
  );
}
