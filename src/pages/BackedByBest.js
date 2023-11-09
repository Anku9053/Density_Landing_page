import React from 'react';
import styled from 'styled-components';
import Orios from "../images/Orios.webp";
import inflection from "../images/inflection.webp";
import seed from "../images/seed.webp";
import Pvp from "../images/pvp.webp";
import polygon from "../images/polygon_labss.webp";
import tribe_capital from "../images/tribe_capital.webp";
import rise from "../images/rise.webp";
import utsav from "../images/utsav.webp";
import karan from "../images/karan.webp";
import gokul from "../images/gokul.webp";
import aditya from "../images/aditya.webp";
import arjun from "../images/arjun.webp";
import kunal from "../images/kunal.webp";
import sandeep from "../images/sandeep.webp";
import sajid from "../images/sajid.webp";

const BackedByBestMainContainer = styled.div`
  margin-top: 7rem;
`;

const FirstMainHalfDivBorder = styled.div`
  width: 100%;
  position: relative;
  height: 12rem;
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, transparent , rgba(255, 255, 255, 0.2) 50%, rgba(255, 253, 253, 0.2) 50%, transparent );
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }
`;

const MainHalfDivFirstPara = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 72px;
  font-weight: 700;
  letter-spacing: -2.1px;
  background: linear-gradient(0deg,rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 0%);
  color: transparent;
  /* line-height: 76.88px; */
  text-align: center;
`;

const MainHalfDivFirstSpan = styled.span`
  text-align: center;
  position: relative;
  top: 2.5rem;
  font-size: 72px;
  font-weight: 700;
  letter-spacing: -2.1px;
  /* line-height: 76.88px; */
  text-align: center;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 71.4879%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const BackedByBestContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  width: 50%;
  margin: auto;
`;

const BackByBestFourImagePerRowMainContainer = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  height: auto;
`;

const BackByBestFourImagePerRowSecondContainer = styled.div`
  width: 70%;
  margin: auto;
`;

const BackbybestImageMainContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 4rem;
  justify-content: center;
`;

const BackByBestFourImagePerRowSecondContainerImg = styled.img`
  width: 100%;
`;

const BackByBestFourImagePerRowSecondContainerBigImage = styled.div`
  width: 70%;
  justify-content: center;
  gap: 80px;
  display: grid;
  align-items: center;
  align-content: center;
  align-self: center;
  margin: auto;
`;

const BackByBestFourImagePerRowMainContainerBigDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  height: auto;
`;

const BackbybestImageMainContainerBigDiv = styled.div`
  width: 65%;
  display: flex;
  margin: auto;
  margin-top: 4rem;
  justify-content: space-between;
`;

const BackByBestFourImagePerRowSecondContainerBigImageImg = styled.img`
  width: 60%;
`;

const BackedByBestCeoDivContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  width: 65%;
`;

const SmallImage = styled.img`
  width: 40%;
`;

const BackedByBestCeoDivContainerMain = styled.div`
  width: 100%;
  display: flex;
  margin-top: 4rem;
  justify-content: center;
`;

const BackedByBestCeoDivContainerHolderImg = styled.img`
  width: 70%;
`;

const BackedByBestCeoDivBigPara = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20.48px;
  font-weight: 700;
  text-align: start;
  color: rgb(255, 255, 255);
`;

const BackedByBestCeoDivSmallPara = styled.p`
  font-family: "Neurial Grotesk Light", sans-serif;
  font-size: 12px;
  text-align: start;
  color: rgb(128, 128, 144);
`;

