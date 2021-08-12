import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { MeshBasicMaterial, PlaneBufferGeometry, TextureLoader } from 'three'
import './Projects.css'
import { useSpring, a, config } from 'react-spring/three'

import { motion } from 'framer-motion'



const Projects = () => {


    return (
        <>
            <motion.div
                // initial='{{opacity: 0}}'
                // animate={{opacity: 1}}

                initial='initial'
                animate='animate'
                exit='exit'
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
                // initial={{width:}}
                className='project-image-container'>
                    
                <img src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    className="project-image" alt='' />

                    </motion.div>



                <motion.div className='project-details'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                >
                    <h2>Details</h2>
                    <p>
                        Lorem ipsum
                    </p>
                </motion.div>


            </motion.div>
        </>
    )

}




export default Projects