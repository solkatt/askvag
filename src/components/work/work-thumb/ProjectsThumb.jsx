import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const ProjectsThumb = (props) => {

    const { centerScroll, projectData } = props
    const transition = { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }


    const [projectActive, setProjectActive] = useState(false)



    
    const imageDetails = {
        width: 600,
        height: 500
    }

    

    const anim = {
        selectProject: {
            item: {
                exit: {
                    width: '100vw',
                    height: '100vh',
                    margin: '0em',
                    transform: 'translateY(0%)',
                    top: 0,
                },
                animate: {
                    // transform: 'translateY(70%)'
                }
            },
            img: {
                width: '100vw',
                height: '50vh',
                borderRadius: 0,
            }
        },
        removeProject: {
            opacity: 0,

            // transform: 'translateY(50%)',
        //    margin: 0,
        }

    }


    const calcThumbDist = (id, xy) => {

        const distance = {
            x: `${id * 30}vh`,
            y: `${id * 15}vh`,

        }
        
        if (xy === 'x') return distance.x
        if (xy === 'y') return distance.y

    }
 

  

    return (
        <>


            <Link to="/work/fern">

                <motion.div className={`item thumb${projectData.id}`}
                    onClick={() => {
                        centerScroll(projectData.id)
                        setProjectActive(true)
                    }}


                    style={{ 
                        top: calcThumbDist(projectData.id, 'y'),
                        left: calcThumbDist(projectData.id, 'x')
                    
                    
                    
                    }}
                    initial={{width: '10px'}}
                    animate={{
                       transform: 'translateY(70%)'
                    }}
                    exit={projectActive ? anim.selectProject.item.exit : anim.removeProject}

                    transition={transition}
                >
                    <motion.img
                        // whileHover={{ scale: 1.1 }}
                        exit={projectActive ? anim.selectProject.img : anim.removeProject}


                        transition={transition}

                     
                        style={{width: imageDetails.width + 'px'}}
                        src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                        className="js-image" alt='' />

                </motion.div>
            </Link>








        </>
    )


}









export default ProjectsThumb

