import React, { Fragment } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaLinkedinIn } from 'react-icons/fa';
import { BiLogoInstagram } from 'react-icons/bi';
import density_logo from '../images/density_logo.jpeg';
import density_logo_black from '../images/density_logo_black.jpeg';
import density_logo2 from '../images/density_logo2.jpeg';

const glow = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(255, 255, 0, 0.5);
  }
  100% {
    box-shadow: 0 0 20px rgba(255, 255, 0, 0.8);
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content:center;
  padding-top: -5rem;
`;

const AnchDivMain = styled.div`
  display: flex;
`;

const AnchButton = styled.a`
  backdrop-filter: blur(5px);
  background: linear-gradient(85.8452deg, rgb(212, 249, 56) 29.1667%, rgb(50, 216, 117) 100%);
  opacity: 1;
  padding: 1rem 20rem;
  margin-bottom: 0rem;
  transition: background 0.3s;
  border-radius: 15px;
  box-shadow: 0px 0px 3rem 0px #229751;
  display: flex;
  position: relative;
  bottom: 15rem;
  align-items: center;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: xx-large;
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

const FooterContent = styled.div`
  background-color: black;
  padding-top: 8rem;
`;

// const FooterHeading = styled.h1`
//   display: flex;
//   justify-content: center;
// `;

const WrapMobile = styled.div`
  margin: auto;
  position: relative;
  bottom: 2.5rem;
  background-color: black;
  width: 40%;
  height: 1000px;
  border: 0px solid #1e7c80;
  border-radius: 70px;
  box-shadow: inset 0px 0px 8px 0px #1e7c80;
  display: flex;
  justify-content: center;
`;

const MobileLogo = styled.div`
  justify-content: center;
`;

const MobileLogo1 = styled.div`
  position: relative;
  /* left: rem; */
  width: 50%;
  padding-top: 8rem;
  margin: auto;
`;

const MobileLogo2 = styled.div`
  padding-top: 8rem;
`;

const HeadingContent = styled.h1`
  font-size: 8rem;
  margin: 0;
  width: 70%;
  position:relative;
  top: 1rem;
  margin: auto;
  background-image: linear-gradient(to top, #302f2f, #ffffff);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const WrapFooter = styled.div`
  background-color: #229751;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
  padding-bottom: 1rem;
`;

const FooterRow1 = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const FooterHeading = styled.h1`
  width: 100%;
  
  color: aliceblue;
`;

const FooterRow2 = styled.div`
  display: flex;
  /* padding: 0 10%; */
  width: 80%;
  /* letter-spacing: 2px; */
  justify-content: space-between;
`;

const SubHeading = styled.h4`
  color: rgb(255, 255, 255);
  font-weight: 400;
  font-family: Arial, Helvetica, sans-serif;
  /* word-spacing: 0.5rem; */
  &:hover {
    color: #EBFF25;
    cursor: pointer;
  }
`;

const FooterRow3 = styled.div`
  display: flex;
  padding: 0 20%;
`;

const FooterPara = styled.p`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  /* word-spacing: 0.3rem; */
  color: rgba(217, 221, 224, 0.959);
  font-weight: 0;
`;

const FooterRow4 = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem 0;
`;

const InnerRow4 = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  align-items: center;
  width: 100%;
  font-size: 3rem;

  &:hover{
    cursor: pointer;
  }
  /* margin-left: 20px; */
`;

const InnerRow5 = styled.div`
  position: relative;
  right: 2rem;
  /* margin-left: 20px; */
`;
const FooterLogo = styled.div`
  color: aliceblue;
  font-size: xx-large;
`;

const Footer = () => {
  return (
    <Fragment>
      {/* content */}
      <FooterContent className="content">
        <FooterHeading className="heading">
          <HeadingContent className='heading-content'>Get started now.</HeadingContent>
        </FooterHeading>
        <WrapMobile className="wrap-mobile">
          <MobileLogo className="mobile-logo">
            <MobileLogo1 className="mobile-logo1">
              <img className='image1' src={density_logo_black} alt="" />
            </MobileLogo1>
            <MobileLogo2 className="mobile-logo2">
              <img className='image2' src={density_logo2} alt="" />
            </MobileLogo2>
          </MobileLogo>
        </WrapMobile>
        <ButtonContainer>
          <AnchDivMain>
            <AnchButton href="#">
              <div className="after-anch">
                <AnchP>Start trading!</AnchP>
              </div>
            </AnchButton>
          </AnchDivMain>
        </ButtonContainer>
      </FooterContent>
      {/* content */}

      {/* footer */}
      <WrapFooter className="wrap-footer">
        <FooterContainer className="footer">
          <FooterRow1 className="row1">
            <img src={density_logo} alt="" />
          </FooterRow1>
          <FooterRow2 className="row2">
            <SubHeading className='heading-content'>privacy policy</SubHeading>
            <SubHeading className='heading-content'>trading policy</SubHeading>
            <SubHeading className='heading-content'>term & conditions</SubHeading>
            <SubHeading className='heading-content'>cookie policy</SubHeading>
            <SubHeading className='heading-content'>KYC-AML policy</SubHeading>
            <SubHeading className='heading-content'>risk disclosure</SubHeading>
            <SubHeading className='heading-content'>Research Disclaimer</SubHeading>
          </FooterRow2>
          <FooterRow3 className="row3">
            <FooterPara className='footer-para'>Density was started with the vision of democratising money for everyone. With the idea of derivatives made simple, use Density to maximise profits and a hassle-free experience.</FooterPara>
          </FooterRow3>
          <FooterRow4 className="row4">
            <InnerRow4 className="inner-row4">
                <InnerRow5>

              <FaLinkedinIn className="footer-logo" />
                </InnerRow5>
                <div>

              <BiLogoInstagram className="footer-logo" />
                </div>
            </InnerRow4>
          </FooterRow4>
        </FooterContainer>
      </WrapFooter>
    </Fragment>
  );
};

export default Footer;
