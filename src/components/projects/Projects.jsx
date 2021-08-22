import React, { useRef, useEffect } from 'react'

import './Projects.css'

import { useParams } from 'react-router-dom'

import { motion } from 'framer-motion'

import { projectsData } from '../data/projectsData'

import { HiChevronLeft } from 'react-icons/hi'

import { useHistory } from 'react-router-dom'


const transition = { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }





const Projects = () => {
    let { id } = useParams()

    const project = projectsData.find((project) => {
        return project.title === id
    })

    const history = useHistory()

    return (
        <>




            <motion.div
                initial='initial'
                animate={{
                    top: '-25vh',
                }}
                exit={{
                    opacity: 0,
                }}
                transition={transition}
                className='project-container'
            >
                {/* <motion.div
                    className='project-name'
                    initial={{ opacity: 0 }}
                >
                    <span className='first'>
                        <span>K</span>
                        <span>A</span>
                        <span>L</span>
                        <span>A</span>
                        <span>S</span>
                        <span>S</span>
                        <span>T</span>
                        <span>R</span>
                        <span>U</span>
                        <span>M</span>
                        <span>P</span>
                        <span>A</span>
                    </span>

                </motion.div> */}


                <motion.div
                    initial={{ borderRadius: '10px' }}
                    animate={{
                        width: '100%',
                        borderRadius: '0px',
                    }}
                    exit={{ transform: '' }}
                    transition={transition}
                    className='project-image-container'
                >
                    <img src={project.img} className='project-image' alt='' />
                </motion.div>

                <motion.div className='project-details'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <h1 style={{ color: 'green' }}>{project.title}</h1>
                    <h4 style={{ color: 'green' }}>{project.description}</h4>
                    <h1 style={{color: 'green'}}>Details</h1>

               
                </motion.div>






            </motion.div>

            {/* 
            <button className='back-button' onClick={() => history.push(
                    '/', { from: project.id }

                )}>

                    HOME
                </button> */}

        </>
    )
}

export default Projects
