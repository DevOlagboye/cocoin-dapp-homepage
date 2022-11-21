import React from 'react'
import "./About.css"
import bitcoinLogo from "../../assets/images/bitcoin-logo.png"
const About = () => {
  return (
    <div>
        <div className='about-container'>
            <div className='about-text'>
                <h3>Our goal and mission</h3>
                <p>Whether you’re an experienced trader or just getting started, Cucoin has all the tools you need.<br/> Execute your trading strategies with the professional level crypto trading platform.</p>
            </div>
            <div className='about-details'>
                <div className='about-image'>
                    <img src={bitcoinLogo} alt="About"/>
                </div>
                <div className='about-info'>
                    <div className='about-paletee'>
                        <p>An accessible way to buy, sell, and store non-fungible <br/> tokens (NFTs) – digital art on the blockchain. You can <br/> expect the same industry-leading security technology.</p>
                    </div>
                    <div className='about-paletee'>
                        <p>The project aims to build increasing connectivity to <br/>Ethereum and the wider blockchain ecosystem. AVAX, <br/>Avalanche’s native token, is the network’s unit of your <br/>persocnal account.</p>
                    </div>
                    <div className='about-paletee'>
                        <p>Thigh performance tools for active traders and <br/>industry-leading security from day one.</p>
                    </div>
                    <button>Join our community</button>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default About