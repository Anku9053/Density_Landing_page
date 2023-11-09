import React from 'react'
import "../Css/StartSmall.css"
import deposit from "../images/depusitbonus.png"
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
    /* background: linear-gradient(85.8452deg, rgb(255, 255, 0) 29.1667%, rgb(76, 255, 128) 100%); */
    
  }
`;

const AnchP = styled.p`
  color: black;
  font-weight: 700;
`;
const StartSmall = () => {
  return (
    <div className='StartSmall-main-div-container'>
        <div className='margin-suitable-div'>
        <div className='StartSmall-second-main-div-container'>
            <div className='StartSmall-main-div-container-para-holder'>
                <p className='StartSmall-main-div-container-para'>Start Small. Earn Big.</p>
            </div>
        </div>
        <div className='StartSmall-third-main-div-container'>
            <div className='StartSmall-main-div-container-image-holder'>
                <img className='StartSmall-main-div-container-image' src={deposit} alt='deposit'/>
            </div>
        </div>
        </div>

        <ButtonContainer>
                <AnchDivMain>
                    <AnchButton href="#">
                        <div className="after-anch">
                            <AnchP>Trade Now</AnchP>
                        </div>
                    </AnchButton>
                </AnchDivMain>
            </ButtonContainer>
    </div>
  )
}

export default StartSmall