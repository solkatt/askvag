import React, { useState, useRef } from 'react'
import { Canvas, useFrame, extend, useThree } from 'react-three-fiber'
import { useSpring, a } from 'react-spring/three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three'
import { PCFSoftShadowMap } from 'three'

extend({ OrbitControls })


const Box = () => {
    const meshRef = useRef()
    const [hovered, setHovered] = useState(false)
    const [active, setActive] = useState(false)
    const props = useSpring(
        {
            scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
            color: hovered ? 'hotpink' : 'gray'
        })

    useFrame(() => {
        // meshRef.current.rotation.y += 0.005
    })

    return (
        <a.mesh
            ref={meshRef}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onClick={() => setActive(!active)}

            scale={props.scale}
            castShadow
        // scale={active ? [1.5, 1.5 , 1.5] : [1,1,1]}
        >
            <boxBufferGeometry
                attach="geometry"
                args={[1, 1, 1]} />
            {/* <a.meshBasicMaterial
                attach="material"
                color={props.color} /> */}
            <a.meshPhysicalMaterial
                attach="material"
                color={props.color} />
        </a.mesh>
    )

}

const Plane = () => {

    return (
        <mesh 
        rotation={[-Math.PI/2, 0, 0]}
        position={[0, -0.5, 0]}
        receiveShadow>
            <planeBufferGeometry attach="geometry" args={[100,100]} />
            <meshPhysicalMaterial attach="material" color="red" />
        </mesh>
    )
}

const Controls = () => {

const {camera, gl}= useThree()
const orbitRef = useRef()

useFrame(() => {
    orbitRef.current.update()
})

    return (
        <orbitControls 
        autoRotate
        maxPolarAngle={Math.PI/2}
        minPolarAngle={Math.PI/3}
        enableDamping
        ref={orbitRef} 
        args={[camera, gl.domElement]}/>

    )
}

export default function ThreeScene2() {

    return (
        <Canvas camera={{position: [0,0,5]}} 
        onCreated={({gl}) => {
            gl.shadowMap.enabled = true
            gl.shadowMap.type = PCFSoftShadowMap }}
            >
            <fog attach="fog" args={['white', 1, 15]} />
            <ambientLight intensity={1}/>
            <spotLight position={[0,5,10]} penumbra={.7} castShadow/>
            <Controls />
            <Box />
            <Plane/>
        </Canvas>

    )
}