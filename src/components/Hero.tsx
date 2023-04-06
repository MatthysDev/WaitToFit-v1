import React from "react";
import Container from "./Container";
import ContentContainer from "./ContentContainer";
import Menu from "./Menu";

type Props = {};

export default function Hero({}: Props) {
  return (
    <Container>
      <Menu />
      <ContentContainer>Hero should be here</ContentContainer>
    </Container>
  );
}
