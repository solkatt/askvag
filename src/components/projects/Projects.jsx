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
                initial={{
                    background:'rgba(10, 13, 13, 0)'

                }}
                animate={{
                    top: '-25vh',
                    background:'rgba(10, 13, 13, 0.6)'

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
                    initial={{ borderRadius: '2px' }}
                    animate={{
                        width: '100%',
                        borderRadius: '0px',
                        height: '40vh'
                    }}
                    exit={{ transform: '' }}
                    transition={transition}
                    className='project-image-container'
                >
                    <img src={project.img} className='project-image' alt='' />
                </motion.div>

                <motion.div className='project-details-container'
                    initial={{
                        opacity: 0,
                        top: '85vh'
                    }}
                    animate={{
                        opacity: 1,
                        top: '65vh'
                    }}
                    transition={transition}

                >

                    <div className="project-details">


                        <h1 className="work-title">{project.title}</h1>
                        <div className="work-description-container">
                            <p>{project.description}</p>
                            <div>
                                <span>Project</span>
                                <p>Web Development | 3D Design</p>
                                <span >Stack</span>
                                <p>React | Sass | Sanity | TypeScript | Blender</p>
                                <span>Client</span>
                                <p>Fengersfors Bruksbryggeri</p>
                            </div>
                        </div>
                        <p className='work-link'>www.website.com</p>


                    </div>

                    <div className='work-gallery'>
                        <img src="/img/kalasstrumpa/kalasstrumpa1.png" alt="" />
                        <p className='big-paragraph'>{project.description}</p>
                        <p className='big-paragraph'>{project.description}</p>
                        <img src="/img/kalasstrumpa/kalasstrumpa2.png" alt="" />


                    </div>
                    <img className='work-wide-img'src={project.img} alt='' />
                    <div className='work-footer'>
                    <p>link1</p>
                    <p>link2</p>
                    <p>link3</p>
                    <p>link4</p>
                    <p>link5</p>

                    </div>

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
