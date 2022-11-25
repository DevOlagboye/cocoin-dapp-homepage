import React, {useState} from 'react'
import './Heropage.css'
import {Drawer} from 'antd'
import {FaBars, FaTimes} from "react-icons/fa"
import logo from "../../assets/images/logo.png"
import line from "../../assets/images/Line.png"

const Heropage = () => {
    const [open, setOpen] = useState(false)
    const [size, setSize] = useState();
    const showSideBar = () => {
        setSize('200px')
        setOpen(true)
    }
    const onClose = () =>{
        setOpen(false)
    }
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
        <FaBars onClick={showSideBar} className='menu-bar'/>
        <Drawer placement='right' open={open} className='menu-drawer' size={size} onClose={onClose}>
        <FaTimes onClick={onClose} className='cancelIcon'/>
        <ul>
                <li>Licence</li>
                <li>About us</li>
                <li>How to start</li>
                <button>Join us</button>
            </ul>
        </Drawer>
        </div>
        <div className='line'>
        <img src={line} alt="" />
        </div>
        <h2 className='hero-text'>The World’s Fastest Growing Crypto Community</h2>
        <p>A highly-curated platform for creating, collecting and trading unique<br/> NFTs. Trade with confidence on the world’s fastest and most secure <br/> crypto exchange</p>
        <div>
            <form className='hero-form'>
            <input type="email" placeholder="Your Email Address" className='hero-input'/>
            <button className='hero-button'>Join our Community</button>
            </form>
            
        </div>
    </div>
  )
}

export default Heropage