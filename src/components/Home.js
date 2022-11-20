import styled from "styled-components";
import React from "react";
import ImgSlider from "./Imgslider";
import MainContent from "./MainContent";

const Home = () => {
  return (
    <div>
      <Container>
        <ImgSlider />
        <MainContent />
      </Container>
    </div>
  );
};

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px););
    overflow-x: hidden;
    display: block;
    top: 10px;
    padding: 0 calc(3.5vw + 5px);

    &:after {
        content: '';
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`;

export default Home;
