import React from 'react';
import styled from 'styled-components';
import Faqpage from './Faqpage';

const faqs = [
  { question: 'What is Density Exchange?', answer: 'Density  is  a  Cryptocurrency  Derivatives  Exchange based in Bangalore built for traders.Density  provides an  easy  onramp/offramp,  tax compliance, fast withdrawal so that traders can focus more on trades and leave everything else to us.' },
  { question: 'How secure is Density exchange and what measures do you have in place to protect user funds?', answer: 'Density uses 256 AWS SHA encryption, with secure storage, and safe multi-signature sign-in authentication to ensure access control and real-time monitoring. We are backed by leading KYC and AML analytics providers like Chainanalysis and Onfido (SOC-2 Type-II meeting the AICPA Standards)' },
  { question: 'What are Crypto Futures?', answer: 'Crypto futures contracts are agreements between traders to buy or sell a particular asset at a predetermined price and on a specified date in the future.' },
  { question: 'What is Leverage in Trading? What is the the Max leverage offered by Density?', answer: "Just as a lever multiplies physical force, leverage in trading multiplies the trader's purchasing power, enabling them to take larger positions in the market. On Density, you can use up to 125x leverage to trade your favorite cryptocurrency future." },
  { question: 'How do I get started with trading on Density?', answer: 'To get started on density simply sign up on the platform, complete KYC in less than 2 minutes, Deposit funds and start trading.' },
];

const MainContainerDivFaq = styled.div`
  width: 100%;
  margin-top: 12rem;
`;

const FaqFrequentAskedQues = styled.div`
  color: white;
`;

const FaqFrequentAskedQuesPara = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 50px;
  letter-spacing: -2.6px;
  text-align: center;
  color: rgb(255, 255, 255);
`;

const FaqMainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const FaqContainer = styled.div`
  width: 75%;
  background-color: #141414;
  border-radius: 10px;
`;

const Faq = () => {
  return (
    <MainContainerDivFaq>
      <FaqFrequentAskedQues>
        <FaqFrequentAskedQuesPara>Frequently Asked Questions.</FaqFrequentAskedQuesPara>
      </FaqFrequentAskedQues>

      <FaqMainContainer>
        <FaqContainer>
          {faqs.map((faq, index) => (
            <Faqpage key={index} question={faq.question} answer={faq.answer} />
          ))}
        </FaqContainer>
      </FaqMainContainer>
    </MainContainerDivFaq>
  );
};

export default Faq;
