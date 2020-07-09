import React from "react";
import styled from "styled-components";
import { COLORS } from "../../styles/variables";

const Text = styled.p({
  fontSize: 50,
  color: COLORS.white,
  marginBottom: 20,
});

const CodeNumber = styled.span({
  color: COLORS.bumblebee,
  fontSize: 50,
});

export default function NotFound() {
  return (
    <Text>
      <CodeNumber>404</CodeNumber> Not Found
    </Text>
  );
}
