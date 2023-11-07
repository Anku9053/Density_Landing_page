import React from 'react'
import "../Css/trade.css"
import {BsQrCode} from "react-icons/bs"
const Trade = () => {
    return (
        <div>
            <div className='trade-main-container'>
                <p className='trade-para'>It’s time to trade,<br /> the  <span className='trade-span'>Future</span></p>
            </div>

            <div className='trade-main-bottom-container'>
                <p className='after-trade-para'>Trade Bitcoin, Ethereum Futures With 125x Leverage And Earn Rewards.</p>
            </div>

        <div style={{display:"flex",justifyContent:"center"}}>
        <div className='button-container'>
                <div className='anch-div-main'>
                    <a href='#' className='anch-button'>
                        <div className='after-anch'>
                            <p className='anch-p'>Trade Now</p>
                        </div>
                    </a>
                </div>

                {/*  */}


                
            </div>

            <div className='anch-div-main-container-2'>
            <div className='anch-div-main-2'>
                    <a href='#' className='anch-button-2'>
                        <div className='after-anch-2'>
                            <p className='anch-p-2'><span ><BsQrCode className='anch-div-scanner' /></span> Download Now</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Trade