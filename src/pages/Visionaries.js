import React from 'react'
import "../Css/Visionaries.css"
import { AiFillLinkedin } from "react-icons/ai"
import deepank from "../images/deepak_Vasman.webp"
import first from "../images/FirstVisobaries.webp"
import bhpender from "../images/bhupenderbhulle.webp"
import vision from "../images/Densitiens.png"
const Visionaries = () => {
    return (
        <div className='Visionaries-main-div'>
            <div className='main-width-remover'>
            <div className='Visionaries-main-div-container'>
                <div className="Visionaries-main-div-para-holder">
                    <p className="Visionaries-main-div-para">Meet the <span className="Visionaries-main-div-span">Visionaries</span></p>
                    <p className="Visionaries-main-div-small-para">behind Density.</p>
                </div>
            </div>

            <div className='Visionaries-second-main-div'>
                <div className='Visionaries-second-main-three-div-holder'>

                    <img src={vision} alt='vision'/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Visionaries