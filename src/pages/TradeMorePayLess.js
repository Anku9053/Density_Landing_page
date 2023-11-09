import React from 'react'
import "../Css/TradeMorePayLess.css"
import trade from "../images/trade_more_pay_less.png"
const TradeMorePayLess = () => {
  return (
    <div className='trade-more-first-main-div'>
        <div className='trade-more-first-middle-main-div'>
            <div className='trade-more-second-main-div'>
                <p className='trade-more-para'>Trade More.<span className='trade-more-span'> Pay Less.</span></p>
                
            </div>

            <div className='trade-more-third-main-div'>
            <p className='trade-more-para-small'>Our low Fees Supercharge Your Profits</p>
            </div>

        </div>

        <div className='trade-more-first-main-div-image-container'>
          <div className='trade-more-first-main-div-image-holder'>
            <img className='trade-more-first-main-div-image' src={trade} alt='TradeMorePayLess'/>
          </div>
          <div>
            <p className='trade-more-first-main-div-para'>*Upto 50% Discount - using our best in class referral and rebate program</p>
          </div>
        </div>
    </div>
  )
}

export default TradeMorePayLess