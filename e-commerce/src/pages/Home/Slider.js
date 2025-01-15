
import React, { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css'

const Sliderpage = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: true,

    };
    return (
        <div className="slider-container container">
            <Slider {...settings} ref={sliderRef}>
                <div className='item'>
                    <img
                        src='https://cmsimages.shoppersstop.com/eoss_main_banner_web_56324b74ba/eoss_main_banner_web_56324b74ba.png'
                        className='w-100'
                        alt='Banner 1'
                        style={{ height: "480px", objectFit: "cover" }}
                    />
                </div>
                <div className='item'>
                    <img
                        src='https://cmsimages.shoppersstop.com/eoss_main_banner_web_56324b74ba/eoss_main_banner_web_56324b74ba.png'
                        className='w-100'
                        alt='Banner 2'
                        style={{ height: "520px", objectFit: "cover" }}
                    />
                </div>
                <div className='item'>
                    <img
                        src='https://cmsimages.shoppersstop.com/eoss_main_banner_web_56324b74ba/eoss_main_banner_web_56324b74ba.png'
                        className='w-100'
                        alt='Banner 3'
                        style={{ height: "520px", objectFit: "cover" }}
                    />
                </div>
                <div className='item'>
                    <img
                        src='https://cmsimages.shoppersstop.com/eoss_main_banner_web_56324b74ba/eoss_main_banner_web_56324b74ba.png'
                        className='w-100'
                        alt='Banner 4'
                        style={{ height: "520px", objectFit: "cover" }}
                    />
                </div>
            </Slider>
        </div>
    );
};

export default Sliderpage;