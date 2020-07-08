import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { COLORS } from "../../styles/variables";

const Container = styled.div({
  padding: 20,
  boxSizing: "border-box",
  backgroundColor: COLORS.darkOpacity,
  marginBottom: 10,
});

const Image = styled.img({
  width: "100%",
  margin: "auto",
  display: "block",
});

const Details = styled.div({
  width: "100%",
  backgroundColor: COLORS.black,
  boxSizing: "border-box",
  padding: 10,
});

const Name = styled.h4({
  color: COLORS.bumblebee,
  fontSize: 20,
});

const Status = styled(Name)(({ isAlive }) => ({
  display: "block",
  fontSize: 16,
  marginBottom: 10,
  color: isAlive ? COLORS.lime : COLORS.blood,
}));

const PersonalData = styled(Name)({
  color: COLORS.white,
  fontSize: 16,
  margin: 0,
});

export default function Character({ data }) {
  const { image, name, status, species, gender, origin } = data;
  const { dimension, name: originName } = origin;

  return (
    <Container>
      <Image src={image} alt="card" />

      <Details>
        <Name>{name}</Name>
        <Status isAlive={status.toLowerCase() === "alive"}>{status}</Status>

        <PersonalData>{species}</PersonalData>
        <PersonalData>{gender}</PersonalData>
        <PersonalData>{dimension}</PersonalData>
        <PersonalData>{originName}</PersonalData>
      </Details>
    </Container>
  );
}

Character.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    origin: PropTypes.shape({
      name: PropTypes.string.isRequired,
      dimension: PropTypes.string,
    }),
  }).isRequired,
};
