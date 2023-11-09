import React from 'react'
import "../Css/Visionaries.css"
import { AiFillLinkedin } from "react-icons/ai"
import deepank from "../images/deepak_Vasman.webp"
import first from "../images/FirstVisobaries.webp"
import bhpender from "../images/bhupenderbhulle.webp"
const Visionaries = () => {
    return (
        <div className='Visionaries-main-div'>
            <div className='Visionaries-main-div-container'>
                <div className="Visionaries-main-div-para-holder">
                    <p className="Visionaries-main-div-para">Meet the <span className="Visionaries-main-div-span">Visionaries</span></p>
                    <p className="Visionaries-main-div-small-para">behind Density.</p>
                </div>
            </div>

            <div className='Visionaries-second-main-div'>
                <div className='Visionaries-second-main-three-div-holder'>

                    <div className='Visionaries-div-background-image-holder'>
                        <div className='Visonaries-div-span-para-holder'>
                            <p className='Visionaries-div-big-para'>Aakash Neeraj Mittal</p>
                            <p className='Visionaries-div-para'>CEO Density</p>
                            <span className='Visonaries-div-span-image-linkedin'><AiFillLinkedin /></span>
                        </div>
                        <div>

                            <img src={first} alt='' />
                        </div>
                    </div>
                    <div className='Visionaries-div-background-image-holder'>

                        <div className='Visonaries-div-span-para-holder'>
                            <p className='Visionaries-div-big-para'>Bhupendra Bhulle</p>
                            <p className='Visionaries-div-para'>CTO Density</p>
                            <span className='Visonaries-div-span-image-linkedin'><AiFillLinkedin /></span>
                        </div>

                        <div>

                            <img className='shortimage' src={bhpender} alt='' />
                        </div>
                    </div>
                    <div className='Visionaries-div-background-image-holder'>

                        <div className='Visonaries-div-span-para-holder'>
                            <p className='Visionaries-div-big-para'>Deepak vasman</p>
                            <p className='Visionaries-div-para'>CBO Density</p>
                            <span className='Visonaries-div-span-image-linkedin'><AiFillLinkedin /></span>
                        </div>

                        <div>

                            <img className='shortimage-2' src={deepank} alt='' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Visionaries