import React from 'react';
import styled from 'styled-components';

const MainContainerShortDivDesc = styled.div`
  margin-top: 60px;
  height: 180px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DescContainer = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  justify-content: space-evenly;
  color: white;
`;

const MainContainerGlowingDiv = styled.div`
  width: 90%;
  margin: auto;
  border-radius: 10px;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px rgba(255, 255, 0, 0.6);
`;

const DescInside = styled.div`
  text-align: center;
  width: 100%;
  position: relative;
`;

const GlowingSpan = styled.span`
  font-size: 40px;
  background-image: linear-gradient(0deg, rgb(86, 218, 107) 0%, rgb(212, 250, 57) 58.8172%);
  font-family: Arial, Helvetica, sans-serif;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;

const DescParagraph = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  color: rgba(169, 169, 169);
  line-height: 26px;
  font-weight: 500;
`;

const DescInsideSeparator = styled.div`
  text-align: center;
  width: 100%;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 10%;
    bottom: 10%;
    left: 100%;
    transform: translateX(-50%);
    width: 1px;
    background: rgba(255, 255, 0, 0.438);
  }
`;

const TradersDesc = () => {
  return (
    <MainContainerShortDivDesc>
      <MainContainerGlowingDiv>
        <DescContainer>
          <DescInsideSeparator>
            <GlowingSpan>0%</GlowingSpan>
            <DescParagraph>USDT/INR Conversion Fee</DescParagraph>
          </DescInsideSeparator>

          <DescInsideSeparator>
            <GlowingSpan>$500 Mn+</GlowingSpan>
            <DescParagraph>Lifetime Volume Traded</DescParagraph>
          </DescInsideSeparator>

          <DescInsideSeparator>
            <GlowingSpan>250+</GlowingSpan>
            <DescParagraph>Total Tradable Pairs</DescParagraph>
          </DescInsideSeparator>

          <DescInside>
            <GlowingSpan>15,000+</GlowingSpan>
            <DescParagraph>Traders</DescParagraph>
          </DescInside>
        </DescContainer>
      </MainContainerGlowingDiv>
    </MainContainerShortDivDesc>
  );
};

export default TradersDesc;
