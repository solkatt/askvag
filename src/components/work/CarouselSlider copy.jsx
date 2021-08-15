import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { MeshBasicMaterial, PlaneBufferGeometry, TextureLoader } from 'three'
import './CarouselSlider.css'
import { useSpring, a, config } from 'react-spring/three'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'



import { FaBeer } from 'react-icons/fa';



import { projectsData } from '../data/projectsData'

import ProjectsThumb from './work-thumb/ProjectsThumb'





const transition = { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }




const Hover = () => {

    const ref = useRef()
    let isDown = false
    let startX
    let scrollLeft



    useEffect(() => {
        ref.current.scrollLeft = -100
    })



    const handleMouseDown = (e) => {
        e.preventDefault()

        isDown = true
        ref.current.classList.add('active')

        startX = e.pageX - ref.current.offsetLeft
        scrollLeft = ref.current.scrollLeft

    }

    const handleMouseLeave = () => {
        isDown = false
        ref.current.classList.remove('active')
    }

    const handleMouseUp = () => {
        isDown = false
        ref.current.classList.remove('active')
    }

    const handleMouseMove = (e) => {
        if (!isDown) return
        e.preventDefault()
        const x = e.pageX - ref.current.offsetLeft
        const walk = (x - startX) * 2

        ref.current.scrollLeft = scrollLeft - walk

    }


    const centerScroll = (id) => {

        const item1 = document.querySelector(`.thumb${id}`)
        const items = document.querySelector('.items')

        item1.scrollIntoView({ behavior: "smooth", block: "end", inline: "center" });
        items.classList.add('no-scroll')

    }







    return (
        <>
            <div className='work-grid'>



                <h1><FaBeer /></h1>




                <motion.div className='items'
                    ref={ref}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}


                    initial='initial'
                    exit={{
                        padding: '0px',

                    }}

                    transition={transition}

                >

                    {projectsData.map((project) => {
                        return (
                            <ProjectsThumb centerScroll={centerScroll} projectData={project} key={project.id} />
                        )
                    })}










                </motion.div>
                    <h1 style={{color: 'red'}}><FaBeer /></h1>
            </div>
        </>
    )

}




export default Hover