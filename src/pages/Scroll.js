// Scroll.js
import React, { useState, useEffect, useRef } from 'react';
import '../Css/Scroll.css';
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

  const handleScroll = () => {
    const container = containerRef.current;
    const images = container.getElementsByClassName('image-container');

    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      const rect = image.getBoundingClientRect();

      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        setVisibleIndex(i);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
            <img/>

          <p className="content">Create an Account</p>
          <p>Register & Complete your </p>
          <p>Verification in less than 2 minutes</p>
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
        <img/>

<p className="content">Create an Account</p>
<p>Register & Complete your </p>
<p>Verification in less than 2 minutes</p>
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
          src="https://framerusercontent.com/images/j11NwUrp3bk9vGxAZEp1xEsSGrk.png?scale-down-to=1024"
          alt="Image 2"
          />
          </div>
        <div className={`content-container ${visibleIndex === 2 ? 'changed' : ''}`}>
        <img/>

<p className="content">Create an Account</p>
<p>Register & Complete your </p>
<p>Verification in less than 2 minutes</p>
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

      <div className={`image-container ${visibleIndex === 3 ? 'changed' : ''}`}>
        <div>

        <img
          className="image"
          src="https://framerusercontent.com/images/j11NwUrp3bk9vGxAZEp1xEsSGrk.png?scale-down-to=1024"
          alt="Image 2"
          />
          </div>
        <div className={`content-container ${visibleIndex === 3 ? 'changed' : ''}`}>
        <img/>

<p className="content">Create an Account</p>
<p>Register & Complete your </p>
<p>Verification in less than 2 minutes</p>
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


      <div className={`image-container ${visibleIndex === 4 ? 'changed' : ''}`}>
        <div>

        <img
          className="image"
          src="https://framerusercontent.com/images/j11NwUrp3bk9vGxAZEp1xEsSGrk.png?scale-down-to=1024"
          alt="Image 2"
          />
          </div>
        <div className={`content-container ${visibleIndex === 4 ? 'changed' : ''}`}>
        <img/>

<p className="content">Create an Account</p>
<p>Register & Complete your </p>
<p>Verification in less than 2 minutes</p>
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

      <div className={`image-container ${visibleIndex === 5 ? 'changed' : ''}`}>
        <div>

        <img
          className="image"
          src="https://framerusercontent.com/images/j11NwUrp3bk9vGxAZEp1xEsSGrk.png?scale-down-to=1024"
          alt="Image 2"
          />
          </div>
        <div className={`content-container ${visibleIndex === 5 ? 'changed' : ''}`}>
        <img/>

<p className="content">Create an Account</p>
<p>Register & Complete your </p>
<p>Verification in less than 2 minutes</p>
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

      {/* Repeat similar structure for other images */}
    </div>
  );
};

export default Scroll;
