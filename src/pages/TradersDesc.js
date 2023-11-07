import React from 'react'
import "../Css/TradersDesc.css"
const TradersDesc = () => {
  return (
    <div className='main-container-short-div-desc'>
        <div className='main-container-glowing-div'>

            <div className='main-container-short-div-inside'>
                <span>0%</span>
                <p>USDT/INR Conversion Fee </p>
            </div>

            <div className='main-container-short-div-inside'>
                <span>$500 Mn+</span>
                <p>Lifetime Volume Traded</p>
            </div>

            <div className='main-container-short-div-inside'>
                <span>250+</span>
                <p>Total Tradable Pairs</p>
            </div>

            <div className='main-container-short-div-inside last-item'>
                <span>15,000+</span>
                <p>Traders</p>
            </div>

        </div>
    </div>
  )
}

export default TradersDesc