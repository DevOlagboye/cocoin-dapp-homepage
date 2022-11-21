import React from 'react'
import "./Direction.css"
import element1Image from "../../assets/images/element1.png"
import element2Image from "../../assets/images/element2.png"
import element3Image from "../../assets/images/element3.png"

const Direction = () => {
  return (
    <div className='direction-container'>
        <div className='direction-text'>
            <h3>Our directions and advantages</h3>
            <p>Integrate once and never worry about scaling again. We ensure composability between<br/> ecosystem projects by maintaining a single global state as the network scales.</p>
        </div>
        <div className='direction-elements'>
            <div className='direction-card'>
                <img src={element1Image} alt="Powerful for developers" srcset="" />
                <h5>Powerful for developers</h5>
                <p>Cucoin is a decentralized blockchain<br/> built to enable scalable, user-friendly<br/> apps for the world.</p>
                <a href="##">Learn more</a>
            </div>
        </div>
    </div>
  )
}

export default Direction