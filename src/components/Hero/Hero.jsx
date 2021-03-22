import React from 'react'
import ThreeScene from '../three/ThreeScene'
import ThreeScene2 from '../three2/ThreeScene2'

import './Hero.css'

export default function Hero() {

    return (
<div className="hero-container">
<div className='askvag'>
    {/* <h1>ÅSKVÅG</h1> */}
</div>
<ThreeScene2 className="three-scene" />

</div>

    )
}