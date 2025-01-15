import React, { useRef, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from './Slider'
import Slider from "react-slick";
import Rating from '@mui/material/Rating';
import { AiOutlineFullscreen } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import banner2 from '../../asets/images/banner2.jpg'
import Homecat from '../../components/Homecat/Homecat';
import Productinfo from '../../components/Productinfo/Productinfo';


const Homepage = () => {
    const sliderRef = useRef(null);
    const productslideroptions = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,

    };
    // const [show, setShow] = useState(false);

    // // Handlers to toggle the modal
    // const viewproductdetails = (id) => setShow(true);
    // const closeproductdetails = (id) => setShow(false);
    const [show, setShow] = useState(false); // State to control modal visibility

    const viewproductdetails = () => {
        setShow(true); // Set show to true to open the modal
    };

    const closeProductDetails = () => {
        setShow(false); // Set show to false to close the modal
    };

    return (
        <div>
            <Banner />
            <Homecat />

            {/* Modal with Productinfo */}
            {show && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <Productinfo closeProductDetails={closeProductDetails} />

                    </div>
                </div>
            )}
            <div className="products m-3 ">
                <div className="row ">
                    <div className="col-md-3" style={{ position: 'relative' }}>
                        <img
                            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg"
                            alt=""
                            className="img-fluid"
                            style={{ position: 'sticky', top: '10px' }}
                        />
                    </div>

                    <div className="col-md-9 ">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h2>Best Sellers</h2>
                                <p>Do not miss the current offers until the end of March.</p>
                            </div>
                            <div>
                                <button type="button" className="btn btn-outline-secondary">
                                    View all<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                        <path d="M20.0001 11.9998L4.00012 11.9998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg></button>
                            </div>
                        </div>

                        <div className="product_row">
                            <Slider {...productslideroptions} ref={sliderRef}>
                                <div className="item b-5 ">

                                    <span class="badge text-bg-primary bg-blue p-2 ml-2 mt-2">20%</span>

                                    <img
                                        src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg'
                                        alt="Product Image"
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div className="action">
                                        <button><AiOutlineFullscreen onClick={() => viewproductdetails()} /></button>
                                        <button><FaRegHeart /></button>
                                    </div>

                                    <div className="info ml-2">
                                        <h4>All Natural Italian-Style Chicken Meatballs</h4>
                                        <p>In Stock</p>
                                        <Rating name="read-only" value={4} readOnly />
                                        <div className="d-flex">
                                            <div className="oldprice">$20.00</div>
                                            <div className="newprice text-danger">$14.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item b-5 ">

                                    <span class="badge text-bg-primary bg-blue p-2 ml-2 mt-2">20%</span>

                                    <img
                                        src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg'
                                        alt="Product Image"
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div className="action">
                                        <button><AiOutlineFullscreen /></button>
                                        <button><FaRegHeart /></button>
                                    </div>

                                    <div className="info ml-2 ">
                                        <h4>All Natural Italian-Style Chicken Meatballs</h4>
                                        <p>In Stock</p>
                                        <Rating name="read-only" value={4} readOnly />
                                        <div className="d-flex">
                                            <div className="oldprice">$20.00</div>
                                            <div className="newprice text-danger">$14.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item b-5 ">

                                    <span class="badge text-bg-primary bg-blue p-2 ml-2 mt-2">20%</span>

                                    <img
                                        src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg'
                                        alt="Product Image"
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div className="action">
                                        <button><AiOutlineFullscreen /></button>
                                        <button><FaRegHeart /></button>
                                    </div>

                                    <div className="info ml-2 ">
                                        <h4>All Natural Italian-Style Chicken Meatballs</h4>
                                        <p>In Stock</p>
                                        <Rating name="read-only" value={4} readOnly />
                                        <div className="d-flex">
                                            <div className="oldprice">$20.00</div>
                                            <div className="newprice text-danger">$14.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item b-5 ">

                                    <span class="badge text-bg-primary bg-blue p-2 ml-2 mt-2">20%</span>

                                    <img
                                        src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg'
                                        alt="Product Image"
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div className="action">
                                        <button><AiOutlineFullscreen /></button>
                                        <button><FaRegHeart /></button>
                                    </div>

                                    <div className="info ml-2">
                                        <h4>All Natural Italian-Style Chicken Meatballs</h4>
                                        <p>In Stock</p>
                                        <Rating name="read-only" value={4} readOnly />
                                        <div className="d-flex">
                                            <div className="oldprice">$20.00</div>
                                            <div className="newprice text-danger">$14.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item b-5 ">

                                    <span class="badge text-bg-primary bg-blue p-2 ml-2 mt-2">20%</span>

                                    <img
                                        src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg'
                                        alt="Product Image"
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div className="action">
                                        <button><AiOutlineFullscreen /></button>
                                        <button><FaRegHeart /></button>
                                    </div>

                                    <div className="info ml-2 ">
                                        <h4>All Natural Italian-Style Chicken Meatballs</h4>
                                        <p>In Stock</p>
                                        <Rating name="read-only" value={4} readOnly />
                                        <div className="d-flex">
                                            <div className="oldprice">$20.00</div>
                                            <div className="newprice text-danger">$14.00</div>
                                        </div>
                                    </div>
                                </div>



                                {/* Add more slides as needed */}
                            </Slider>


                        </div>



                    </div>




                </div>
            </div>

            <div className="products m-3 ">
                <div className="row">
                    <div className="col-md-3 " >
                        <img src={banner2} alt='' className='img-fluid ' />
                    </div>
                    <div className="col-md-9 ">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h3>New Products</h3>
                                <p>New products with updated stocks.</p>
                            </div>
                            <div>
                                <button type="button" className="btn btn-outline-secondary">
                                    View all<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                        <path d="M20.0001 11.9998L4.00012 11.9998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg></button>
                            </div>
                        </div>

                        <div className="product_row">
                            <Slider {...productslideroptions} ref={sliderRef}>
                                <div className="item b-5 ">

                                    <span class="badge text-bg-primary bg-blue p-2 ml-2 mt-2">20%</span>

                                    <img
                                        src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg'
                                        alt="Product Image"
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div className="action">
                                        <button><AiOutlineFullscreen /></button>
                                        <button><FaRegHeart /></button>
                                    </div>

                                    <div className="info ml-2">
                                        <h4>All Natural Italian-Style Chicken Meatballs</h4>
                                        <p>In Stock</p>
                                        <Rating name="read-only" value={4} readOnly />
                                        <div className="d-flex">
                                            <div className="oldprice">$20.00</div>
                                            <div className="newprice text-danger">$14.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item b-5 ">

                                    <span class="badge text-bg-primary bg-blue p-2 ml-2 mt-2">20%</span>

                                    <img
                                        src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg'
                                        alt="Product Image"
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div className="action">
                                        <button><AiOutlineFullscreen /></button>
                                        <button><FaRegHeart /></button>
                                    </div>

                                    <div className="info ml-2 ">
                                        <h4>All Natural Italian-Style Chicken Meatballs</h4>
                                        <p>In Stock</p>
                                        <Rating name="read-only" value={4} readOnly />
                                        <div className="d-flex">
                                            <div className="oldprice">$20.00</div>
                                            <div className="newprice text-danger">$14.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item b-5 ">

                                    <span class="badge text-bg-primary bg-blue p-2 ml-2 mt-2">20%</span>

                                    <img
                                        src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg'
                                        alt="Product Image"
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div className="action">
                                        <button><AiOutlineFullscreen /></button>
                                        <button><FaRegHeart /></button>
                                    </div>

                                    <div className="info ml-2 ">
                                        <h4>All Natural Italian-Style Chicken Meatballs</h4>
                                        <p>In Stock</p>
                                        <Rating name="read-only" value={4} readOnly />
                                        <div className="d-flex">
                                            <div className="oldprice">$20.00</div>
                                            <div className="newprice text-danger">$14.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item b-5 ">

                                    <span class="badge text-bg-primary bg-blue p-2 ml-2 mt-2">20%</span>

                                    <img
                                        src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg'
                                        alt="Product Image"
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div className="action">
                                        <button><AiOutlineFullscreen /></button>
                                        <button><FaRegHeart /></button>
                                    </div>

                                    <div className="info ml-2">
                                        <h4>All Natural Italian-Style Chicken Meatballs</h4>
                                        <p>In Stock</p>
                                        <Rating name="read-only" value={4} readOnly />
                                        <div className="d-flex">
                                            <div className="oldprice">$20.00</div>
                                            <div className="newprice text-danger">$14.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item b-5 ">

                                    <span class="badge text-bg-primary bg-blue p-2 ml-2 mt-2">20%</span>

                                    <img
                                        src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg'
                                        alt="Product Image"
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div className="action">
                                        <button><AiOutlineFullscreen /></button>
                                        <button><FaRegHeart /></button>
                                    </div>

                                    <div className="info ml-2 ">
                                        <h4>All Natural Italian-Style Chicken Meatballs</h4>
                                        <p>In Stock</p>
                                        <Rating name="read-only" value={4} readOnly />
                                        <div className="d-flex">
                                            <div className="oldprice">$20.00</div>
                                            <div className="newprice text-danger">$14.00</div>
                                        </div>
                                    </div>
                                </div>



                                {/* Add more slides as needed */}
                            </Slider>
                        </div>




                    </div>




                </div>
            </div>

        </div>
    )
}

export default Homepage
