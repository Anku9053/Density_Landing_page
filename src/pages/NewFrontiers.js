import React, { useRef, useState } from 'react'
import "../Css/NewFrontiers.css"
import Destiny_video from "../Video/Destiny_Video.mp4"
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
margin-top: 6rem;
  display: flex;
  /* position: relative; */
  /* bottom: 5rem; */
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
  /* animation: ${glow2} 1s infinite alternate; */
  &:hover {
    background: linear-gradient(85.8452deg, rgb(255, 255, 0) 29.1667%, rgb(76, 255, 128) 100%);
    animation: ${glow} 1s infinite alternate;
  }
`;

const AnchP = styled.p`
  color: black;
  /* font-weight: 1000; */
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
`;
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
        <div>
            <div className='NewFrontier-main-div-container'>
                <div className='NewFrontier-para-div-container'>
                    <p className='NewFrontier-first-para'><span className='NewFrontier-first-span'> Unlock </span>New Frontiers.</p>
                    <p className='NewFrontier-first-small-para'>Are you a stock trader looking for new opportunities to make </p>
                    <p className='NewFrontier-first-small-para'>money? We got you covered!</p>
                </div>
            </div>

            <div className='NewFrontier-first-main-half-div-border'>
                <div className='NewFrontier-second-main-half-div-border'>
                    <div>
                        <p className='Newfrontier-main-half-div-first-para'>Same</p>
                        <p className='Newfrontier-main-half-div-second-para'>Strategies</p>
                    </div>


                    <div>
                        <p className='Newfrontier-main-half-div-first-para'>Same</p>
                        <p className='Newfrontier-main-half-div-second-para'>Indicators</p>
                    </div>


                    <div>
                        <p className='Newfrontier-main-half-div-first-para'>Better</p>
                        <p className='Newfrontier-main-half-div-second-para'>Leverage</p>
                    </div>

                    <div>
                        <p className='Newfrontier-main-half-div-first-para'>24x7</p>
                        <p className='Newfrontier-main-half-div-second-para'>Trading</p>
                    </div>



                </div>
            </div>


            <div className='NewFrontier-main-container'>
                <div className='NewFrontier-main-video-container'
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {isPlaying ? (
                        <video
                            controls
                            autoPlay
                            width={"100%"}
                            height={"auto"}
                            ref={videoRef}
                            onMouseLeave={() => videoRef.current.pause()}
                        >
                            <source src={Destiny_video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <video
                        onMouseEnter={handleMouseEnter}
                            controls
                            autoPlay
                            width={"100%"}
                            height={"auto"}
                            ref={videoRef}
                            // onMouseLeave={() => videoRef.current.pause()}
                        >
                            <source src={Destiny_video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
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

export default NewFrontiers