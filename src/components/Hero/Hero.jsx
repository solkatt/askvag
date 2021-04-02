import React from 'react'
import ThreeScene from '../three/ThreeScene'
import ThreeScene2 from '../three2/ThreeScene2'
import ThreeScene3 from '../three3/ThreeScene3'

import './Hero.css'

export default function Hero() {
	return (
		<div className='hero-container'>
			<div className='askvag'>{/* <h1>ÅSKVÅG</h1> */}</div>
			<ThreeScene3 className='three-scene' />
		</div>
	)
}
