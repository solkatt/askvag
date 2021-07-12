import * as THREE from 'three'
import { Canvas, useFrame, extend, useThree } from 'react-three-fiber'
import { useSpring, a } from 'react-spring/three'
import { PCFSoftShadowMap } from 'three'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

const btn = document.querySelector('.btn')

let keyState = false

// btn.addEventListener('click', () => {
// 	// gsap.to(mesh.position, { y: 1, duration: 1 })
// 	keyState = !keyState

// 	if (keyState) {
// 		gsap.to(mesh.morphTargetInfluences, {
// 			[1]: 1,
// 			duration: 1,
// 		})

// 		gsap.to(camera.position, {
// 			z: 4,
// 			duration: 1,
// 		})
// 	} else {
// 		gsap.to(mesh.morphTargetInfluences, { [1]: 0, duration: 1 })
// 		gsap.to(camera.position, {
// 			z: 3,
// 			duration: 1,
// 		})
// 	}
// })

// Instantiate a loader

const loader = new GLTFLoader()

const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('/examples/js/libs/draco/')
loader.setDRACOLoader(dracoLoader)

const handleAnimation = () => {}

// // Load a glTF resource
// loader.load(
// 	// resource URL
// 	'/ShapeKeys.glb',
// 	// called when the resource is loaded
// 	function (gltf) {
// 		scene.add(gltf.scene)

// 		gltf.animations // Array<THREE.AnimationClip>
// 		gltf.scene // THREE.Group
// 		gltf.scenes // Array<THREE.Group>
// 		gltf.cameras // Array<THREE.Camera>
// 		gltf.asset // Object

// 		console.log(gltf)
// 	},
// 	// called while loading is progressing
// 	function (xhr) {
// 		console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
// 	},
// 	// called when loading has errors
// 	function (error) {
// 		console.log('An error happened')
// 		console.log('error:', error)
// 	}
// )
// // async function loadingSucces() {
// //     await loader.loadAsync('../static/models/ShapeKeys.glb')
// // }

// Debug

// Objects
let mesh = {}

const loadModels = async () => {
	const [shapeData] = await Promise.all([loader.loadAsync('/ShapeKeys.glb')])

	const shape = shapeData.scene.children[0]

	console.log('Squaaawk!', shape)
	// scene.add(shape)
	return shape
	// shape.morphTargetInfluences[0] = 0
}

const init = async () => {
	await loadModels().then((data) => {
		mesh = data
		scene.add(mesh)
		mesh.rotation.y = 180
		mesh.morphTargetInfluences[1] = 0

		mesh.material.roughness = 0.1
		mesh.material.metalness = 0.5

		console.log(mesh.material.metalness)
	})
}

init()

// shape.position.x = 2
// model.position
// Lights

const pointLight = new THREE.PointLight(0xffffff, 0.5)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)

const ambientLight = new THREE.AmbientLight(0xffffff, 1)
ambientLight.position.x = 20
ambientLight.position.y = 10
ambientLight.position.z = 4
scene.add(ambientLight)

/**
 * Sizes
 */

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
	75,
	sizes.width / sizes.height,
	0.1,
	100
)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 3
scene.add(camera)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */



export default function ThreeScene3() {
	return (
		<>
			{/* <h1>{cameraPos}</h1> */}
			<Scene />
		</>
	)
}
