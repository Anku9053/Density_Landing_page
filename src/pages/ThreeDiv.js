import React from 'react'
import "../Css/ThreeDiv.css"
import coindcx from "../images/coindcx.webp"
import delta from "../images/delta.webp"
import densityblack from "../images/densityblackpng.png"
const ThreeDiv = () => {
    return (
        <div className='Three-div-first-main-div'>
            <div className='Three-Div-second-main-div'>
            <div className='Three-Div-Main-image-para-container'>
                <div className='three-div-image-container'>
                    <img src={coindcx} alt='three-div-first-image' />
                </div>

                <div className='three-div-para-container'>
                    <p>blabla</p>
                    <p>blabla</p>
                </div>

                <div className='three-div-para-container'>

                    <p>blabla</p>
                    <p>blabla</p>
                </div>

                <div className='three-div-para-container'>

                    <p>blabla</p>
                    <p>blabla</p>
                </div>

            </div>

            {/* 2 */}
            <div className='Three-Div-Main-image-para-container'>
            <div className='three-div-image-container'>
                    {/* <img src={densityblack} alt='three-div-first-image' /> */}
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


            {/* 3 */}

            <div className='Three-Div-Main-image-para-container'>
            <div className='three-div-image-container'>
                    <img src={delta} alt='three-div-first-image' />
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
    )
}

export default ThreeDiv