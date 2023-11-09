import React from 'react';
import styled from 'styled-components';
import tradeImage from '../images/trade_more_pay_less.png';

const FirstMainDiv = styled.div`
  width: 100%;
  text-align: center;
  align-items: center;
`;

const FirstMiddleMainDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const SecondMainDiv = styled.div`
  width: 75%;
  margin: auto;
`;

const Para = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 72px;
  font-weight: 700;
  letter-spacing: -2.1px;
  text-align: center;
  color: rgb(255, 255, 255);

  .trade-more-span {
    color: #ebff25;
  }
`;

const ParaSmall = styled.p`
  position: relative;
  bottom: 4rem;
  font-family: 'Neurial Grotesk', sans-serif;
  line-height: 32.85px;
  text-align: center;
  color: rgb(231, 231, 234);
  font-size: 24px;
`;

const ImageContainer = styled.div`
  width: 75%;
  margin: auto;
`;

const ImageHolder = styled.div`
  img {
    width: 100%;
  }
`;

const ParaNote = styled.p`
  font-family: 'Neurial Grotesk', sans-serif;
  line-height: 32.85px;
  text-align: center;
  color: rgb(125, 125, 125);
`;

const TradeMorePayLess = () => {
  return (
    <FirstMainDiv>
      <FirstMiddleMainDiv>
        <SecondMainDiv>
          <Para>
            Trade More.<span className='trade-more-span'> Pay Less.</span>
          </Para>
          <ParaSmall>Our low Fees Supercharge Your Profits</ParaSmall>
        </SecondMainDiv>
      </FirstMiddleMainDiv>

      <ImageContainer>
        <ImageHolder>
          <img src={tradeImage} alt='TradeMorePayLess' />
        </ImageHolder>
        <ParaNote>*Upto 50% Discount - using our best in class referral and rebate program</ParaNote>
      </ImageContainer>
    </FirstMainDiv>
  );
};

export default TradeMorePayLess;
