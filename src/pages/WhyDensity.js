import React from 'react'
import "../Css/WhyDensity.css"
import WhyDensity1 from "../images/whydensity.webp"
const WhyDensity = () => {
  return (
    <div className='whyDensity-Main-Div-First'>
        <div className='whyDensity-Main-Div-Second'>
            <div className='whyDensity-div-image'>
                <img className='whyDensity-image' src={WhyDensity1} alt='whhydensity'/>
            </div>

            <div className='why-density-para-main-div'>
                <p className='why-density-para'>Why Density?</p>
                
            </div>

            <div className='why-density-para-main-div'>
               <p className='why-density-para-small-text'>Empower your trading strategy with access to cutting-edge</p>
               <p className='why-density-para-small-text'>technology and advanced trading tools.</p>
            </div>
        </div>
    </div>
  )
}

export default WhyDensity