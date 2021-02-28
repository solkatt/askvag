import { OrthographicCamera } from '@react-three/drei';
import React, {Suspense} from 'react';
import { Canvas } from 'react-three-fiber';
import AskvagLogo from './AskvagaLogoCmp';
import Box from './TryOne'


// rotation-x={1.5} 
// rotation={[Math.PI / 2, 0, 0]}

export default function ThreeScene() {

  return (
    <Canvas colorManagement camera={OrthographicCamera}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
      <AskvagLogo position={[-1.2, 0, 0]}  />
      {/* <Box position={[-1.2, 0, 0]} />  */}
      </Suspense>

      
    </Canvas>
  )

}

