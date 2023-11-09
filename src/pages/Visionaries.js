import React from 'react';
import styled from 'styled-components';
import { AiFillLinkedin } from 'react-icons/ai';
import vision from "../images/Densitiens.png"
const VisionariesMainDiv = styled.div`
  width: 100%;
  margin-top: 3rem;
`;

const VisionariesMainDivContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  margin: auto;
`;

const VisionariesMainDivParaHolder = styled.div`
  text-align: center;
  color: white;
`;

const VisionariesMainDivPara = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 72px;
  font-weight: 700;
  letter-spacing: -2.1px;
  text-align: center;
  color: rgb(255, 255, 255);
`;

const VisionariesMainDivSpan = styled.span`
  color: rgb(235, 255, 37);
`;

const VisionariesMainDivSmallPara = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 72px;
  font-weight: 700;
  position: relative;
  bottom: 4rem;
  letter-spacing: -2.1px;
  text-align: center;
  color: rgb(255, 255, 255);
`;

const VisionariesSecondMainDiv = styled.div`
  width: 70%;
  margin: auto;
`;

const VisionariesSecondMainThreeDivHolder = styled.div`
  display: flex;
  justify-content: center;
  background: url("https://framerusercontent.com/images/rUzTpc0OSjilsPSvEn7WYwEuBA.png?scale-down-to=512");
  width: 100%;
  margin: auto;
  image-rendering: pixelated;
  flex-shrink: 0;
  fill: rgba(0, 0, 0, 1);
  color: rgba(0, 0, 0, 1);
`;

const VisionariesDivBackgroundImageHolder = styled.div`
  background-image: url("https://framerusercontent.com/images/rUzTpc0OSjilsPSvEn7WYwEuBA.png?scale-down-to=512");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: space-between;
`;

const VisonariesDivSpanLinkedin = styled.div`
  color: #bbbbc3;
  display: flex;
  justify-content: flex-end;
  font-size: 3rem;
  align-items: last baseline;
  align-content: end;
  position: relative;
  top: 11.8rem;
`;

const VisionariesDivBigPara = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 40px;
  color: rgb(255, 255, 255);
`;

const VisionariesDivPara = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  letter-spacing: -1px;
  position: relative;
  bottom: 3rem;
  color: rgb(187, 187, 195);
`;

const VisonariesDivSpanParaHolder = styled.div`
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-shrink: 0;
  transform: none;
  width: 60%;
`;

const VisionariesDivBackgroundImageHolderImg = styled.img`
  /* border: 2px solid red; */
  width: 100%;
`;

const Visionaries = () => {
  return (
    <VisionariesMainDiv>
      <VisionariesMainDivContainer>
        <VisionariesMainDivParaHolder>
          <VisionariesMainDivPara>
            Meet the <VisionariesMainDivSpan>Visionaries</VisionariesMainDivSpan>
          </VisionariesMainDivPara>
          <VisionariesMainDivSmallPara>behind Density.</VisionariesMainDivSmallPara>
        </VisionariesMainDivParaHolder>
      </VisionariesMainDivContainer>

      <VisionariesSecondMainDiv>
        <VisionariesSecondMainThreeDivHolder>
          <VisionariesDivBackgroundImageHolder>
            <VisionariesDivBackgroundImageHolderImg src={vision} alt="vision" />
          </VisionariesDivBackgroundImageHolder>
          <VisonariesDivSpanLinkedin>
            {/* <AiFillLinkedin /> */}
          </VisonariesDivSpanLinkedin>
        </VisionariesSecondMainThreeDivHolder>
      </VisionariesSecondMainDiv>
    </VisionariesMainDiv>
  );
};

export default Visionaries;
