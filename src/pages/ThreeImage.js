import React from 'react';
import "../Css/ThreeImage.css"; // Replace with your CSS file path
import firsttradeImage from"../images/firsttradeImage.webp"
import secondtradeimage from "../images/secondtradeimage.webp"
import thirdtradeimage from "../images/thirdtradeimage.webp"
const ThreeImage = () => {
  return (
    <div className="main-div-container">
      <div className="image-container-three-images">
        <div className="image first-image">
          <img className='images-glow' src={firsttradeImage} alt="First Image" />
        </div>

        <div className="image second-image">
          <img className='images-glow' src={secondtradeimage} alt="Second Image" />
        </div>

        <div className="image third-image">
          <img className='images-glow' src={thirdtradeimage} alt="Third Image" />
        </div>
      </div>
    </div>
  );
};

export default ThreeImage;
