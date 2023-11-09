import React, { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import DestinyVideo from '../Video/Destiny_Video.mp4';

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
  padding-bottom: 8rem;
`;

const AnchDivMain = styled.div`
  margin-top: 6rem;
  display: flex;
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
  &:hover {
    background: linear-gradient(85.8452deg, rgb(255, 255, 0) 29.1667%, rgb(76, 255, 128) 100%);
    animation: ${glow} 1s infinite alternate;
  }
`;

const AnchP = styled.p`
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
`;

const NewFrontiersMainDivContainer = styled.div`
  width: 100%;
`;

const NewFrontiersParaDivContainer = styled.div`
  text-align: center;
`;

const NewFrontiersFirstPara = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 72px;
  letter-spacing: -2.1px;
  line-height: 76.88px;
  color: rgb(255, 255, 255);
  font-weight: 700;
`;

const NewFrontiersFirstSpan = styled.span`
  color: rgb(235, 255, 37);
`;

const NewFrontiersFirstSmallPara = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: rgb(231, 231, 234);
  font-size: 22.37px;
  position: relative;
  bottom: 3rem;
`;

const NewFrontiersFirstMainHalfDivBorder = styled.div`
  width: 100%;
  position: relative;
`;

// const NewFrontiersFirstMainHalfDivBorderBeforeAfter = styled.div`
//  content: "";
//   position: absolute;
//   width: 100%;
//   height: 2px;
//   background: linear-gradient(to right, transparent , rgba(255, 255, 255, 0.2) 50%, rgba(255, 253, 253, 0.2) 50%, transparent );
//   top:0;
//   bottom: 0;
// `;
const NewFrontiersFirstMainHalfDivBorderAfter = styled.div`
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, transparent , rgba(255, 255, 255, 0.2) 50%, rgba(255, 253, 253, 0.2) 50%, transparent );
  bottom: 0;
`;
const NewFrontiersFirstMainHalfDivBorderBeforeAfter = styled.div`
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, transparent , rgba(255, 255, 255, 0.2) 50%, rgba(255, 253, 253, 0.2) 50%, transparent );
  top: 0;
`;
const NewFrontiersMainHalfDivFirstPara = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  text-align: center;
  color: rgb(255, 255, 255);
  font-size: 28px;
`;

const NewFrontiersMainHalfDivSecondPara = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  text-align: center;
  color: rgb(255, 255, 255);
  font-size: 28px;
  position: relative;
  bottom: 1.5rem;
`;

const NewFrontiersMainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const NewFrontiersMainVideoContainer = styled.div`
  width: 50%;
  display: block;
`;


const NewFrontiersecondmainhalfdivborder = styled.div`
display: flex;
flex-direction: row;
width: 60%;
margin: auto;
justify-content: space-between;

`
const NewFrontiers = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    setIsPlaying(true);
  };

  const handleMouseLeave = () => {
    setIsPlaying(true);
  };

  return (
    <NewFrontiersMainDivContainer>
      <NewFrontiersParaDivContainer>
        <NewFrontiersFirstPara>
          <NewFrontiersFirstSpan> Unlock </NewFrontiersFirstSpan>New Frontiers.
        </NewFrontiersFirstPara>
        <NewFrontiersFirstSmallPara>Are you a stock trader looking for new opportunities to make</NewFrontiersFirstSmallPara>
        <NewFrontiersFirstSmallPara>money? We got you covered!</NewFrontiersFirstSmallPara>
      </NewFrontiersParaDivContainer>

      <NewFrontiersFirstMainHalfDivBorder>
        <NewFrontiersFirstMainHalfDivBorderBeforeAfter />
        <NewFrontiersecondmainhalfdivborder>
          <div>
            <NewFrontiersMainHalfDivFirstPara>Same</NewFrontiersMainHalfDivFirstPara>
            <NewFrontiersMainHalfDivSecondPara>Strategies</NewFrontiersMainHalfDivSecondPara>
          </div>
          <div>
            <NewFrontiersMainHalfDivFirstPara>Same</NewFrontiersMainHalfDivFirstPara>
            <NewFrontiersMainHalfDivSecondPara>Indicators</NewFrontiersMainHalfDivSecondPara>
          </div>
          <div>
            <NewFrontiersMainHalfDivFirstPara>Better</NewFrontiersMainHalfDivFirstPara>
            <NewFrontiersMainHalfDivSecondPara>Leverage</NewFrontiersMainHalfDivSecondPara>
          </div>
          <div>
            <NewFrontiersMainHalfDivFirstPara>24x7</NewFrontiersMainHalfDivFirstPara>
            <NewFrontiersMainHalfDivSecondPara>Trading</NewFrontiersMainHalfDivSecondPara>
          </div>
        </NewFrontiersecondmainhalfdivborder>
        <NewFrontiersFirstMainHalfDivBorderAfter />
      </NewFrontiersFirstMainHalfDivBorder>

      <NewFrontiersMainContainer>
        <NewFrontiersMainVideoContainer
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {isPlaying ? (
            <video
            //   controls
              autoPlay
              width={'100%'}
              height={'auto'}
              ref={videoRef}
              // onMouseLeave={() => videoRef.current.pause()}
              onMouseEnter={handleMouseEnter}
            >
              <source src={DestinyVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <video
              onMouseEnter={handleMouseEnter}
            //   controls
              autoPlay
              width={'100%'}
              height={'auto'}
              ref={videoRef}
            >
              <source src={DestinyVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
          )}
        </NewFrontiersMainVideoContainer>
      </NewFrontiersMainContainer>

      <ButtonContainer>
        <AnchDivMain>
          <AnchButton href="#">
            <div className="after-anch">
              <AnchP>Trade Now</AnchP>
            </div>
          </AnchButton>
        </AnchDivMain>
      </ButtonContainer>
    </NewFrontiersMainDivContainer>
  );
};

export default NewFrontiers;
