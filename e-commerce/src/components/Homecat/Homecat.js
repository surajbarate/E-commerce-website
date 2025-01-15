import React from 'react'
import Slider from "react-slick";
import { useRef } from 'react';

const Homecat = () => {
    const sliderRef = useRef(null);
    const productcategory = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 2,

    };
    return (
        <div className='mb-5'>
            <div className="head m-3">
                <h3>Featured Categories</h3>
            </div>
            <Slider {...productcategory} ref={sliderRef}>
                <div className="container m-3">
                    <div className="item">
                        <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/e4a9856b-dc3f-4927-a5a1-8edfe8d7dc38/hp_bev_m_health-drinks-&-supplements_480_250923.jpg?tr=w-480,q-80' />
                    </div>
                </div>
                <div className="container m-3">
                    <div className="item">
                        <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/e4a9856b-dc3f-4927-a5a1-8edfe8d7dc38/hp_bev_m_health-drinks-&-supplements_480_250923.jpg?tr=w-480,q-80' />
                    </div>
                </div>
                <div className="container m-3">
                    <div className="item">
                        <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/e4a9856b-dc3f-4927-a5a1-8edfe8d7dc38/hp_bev_m_health-drinks-&-supplements_480_250923.jpg?tr=w-480,q-80' />
                    </div>
                </div>
                <div className="container m-3">
                    <div className="item">
                        <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/e4a9856b-dc3f-4927-a5a1-8edfe8d7dc38/hp_bev_m_health-drinks-&-supplements_480_250923.jpg?tr=w-480,q-80' />
                    </div>
                </div>
                <div className="container m-3">
                    <div className="item">
                        <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/e4a9856b-dc3f-4927-a5a1-8edfe8d7dc38/hp_bev_m_health-drinks-&-supplements_480_250923.jpg?tr=w-480,q-80' />
                    </div>
                </div>
                <div className="container m-3">
                    <div className="item">
                        <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/e4a9856b-dc3f-4927-a5a1-8edfe8d7dc38/hp_bev_m_health-drinks-&-supplements_480_250923.jpg?tr=w-480,q-80' />
                    </div>
                </div>
                <div className="container m-3">
                    <div className="item">
                        <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/e4a9856b-dc3f-4927-a5a1-8edfe8d7dc38/hp_bev_m_health-drinks-&-supplements_480_250923.jpg?tr=w-480,q-80' />
                    </div>
                </div>
                <div className="container m-3">
                    <div className="item">
                        <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/e4a9856b-dc3f-4927-a5a1-8edfe8d7dc38/hp_bev_m_health-drinks-&-supplements_480_250923.jpg?tr=w-480,q-80' />
                    </div>
                </div>
                <div className="container m-3">
                    <div className="item">
                        <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/e4a9856b-dc3f-4927-a5a1-8edfe8d7dc38/hp_bev_m_health-drinks-&-supplements_480_250923.jpg?tr=w-480,q-80' />
                    </div>
                </div>
                <div className="container m-3">
                    <div className="item">
                        <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/e4a9856b-dc3f-4927-a5a1-8edfe8d7dc38/hp_bev_m_health-drinks-&-supplements_480_250923.jpg?tr=w-480,q-80' />
                    </div>
                </div>
                <div className="container m-3">
                    <div className="item">
                        <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/e4a9856b-dc3f-4927-a5a1-8edfe8d7dc38/hp_bev_m_health-drinks-&-supplements_480_250923.jpg?tr=w-480,q-80' />
                    </div>
                </div>
            </Slider >
        </div>
    )
}

export default Homecat
