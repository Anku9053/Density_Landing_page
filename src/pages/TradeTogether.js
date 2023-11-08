import React from 'react'
import "../Css/TradeTogether.css"

import styled, { keyframes } from 'styled-components';
const glow = keyframes`
   0% {
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.8); 
    }
    100% {
      box-shadow: 0 0 10px rgba(255, 255, 255, 1);
  }
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
    /* background: linear-gradient(85.8452deg, rgb(255, 255, 0) 29.1667%, rgb(76, 255, 128) 100%); */
    
  }
`;

const AnchP = styled.p`
  color: black;
  font-weight: 1000;
`;
const TradeTogether = () => {
    return (
        <div className='TradeTogether-main-container-image-holder'>
            <div className='TradeTogether-main-container-para-holder'>
                <div className='TradeTogether-second-main-container-para-holder'>
                    <p className='TradeTogether-main-container-big-para'>Trade Together. <span className='TradeTogether-main-container-span'>Thrive Together.</span></p>
                    <p className='TradeTogether-main-container-small-para'>Join the fun-filled community on our platform.</p>
                </div>
            </div>


            <div className='TradeTogether-main-container-three-div'>
                <div className='TradeTogether-main-container-three-div-holder'>
                    <div className='TradeTogether-container-three-div'>
                        <p className='TradeTogether-container-three-div-para'>$5 Mn</p>
                        <p className='TradeTogether-container-three-div-para-2'>Daily Vol Traded</p>

                    </div>
                    <div className='TradeTogether-container-three-div'>
                        <p className='TradeTogether-container-three-div-para'>Daily Trade</p>
                        <p className='TradeTogether-container-three-div-para-2'>Analysis</p>

                    </div>
                    <div className='TradeTogether-container-three-div'>
                        <p className='TradeTogether-container-three-div-para'>Live Signals</p>

                    </div>
                </div>
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

        </div>
    )
}

export default TradeTogether