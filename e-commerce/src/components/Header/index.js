
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../asets/images/logo.jpg'; // Corrected typo in the path (asets -> assets)
import Dailogbox from './dailogbox';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Header = () => {
  return (
    <>
      <div className="header bg-offwhite">
        <div className="topstrip container-xxl">
          <p className="mb-2 py-2 text-center bg-blue text-white">
            Welcome to <b>Famazone</b>, we hope you like our services!
          </p>
        </div>

        <div className="header1 container py-2 px-0">
          <div className="d-flex align-items-center justify-content-between ">
            {/* Logo */}
            <div className="logo d-none d-md-block">
              <Link to="/">
                <img src={Logo} style={{ maxWidth: '100px', height: 'auto' }} className="img-fluid" alt="Famazone Logo" />
              </Link>
            </div>

            {/* Dialog Box */}
            <div className=" mx-3 ml-0.5 ">
              <Dailogbox />
            </div>

            {/* Search Bar */}
            <div className="flex-grow-1 ml-2 ">
              <form className="d-flex justify-content-center">
                <input
                  className="form-control me-2 mr-4"
                  type="search"
                  placeholder="Search for products"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>

            {/* User Icon */}
            <div className="mx-2">
              <Link to="/profile">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
                  <circle cx="12" cy="8" r="4" stroke="black" strokeWidth="2" fill="none" />
                  <path d="M4 20c0-4 3.2-6 8-6s8 2 8 6" stroke="black" strokeWidth="2" fill="none" />
                </svg>
              </Link>
            </div>

            {/* Cart Icon */}
            <div className="mx-2">
              <Link to="/Cart">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="none">
                  <path
                    d="M8 16L16.7201 15.2733C19.4486 15.046 20.0611 14.45 20.3635 11.7289L21 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M6 6H6.5M22 6H19.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M9.5 6H16.5M13 9.5V2.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <circle cx="6" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="17" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M8 20L15 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path
                    d="M2 2H2.966C3.91068 2 4.73414 2.62459 4.96326 3.51493L7.93852 15.0765C8.08887 15.6608 7.9602 16.2797 7.58824 16.7616L6.63213 18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </>
  );
};

export default Header;

