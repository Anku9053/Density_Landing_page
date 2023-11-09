import React from 'react';
import styled, { keyframes } from 'styled-components';
import flipflapImage from '../images/flipflap.png';

const glow = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(255, 255, 0, 0.5);
  }
  100% {
    box-shadow: 0 0 20px rgba(255, 255, 0, 0.8);
  }
`;

const glow2 = keyframes`
    0% {
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.8); 
    }
    100% {
      box-shadow: 0 0 15px rgba(255, 255, 255, 1);
    }
`;

const GradientDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  background: linear-gradient(to bottom, #0e3514 , transparent 30%);
`;

const ExploreMainDivContainer = styled.div`
  width: 100%;
`;

const ExploreParaDivContainer = styled.div`
  outline: none;
  display: flex;
  flex-direction: column;
  transform: none;
`;

const ExploreFirstPara = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 72px;
  font-weight: 700;
  letter-spacing: -2.1px;
  text-align: center;
  color: rgb(255, 255, 255);
`;

const ExploreSecondPara = styled.p`
  position: relative;
  bottom: 9rem;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 72px;
  font-weight: 700;
  letter-spacing: -2.1px;
  text-align: center;
  color: rgb(255, 255, 255);
`;

const ExploreFirstSpan = styled.span`
  color: rgb(235, 255, 37);
`;

const ExploreFirstSmallPara = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: rgb(231, 231, 234);
  font-size: 24px;
  position: relative;
  bottom: 13rem;
`;

const ExploreImageDivContainer = styled.div`
  width: 80%;
  margin: auto;
  position: relative;
  bottom: 11rem;
  display: flex;
  justify-content: center;
`;

const ExploreImage = styled.img`
  margin: auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const AnchDivMain = styled.div`
  display: flex;
  position: relative;
  bottom: 5rem;
`;

const AnchButton = styled.a`
  backdrop-filter: blur(5px);
  background: linear-gradient(85.8452deg, rgb(212, 249, 56) 29.1667%, rgb(50, 216, 117) 100%);
  opacity: 1;
  padding: 0px 65px 0px 65px;
  transition: background 0.3s;
  border-radius: 8px;
  box-shadow: none;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  white-space: nowrap;
  animation: ${glow2} 1s infinite alternate;
  &:hover {
    background: linear-gradient(85.8452deg, rgb(255, 255, 0) 29.1667%, rgb(76, 255, 128) 100%);
    animation: ${glow} 1s infinite alternate;
  }
`;

const AnchP = styled.p`
  color: black;
  font-weight: 1000;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
`;

const Explore = () => {
  return (
    <GradientDiv>
      <ExploreMainDivContainer>
        <ExploreParaDivContainer>
          <ExploreFirstPara>Explore the Markets</ExploreFirstPara>
          <ExploreSecondPara>
            like it is your<ExploreFirstSpan> Playground.</ExploreFirstSpan>
          </ExploreSecondPara>
          <ExploreFirstSmallPara>Search for your favorite coins and stay ahead of the market</ExploreFirstSmallPara>
        </ExploreParaDivContainer>

        <ExploreImageDivContainer>
          <ExploreImage src={flipflapImage} alt='' />
        </ExploreImageDivContainer>

        <ButtonContainer>
          <AnchDivMain>
            <AnchButton href="#">
              <div className="after-anch">
                <AnchP>Explore Markets</AnchP>
              </div>
            </AnchButton>
          </AnchDivMain>
        </ButtonContainer>
      </ExploreMainDivContainer>
    </GradientDiv>
  );
};

export default Explore;
