import { OrbitControls, Effects, Text } from '@react-three/drei';
import * as THREE from 'three'
import React, { Suspense, useEffect, useRef, useState, useMemo } from 'react';
import { Canvas, useLoader, useThree, useFrame, extend } from 'react-three-fiber';
import AskvagLogo from './AskvagaLogoCmp';
import Box from './TryOne'


import { BloomPass } from 'three/examples/jsm/postprocessing/BloomPass.js';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass.js';
import { HalftonePass } from 'three/examples/jsm/postprocessing/HalftonePass.js';
// import { GodRaysFakeSunShader, GodRaysDepthMaskShader, GodRaysCombineShader, GodRaysGenerateShader } from 'three/examples/jsm/shaders/GodRaysShader.js';


// const loader = new THREE.FontLoader();

// loader.load('https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap', function (font) {


extend({ BloomPass, GlitchPass, HalftonePass })
// rotation-x={1.5} 
// rotation={[Math.PI / 2, 0, 0]}





function Cirkel() {
  return (
    <mesh position={[4, 100, -500]} scale-x={[1.1]}>
      <circleBufferGeometry args={[220, 50]} />
      <meshBasicMaterial color={0xffccaa} />
    </mesh>
  )

}


function Title({ children, vAlign = 'center', hAlign = 'center', size = 1, color = '#000000', ...props }) {
  const font = useLoader(THREE.FontLoader, 'https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap')
  const config = useMemo(
    () => ({ font, size: 40, height: 30, curveSegments: 32, bevelEnabled: true, bevelThickness: 6, bevelSize: 2.5, bevelOffset: 0, bevelSegments: 8 }),
    [font]
  )
  return <Text args={[children, config]} material-toneMapped={false}>Åskvåg</Text>
}




function Scene() {
  const group = useRef();
  const rotationEuler = new THREE.Euler(0, 0, 0);
  const rotationQuaternion = new THREE.Quaternion(0, 0, 0, 0);
  const { viewport } = useThree();

  useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 100;
    const y = (mouse.y * viewport.height) / 100;

    rotationEuler.set(y, x, 0);
    rotationQuaternion.setFromEuler(rotationEuler);

    group.current.quaternion.slerp(rotationQuaternion, 0.1);
  });

  return <group ref={group}>
    <Cirkel />

    {/* <ambientLight />
<pointLight position={[10, 10, 10]} /> */}
    <directionalLight args={[0xffccaa, 100]} position={[0, 0, -1]} castShadow={true} />
    <Suspense fallback={null}>
      <AskvagLogo position={[-1.2, 0, 0]} />
      {/* <Box position={[-1.2, 0, 0]} />  */}
    {/* <Title /> */}
    </Suspense>
    {/* <AskvagText/> */}

  </group>;
}







export default function ThreeScene() {

  return (
    <Canvas 
    concurrent
    gl={{ antialias: true}}
    // camera={{
    //   position: [100, 100, 20]
    // }}
     colorManagement>
      <color attach="background" args={['black']} />
      {/* <fog attach='fog' args={['black', 1, 7]} /> */}

      <Effects>
        {/* <bloomPass attachArray='passes'/> */}
        {/* <glitchPass attachArray='passes' /> */}
        {/* <halftonePass attachArray='passes' /> */}
      </Effects>


      {/* <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={0} /> */}
{/* 
      <Cirkel />

      <directionalLight args={[0xffccaa, 100]} position={[0, 0, -1]} castShadow={true} />
      <Suspense fallback={null}>
        <AskvagLogo position={[-1.2, 0, 0]} />
      </Suspense> */}
<Scene />

    </Canvas>
  )

}

