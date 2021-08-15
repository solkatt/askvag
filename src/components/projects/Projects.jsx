import React, { useRef, useEffect } from 'react'

import './Projects.css'


import { useParams } from 'react-router-dom';


import { motion } from 'framer-motion'

import { projectsData } from '../data/projectsData';

import { HiChevronLeft } from 'react-icons/hi';


const transition = { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }


const Projects = () => {

    let { id } = useParams();

    const project = projectsData.find(project => {
        return project.title === id
    })


    return (
        <>


            <motion.div


                initial='initial'
                animate={{
                    top: '-25vh',
                }}

                exit='exit'
                transition={transition}
                className='project-container'>


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

                    initial='initial'
                    animate={{

                        width: '100%',
                        transform: 'translatY(20vh)'
                    }}

                    transition={transition}
                    className='project-image-container'>

                    <img src={project.img}
                        className="project-image" alt='' />

                    <HiChevronLeft />

                </motion.div>



                {/* <motion.div className='project-details'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <h2>Details</h2>
                    <h1 style={{ color: 'green' }}>{project.title}</h1>
                    <h4 style={{ color: 'green' }}>{project.description}</h4>



                </motion.div> */}


            </motion.div>

        </>
    )

}




export default Projects