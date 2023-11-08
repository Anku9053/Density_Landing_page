import React from 'react'
import "../Css/BackedByBest.css"
import Orios from "../images/Orios.webp"
import inflection from "../images/inflection.webp"
import seed from "../images/seed.webp"
import Pvp from "../images/pvp.webp"
import polygon from "../images/polygon_labss.webp"
import tribe_capital from "../images/tribe_capital.webp"
import rise from "../images/rise.webp"
import utsav from "../images/utsav.webp"
import karan from "../images/karan.webp"
import gokul from "../images/gokul.webp"
import aditya from "../images/aditya.webp"
import arjun from "../images/arjun.webp"
import kunal from "../images/kunal.webp"
import sandeep from "../images/sandeep.webp"
import sajid from "../images/sajid.webp"











const BackedByBest = () => {
  return (
    <div className='BackedByBest-main-container'>
        <div className='BackedByBest-first-main-half-div-border'>
                <div className='BackedByBest-second-main-half-div-border'>
                    <div>
                        <p className='BackedByBest-main-half-div-first-para'><span className='BackedByBest-main-half-div-first-span'>Backed by the Best.</span></p>
                    </div>
                </div>
            </div>

            <div className='backbybest-image-main-container'>

            
            <div className='backByBest-four-image-per-row-main-container'>
                <div className='backByBest-four-image-per-row-second-container'>
                    <img src={Orios} alt=''/>
                    
                </div>
                <div className='backByBest-four-image-per-row-second-container'>
                    <img src={inflection} alt=''/>
                    
                </div>
                <div className='backByBest-four-image-per-row-second-container'>
                    <img src={seed} alt=''/>
                    
                </div>
                <div className='backByBest-four-image-per-row-second-container'>
                    <img src={Pvp} alt=''/>
                    
                </div>


            </div>
            </div>

            <div className='backbybest-image-main-container-big-div'>
                <div className='backByBest-four-image-per-row-main-container-big-div'>
                <div className='backByBest-four-image-per-row-second-container-big-image'>
                    <img className='small-image' src={rise} alt=''/>
                    
                </div>
                <div className='backByBest-four-image-per-row-second-container-big-image'>
                    <img src={tribe_capital} alt=''/>
                    
                </div>
                <div className='backByBest-four-image-per-row-second-container-big-image'>
                    <img src={polygon} alt=''/>
                    
                </div>
                </div>
            </div>



            {/* real images */}

            <div className='BackedByBest-ceo-div-container-main'>
                <div className='BackedByBest-ceo-div-container'>
                     <div className='BackedByBest-ceo-div-container-holder'>
                        <img src={utsav} alt=''/>
                        <p className='BackedByBest-ceo-div-big-para'>Utsav Somani</p>
                        <p className='BackedByBest-ceo-div-small-para'>Ex-partner, AngelList India</p>

                    </div>
                     <div className='BackedByBest-ceo-div-container-holder'>
                        <img src={aditya} alt=''/>
                        <p className='BackedByBest-ceo-div-big-para'>Aditya Nagarsheth</p>
                        <p className='BackedByBest-ceo-div-small-para'>Partner, Perpetual Value Partners</p>

                    </div>
                     <div className='BackedByBest-ceo-div-container-holder'>
                        <img src={gokul} alt=''/>
                        <p className='BackedByBest-ceo-div-big-para'>Gokul Rajaram</p>
                        <p className='BackedByBest-ceo-div-small-para'>Ex-board director, Coinbase | Ex-Google</p>

                    </div>
                     <div className='BackedByBest-ceo-div-container-holder'>
                        <img src={sajid} alt=''/>
                        <p className='BackedByBest-ceo-div-big-para'>Sajid Rehman</p>
                        <p className='BackedByBest-ceo-div-small-para'>Managing Partner, My Asia VC</p>

                    </div>
                     <div className='BackedByBest-ceo-div-container-holder'>
                        <img src={arjun} alt=''/>
                        <p className='BackedByBest-ceo-div-big-para'>Arjun Sethi</p>
                        <p className='BackedByBest-ceo-div-small-para'>Cofounder, Tribe Capital</p>

                    </div>
                     <div className='BackedByBest-ceo-div-container-holder'>
                        <img src={kunal} alt=''/>
                        <p className='BackedByBest-ceo-div-big-para'>Kunal Shah</p>
                        <p className='BackedByBest-ceo-div-small-para'>Founder, Cred</p>

                    </div>
                     <div className='BackedByBest-ceo-div-container-holder'>
                        <img src={sandeep} alt=''/>
                        <p className='BackedByBest-ceo-div-big-para'>Sandeep Nailawal</p>
                        <p className='BackedByBest-ceo-div-small-para'>Cofounder, Polygon Labs</p>

                    </div>
                     <div className='BackedByBest-ceo-div-container-holder'>
                        <img src={karan} alt=''/>
                        <p className='BackedByBest-ceo-div-big-para'>Karn Vivek Nagpal</p>
                        <p className='BackedByBest-ceo-div-small-para'>Investor at CoinDCX, Dealshare, Oye Rickshaw!</p>

                    </div>
                </div>
            </div>
    </div>
  )
}

export default BackedByBest