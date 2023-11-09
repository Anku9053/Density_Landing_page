import React from 'react';
import styled, { keyframes } from 'styled-components';
import deposit from '../images/depusitbonus.png';

const glow = keyframes`
  0% {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  }
  100% {
    box-shadow: 0 0 10px rgba(255, 255, 255, 1);
  }
`;

const MainDivContainer = styled.div`
  background-color: white;
  width: 100%;
`;

const MarginSuitableDiv = styled.div`
  padding-top: 10rem;
`;

const SecondMainDivContainer = styled.div`
  width: 100%;
`;

const MainDivContainerParaHolder = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: center;
`;

const MainDivContainerPara = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 72px;
  font-weight: 700;
  letter-spacing: -2.1px;
  line-height: 76.88px;
  text-align: center;
  color: rgb(14, 14, 15);
`;

const ThirdMainDivContainer = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: center;
`;

const MainDivContainerImageHolder = styled.div`
  width: 80%;
  margin: auto;
`;

const MainDivContainerImage = styled.img`
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 6rem;
  padding-bottom: 4rem;
  justify-content: center;
`;

const AnchDivMain = styled.div`
  display: flex;
`;

const AnchButton = styled.a`
  backdrop-filter: blur(5px);
  background: linear-gradient(85.8452deg, rgb(212, 249, 56) 29.1667%, rgb(50, 216, 117) 100%);
  opacity: 1;
  padding: 0px 40px 0px 40px;
  transition: background 0.3s;
  border-radius: 8px;
  box-shadow: none;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  font-weight: 1000;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  white-space: nowrap;
  animation: ${glow} 1s infinite alternate;
  &:hover {
    cursor: pointer;
  }
`;

const AnchP = styled.p`
  color: black;
  font-weight: 700;
`;

const StartSmall = () => {
  return (
    <MainDivContainer>
      <MarginSuitableDiv>
        <SecondMainDivContainer>
          <MainDivContainerParaHolder>
            <MainDivContainerPara>Start Small. Earn Big.</MainDivContainerPara>
          </MainDivContainerParaHolder>
        </SecondMainDivContainer>
        <ThirdMainDivContainer>
          <MainDivContainerImageHolder>
            <MainDivContainerImage src={deposit} alt='deposit' />
          </MainDivContainerImageHolder>
        </ThirdMainDivContainer>
      </MarginSuitableDiv>

      <ButtonContainer>
        <AnchDivMain>
          <AnchButton href="#">
            <div className="after-anch">
              <AnchP>Trade Now</AnchP>
            </div>
          </AnchButton>
        </AnchDivMain>
      </ButtonContainer>
    </MainDivContainer>
  );
};

export default StartSmall;
