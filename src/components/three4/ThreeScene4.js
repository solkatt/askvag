import React, { useState, useRef, useEffect, Suspense } from 'react'
import {
	Canvas,
	useFrame,
	extend,
	useThree,
	useLoader,
} from 'react-three-fiber'
import { useSpring, a } from 'react-spring/three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three'
import { PCFSoftShadowMap } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { useGLTF } from '@react-three/drei'

// import Model from './ShapeKeys'

extend({ OrbitControls })

const Model = (props) => {
	const group = useRef()
	const { nodes, materials } = useGLTF('/ShapeKeys.glb')
	const ref = useRef()

	let { morphState } = props

	const [active, setActive] = useState(false)

	const spring = useSpring({
		scale: active ? [1, 1.5, 1.5] : [1, 1, 1],
		position: active ? [1, -1, 1.5] : [1, -1, 1],
	})

	const handleMorphChange = () => {
		console.log('morphState', morphState)

		console.log('[0]', ref.current.morphTargetInfluences[0])

		console.log('[1]', ref.current.morphTargetInfluences[1])
	}

	const { morphAnim0, morphAnim1 } = useSpring({
		morphAnim0:
			morphState.index === 0 && morphState.value === 1
				? 1
				: morphState.index === 0 && morphState.value === 0
				? 0
				: 0,

		morphAnim1:
			morphState.index === 1 && morphState.value === 1
				? 1
				: morphState.index === 1 && morphState.value === 0
				? 0
				: 0,

		config: {
			mass: 1,
			tension: 180,
			friction: 12,
			bounce: 2,
		},
		// onRest: () => setDollyFinished(true)
	})

	useEffect(() => {})

	useFrame(() => {
		// let scale = (ref.current.scale.x +=
		// 	((active ? 1.5 : 1) - ref.current.scale.x) * 0.1)
		// ref.current.scale.set(scale, scale, scale)

		let morphTarget = ref.current.morphTargetInfluences

		morphTarget[0] = morphAnim0.value
		morphTarget[1] = morphAnim1.value

		// console.log(morph[0])
		ref.current.rotation.y += 0.005
		// ref.current.scale = [2, 2, 2]
	})

	return (
		<group ref={group} {...props} dispose={null}>
			<a.mesh
				ref={ref}
				name='Cube'
				geometry={nodes.Cube.geometry}
				material={materials.Material}
				morphTargetDictionary={nodes.Cube.morphTargetDictionary}
				morphTargetInfluences={nodes.Cube.morphTargetInfluences}
				onPointerOver={() => setActive(true)}
				onPointerOut={() => setActive(false)}
				onClick={() => handleMorphChange()}
				// scale={spring.scale}
				position={[1, 0.5, 0]}
			></a.mesh>
		</group>
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

const ButtonTest = (props) => {
	const { setCameraPos, changeColor, setMorphState } = props

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
		<div className="navbar">
			<h1 style={{ fontSize: '3rem' }}>Test</h1>
			<button onClick={() => showProps()}>Props</button>
			<button onClick={() => changeColor('red')}>Click</button>

			<button onClick={() => setCameraPos(cameraScene.home)}>
				MENU 1
			</button>
			<button onClick={() => setCameraPos(cameraScene.portfolio)}>
				MENU 2
			</button>
			<button onClick={() => setMorphState({ index: 0, value: 0 })}>
				Morph State 0 / 0
			</button>

			<button onClick={() => setMorphState({ index: 0, value: 1 })}>
				Morph State 0 / 1
			</button>
			<button onClick={() => setMorphState({ index: 1, value: 1 })}>
				Morph State 1 / 1
			</button>
		</div>
	)
}

function Dolly(props) {
	const { cameraPos } = props

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
	const { cameraPos, morphState } = props

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

			<Suspense fallback={null}>
				{/* <Model position={[0, 1, 0]}/> */}

				{/* <Obj /> */}
				<Model morphState={morphState} receiveShadow castShadow />
			</Suspense>
			<Plane props={props} receiveShadow />
			<Dolly cameraPos={cameraPos} />
		</Canvas>
	)
}

export default function ThreeScene3() {
	const [color, setColor] = useState('white')
	const [cameraPos, setCameraPos] = useState({ x: 0, y: 0, z: 5 })
	const [morphState, setMorphState] = useState({ index: 0, value: 0 })

	return (
		<>
			{/* <h1>{cameraPos}</h1> */}
			<ButtonTest
				changeColor={setColor}
				setCameraPos={setCameraPos}
				setMorphState={setMorphState}
			/>
			<Scene
				color={color}
				cameraPos={cameraPos}
				morphState={morphState}
			/>
		</>
	)
}

useGLTF.preload('/ShapeKeys.glb')
