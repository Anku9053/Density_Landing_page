import React from 'react';
import styled from 'styled-components';
import firsttradeImage from "../images/firsttradeImage.webp";
import secondtradeimage from "../images/secondtradeimage.webp";
import thirdtradeimage from "../images/thirdtradeimage.webp";

const MainDivContainer = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ImageContainerThreeImages = styled.div`
  display: flex;
  width: 60%;
  perspective: 1200px;
`;


const Image = styled.div`
  flex: 1;
  overflow: hidden;
  background-color: black;
  transform-style: preserve-3d;
`;

const FirstImage = styled.div`
  width: 100%;
  position: relative;
  left: 40px;
  /* border-radius: 90px; */
  transform: scale(0.8);
`;

const SecondImage = styled.div`
  border-radius: 40px;
  width: 100%;
  transform: translateZ(0);
`;

const ThirdImage = styled.div`
  border-radius: 40px;
  width: 100%;
  transform: scale(0.8);
  position: relative;
  right: 40px;
  z-index: -1;
`;

const StyledImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const ThreeImage = () => {
  return (
    <MainDivContainer>
      <ImageContainerThreeImages>
        <Image as={FirstImage}>
          <StyledImg className='images-glow' src={firsttradeImage} alt="First Image" />
        </Image>

        <Image as={SecondImage}>
          <StyledImg className='images-glow' src={secondtradeimage} alt="Second Image" />
        </Image>

        <Image as={ThirdImage}>
          <StyledImg className='images-glow' src={thirdtradeimage} alt="Third Image" />
        </Image>
      </ImageContainerThreeImages>
    </MainDivContainer>
  );
};

export default ThreeImage;
