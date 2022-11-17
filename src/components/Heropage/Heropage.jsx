import React from 'react'
import './Heropage.css'
import logo from "../../assets/images/logo.png"
import line from "../../assets/images/Line.png"

const Heropage = () => {
  return (
    <div className='hero-container'>
        <div className='logo-menu'>
        <div className='logo'>
            <img src={logo} alt="Company logo" />
        </div>
        <div className='menu-list'>
            <ul>
                <li>Licence</li>
                <li>About us</li>
                <li>How to start</li>
                <button>Join us</button>
            </ul>
        </div>
        </div>
        <div className='line'>
        <img src={line} alt="" srcset="" />
        </div>
        <h2 className='hero-text'>The World’s Fastest Growing Crypto Community</h2>
        <p>A highly-curated platform for creating, collecting and trading unique<br/> NFTs. Trade with confidence on the world’s fastest and most secure crypto <br/>exchange</p>
    </div>
  )
}

export default Heropage