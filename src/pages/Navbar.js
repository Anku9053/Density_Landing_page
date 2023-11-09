import React from 'react';
import DensityImage from '../images/DensityImage.svg';
import Trade from './Trade';
import styled, { keyframes } from 'styled-components';


const glow = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(255, 255, 0, 0.5);
  }
  100% {
    box-shadow: 0 0 20px rgba(255, 255, 0, 0.8);
  }
`;

const NavLeft = styled.div`
  width: 100%;
  height: 85px;
  /* background-color: #08130a; */
  flex: none;
  border: 1px rgba(134, 130, 130, 0.1);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  
  background-color: rgba(8, 19, 10, 0.8); 
  backdrop-filter: blur(8px);
  opacity: 1;
  width: 100%;
  z-index: 5;
`;

const NavLeftMini = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: min-content;
  justify-content: space-between;
  overflow: visible;
  padding: 20px 120px;
  position: relative;
`;

const MainContent = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 10px;
  height: 36px;
  justify-content: center;
  overflow: visible;
  padding: 0;
  position: relative;
  width: 148px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  aspect-ratio: inherit;
`;

const SvgContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const MySVG = styled.svg`

  width: 100%;
  height: 100%;
  display: block;
  position: relative;
  top: 30px;
  /* border: 2px solid red; */
`;

const MyImage = styled.img`
  cursor: pointer;
  width: 100%;
  height: 100%;
  padding: 20px;
  position: relative;
  /* top: 140px; */
  /* border: 2px solid yellow; */
`;
const Academy = styled.div`
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-shrink: 0;
  --extracted-r6o4lv: rgb(251, 251, 251);
  --framer-paragraph-spacing: 4px;
  transform: none;
  opacity: 1;
`;

const ParaAcademy = styled.p`
  cursor: pointer;
`;

const AnchAcademy = styled.a`
  color: white;
  text-decoration: none;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  &:hover {
    color: #EBFF25;
  }
`;

const LeftContent = styled.div`
  align-content: flex-start;
  align-items: flex-start;
  display: flex;
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 34px;
  height: min-content;
  justify-content: flex-start;
  overflow: visible;
  padding: 0;
  position: relative;
  width: min-content;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const AnchDivMain = styled.div`
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
  font-weight: 700;
`;

const Navbar = () => {
    return (
        <div>
            <NavLeft>
                <NavLeftMini>
                    <MainContent>
                        <a>
                            <ImageContainer>
                                <SvgContainer xmlns="http://www.w3.org/2000/svg" >
                                    <MyImage src={DensityImage} xlinkHref={DensityImage} />
                                </SvgContainer>
                            </ImageContainer>
                        </a>
                    </MainContent>
                    <LeftContent>
                        <Academy>
                            <ParaAcademy>
                                <AnchAcademy>Academy</AnchAcademy>
                            </ParaAcademy>
                        </Academy>
                        <Academy>
                            <ParaAcademy>
                                <AnchAcademy>Leaderboard</AnchAcademy>
                            </ParaAcademy>
                        </Academy>
                        <Academy>
                            <ParaAcademy>
                                <AnchAcademy>Blogs</AnchAcademy>
                            </ParaAcademy>
                        </Academy>
                        <Academy>
                            <ParaAcademy>
                                <AnchAcademy>Fees</AnchAcademy>
                            </ParaAcademy>
                        </Academy>
                        <ButtonContainer>
                            <AnchDivMain>
                                <AnchButton href="#">
                                    <div className="after-anch">
                                        <AnchP>Trade Now</AnchP>
                                    </div>
                                </AnchButton>
                            </AnchDivMain>
                        </ButtonContainer>
                    </LeftContent>
                </NavLeftMini>
            </NavLeft>
        </div>
    );
};

export default Navbar;
