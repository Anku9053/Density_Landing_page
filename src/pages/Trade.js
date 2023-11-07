import React from 'react';
import styled, { keyframes } from 'styled-components';
import { BsQrCode } from 'react-icons/bs';

// Define the keyframes animation first
const glow2 = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(255, 255, 0, 0.5);
  }
  100% {
    box-shadow: 0 0 20px rgba(255, 255, 0, 0.8);
  }
`;

const glow3 = keyframes`

    0% {
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.8); 
    }
    100% {
      box-shadow: 0 0 30px rgba(255, 255, 255, 1);
    }
  
`

// Then define the styled components
const TradeContainer = styled.div`
  text-align: center;
`;

const TradePara = styled.p`
  font-size: 96px;
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 96px;
  font-weight: 700;
  letter-spacing: -4.19px;
  line-height: 100px;
  text-align: center;
  color: rgb(255, 255, 255);
  top: 50px;
`;

const TradeSpan = styled.span`
  text-transform: lowercase;
  background: linear-gradient(96.57738454118163deg, rgba(212, 249, 56, 1) 0%, rgba(213, 250, 57, 1) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  transition: text-shadow 0.3s ease;
  text-shadow: 0 0 15px rgba(255, 255, 0, 0.7);
`;

const TradeMainContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const AfterTradePara = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  text-align: center;
  color: rgb(231, 231, 234);
  text-transform: capitalize;
`;

const ButtonContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
`;

const SharedButton = styled.a`
  backdrop-filter: blur(5px);
  opacity: 1;
  padding: 0px 30px 0px 30px;
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
`;

const AnchP = styled.p`
  color: black;
  font-weight: 700;
`;

const GlowingButton = styled(SharedButton)`
  background: linear-gradient(85.8452deg, rgb(255, 255, 0) 29.1667%, rgb(76, 255, 128) 100%);
  &:hover {
    background: linear-gradient(85.8452deg, rgb(255, 255, 0) 29.1667%, rgb(76, 255, 128) 100%);
    animation: ${glow2} 1s infinite alternate;
  }
`;

const AnchDivMain = styled.div`
  display: flex;
  margin-left: 20px;
`;

const AnchButton = styled.a`
  backdrop-filter: blur(5px);
  background: linear-gradient(85.8452deg, rgb(212, 249, 56) 29.1667%, rgb(50, 216, 117) 100%);
  opacity: 1;
  padding: 0px 30px 0px 30px;
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
`;

const AnchDivMain2 = styled.div`
  /* border: 1px solid rgba(255, 255, 255, 0.6); */
  display: flex;
  outline: none;
  flex-direction: column;
  justify-content: flex-start;
  flex-shrink: 0;
  margin-left: 20px;
`;

const AnchButton2 = styled(SharedButton)`
  backdrop-filter: blur(5px);
  border: 1px solid #303030;
  padding: 0px 10px 0px 10px;
  transition: background 0.3s;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  border-radius:10px;
  font-family: Arial, sans-serif;
  white-space: nowrap;
  &:hover {
    /* background: linear-gradient(85.8452deg, rgb(255, 255, 0) 29.1667%, rgb(76, 255, 128) 100%); */
    animation: ${glow3} 1s infinite alternate;
  }
`;

const AnchP2 = styled.p`
  color: white;
  font-weight: 700;
`;

const AnchDivScanner = styled.span`
  color: yellow;
`;

const Trade = () => {
  return (
    <TradeContainer>
      <TradeMainContainer>
        <TradePara>
          It’s time to trade,<br />
          the <TradeSpan>Future</TradeSpan>
        </TradePara>
      </TradeMainContainer>

      <div className='trade-main-bottom-container'>
        <AfterTradePara>Trade Bitcoin, Ethereum Futures With 125x Leverage And Earn Rewards.</AfterTradePara>
      </div>

      <ButtonContainer>
        <AnchDivMain>
          <GlowingButton href='#'>
            <div className='after-anch'>
              <AnchP>Trade Now</AnchP>
            </div>
          </GlowingButton>
        </AnchDivMain>

        <AnchDivMain2>
          <AnchButton2 href='#'>
            <div className='after-anch-2'>
              <AnchP2>
                <span>
                  <BsQrCode className='anch-div-scanner' />
                </span> Download Now
              </AnchP2>
            </div>
          </AnchButton2>
        </AnchDivMain2>
      </ButtonContainer>
    </TradeContainer>
  );
};

export default Trade;
