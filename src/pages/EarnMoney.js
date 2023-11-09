import React from 'react'
import "../Css/EarnMoney.css"
import payout from "../images/payouts.png"
import loud from "../images/Loud.webp"
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
  font-weight: 700;
`;
const EarnMoney = () => {
  return (
    <div className='EarnMoney-main-div'>
        <div className='EarnMoney-second-main-div'>
            <div className='EarnMoney-main-div-image-holder'>
                <img className='EarnMoney-main-div-image' src={loud} alt='loud'/>
            </div>
        </div>

        <div className='EarnMoney-third-main-div'>
            <div className='EarnMoney-third-main-div-para-span-holder'>
                <p className='EarnMoney-third-main-div-para'>Earn Money.<span  className='EarnMoney-third-main-div-span'> The Easy Way.</span></p>
                <p  className='EarnMoney-third-main-div-small-para'>Best-in-class referral and rebate program. Refer a friend and you would get 70%* </p>
                <p className='EarnMoney-third-main-div-small-para'>of fee generated by your friend and your friend would get upto 20%* of rebate on </p>
                <p className='EarnMoney-third-main-div-small-para'>fee</p>
            </div>
        </div>


        <div className='EarnMoney-fourth-main-div'>
            <div className='EarnMoney-fourth-main-div-image-holder'>
                <img className='EarnMoney-fourth-main-div-image' src={payout} alt='payout'/>
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

export default EarnMoney