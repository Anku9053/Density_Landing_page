import React from 'react';
import styled, { keyframes } from 'styled-components';

const glow = keyframes`
  0% {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  }
  100% {
    box-shadow: 0 0 10px rgba(255, 255, 255, 1);
  }
`;

const TradeTogetherMainContainerImageHolder = styled.div`
  height: auto;
  width: 100%;
  margin: 0;
  background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.5) 100%),
    url("https://framerusercontent.com/images/o16JfiUw2OAbYsyquloWED5cF4.png");
  background-size: cover;
  background-position: center;
`;

const TradeTogetherMainContainerThreeDivHolder = styled.div`
  display: flex;
  justify-content: center;
`;

const TradeTogetherBigPara = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 72px;
  font-weight: 700;
  letter-spacing: -2.1px;
  line-height: 76.88px;
  padding-top: 8rem;
  text-align: center;
  color: rgb(255, 255, 255);
`;

const TradeTogetherMainContainerSpan = styled.span`
  color: rgb(235, 255, 37);
`;

const TradeTogetherSmallPara = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  line-height: 32.85px;
  color: rgb(231, 231, 234);
  text-align: center;
`;

const TradeTogetherMainContainerParaHolder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TradeTogetherThreeDivHolder = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  gap: 20px;

  margin: auto;
`;

const TradeTogetherContainerThreeDiv = styled.div`
  width: 100%;
  background-color: #229751;
  /* border-radius: ; */
  align-content: center;
    /* border: 2px solid red; */
    align-items: center;
    background-color: #229751;
    border-radius: 8px;
    /* display: flex; */
    /* flex: 1 0 0px; */
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 0px;
    height: 160px;
    justify-content: center;
    overflow: hidden;
    padding: 0;
    color: white;
    position: relative;
    width: 100%;
    will-change: var(--framer-will-change-override, transform);
`;

const TradeTogetherContainerThreeDivPara = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 40px;
  text-align: center;
  color: rgb(255, 255, 255);
`;

const TradeTogetherContainerThreeDivPara2 = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 32px;
  position: relative;
  bottom: 2rem;
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 40px;
  text-align: center;
  color: rgb(255, 255, 255);
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 4rem;
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
  font-weight: 1000;
`;

const TradeTogether = () => {
  return (
    <TradeTogetherMainContainerImageHolder className='TradeTogether-main-container-image-holder'>
      <div className='TradeTogether-main-container-para-holder'>
        <div className='TradeTogether-second-main-container-para-holder'>
          <TradeTogetherBigPara>
            Trade Together. <TradeTogetherMainContainerSpan>Thrive Together.</TradeTogetherMainContainerSpan>
          </TradeTogetherBigPara>
          <TradeTogetherSmallPara>Join the fun-filled community on our platform.</TradeTogetherSmallPara>
        </div>
      </div>

      <div className='TradeTogether-main-container-three-div'>
        <TradeTogetherThreeDivHolder className='TradeTogether-main-container-three-div-holder'>
          <TradeTogetherContainerThreeDiv>
            <TradeTogetherContainerThreeDivPara>$5 Mn</TradeTogetherContainerThreeDivPara>
            <TradeTogetherContainerThreeDivPara2>Daily Vol Traded</TradeTogetherContainerThreeDivPara2>
          </TradeTogetherContainerThreeDiv>
          <TradeTogetherContainerThreeDiv>
            <TradeTogetherContainerThreeDivPara>Daily Trade</TradeTogetherContainerThreeDivPara>
            <TradeTogetherContainerThreeDivPara2>Analysis</TradeTogetherContainerThreeDivPara2>
          </TradeTogetherContainerThreeDiv>
          <TradeTogetherContainerThreeDiv>
            <TradeTogetherContainerThreeDivPara>Live Signals</TradeTogetherContainerThreeDivPara>
          </TradeTogetherContainerThreeDiv>
        </TradeTogetherThreeDivHolder>
      </div>

      <ButtonContainer>
        <AnchDivMain>
          <AnchButton href="#">
            <div className="after-anch">
              <AnchP>Join Community</AnchP>
            </div>
          </AnchButton>
        </AnchDivMain>
      </ButtonContainer>
    </TradeTogetherMainContainerImageHolder>
  );
};

export default TradeTogether;
