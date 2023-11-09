import React from 'react';
import styled from 'styled-components';
import WhyDensity1 from '../images/whydensity.webp';

const MainDivFirst = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  margin-top: 5rem;
  justify-content: center;
  align-items: center;
`;

const MainDivSecond = styled.div`
  display: flex;
  flex-direction: column;
`;

const DivImage = styled.div`
  img {
    position: relative;
    top: 3rem;
    width: 157px;
    height: 127px;
  }
`;

const ParaMainDiv = styled.div`
  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 72px;
    font-weight: 700;
    letter-spacing: -2px;
    text-align: center;
    color: rgb(255, 255, 255);
  }
`;

const ParaSmallText = styled.div`
  p {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    font-family: 'Neurial Grotesk', sans-serif;
    color: rgb(145, 145, 145);
    font-size: 24px;
    position: relative;
    bottom: 4.8rem;
   
  }
`;

const WhyDensity = () => {
  return (
    <MainDivFirst>
      <MainDivSecond>
        <DivImage>
          <img className='whyDensity-image' src={WhyDensity1} alt='whhydensity' />
        </DivImage>

        <ParaMainDiv>
          <p className='why-density-para'>Why Density?</p>
        </ParaMainDiv>

        <ParaSmallText>
          <p className='why-density-para-small-text'>Empower your trading strategy with access to cutting-edge</p>
          <p className='why-density-para-small-text'>technology and advanced trading tools.</p>
        </ParaSmallText>
      </MainDivSecond>
    </MainDivFirst>
  );
};

export default WhyDensity;
