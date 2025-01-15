import React from 'react'
import Button from '@mui/material/Button';
import { IoIosArrowDown } from "react-icons/io";
import { IoReorderThreeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'
import Homepage from './Homepage';
const home = () => {
  return (

    <>
      <nav className='border-bottom border-5 p-1 bg-offwhite '>
        <div className="container ">
          <div className="NAVI   row d-flex align-items-center justify-content-space-between ">
            <div className=' col-sm-2 categories bg-green'>
              <Button className='navp1 text-white px-0 py-2'>
                <div className="threeLine">
                  <IoReorderThreeOutline />
                </div>
                <span>All categories</span>
                <div className="arrowdown1">
                  < IoIosArrowDown />
                </div>
              </Button>
            </div>
            <div className="container rest col-sm-10 ">
              <Link><Button className='options text-gray z-100 ' >
                <span className='px-1 d-flex py-1 text-gray ' >Home
                  <div className="arrowdown1">
                    < IoIosArrowDown />
                  </div></span>
                <div className="subdiv shadow">
                  <Link><Button  ><span className="text-gray">clothing</span></Button></Link>
                  <Link><Button  ><span className="text-gray">shades</span></Button></Link>
                  <Link><Button  ><span className="text-gray">watches</span></Button></Link>
                  <Link><Button  ><span className="text-gray">footware</span></Button></Link>
                  <Link><Button  ><span className="text-gray">breclets</span></Button></Link>
                </div>
              </Button></Link>
              <Link><Button className='options z-100 ' >
                <span className='px-2 py-1 text-gray d-flex '>MEN
                  <div className="arrowdown1">
                    < IoIosArrowDown />
                  </div></span>
                <div className="subdiv shadow">
                  <Link><Button ><span className="text-gray">clothing</span></Button></Link>
                  <Link><Button ><span className="text-gray">shades</span></Button></Link>
                  <Link><Button ><span className="text-gray">watches</span></Button></Link>
                  <Link><Button ><span className="text-gray">footware</span></Button></Link>
                  <Link><Button ><span className="text-gray">breclets</span></Button></Link>

                </div>
              </Button></Link>

              <Link>
                <Button className='options z-100' >
                  <span className='px-2 py-1 text-gray'>women</span>
                  <div className="subdiv shadow">
                    <Link><Button ><span className="text-gray">clothing</span></Button></Link>
                    <Link><Button ><span className="text-gray">shades</span></Button></Link>
                    <Link><Button ><span className="text-gray">watches</span></Button></Link>
                    <Link><Button ><span className="text-gray">footware</span></Button></Link>
                    <Link><Button ><span className="text-gray">breclets</span></Button></Link>
                  </div>
                </Button>
              </Link>

              <Link>
                <Button className='options z-100' >
                  <span className='px-2 py-1 text-gray' >beauty</span>
                  <div className="subdiv shadow">
                    <Link><Button ><span className="text-gray">clothing</span></Button></Link>
                    <Link><Button ><span className="text-gray">shades</span></Button></Link>
                    <Link><Button ><span className="text-gray">watches</span></Button></Link>
                    <Link><Button ><span className="text-gray">footware</span></Button></Link>
                    <Link><Button ><span className="text-gray">breclets</span></Button></Link>
                  </div>
                </Button>
              </Link>


              <Link>
                <Button className='options z-100' >
                  <span className='px-2 py-1 text-gray'>watches</span>
                  <div className="subdiv shadow">
                    <Link><Button ><span className="text-gray">clothing</span></Button></Link>
                    <Link><Button ><span className="text-gray">shades</span></Button></Link>
                    <Link><Button ><span className="text-gray">watches</span></Button></Link>
                    <Link><Button ><span className="text-gray">footware</span></Button></Link>
                    <Link><Button ><span className="text-gray">breclets</span></Button></Link>
                  </div>
                </Button>
              </Link>



              <Link>
                <Button className='options z-100' >
                  <span className='px-2 py-1 text-gray'>kids</span>
                  <div className="subdiv shadow">
                    <Link><Button ><span className="text-gray">clothing</span></Button></Link>
                    <Link><Button ><span className="text-gray">shades</span></Button></Link>
                    <Link><Button ><span className="text-gray">watches</span></Button></Link>
                    <Link><Button ><span className="text-gray">footware</span></Button></Link>
                    <Link><Button ><span className="text-gray">breclets</span></Button></Link>
                  </div>
                </Button>
              </Link>



              <Link>
                <Button className='options z-100' >
                  <span className='px-2 py-1 text-gray'>gifts</span>
                  <div className="subdiv shadow">
                    <Link><Button ><span className="text-gray">clothing</span></Button></Link>
                    <Link><Button ><span className="text-gray">shades</span></Button></Link>
                    <Link><Button ><span className="text-gray">watches</span></Button></Link>
                    <Link><Button ><span className="text-gray">footware</span></Button></Link>
                    <Link><Button ><span className="text-gray">breclets</span></Button></Link>

                  </div>
                </Button>
              </Link>


              <Link>
                <Button className='options z-100' >
                  <span className='px-2 py-1 text-gray'>blog</span>
                  <div className="subdiv shadow">
                    <Link><Button ><span className="text-gray">clothing</span></Button></Link>
                    <Link><Button ><span className="text-gray">shades</span></Button></Link>
                    <Link><Button ><span className="text-gray">watches</span></Button></Link>
                    <Link><Button ><span className="text-gray">footware</span></Button></Link>
                    <Link><Button ><span className="text-gray">breclets</span></Button></Link>
                  </div>
                </Button>
              </Link>


              <Link>
                <Button className='options z-100' >
                  <span className='px-2 py-1 text-gray' >contact</span>
                  <div className="subdiv shadow">
                    <Link><Button ><span className="text-gray">clothing</span></Button></Link>
                    <Link><Button ><span className="text-gray">shades</span></Button></Link>
                    <Link><Button ><span className="text-gray">watches</span></Button></Link>
                    <Link><Button ><span className="text-gray">footware</span></Button></Link>
                    <Link><Button ><span className="text-gray">breclets</span></Button></Link>
                  </div>
                </Button>
              </Link>
            </div>


          </div>
        </div>

      </nav>
      {/*add homepae*/}
      <Homepage />
    </>

  )
}

export default home;