import React, { useEffect, useState } from 'react'
import './CarouselSlider.css'
import { motion } from 'framer-motion'
import { useHistory } from 'react-router-dom'

import { FaBeer } from 'react-icons/fa'

import { projectsData } from '../data/projectsData'

const transition = { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }
const transitionTitle = { duration: 2, ease: [0.43, 0.13, 0.23, 0.96] }

const swipeConfidenceThreshold = 5000
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity
}

const CarouselSlider = (props) => {

    const history = useHistory()
    const { state } = history.location

    // history.location.state.from ? || {}

    let { setCameraPos } = props

    const [position, setPosition] = useState(!state ? 0 : state.from)


    const paginate = (newDirection) => {
        setPosition(position + newDirection)
    }

    // useEffect(() => {
    //     setCameraPos({
    // 		x: 1,
    // 		y: 2,
    // 		z: 3,
    // 		rx: 0,
    // 		ry: 0,
    // 	})
    // })

    const handleClick = (selectedWork) => {
        history.push(`/work/${selectedWork}`)
        setCameraPos({
            x: 0,
            y: 0,
            z: 3,
            rx: 0,
            ry: 0,
        })
    }

    return (
        <>
            <div className='work'>
                <div className='CarouselSlider'>
                    {projectsData.map((project, index) => {
                        return (
                            <motion.div
                                className='imageContainer'
                                key={index}
                                initial={{
                                    opacity: 0,
                                    scale: 1.2,
                                    rigth: 0,
                                    left: `${(index - position) * 70 - 30}vw`,
                                    transform: 'translateX(0)'

                                }}
                                animate={{

                                    opacity: 1,
                                    left: `${(index - position) * 70 - 30}vw`,
                                    scale: index === position ? 1 : 0.9,
                                }}
                                drag='x'
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.15}
                                dragTransition={{
                                    min: 0,
                                    max: 200,
                                    bounceStiffness: 500,
                                }}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipe = swipePower(
                                        offset.x,
                                        velocity.x
                                    )
                                    if (swipe < -swipeConfidenceThreshold) {
                                        paginate(1)
                                    } else if (
                                        swipe > swipeConfidenceThreshold
                                    ) {
                                        paginate(-1)
                                    }
                                    // console.log(offset, velocity);
                                }}

                                // transition={transition}
                                exit={index === position ? '' : { transform: 'translateX(-50%)', opacity: 0 }}
                            >
                                <img src={project.img} alt='d' />

                                <motion.div className='project-title'
                                    onTap={() => handleClick(project.title)}
                                >

                                    <motion.h1
                                        intial={{
                                            scale: 1,
                                        }}
                                        exit={index === position ? { scale: 1.2, opacity: 0 } : { opacity: 0 }}
                                        transition={transition}
                                    >{project.title}</motion.h1>
                                </motion.div>
                                <p style={{ color: 'rgba(255,255,255,0.2)', fontWeight: 100, }}>AUDIOVISUAL</p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default CarouselSlider
