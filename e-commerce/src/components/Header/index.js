import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../asets/images/logo.jpg'
const header = () => {
  return (
    <>
      <div className="header">
        <div className="topstrip">
          <div className="container-xxl"><p className="mb-0 mt-3 text-center bg-blue text-white ">Welcome to <b>Famazone</b>, we hope u like our services!</p></div>
        </div>
        <div className="header1">
          <div className="row">
            <div className="Logo container-sm-2"> 
              <Link to={'/'}><img src={Logo} alt='Famazone' /></Link>
            </div>
            div.container-sm-9
          </div>
        </div>
      </div>
    </>
  )
}

export default header;
