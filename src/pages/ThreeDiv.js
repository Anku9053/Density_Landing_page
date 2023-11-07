import React, { useEffect } from 'react';
import '../Css/ThreeDiv.css';

const ThreeDiv = () => {
  useEffect(() => {
    const container = document.querySelector('.three-div-image-container');
    const numDots = 10; // Number of dots to scatter

    for (let i = 0; i < numDots; i++) {
      const dot = document.createElement('div');
      dot.className = 'scatter-dot';
      container.appendChild(dot);
    }
  }, []);

  return (
    <div className='Three-div-first-main-div'>
      <div className='Three-Div-second-main-div'>
        <div className='Three-Div-Main-image-para-container'>
          <div className='three-div-image-container'>
            {/* Dots will be dynamically generated here */}
          </div>

          <div className='three-div-para-container'>
            <p></p>
            <p></p>
          </div>

          <div className='three-div-para-container'>
            <p></p>
            <p></p>
          </div>

          <div className='three-div-para-container'>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeDiv;
