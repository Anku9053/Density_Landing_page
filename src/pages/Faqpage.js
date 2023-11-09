// Faqpage.js
import React, { useState } from 'react';
import '../Css/faq.css';

const Faqpage = ({ question, answer }) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const toggleAnswer = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };

  return (

   
      <div className="faq-item">

      <div className="faq-question" onClick={toggleAnswer}>
        <span>+</span>
        {question}
      </div>
      <div className={`faq-answer ${isAnswerVisible ? 'show' : ''}`}>
        {answer}
      </div>
    </div>
  
  );
};

export default Faqpage;