const BackedByBest = () => {
  return (
    <BackedByBestMainContainer>
      <FirstMainHalfDivBorder>
        <MainHalfDivFirstPara>
          <MainHalfDivFirstSpan>Backed by the Best.</MainHalfDivFirstSpan>
        </MainHalfDivFirstPara>
      </FirstMainHalfDivBorder>

      <BackbybestImageMainContainer>
        <BackByBestFourImagePerRowMainContainer>
          <BackByBestFourImagePerRowSecondContainer>
            <BackByBestFourImagePerRowSecondContainerImg src={Orios} alt='' />
          </BackByBestFourImagePerRowSecondContainer>
          <BackByBestFourImagePerRowSecondContainer>
            <BackByBestFourImagePerRowSecondContainerImg src={inflection} alt='' />
          </BackByBestFourImagePerRowSecondContainer>
          <BackByBestFourImagePerRowSecondContainer>
            <BackByBestFourImagePerRowSecondContainerImg src={seed} alt='' />
          </BackByBestFourImagePerRowSecondContainer>
          <BackByBestFourImagePerRowSecondContainer>
            <BackByBestFourImagePerRowSecondContainerImg src={Pvp} alt='' />
          </BackByBestFourImagePerRowSecondContainer>
        </BackByBestFourImagePerRowMainContainer>
      </BackbybestImageMainContainer>

      <BackbybestImageMainContainerBigDiv>
        <BackByBestFourImagePerRowMainContainerBigDiv>
          <BackByBestFourImagePerRowSecondContainerBigImage>
            <BackByBestFourImagePerRowSecondContainerBigImageImg className='small-image' src={rise} alt='' />
          </BackByBestFourImagePerRowSecondContainerBigImage>
          <BackByBestFourImagePerRowSecondContainerBigImage>
            <BackByBestFourImagePerRowSecondContainerBigImageImg src={tribe_capital} alt='' />
          </BackByBestFourImagePerRowSecondContainerBigImage>
          <BackByBestFourImagePerRowSecondContainerBigImage>
            <BackByBestFourImagePerRowSecondContainerBigImageImg src={polygon} alt='' />
          </BackByBestFourImagePerRowSecondContainerBigImage>
        </BackByBestFourImagePerRowMainContainerBigDiv>
      </BackbybestImageMainContainerBigDiv>

      <BackedByBestCeoDivContainerMain>
        <BackedByBestCeoDivContainer>
          <div className='BackedByBest-ceo-div-container-holder'>
            <BackedByBestCeoDivContainerHolderImg src={utsav} alt='' />
            <BackedByBestCeoDivBigPara>Utsav Somani</BackedByBestCeoDivBigPara>
            <BackedByBestCeoDivSmallPara>Ex-partner, AngelList India</BackedByBestCeoDivSmallPara>
          </div>
          <div className='BackedByBest-ceo-div-container-holder'>
            <BackedByBestCeoDivContainerHolderImg src={aditya} alt='' />
            <BackedByBestCeoDivBigPara>Aditya Nagarsheth</BackedByBestCeoDivBigPara>
            <BackedByBestCeoDivSmallPara>Partner, Perpetual Value Partners</BackedByBestCeoDivSmallPara>
          </div>
          <div className='BackedByBest-ceo-div-container-holder'>
            <BackedByBestCeoDivContainerHolderImg src={gokul} alt='' />
            <BackedByBestCeoDivBigPara>Gokul Rajaram</BackedByBestCeoDivBigPara>
            <BackedByBestCeoDivSmallPara>Ex-board director, Coinbase | Ex-Google</BackedByBestCeoDivSmallPara>
          </div>
          <div className='BackedByBest-ceo-div-container-holder'>
            <BackedByBestCeoDivContainerHolderImg src={sajid} alt='' />
            <BackedByBestCeoDivBigPara>Sajid Rehman</BackedByBestCeoDivBigPara>
            <BackedByBestCeoDivSmallPara>Managing Partner, My Asia VC</BackedByBestCeoDivSmallPara>
          </div>
          <div className='BackedByBest-ceo-div-container-holder'>
            <BackedByBestCeoDivContainerHolderImg src={arjun} alt='' />
            <BackedByBestCeoDivBigPara>Arjun Sethi</BackedByBestCeoDivBigPara>
            <BackedByBestCeoDivSmallPara>Cofounder, Tribe Capital</BackedByBestCeoDivSmallPara>
          </div>
          <div className='BackedByBest-ceo-div-container-holder'>
            <BackedByBestCeoDivContainerHolderImg src={kunal} alt='' />
            <BackedByBestCeoDivBigPara>Kunal Shah</BackedByBestCeoDivBigPara>
            <BackedByBestCeoDivSmallPara>Founder, Cred</BackedByBestCeoDivSmallPara>
          </div>
          <div className='BackedByBest-ceo-div-container-holder'>
            <BackedByBestCeoDivContainerHolderImg src={sandeep} alt='' />
            <BackedByBestCeoDivBigPara>Sandeep Nailawal</BackedByBestCeoDivBigPara>
            <BackedByBestCeoDivSmallPara>Cofounder, Polygon Labs</BackedByBestCeoDivSmallPara>
          </div>
          <div className='BackedByBest-ceo-div-container-holder'>
            <BackedByBestCeoDivContainerHolderImg src={karan} alt='' />
            <BackedByBestCeoDivBigPara>Karn Vivek Nagpal</BackedByBestCeoDivBigPara>
            <BackedByBestCeoDivSmallPara>Investor at CoinDCX, Dealshare, Oye Rickshaw!</BackedByBestCeoDivSmallPara>
          </div>
        </BackedByBestCeoDivContainer>
      </BackedByBestCeoDivContainerMain>
    </BackedByBestMainContainer>
  );
};

export default BackedByBest;
