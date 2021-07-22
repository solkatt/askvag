import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { MeshBasicMaterial, PlaneBufferGeometry, TextureLoader } from 'three'
import './Hover.css'
import { useSpring, a, config } from 'react-spring/three'





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
   
        startX = e.pageX -ref.current.offsetLeft
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
                <div className='items'
                    ref={ref}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}>

                    <div className='item item1'>
                        <img src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                            className="js-image" alt='' />
                        <h2> Some Title</h2>
                        <p>Lorem Ipsum</p>
                    </div>
                    <div className='item'>
                        <img src="./img/Klippa.jpg"
                            className="js-image" alt='' />
                        <h2> Some Title</h2>
                        <p>Lorem Ipsum</p>
                    </div>
                    <div className='item'>
                        <img src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                            className="js-image" alt='' />
                        <h2> Some Title</h2>
                        <p>Lorem Ipsum</p>
                    </div>
                    <div className='item'>
                        <img src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                            className="js-image" alt='' />
                        <h2> Some Title</h2>
                        <p>Lorem Ipsum</p>
                    </div>

                </div>
            </div>
        </>
    )

}




export default Hover