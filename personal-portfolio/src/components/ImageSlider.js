import React, {useState} from 'react';
import { SliderData } from './SliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import colorSharp from "../assets/img/color-sharp.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

const ImageSlider = ({slides})  => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () =>{
        setCurrent(current === length -1 ? 0 : current+1)
    }

    const prevSlide = () =>{
        setCurrent(current === 0 ? length-1 : current-1)
    }

    console.log(current)

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }

    return (

    <section className="language" >
        <div className='lang-bx' id="language">
            <h1>Programming Languages</h1>
            <p> These are the few Programming Language that i have learnt over the time, and yet to add more! </p>
            <FaArrowAltCircleLeft className="left-arrow"  onClick={prevSlide}/>
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            {SliderData.map((slide, index)=>{
                return(
                    <div className={index === current ? 'slide active' : 'slide' } key={index}>

                    {index === current && (<img src={slide.image} alt="First slide" className="image" />)}


                    </div>               
                )
            })}
        </div>
        <img className="background-image-left-lang" src={colorSharp} />
        <img className="background-image-right-lang" src={colorSharp2} />
    </section>

    )
}

export default ImageSlider
