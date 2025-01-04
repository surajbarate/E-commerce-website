import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../asets/images/logo.jpg'

const header = () => {
  return (
    <>
      <div className="header bg-offwhite ">
        <div className="topstrip">
          <div className="container-xxl"><p className="mb-2 py-2  text-center bg-blue text-white ">Welcome to <b>Famazone</b>, we hope u like our services!</p></div>
        </div>
        <div className="header1 container py-2">
          <div className="row">
            <div className="Logo container-sm-2 ml-2">
              <img src={Logo} width="120" height="60" alt="" />
            </div>
            <div class="dropdown ml-5 mt-2">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Your location
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">India</a>
                <a class="dropdown-item" href="#">Japan</a>
                <a class="dropdown-item" href="#">UK</a>
              </div>
            </div>
            {/* Search Bar */}
            <div className=" mx-5 mt-2 ">
              <form className="d-flex ">
                <input
                  className="form-control me-2 "
                  type="search"
                  placeholder="Search for products"
                  aria-label="Search"
                  style={{ width: '350px' }}
                />
                <button className="btn btn-outline-success mx-3" type="submit">
                  Search
                </button>
              </form>
            </div>
            <div className="usericon">
              <div className="col-md-1 m-2 mt-3">
                {/* link to profile page */}
                <Link to="/profile">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
                    <circle cx="12" cy="8" r="4" stroke="black" stroke-width="2" fill="none" />
                    <path d="M4 20c0-4 3.2-6 8-6s8 2 8 6" stroke="black" stroke-width="2" fill="none" />
                  </svg>

                </Link>
              </div>


            </div>
            <div className="cart m-2 mt-3">
              <Link to="/cart">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#000000" fill="none">
                  <path d="M8 16L16.7201 15.2733C19.4486 15.046 20.0611 14.45 20.3635 11.7289L21 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M6 6H6.5M22 6H19.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M9.5 6H16.5M13 9.5V2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                  <circle cx="6" cy="20" r="2" stroke="currentColor" stroke-width="1.5" />
                  <circle cx="17" cy="20" r="2" stroke="currentColor" stroke-width="1.5" />
                  <path d="M8 20L15 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M2 2H2.966C3.91068 2 4.73414 2.62459 4.96326 3.51493L7.93852 15.0765C8.08887 15.6608 7.9602 16.2797 7.58824 16.7616L6.63213 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                </svg>
              </Link>


            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default header;