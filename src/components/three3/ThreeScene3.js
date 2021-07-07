import React, { useState, useRef } from 'react'
import { Canvas, useFrame, extend, useThree } from 'react-three-fiber'
import { useSpring, a } from 'react-spring/three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three'
import { PCFSoftShadowMap } from 'three'

extend({ OrbitControls })

//TODO:
//// Context

const HomeObject = () => {
	return (
		<mesh position={[1, 1, 1]} rotation={[Math.PI / 1.1, -0.2, 0]}>
			<boxBufferGeometry attach='geometry' args={[3, 2, 0.5]} />

			<meshPhysicalMaterial
				attach='material'
				// wireframe={true}
				color='red'
			/>
		</mesh>
	)
}

const Box = () => {
	const meshRef = useRef()
	const [hovered, setHovered] = useState(false)
	const [active, setActive] = useState(false)
	const spring = useSpring({
		scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
		color: hovered ? 'hotpink' : 'gray',
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
			scale={spring.scale}
			castShadow
			// scale={active ? [1.5, 1.5 , 1.5] : [1,1,1]}
		>
			<boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
			{/* <a.meshBasicMaterial
                attach="material"
                color={props.color} /> */}
			<a.meshPhysicalMaterial attach='material' color={spring.color} />
		</a.mesh>
	)
}

const Plane = (props) => {
	return (
		<mesh
			rotation={[-Math.PI / 2, 0, 0]}
			position={[0, -0.5, 0]}
			receiveShadow
		>
			<planeBufferGeometry attach='geometry' args={[100, 100]} />
			<meshPhysicalMaterial attach='material' color={props.props.color} />
		</mesh>
	)
}

const Controls = () => {
	const { camera, gl } = useThree()
	const orbitRef = useRef()

	useFrame(() => {
		orbitRef.current.update()
	})

	return (
		<orbitControls
			autoRotate
			maxPolarAngle={Math.PI / 2}
			minPolarAngle={Math.PI / 3}
			enableDamping
			ref={orbitRef}
			args={[camera, gl.domElement]}
		/>
	)
}

const ButtonTest = (props) => {
	const { setCameraPos, changeColor } = props

	const cameraScene = {
		home: {
			x: 1,
			y: 0,
			z: 2,
			rx: 0.7,
			ry: 0,
		},
		portfolio: {
			x: 10,
			y: 5,
			z: 3,
			rx: 0,
			ry: 0,
		},
	}

	const showProps = () => {
		console.log(props)
	}
	return (
		<div>
			<h1 style={{ fontSize: '3rem' }}>Test</h1>
			<button onClick={() => showProps()}>Props</button>
			<button onClick={() => changeColor('red')}>Click</button>

			<button onClick={() => setCameraPos(cameraScene.home)}>
				MENU 1
			</button>
			<button onClick={() => setCameraPos(cameraScene.portfolio)}>
				MENU 2
			</button>
		</div>
	)
}

function Dolly(props) {
	const { cameraPos } = props

	// const spring = useSpring({
	// 	scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
	// 	// color: hovered ? 'hotpink' : 'gray',
	// })

	const initCameraPos = {
		x: 0,
		y: 0,
		z: 5,
		rx: 0,
		ry: 0,
	}

	const { x, y, z, rx, ry } = useSpring({
		from: { x: initCameraPos.x },
		x: cameraPos.x,

		from: { y: initCameraPos.y },
		y: cameraPos.y,

		from: { z: initCameraPos.z },
		z: cameraPos.z,

		config: {
			mass: 0.1,
			tension: 200,
			friction: 180,
		},
		// onRest: () => setDollyFinished(true)
	})

	useFrame(({ clock, camera }) => {
		// camera.position.z = 1 + Math.sin(clock.getElapsedTime()) * 10

		// camera.rotation.y += 0.005

		camera.position.x = x.value
		camera.position.y = y.value
		camera.position.z = z.value

		// camera.rotation.z = 0.4
	})
	return null
}

function Scene(props) {
	const { cameraPos } = props

	return (
		<Canvas
			// camera={{ position: [3, 2, 5] }}
			// camera={{ position: [0, 1, 1] }}
			onCreated={({ gl }) => {
				gl.shadowMap.enabled = true
				gl.shadowMap.type = PCFSoftShadowMap
			}}
		>
			<fog attach='fog' args={['white', 1, 15]} />
			<ambientLight intensity={1} />
			<spotLight position={[0, 5, 10]} penumbra={0.7} castShadow />
			{/* <Controls /> */}

			<Box />
			<HomeObject />
			<Plane props={props} />
			<Dolly cameraPos={cameraPos} />
		</Canvas>
	)
}

export default function ThreeScene3() {
	const [color, setColor] = useState('white')
	const [cameraPos, setCameraPos] = useState({ x: 0, y: 0, z: 5 })
	return (
		<>
			{/* <h1>{cameraPos}</h1> */}
			<ButtonTest changeColor={setColor} setCameraPos={setCameraPos} />
			<Scene color={color} cameraPos={cameraPos} />
		</>
	)
}
