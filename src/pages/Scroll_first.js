import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import coinchange from "../images/coinchange.png";
import one from "../images/one-twent-five.webp"
import rupee from "../images/rupee.webp"
import safety from "../images/Secure.webp"
import amount from "../images/Amount.webp"
import nextup from "../images/NextUp.webp"
import matc from "../images/Matic.webp"
const glow = keyframes`
  0% {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  }
  100% {
    box-shadow: 0 0 10px rgba(255, 255, 255, 1);
  }
`;

const Container = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.5s ease;

  &.changed {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition: opacity 0.5s ease;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: flex-start;
  margin-left: 10rem;
  opacity: 0;
  transition: opacity 0.5s ease;

  &.changed {
    opacity: 1;
  }
`;

const Content = styled.p`
  opacity: 1;
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 40px;
  font-weight: 500;
  color: rgb(255, 255, 255);
`;

const FirstImageOfScroll = styled.img`
  width: 30%;
`;

const SmallP = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  line-height: 32px;
  position: relative;
  bottom: 4rem;
  color: rgb(169, 169, 169);
`;

const ButtonContainer = styled.div`
  display: flex;
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
  }
`;

const AnchP = styled.p`
  color: black;
  font-weight: 700;
`;

const Scroll_first = () => {
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
    <Container ref={containerRef}>
      <ImageContainer className={`image-container ${visibleIndex === 0 ? 'changed' : ''}`}>
        <div>
          <Image
            className="image"
            src={matc}
            alt="Image 1"
          />
        </div>
        <ContentContainer className={`content-container ${visibleIndex === 0 ? 'changed' : ''}`}>
          <FirstImageOfScroll src={one} />
          <Content>125x your Leverage.</Content>
          <SmallP>Maximize Your Trading Potential with upto <br/> 125x Leverage. Always ensure you use </SmallP>
          <SmallP>leverage with proper risk management.</SmallP>
          
        </ContentContainer>
      </ImageContainer>

      <ImageContainer className={`image-container ${visibleIndex === 1 ? 'changed' : ''}`}>
        <div>
          <Image
            className="image"
            src={amount}
            alt="Image 2"
          />
        </div>
        <ContentContainer className={`content-container ${visibleIndex === 1 ? 'changed' : ''}`}>
          <FirstImageOfScroll src={rupee} />
          <Content>Deposit Funds in INR.</Content>
          <SmallP>Deposit Funds in INR seamlessly and start </SmallP>
          <SmallP>your crypto futures journey within  5 minutes</SmallP>
          
        </ContentContainer>
      </ImageContainer>

      <ImageContainer className={`image-container ${visibleIndex === 2 ? 'changed' : ''}`}>
        <div>
          <Image
            className="image"
            src={nextup}
            alt="Image 3"
          />
        </div>
        <ContentContainer className={`content-container ${visibleIndex === 2 ? 'changed' : ''}`}>
          <FirstImageOfScroll src={safety} />
          <Content>Safety First, Security Always.</Content>
          <SmallP>Density uses 256 SHA encryption </SmallP>
          <SmallP>& backed by leading KYC and AML analytics  providers like Chainanalysis and Onfido.</SmallP>
          
        </ContentContainer>
      </ImageContainer>
    </Container>
  );
};

export default Scroll_first;
