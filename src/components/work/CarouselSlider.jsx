import React, { useState } from 'react'
import './CarouselSlider.css'
import { motion } from 'framer-motion'
import { useHistory } from 'react-router-dom'

import { FaBeer } from 'react-icons/fa'

import { projectsData } from '../data/projectsData'

const transition = { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }

const swipeConfidenceThreshold = 5000
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity
}

const CarouselSlider = ({ location }) => {
   
    const history = useHistory()
    const from = history.location.state.from || null

    const [position, setPosition] = useState(from ? from : 0)

    const paginate = (newDirection) => {
        setPosition(position + newDirection)
    }

   console.log(from)


    const handleClick = (selectedWork) => history.push(`/work/${selectedWork}`)

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
                                    left: `${(index - position) * 70 - 30}vw`
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
                                onClick={() => handleClick(project.title)}


                                // transition={transition}

                                exit={index === position ? '' : { opacity: 0 }}
                            >
                                <img src={project.img} alt='d' />

                                <div className='project-title'>
                                    <h1>KALAS</h1>

                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default CarouselSlider
