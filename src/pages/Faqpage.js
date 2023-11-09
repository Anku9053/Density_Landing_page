import React, { useState } from 'react';
import styled from 'styled-components';

const FaqItem = styled.div`
  margin-bottom: 20px;
  cursor: pointer;
`;

const FaqQuestion = styled.div`
  font-weight: 600;
  letter-spacing: 0px;
  line-height: 1.5em;
  text-align: left;
  color: #f5f5f5;
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
  left: 1.6rem;
  transition: background-color 0.9s ease;
  
  span {
    font-size: 3rem;
    position: relative;
    top: 0.7rem;
    right: 1rem;
    font-weight: 100;
  }
`;

const FaqAnswer = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: nowrap;
  position: relative;
  left: 3.5rem;
  font-weight: 600;
  letter-spacing: 0px;
  line-height: 1.5em;
  text-align: left;
  color: #858585;
  font-family: Arial, Helvetica, sans-serif;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in;
  
  &.show {
    max-height: 2000px;
  }
`;

const Faqpage = ({ question, answer }) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const toggleAnswer = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };

  return (
    <FaqItem>
      <FaqQuestion onClick={toggleAnswer}>
        <span>+</span>
        {question}
      </FaqQuestion>
      <FaqAnswer className={isAnswerVisible ? 'show' : ''}>
        {answer}
      </FaqAnswer>
    </FaqItem>
  );
};

export default Faqpage;
