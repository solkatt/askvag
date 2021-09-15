import { motion } from 'framer-motion'
import React from 'react'
import ThreeScene from '../three/ThreeScene'
import ThreeScene2 from '../three2/ThreeScene2'
import ThreeScene3 from '../three3/ThreeScene3'
import ThreeScene4 from '../three4/ThreeScene4'

import './Hero.css'
import CarouselSlider from '../work/CarouselSlider'


export default function Hero(props) {
	let {cameraPos, color, morphState} = props

	return (
		<div className='hero-container'>
			{/* <div className='askvag'><h1>ÅSKVÅG</h1></div> */}
			<motion.div
			initial='initial'
			exit={{opacity: 0}}

			>
			<ThreeScene4 className='three-scene' cameraPos={cameraPos} color={color} morphState={morphState}/>

			</motion.div>

			{/* <Hover /> */}
		</div>
	)
}
