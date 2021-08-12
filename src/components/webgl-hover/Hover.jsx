import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { MeshBasicMaterial, PlaneBufferGeometry, TextureLoader } from 'three'
import './Hover.css'
import { useSpring, a, config } from 'react-spring/three'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const transition = { duration: 1.2, ease: [0.6, 0.01, -0.05, 0.9] }

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






    return (
        <>
            <div className='work-grid'>
                <motion.div className='items'
                    ref={ref}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}

                    exit={{
                   
                   
                   transform: 'translateY(-50vh)'
            
                   
                    }}

                    transition={transition}

                  >

                    <Link to="/work/fern">

                        <motion.div className='item item1'


                        initial='initial'
                        exit={{
                            width: '100vw',
                            height: '100vh',
                            // background: 'orange',
                        
                            margin: '0em',
                      

                    
                           
                        }}

                        transition={transition}
                        // initial={{opacity: 0}}
                        // animate={{opacity: 1}}
                                                        >
                            <motion.img 
                            // whileHover={{ scale: 1.1 }}
                            exit={{
                                width: '100vw', 
                                height: '50vh', 
                                background: 'red',
                                
                            }}


                                transition={transition}
                                src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                                className="js-image" alt='' />
                           
                        </motion.div>
                    </Link>
                    <div className='item'>
                        <img src="./img/Klippa.jpg"
                            className="js-image" alt='' />
                   
                    </div>
                    <div className='item'>
                        <img src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                            className="js-image" alt='' />
                     
                    </div>
                    <div className='item'>
                        <img src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                            className="js-image" alt='' />
                    </div>

                </motion.div>
            </div>
        </>
    )

}




export default Hover