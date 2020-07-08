import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { COLORS } from "../../styles/variables";

const Container = styled.div({
  backgroundColor: COLORS.darkOpacity,
  width: "100%",
  minWidth: 310,
  maxWidth: 800,
  padding: 10,
  boxSizing: "border-box",
});

const Input = styled.input({
  backgroundColor: "transparent",
  border: 0,
  padding: 10,
  boxSizing: "border-box",
  fontSize: 18,
  outline: "none",
  color: COLORS.white,
  letterSpacing: 3,
  width: "calc(100% - 80px)",
});

const Button = styled.button({
  fontSize: 16,
  backgroundColor: COLORS.white,
  outline: "none",
  paddingTop: 10,
  paddingBottom: 10,
  width: 80,
  letterSpacing: 1,
  cursor: "pointer",
});

export default function Search({ onSearch }) {
  const [value, setValue] = useState("");

  return (
    <Container>
      <Input
        placeholder="Search for Character, episode, location and dimention"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <Button
        type="button"
        onClick={() => {
          onSearch(value);
        }}
      >
        Search
      </Button>
    </Container>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
