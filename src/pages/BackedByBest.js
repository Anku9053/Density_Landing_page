import React from 'react'
import "../Css/BackedByBest.css"
import Orios from "../images/Orios.webp"
import inflection from "../images/inflection.webp"
import seed from "../images/seed.webp"
import Pvp from "../images/pvp.webp"
import polygon from "../images/polygon_labss.webp"
import tribe_capital from "../images/tribe_capital.webp"
import rise from "../images/rise.webp"
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
                    <img src={rise} alt=''/>
                    
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

            <div>
                <div>
                    <div>
                        <img src='' alt=''/>

                    </div>
                    <div>
                        <img src='' alt=''/>

                    </div>
                    <div>
                        <img src='' alt=''/>

                    </div>
                    <div>
                        <img src='' alt=''/>

                    </div>
                    <div>
                        <img src='' alt=''/>

                    </div>
                    <div>
                        <img src='' alt=''/>

                    </div>
                    <div>
                        <img src='' alt=''/>

                    </div>
                    <div>
                        <img src='' alt=''/>

                    </div>
                </div>
            </div>
    </div>
  )
}

export default BackedByBest