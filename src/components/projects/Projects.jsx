import React, { useRef, useEffect } from 'react'

import './Projects.css'

import { useParams } from 'react-router-dom'

import { animate, motion, transform } from 'framer-motion'

import { projectsData } from '../data/projectsData'

import { RiCloseCircleLine } from 'react-icons/ri'

import { useHistory } from 'react-router-dom'


const transition = { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }



const containerVariants = {
    hidden: {
        opacity: 0,
        x: '100v',
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            delay: 0.5
        }
    },


}


//// example


const Projects = (props) => {


    let { setCameraPos } = props

    let { id } = useParams()

    const project = projectsData.find((project) => {
        return project.title === id
    })

    const history = useHistory()




    const handleBackBtn = (id) => {
        history.push('/', { from: id }
        )

    }


    return (
        <>




            <motion.div
                initial={{
                    background: 'rgba(10, 13, 13, 0)',
                }}
                animate={{
                    top: '-25vh',
                    background: 'rgba(2, 2, 2, .8)'

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
                            {/* <h2 className="work-title" style={{fontSize: '2rem'}}>{project.subtitle}</h2> */}
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
                        <p className='work-link'>{project.website}</p>


                    </div>

                    <div className='work-gallery'>
                        <img src="/img/kalasstrumpa/kalasstrumpa1.png" alt="" />
                        <p className='big-paragraph'>{project.description}</p>
                        <p className='big-paragraph'>{project.description}</p>
                        <img src="/img/kalasstrumpa/kalasstrumpa2.png" alt="" />


                    </div>
                    <img className='work-wide-img' src={project.img} alt='' />
                    <div className='work-footer'>
                        <p>link1</p>
                        <p>link2</p>
                        <p>link3</p>
                        <p>link4</p>
                        <p>link5</p>

                    </div>

                </motion.div>






            </motion.div>



            <motion.div
                className='back-button'
                onClick={() => handleBackBtn(project.id)}

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ transition }}


            >

                <RiCloseCircleLine />

            </motion.div>

        </>
    )
}

export default Projects
