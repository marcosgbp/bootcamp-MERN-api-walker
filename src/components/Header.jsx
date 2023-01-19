import React from 'react'
import logo from '../img/Star_Wars_Logo.svg'
const Header = () => {
  return (
    <div className='d-flex justify-content-center m-3'>
        <div className="flex-shrink-0 border text-center">
            <img src={logo} alt="" style={{width:100+"px"}}/>
        </div>
        <div className="flex-grow-1 ms-3 border text-center">
            <h1>Luke APIwalker</h1>
        </div>
    </div>
  )
}

export default Header