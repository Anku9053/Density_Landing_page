// Scroll.js
import React, { useState, useEffect, useRef } from 'react';
import '../Css/Scroll.css';
import styled, { keyframes } from 'styled-components';
import coinchange from "../images/coinchange.png"
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
  /* margin-top: 6rem; */
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
const Scroll = () => {
    const [visibleIndex, setVisibleIndex] = useState(0);
    const containerRef = useRef(null);
  
    useEffect(() => {
      const container = containerRef.current;
      const images = container.getElementsByClassName('image-container');
  
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = Array.from(images).indexOf(entry.target);
              setVisibleIndex(index);
            }
          });
        },
        { root: null, rootMargin: '0px', threshold: 0.5 }
      );
  
      Array.from(images).forEach((image) => {
        observer.observe(image);
      });
  
      return () => {
        observer.disconnect();
      };
    }, []);
  return (
    <div ref={containerRef} className="container">
      <div className={`image-container ${visibleIndex === 0 ? 'changed' : ''}`}>
        <div>

        <img
          className="image"
          src="https://framerusercontent.com/images/JOp5o95H8N6rcRdm2ihCJpcoawc.png?scale-down-to=1024"
          alt="Image 1"
          />
          </div>
        <div className={`content-container ${visibleIndex === 0 ? 'changed' : ''}`}>
            <img className='firstimageofscroll' src='https://framerusercontent.com/images/Eirp07s7Wsvd04ENgTUIQE6RGkc.png'/>

          <p className="content">Create an Account</p>
          <p className='small-p'>Register & Complete your </p>
          <p className='small-p'>Verification in less than 2 minutes</p>
          <div>

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
        </div>
      </div>

      <div className={`image-container ${visibleIndex === 1 ? 'changed' : ''}`}>
        <div>
        <img
          className="image"
          
          src="https://framerusercontent.com/images/j11NwUrp3bk9vGxAZEp1xEsSGrk.png?scale-down-to=1024"
          alt="Image 2"
          />
          </div>
        <div className={`content-container ${visibleIndex === 1 ? 'changed' : ''}`}>
        <img className='firstimageofscroll' src={coinchange}/>

<p className="content">Deposit Funds</p>
<p className='small-p'>Add funds quickly using a variety of</p>
<p className='small-p'>payment methods</p>
<div>

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
        </div>
      </div>

      <div className={`image-container ${visibleIndex === 2 ? 'changed' : ''}`}>
  <div>
    <img
      className="image"
      src="https://framerusercontent.com/images/yT2IeAMzpz2zotDCFRXIz6bngLA.png?scale-down-to=1024"
      alt="Image 3"
    />
  </div>
  <div className={`content-container ${visibleIndex === 2 ? 'changed' : ''}`}>
    <img className='firstimageofscroll' src='https://framerusercontent.com/images/MuGoyAYXtzuANxB4L6sjutODqss.png'/>
    <p className="content">Become a Trader</p>
    <p className='small-p'>Choose Your Trading Pair & Trade </p>
    <p className='small-p'>Seamlessly</p>
    <div>
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
  </div>
    </div>
    </div>
  );
};

export default Scroll;
