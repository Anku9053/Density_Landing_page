import React from 'react'
import "../Css/Explore.css"
import flipflap from "../images/flipflap.png"
import styled, { keyframes } from 'styled-components';


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
        <div className="gradient-div">
            <div className='explore-main-div-container'>
                <div className='explore-para-div-container'>
                    <p className='explore-first-para'>Explore the Markets</p>
                    <p className='explore-second-para'>like it is your<span className='explore-first-span'> Playground.</span></p>
                    <p className='explore-first-small-para'>Search for your favorite coins and stay ahead of the market</p>
                </div>


                <div className='explore-image-div-container'>
                    <img className='explore-image' src={flipflap} alt=''/>

                </div>

                <ButtonContainer>
                            <AnchDivMain>
                                <AnchButton href="#">
                                    <div className="after-anch">
                                        <AnchP>Explore Markets</AnchP>
                                    </div>
                                </AnchButton>
                            </AnchDivMain>
                        </ButtonContainer>

            </div>
        </div>
    )
}

export default Explore