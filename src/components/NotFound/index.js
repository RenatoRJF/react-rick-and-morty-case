import React from "react";
import styled from "styled-components";
import { COLORS } from "../../styles/variables";
import RickAndMorty from "../../images/rick-and-morty.png";

const Container = styled.div({
  textAlign: "center",
  marginBottom: 50,
});

const Text = styled.p`
  font-size: 40px;
  color: ${COLORS.white};

  @media screen and (min-width: 768px) {
    font-size: 50px;
  }
`;

const CodeNumber = styled.span({
  color: COLORS.bumblebee,
  fontSize: 50,
});

const Image = styled.img({
  width: 250,
});

export default function NotFound() {
  return (
    <Container>
      <Image src={RickAndMorty} alt="rick and morty" />
      <Text>
        <CodeNumber>404</CodeNumber> Not Found
      </Text>
    </Container>
  );
}
