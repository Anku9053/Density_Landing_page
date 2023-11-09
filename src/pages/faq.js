import React, { useState } from 'react';
import '../Css/faq.css';
import Faqpage from './Faqpage';

const Faq = () => {
  const faqs = [
    { question: 'What is Density Exchange?', answer: 'Density  is  a  Cryptocurrency  Derivatives  Exchange based in Bangalore built for traders.Density  provides an  easy  onramp/offramp,  tax compliance, fast withdrawal so that traders can focus more on trades and leave everything else to us.' },
    { question: 'How secure is Density exchange and what measures do you have in place to protect user funds?', answer: 'Density uses 256 AWS SHA encryption, with secure storage, and safe multi-signature sign-in authentication to ensure access control and real-time monitoring. We are backed by leading KYC and AML analytics providers like Chainanalysis and Onfido (SOC-2 Type-II meeting the AICPA Standards)' },
    { question: 'What are Crypto Futures?', answer: 'Crypto futures contracts are agreements between traders to buy or sell a particular asset at a predetermined price and on a specified date in the future.' },

    { question: 'What is Leverage in Trading? What is the the Max leverage offered by Density?', answer: "Just as a lever multiplies physical force, leverage in trading multiplies the trader's purchasing power, enabling them to take larger positions in the market. On Density, you can use up to 125x leverage to trade your favorite cryptocurrency future." },

    { question: 'How do I get started with trading on Density?', answer: 'To get started on density simply sign up on the platform, complete KYC in less than 2 minutes, Deposit funds and start trading.' },

    
  ];

  return (

    <div className='main-container-div-faq'>
      <div className='faq-frequent-asked-ques'>
        <h2 className='faq-frequent-asked-ques-para'>Frequently Asked Questions.</h2>
      </div>

    <div className='faq-main-container'>
      
    <div className="faq-container">

      {faqs.map((faq, index) => (
        <Faqpage key={index} question={faq.question} answer={faq.answer} />
        ))}
    </div>
        </div>
    </div>
  );
};

export default Faq;