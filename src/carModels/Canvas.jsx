import React from 'react'
import { Suspense } from "react"
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, ContactShadows, PerspectiveCamera} from "@react-three/drei";

// export default function MyCanvas({comp}) {
//   return (
   
//     <Canvas className="bg-neutral-100 rounded-3xl">
//       <PerspectiveCamera makeDefault position={[8,5,9]} />
//       <OrbitControls enableZoom={true} />
//       <ambientLight intensity={2} />
//       <Suspense fallback={null}>
//         {comp}
//       </Suspense>
//       <Environment preset="sunset" />
//       <ContactShadows position={[0, -2, 0]} opacity={1} scale={10} blur={1} far={10} resolution={256} color="#000000" />
//     </Canvas>
    
//   )
// }

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


import { useLoader } from '@react-three/fiber';

export default function MyCanvas({ comp }) {
  const gltf = useLoader(GLTFLoader, '/sko.gltf');
  return (
    <Canvas className="">
      <PerspectiveCamera makeDefault position={[8,5,9]} />
      <OrbitControls enableZoom={true} />
      <ambientLight intensity={2} />
      <Suspense fallback={null}>
        <primitive object={gltf.scene} />
      </Suspense>
      <Environment preset="sunset" />
      <ContactShadows position={[0, -2, 0]} opacity={1} scale={10} blur={1} far={10} resolution={256} color="#000000" />
    </Canvas>

  //   <Canvas className="">
  //   <PerspectiveCamera makeDefault position={[8,5,9]} />
  //   <OrbitControls enableZoom={true} />
  //   <ambientLight intensity={2} />
  //   <Suspense fallback={null}>
  //     <primitive object={gltf.scene} />
  //   </Suspense>
  //   <Environment preset="sunset" />
  //   <ContactShadows position={[4, -2, 0]} opacity={1} scale={10} blur={1} far={30} resolution={256} color="#000000" />
  // </Canvas>
  );
}


