import React from "react";
import styled from "styled-components";

import Image from "../../images/dimension.jpg";

const LoaderWrapper = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 50%;
  animation: animateLoader 3s linear infinite;
  position: absolute;
  top: 20%;

  @keyframes animateLoader {
    0% {
      transform: rotate(0deg);
      width: 100px;
      height: 100px;
    }
    50% {
      width: 150px;
      height: 150px;
    }
    100% {
      transform: rotate(360deg);
      width: 100px;
      height: 100px;
    }
  }
`;

const DimensionImage = styled.img({
  width: "120%",
  height: "120%",
  marginTop: "-10%",
  marginLeft: "-10%",
  display: "block",
});

export default function Loader() {
  return (
    <LoaderWrapper>
      <DimensionImage src={Image} alt="loader" />
    </LoaderWrapper>
  );
}
