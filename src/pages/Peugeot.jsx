
// import React, { useEffect, useRef } from 'react'; 
// import * as THREE from 'three'; 
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; 
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; 

// const Peugeot = ({ carModel }) => { 
//   const containerRef = useRef(null); 
//   const modelRef = useRef(null);

//   useEffect(() => { 
//     if (!containerRef.current) return; 

//     // Create the scene
//     const scene = new THREE.Scene(); 

//     // Create the renderer
//     const renderer = new THREE.WebGLRenderer(); 
//     renderer.setClearColor(0xffffff, 1); // Background color 
//     renderer.setSize(window.innerWidth, window.innerHeight); 
//     renderer.shadowMap.enabled = true; 
//     renderer.shadowMap.type = THREE.PCFSoftShadowMap; 

//     // Append renderer to the container
//     containerRef.current.appendChild(renderer.domElement); 

//     // Create the camera
//     const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000); 
//     // camera.position.set(5, 3, 7); 
//     camera.position.set(0, 5, 15); 

//     // Add ambient light
//     const light = new THREE.AmbientLight(0x404040, 100); 
//     scene.add(light); 


//     // Add directional light
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 10); 
//     directionalLight.position.set(2, 3, 10).normalize(); 
//     directionalLight.castShadow = true; 
//     scene.add(directionalLight); 

//     // Load the GLTF model
//     const loader = new GLTFLoader(); 
//     loader.load(carModel, (gltf) => { 
//       const model = gltf.scene; 
//       model.scale.set(2, 2, 2); 
//       // Set initial position directly
//       model.position.set(0, 0, 0); 
//       model.traverse((child) => { 
//         if (child.isMesh) { 
//           child.castShadow = true; 
//           child.receiveShadow = true; 
//         } 
//       }); 
//       scene.add(model);
      
//       // Save model to be updated later
//       modelRef.current = model;
//     });

//     // Add OrbitControls
//     const controls = new OrbitControls(camera, renderer.domElement); 
//     controls.enableDamping = true; 
//     controls.dampingFactor = 0.25; 

//     // Animation function
//     const animate = () => { 
//       requestAnimationFrame(animate); 
//       controls.update(); 
//       renderer.render(scene, camera); 
//     }; 
//     animate(); 

//     // Handle window resize
//     const handleResize = () => { 
//       camera.aspect = window.innerWidth / window.innerHeight; 
//       camera.updateProjectionMatrix(); 
//       renderer.setSize(window.innerWidth, window.innerHeight); 
//     }; 
//     window.addEventListener('resize', handleResize); 

//     // Handle keyboard input for moving the model
//     const handleKeyDown = (event) => {
//       if (!modelRef.current) return; // Ensure the model is loaded

//       const step = 0.5; // Step size for movement
//       switch (event.key) {
//         case 'ArrowUp': // Move model forward
//           modelRef.current.position.z -= step;
//           break;
//         case 'ArrowDown': // Move model backward
//           modelRef.current.position.z += step;
//           break;
//         case 'ArrowLeft': // Move model left
//           modelRef.current.position.x -= step;
//           break;
//         case 'ArrowRight': // Move model right
//           modelRef.current.position.x += step;
//           break;
//         case 'w': // Move model up
//           modelRef.current.position.y += step;
//           break;
//         case 's': // Move model down
//           modelRef.current.position.y -= step;
//           break;
//         default:
//           break;
//       }
//     };

//     // Add event listener for keydown
//     window.addEventListener('keydown', handleKeyDown);

//     // Cleanup function
//     return () => { 
//       window.removeEventListener('resize', handleResize); 
//       window.removeEventListener('keydown', handleKeyDown);
//       controls.dispose(); 
//       renderer.dispose(); 
//       if (containerRef.current && renderer.domElement) { 
//         containerRef.current.removeChild(renderer.domElement); 
//       } 
//     }; 
//   }, [carModel]);

//   return (
//     <div>
//       <div ref={containerRef} style={{ width: '100%', height: '80vh' }}></div>
//     </div>
//   );
// };

// export default Peugeot;















// import React, { useEffect, useRef } from 'react'; 
// import * as THREE from 'three'; 
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; 
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; 

// const Peugeot = ({ carModel }) => { 
//   const containerRef = useRef(null); 
//   const modelRef = useRef(null);
//   const lightRef = useRef(null); // Référence pour la lumière

//   useEffect(() => { 
//     if (!containerRef.current) return; 

//     // Create the scene
//     const scene = new THREE.Scene(); 

//     // Create the renderer
//     const renderer = new THREE.WebGLRenderer(); 
//     renderer.setClearColor(0xffffff, 1); // Background color 
//     renderer.setSize(window.innerWidth, window.innerHeight); 
//     renderer.shadowMap.enabled = true; 
//     renderer.shadowMap.type = THREE.PCFSoftShadowMap; 

//     // Append renderer to the container
//     containerRef.current.appendChild(renderer.domElement); 

//     // Create the camera
//     const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000); 
//     camera.position.set(0, 5, 15); 

//     // Add ambient light
//     const light = new THREE.AmbientLight(0x404040, 200); 
//     scene.add(light); 

//     // Add directional light
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 10); 
//     directionalLight.position.set(2, 3, 10).normalize(); 
//     directionalLight.castShadow = true; 
//     scene.add(directionalLight); 

//     // Référence à la lumière pour pouvoir la déplacer avec la caméra
//     lightRef.current = directionalLight;

//     // Load the GLTF model
//     const loader = new GLTFLoader(); 
//     loader.load(carModel, (gltf) => { 
//       const model = gltf.scene; 
//       model.scale.set(2, 2, 2); 
//       model.position.set(0, 0, 0); 
//       model.traverse((child) => { 
//         if (child.isMesh) { 
//           child.castShadow = true; 
//           child.receiveShadow = true; 
//         } 
//       }); 
//       scene.add(model);
      
//       // Save model to be updated later
//       modelRef.current = model;
//     });

//     // Add OrbitControls
//     const controls = new OrbitControls(camera, renderer.domElement); 
//     controls.enableDamping = true; 
//     controls.dampingFactor = 0.25; 

//     // Animation function
//     const animate = () => { 
//       requestAnimationFrame(animate); 
//       controls.update(); 

//       // Make the light follow the camera
//       if (lightRef.current) {
//         lightRef.current.position.set(camera.position.x, camera.position.y, camera.position.z);
//       }

//       renderer.render(scene, camera); 
//     }; 
//     animate(); 

//     // Handle window resize
//     const handleResize = () => { 
//       camera.aspect = window.innerWidth / window.innerHeight; 
//       camera.updateProjectionMatrix(); 
//       renderer.setSize(window.innerWidth, window.innerHeight); 
//     }; 
//     window.addEventListener('resize', handleResize); 

//     // Handle keyboard input for moving the model
//     const handleKeyDown = (event) => {
//       if (!modelRef.current) return; // Ensure the model is loaded

//       const step = 0.5; // Step size for movement
//       switch (event.key) {
//         case 'ArrowUp': // Move model forward
//           modelRef.current.position.z -= step;
//           break;
//         case 'ArrowDown': // Move model backward
//           modelRef.current.position.z += step;
//           break;
//         case 'ArrowLeft': // Move model left
//           modelRef.current.position.x -= step;
//           break;
//         case 'ArrowRight': // Move model right
//           modelRef.current.position.x += step;
//           break;
//         case 'w': // Move model up
//           modelRef.current.position.y += step;
//           break;
//         case 's': // Move model down
//           modelRef.current.position.y -= step;
//           break;
//         default:
//           break;
//       }
//     };

//     // Add event listener for keydown
//     window.addEventListener('keydown', handleKeyDown);

//     // Cleanup function
//     return () => { 
//       window.removeEventListener('resize', handleResize); 
//       window.removeEventListener('keydown', handleKeyDown);
//       controls.dispose(); 
//       renderer.dispose(); 
//       if (containerRef.current && renderer.domElement) { 
//         containerRef.current.removeChild(renderer.domElement); 
//       } 
//     }; 
//   }, [carModel]);

//   return (
//     <div>
//       <div ref={containerRef} style={{ width: '100%', height: '80vh' }}></div>
//     </div>
//   );
// };

// export default Peugeot;




// import React, { useEffect, useRef, useState } from 'react'; 
// import * as THREE from 'three'; 
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; 
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; 

// const Peugeot = ({ carModel }) => { 
//   const containerRef = useRef(null); 
//   const modelRef = useRef(null);
//   const lightRef = useRef(null); // Référence pour la lumière

//   // States to control position and rotation
//   const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });
//   const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });

//   useEffect(() => { 
//     if (!containerRef.current) return; 

//     // Create the scene
//     const scene = new THREE.Scene(); 

//     // Create the renderer
//     const renderer = new THREE.WebGLRenderer(); 
//     renderer.setClearColor(0xffffff, 1); // Background color 
//     renderer.setSize(window.innerWidth, window.innerHeight); 
//     renderer.shadowMap.enabled = true; 
//     renderer.shadowMap.type = THREE.PCFSoftShadowMap; 

//     // Append renderer to the container
//     containerRef.current.appendChild(renderer.domElement); 

//     // Create the camera
//     const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000); 
//     camera.position.set(0, 5, 15); 

//     // Add ambient light
//     const light = new THREE.AmbientLight(0x404040, 200); 
//     scene.add(light); 

//     // Add directional light
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 10); 
//     directionalLight.position.set(2, 3, 10).normalize(); 
//     directionalLight.castShadow = true; 
//     scene.add(directionalLight); 

//     // Référence à la lumière pour pouvoir la déplacer avec la caméra
//     lightRef.current = directionalLight;

//     // Load the GLTF model
//     const loader = new GLTFLoader(); 
//     loader.load(carModel, (gltf) => { 
//       const model = gltf.scene; 
//       model.scale.set(2, 2, 2); 
//       model.position.set(position.x, position.y, position.z); 
//       model.traverse((child) => { 
//         if (child.isMesh) { 
//           child.castShadow = true; 
//           child.receiveShadow = true; 
//         } 
//       }); 
//       scene.add(model);
      
//       // Save model to be updated later
//       modelRef.current = model;
//     });

//     // Add OrbitControls
//     const controls = new OrbitControls(camera, renderer.domElement); 
//     controls.enableDamping = true; 
//     controls.dampingFactor = 0.25; 

//     // Animation function
//     const animate = () => { 
//       requestAnimationFrame(animate); 
//       controls.update(); 

//       // Make the light follow the camera
//       if (lightRef.current) {
//         lightRef.current.position.set(camera.position.x, camera.position.y, camera.position.z);
//       }

//       renderer.render(scene, camera); 
//     }; 
//     animate(); 

//     // Handle window resize
//     const handleResize = () => { 
//       camera.aspect = window.innerWidth / window.innerHeight; 
//       camera.updateProjectionMatrix(); 
//       renderer.setSize(window.innerWidth, window.innerHeight); 
//     }; 
//     window.addEventListener('resize', handleResize); 

//     // Cleanup function
//     return () => { 
//       window.removeEventListener('resize', handleResize); 
//       controls.dispose(); 
//       renderer.dispose(); 
//       if (containerRef.current && renderer.domElement) { 
//         containerRef.current.removeChild(renderer.domElement); 
//       } 
//     }; 
//   }, [carModel, position]);

//   // Handle position and rotation updates
//   const handlePositionChange = (e, axis) => {
//     const value = parseFloat(e.target.value);
//     setPosition((prev) => ({ ...prev, [axis]: value }));
//   };

//   const handleRotationChange = (e, axis) => {
//     const value = parseFloat(e.target.value);
//     setRotation((prev) => ({ ...prev, [axis]: value }));
//   };

//   return (
//     <div>
//       <div ref={containerRef} style={{ width: '100%', height: '80vh' }}></div>

//       {/* Controls */}
//       <div>
//         <h3>Move Model</h3>
//         <label>
//           Position X:
//           <input 
//             type="range" 
//             min="-10" 
//             max="10" 
//             step="0.1" 
//             value={position.x} 
//             onChange={(e) => handlePositionChange(e, 'x')} 
//           />
//           <span>{position.x}</span>
//         </label>
//         <br />
//         <label>
//           Position Y:
//           <input 
//             type="range" 
//             min="-10" 
//             max="10" 
//             step="0.1" 
//             value={position.y} 
//             onChange={(e) => handlePositionChange(e, 'y')} 
//           />
//           <span>{position.y}</span>
//         </label>
//         <br />
//         <label>
//           Position Z:
//           <input 
//             type="range" 
//             min="-10" 
//             max="10" 
//             step="0.1" 
//             value={position.z} 
//             onChange={(e) => handlePositionChange(e, 'z')} 
//           />
//           <span>{position.z}</span>
//         </label>

//         <h3>Rotate Model</h3>
//         <label>
//           Rotation X:
//           <input 
//             type="range" 
//             min="-Math.PI" 
//             max="Math.PI" 
//             step="0.1" 
//             value={rotation.x} 
//             onChange={(e) => handleRotationChange(e, 'x')} 
//           />
//           <span>{rotation.x}</span>
//         </label>
//         <br />
//         <label>
//           Rotation Y:
//           <input 
//             type="range" 
//             min="-Math.PI" 
//             max="Math.PI" 
//             step="0.1" 
//             value={rotation.y} 
//             onChange={(e) => handleRotationChange(e, 'y')} 
//           />
//           <span>{rotation.y}</span>
//         </label>
//         <br />
//         <label>
//           Rotation Z:
//           <input 
//             type="range" 
//             min="-Math.PI" 
//             max="Math.PI" 
//             step="0.1" 
//             value={rotation.z} 
//             onChange={(e) => handleRotationChange(e, 'z')} 
//           />
//           <span>{rotation.z}</span>
//         </label>
//       </div>
//     </div>
//   );
// };

// export default Peugeot;




// import React, { useEffect, useRef, useState } from 'react'; 
// import * as THREE from 'three'; 
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; 
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; 

// const Peugeot = ({ carModel }) => { 
//   const containerRef = useRef(null); 
//   const modelRef = useRef(null);
//   const lightRef = useRef(null); // Référence pour la lumière

//   // States to control position
//   const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });

//   useEffect(() => { 
//     if (!containerRef.current) return; 

//     // Create the scene
//     const scene = new THREE.Scene(); 

//     // Create the renderer
//     const renderer = new THREE.WebGLRenderer(); 
//     renderer.setClearColor(0xffffff, 1); // Background color 
//     renderer.setSize(window.innerWidth, window.innerHeight); 
//     renderer.shadowMap.enabled = true; 
//     renderer.shadowMap.type = THREE.PCFSoftShadowMap; 

//     // Append renderer to the container
//     containerRef.current.appendChild(renderer.domElement); 

//     // Create the camera
//     const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000); 
//     camera.position.set(0, 5, 15); 

//     // Add ambient light
//     const light = new THREE.AmbientLight(0x404040, 200); 
//     scene.add(light); 

//     // Add directional light
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 10); 
//     directionalLight.position.set(2, 3, 10).normalize(); 
//     directionalLight.castShadow = true; 
//     scene.add(directionalLight); 

//     // Référence à la lumière pour pouvoir la déplacer avec la caméra
//     lightRef.current = directionalLight;

//     // Load the GLTF model
//     const loader = new GLTFLoader(); 
//     loader.load(carModel, (gltf) => { 
//       const model = gltf.scene; 
//       model.scale.set(2, 2, 2); 
//       model.position.set(position.x, position.y, position.z); 
//       model.traverse((child) => { 
//         if (child.isMesh) { 
//           child.castShadow = true; 
//           child.receiveShadow = true; 
//         } 
//       }); 
//       scene.add(model);
      
//       // Save model to be updated later
//       modelRef.current = model;
//     });

//     // Add OrbitControls
//     const controls = new OrbitControls(camera, renderer.domElement); 
//     controls.enableDamping = true; 
//     controls.dampingFactor = 0.25; 

//     // Animation function
//     const animate = () => { 
//       requestAnimationFrame(animate); 
//       controls.update(); 

//       // Make the light follow the camera
//       if (lightRef.current) {
//         lightRef.current.position.set(camera.position.x, camera.position.y, camera.position.z);
//       }

//       renderer.render(scene, camera); 
//     }; 
//     animate(); 

//     // Handle window resize
//     const handleResize = () => { 
//       camera.aspect = window.innerWidth / window.innerHeight; 
//       camera.updateProjectionMatrix(); 
//       renderer.setSize(window.innerWidth, window.innerHeight); 
//     }; 
//     window.addEventListener('resize', handleResize); 

//     // Cleanup function
//     return () => { 
//       window.removeEventListener('resize', handleResize); 
//       controls.dispose(); 
//       renderer.dispose(); 
//       if (containerRef.current && renderer.domElement) { 
//         containerRef.current.removeChild(renderer.domElement); 
//       } 
//     }; 
//   }, [carModel, position]);

//   // Handle position updates
//   const handlePositionChange = (e, axis) => {
//     const value = parseFloat(e.target.value);
//     setPosition((prev) => ({ ...prev, [axis]: value }));
//   };

//   return (
//     <div>
//       <div ref={containerRef} style={{ width: '100%', height: '80vh' }}></div>

//       {/* Controls */}
//       <div>
//         <h3>Move Model</h3>
//         <label>
//           Position X:
//           <input 
//             type="range" 
//             min="-10" 
//             max="10" 
//             step="0.1" 
//             value={position.x} 
//             onChange={(e) => handlePositionChange(e, 'x')} 
//           />
//           <span>{position.x}</span>
//         </label>
//         <br />
//         <label>
//           Position Y:
//           <input 
//             type="range" 
//             min="-10" 
//             max="10" 
//             step="0.1" 
//             value={position.y} 
//             onChange={(e) => handlePositionChange(e, 'y')} 
//           />
//           <span>{position.y}</span>
//         </label>
//         <br />
//         <label>
//           Position Z:
//           <input 
//             type="range" 
//             min="-10" 
//             max="10" 
//             step="0.1" 
//             value={position.z} 
//             onChange={(e) => handlePositionChange(e, 'z')} 
//           />
//           <span>{position.z}</span>
//         </label>
//       </div>
//     </div>
//   );
// };

// export default Peugeot;








// import React, { useEffect, useRef, useState } from 'react'; 
// import * as THREE from 'three'; 
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; 
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; 

// const Peugeot = ({ carModel }) => { 
//   const containerRef = useRef(null); 
//   const modelRef = useRef(null);
//   const lightRef = useRef(null); // Référence pour la lumière

//   // States to control position
//   const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });

//   useEffect(() => { 
//     if (!containerRef.current) return; 

//     // Create the scene
//     const scene = new THREE.Scene(); 

//     // Create the renderer
//     const renderer = new THREE.WebGLRenderer(); 
//     renderer.setClearColor(0xffffff, 1); // Background color 
//     renderer.setSize(window.innerWidth, window.innerHeight); 
//     renderer.shadowMap.enabled = true; 
//     renderer.shadowMap.type = THREE.PCFSoftShadowMap; 

//     // Append renderer to the container
//     containerRef.current.appendChild(renderer.domElement); 

//     // Create the camera
//     const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000); 
//     camera.position.set(0, 5, 15); 

//     // Add ambient light
//     const light = new THREE.AmbientLight(0x404040, 200); 
//     scene.add(light); 

//     // Add directional light
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 10); 
//     directionalLight.position.set(2, 3, 10).normalize(); 
//     directionalLight.castShadow = true; 
//     scene.add(directionalLight); 

//     // Référence à la lumière pour pouvoir la déplacer avec la caméra
//     lightRef.current = directionalLight;

//     // Load the GLTF model
//     const loader = new GLTFLoader(); 
//     loader.load(carModel, (gltf) => { 
//       const model = gltf.scene; 
//       model.scale.set(2, 2, 2); 
//       model.position.set(position.x, position.y, position.z); 
//       model.traverse((child) => { 
//         if (child.isMesh) { 
//           child.castShadow = true; 
//           child.receiveShadow = true; 
//         } 
//       }); 
//       scene.add(model);
      
//       // Save model to be updated later
//       modelRef.current = model;
//     });

//     // Add OrbitControls
//     const controls = new OrbitControls(camera, renderer.domElement); 
//     controls.enableDamping = true; 
//     controls.dampingFactor = 0.25; 

//     // Animation function
//     const animate = () => { 
//       requestAnimationFrame(animate); 
//       controls.update(); 

//       // Make the light follow the camera
//       if (lightRef.current) {
//         lightRef.current.position.set(camera.position.x, camera.position.y, camera.position.z);
//       }

//       renderer.render(scene, camera); 
//     }; 
//     animate(); 

//     // Handle window resize
//     const handleResize = () => { 
//       camera.aspect = window.innerWidth / window.innerHeight; 
//       camera.updateProjectionMatrix(); 
//       renderer.setSize(window.innerWidth, window.innerHeight); 
//     }; 
//     window.addEventListener('resize', handleResize); 

//     // Cleanup function
//     return () => { 
//       window.removeEventListener('resize', handleResize); 
//       controls.dispose(); 
//       renderer.dispose(); 
//       if (containerRef.current && renderer.domElement) { 
//         containerRef.current.removeChild(renderer.domElement); 
//       } 
//     }; 
//   }, [carModel, position]);

//   // Handle position updates
//   const handlePositionChange = (e, axis) => {
//     const value = parseFloat(e.target.value);
//     setPosition((prev) => ({ ...prev, [axis]: value }));
//   };

//   return (
//     <div>
//       <div ref={containerRef} style={{ width: '100%', height: '80vh' }}></div>

//       {/* Controls */}
//       <div style={{
//         position: 'absolute',
//         top: '20px', 
//         left: '20px', 
//         zIndex: 1, 
//         backgroundColor: 'rgba(255, 255, 255, 0.7)', 
//         padding: '10px',
//         borderRadius: '8px',
//       }}>
//         <h3>Move Model</h3>
//         <label>
//           Position X:
//           <input 
//             type="range" 
//             min="-10" 
//             max="10" 
//             step="0.1" 
//             value={position.x} 
//             onChange={(e) => handlePositionChange(e, 'x')} 
//           />
//           <span>{position.x}</span>
//         </label>
//         <br />
//         <label>
//           Position Y:
//           <input 
//             type="range" 
//             min="-10" 
//             max="10" 
//             step="0.1" 
//             value={position.y} 
//             onChange={(e) => handlePositionChange(e, 'y')} 
//           />
//           <span>{position.y}</span>
//         </label>
//         <br />
//         <label>
//           Position Z:
//           <input 
//             type="range" 
//             min="-10" 
//             max="10" 
//             step="0.1" 
//             value={position.z} 
//             onChange={(e) => handlePositionChange(e, 'z')} 
//           />
//           <span>{position.z}</span>
//         </label>
//       </div>
//     </div>
//   );
// };

// export default Peugeot;




// import React, { useEffect, useRef, useState } from 'react'; 
// import * as THREE from 'three'; 
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; 
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; 

// const Peugeot = ({ carModel }) => { 
//   const containerRef = useRef(null); 
//   const modelRef = useRef(null);
//   const lightRef = useRef(null); // Référence pour la lumière

//   // States to control position
//   const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });

//   useEffect(() => { 
//     if (!containerRef.current) return; 

//     // Create the scene
//     const scene = new THREE.Scene(); 

//     // Create the renderer
//     const renderer = new THREE.WebGLRenderer(); 
//     renderer.setClearColor(0xffffff, 1); // Background color 
//     renderer.setSize(window.innerWidth, window.innerHeight); 
//     renderer.shadowMap.enabled = true; 
//     renderer.shadowMap.type = THREE.PCFSoftShadowMap; 

//     // Append renderer to the container
//     containerRef.current.appendChild(renderer.domElement); 

//     // Create the camera
//     const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000); 
//     camera.position.set(0, 5, 15); 

//     // Add ambient light
//     const light = new THREE.AmbientLight(0x404040, 200); 
//     scene.add(light); 

//     // Add directional light
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 10); 
//     directionalLight.position.set(2, 3, 10).normalize(); 
//     directionalLight.castShadow = true; 
//     scene.add(directionalLight); 

//     // Référence à la lumière pour pouvoir la déplacer avec la caméra
//     lightRef.current = directionalLight;

//     // Load the GLTF model
//     const loader = new GLTFLoader(); 
//     loader.load(carModel, (gltf) => { 
//       const model = gltf.scene; 
//       model.scale.set(2, 2, 2); 
//       model.position.set(position.x, position.y, position.z); 
//       model.traverse((child) => { 
//         if (child.isMesh) { 
//           child.castShadow = true; 
//           child.receiveShadow = true; 
//         } 
//       }); 
//       scene.add(model);
      
//       // Save model to be updated later
//       modelRef.current = model;
//     });

//     // Add OrbitControls
//     const controls = new OrbitControls(camera, renderer.domElement); 
//     controls.enableDamping = true; 
//     controls.dampingFactor = 0.25; 

//     // Animation function
//     const animate = () => { 
//       requestAnimationFrame(animate); 
//       controls.update(); 

//       // Make the light follow the camera
//       if (lightRef.current) {
//         lightRef.current.position.set(camera.position.x, camera.position.y, camera.position.z);
//       }

//       renderer.render(scene, camera); 
//     }; 
//     animate(); 

//     // Handle window resize
//     const handleResize = () => { 
//       camera.aspect = window.innerWidth / window.innerHeight; 
//       camera.updateProjectionMatrix(); 
//       renderer.setSize(window.innerWidth, window.innerHeight); 
//     }; 
//     window.addEventListener('resize', handleResize); 

//     // Cleanup function
//     return () => { 
//       window.removeEventListener('resize', handleResize); 
//       controls.dispose(); 
//       renderer.dispose(); 
//       if (containerRef.current && renderer.domElement) { 
//         containerRef.current.removeChild(renderer.domElement); 
//       } 
//     }; 
//   }, [carModel, position]);

//   // Handle position updates with debounce
//   const handlePositionChange = (e, axis) => {
//     const value = parseFloat(e.target.value);
//     setPosition((prev) => ({ ...prev, [axis]: value }));
//   };

//   return (
//     <div>
//       <div ref={containerRef} style={{ width: '100%', height: '80vh' }}></div>

//       {/* Controls */}
//       <div style={{
//         position: 'absolute',
//         top: '20px', 
//         left: '20px', 
//         zIndex: 1, 
//         backgroundColor: 'rgba(255, 255, 255, 0.7)', 
//         padding: '10px',
//         borderRadius: '8px',
//       }}>
//         <h3>Move Model</h3>
//         <label>
//           Position X:
//           <input 
//             type="range" 
//             min="-10" 
//             max="10" 
//             step="0.1" 
//             value={position.x} 
//             onChange={(e) => handlePositionChange(e, 'x')} 
//           />
//           <span>{position.x}</span>
//         </label>
//         <br />
//         <label>
//           Position Y:
//           <input 
//             type="range" 
//             min="-10" 
//             max="10" 
//             step="0.1" 
//             value={position.y} 
//             onChange={(e) => handlePositionChange(e, 'y')} 
//           />
//           <span>{position.y}</span>
//         </label>
//         <br />
//         <label>
//           Position Z:
//           <input 
//             type="range" 
//             min="-10" 
//             max="10" 
//             step="0.1" 
//             value={position.z} 
//             onChange={(e) => handlePositionChange(e, 'z')} 
//           />
//           <span>{position.z}</span>
//         </label>
//       </div>
//     </div>
//   );
// };

// export default Peugeot;










// import React, { useEffect, useRef, useState } from 'react'; 
// import * as THREE from 'three'; 
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; 
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; 

// const Peugeot = ({ carModel }) => { 
//   const containerRef = useRef(null); 
//   const modelRef = useRef(null);
//   const lightRef = useRef(null); // Référence pour la lumière

//   // States to control position
//   const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });

//   useEffect(() => { 
//     if (!containerRef.current) return; 

//     // Create the scene
//     const scene = new THREE.Scene(); 

//     // Create the renderer
//     const renderer = new THREE.WebGLRenderer(); 
//     renderer.setClearColor(0xffffff, 1); // Background color 
//     renderer.setSize(window.innerWidth, window.innerHeight); 
//     renderer.shadowMap.enabled = true; 
//     renderer.shadowMap.type = THREE.PCFSoftShadowMap; 

//     // Append renderer to the container
//     containerRef.current.appendChild(renderer.domElement); 

//     // Create the camera
//     const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000); 
//     camera.position.set(0, 5, 15); 

//     // Add ambient light
//     const light = new THREE.AmbientLight(0x404040, 200); 
//     scene.add(light); 

//     // Add directional light
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 10); 
//     directionalLight.position.set(2, 3, 10).normalize(); 
//     directionalLight.castShadow = true; 
//     scene.add(directionalLight); 

//     // Référence à la lumière pour pouvoir la déplacer avec la caméra
//     lightRef.current = directionalLight;

//     // Load the GLTF model
//     const loader = new GLTFLoader(); 
//     loader.load(carModel, (gltf) => { 
//       const model = gltf.scene; 
//       model.scale.set(2, 2, 2); 
//       model.position.set(position.x, position.y, position.z); 
//       model.traverse((child) => { 
//         if (child.isMesh) { 
//           child.castShadow = true; 
//           child.receiveShadow = true; 
//         } 
//       }); 
//       scene.add(model);
      
//       // Save model to be updated later
//       modelRef.current = model;
//     });

//     // Add OrbitControls
//     const controls = new OrbitControls(camera, renderer.domElement); 
//     controls.enableDamping = true; 
//     controls.dampingFactor = 0.25; 

//     // Animation function
//     const animate = () => { 
//       requestAnimationFrame(animate); 
//       controls.update(); 

//       // Make the light follow the camera
//       if (lightRef.current) {
//         lightRef.current.position.set(camera.position.x, camera.position.y, camera.position.z);
//       }

//       renderer.render(scene, camera); 
//     }; 
//     animate(); 

//     // Handle window resize
//     const handleResize = () => { 
//       camera.aspect = window.innerWidth / window.innerHeight; 
//       camera.updateProjectionMatrix(); 
//       renderer.setSize(window.innerWidth, window.innerHeight); 
//     }; 
//     window.addEventListener('resize', handleResize); 

//     // Handle keyboard input for moving the model
//     const handleKeyDown = (event) => {
//       const step = 0.5; // Step size for movement
//       setPosition((prevPosition) => {
//         let newPosition = { ...prevPosition };

//         switch (event.key) {
//           case 'ArrowUp': // Move model forward
//             newPosition.z -= step;
//             break;
//           case 'ArrowDown': // Move model backward
//             newPosition.z += step;
//             break;
//           case 'ArrowLeft': // Move model left
//             newPosition.x -= step;
//             break;
//           case 'ArrowRight': // Move model right
//             newPosition.x += step;
//             break;
//           case 'w': // Move model up
//             newPosition.y += step;
//             break;
//           case 's': // Move model down
//             newPosition.y -= step;
//             break;
//           default:
//             break;
//         }
//         return newPosition;
//       });
//     };

//     // Add event listener for keydown
//     window.addEventListener('keydown', handleKeyDown);

//     // Cleanup function
//     return () => { 
//       window.removeEventListener('resize', handleResize); 
//       window.removeEventListener('keydown', handleKeyDown);
//       controls.dispose(); 
//       renderer.dispose(); 
//       if (containerRef.current && renderer.domElement) { 
//         containerRef.current.removeChild(renderer.domElement); 
//       } 
//     }; 
//   }, [carModel, position]);

//   return (
//     <div>
//       <div ref={containerRef} style={{ width: '100%', height: '80vh' }}></div>

//       {/* Instructions */}
//       <div style={{
//         position: 'absolute',
//         top: '20px', 
//         left: '20px', 
//         zIndex: 1, 
//         backgroundColor: 'rgba(255, 255, 255, 0.7)', 
//         padding: '10px',
//         borderRadius: '8px',
//       }}>
//         <h3>Move Model (Using Keyboard)</h3>
//         <ul>
//           <li>Use Arrow Keys to move: </li>
//           <li>Arrow Up: Forward</li>
//           <li>Arrow Down: Backward</li>
//           <li>Arrow Left: Left</li>
//           <li>Arrow Right: Right</li>
//           <li>W: Up</li>
//           <li>S: Down</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Peugeot;














// import React, { useEffect, useRef } from 'react'; 
// import * as THREE from 'three'; 
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; 
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; 

// const Peugeot = ({ carModel }) => { 
//   const containerRef = useRef(null); 
//   const modelRef = useRef(null);

//   useEffect(() => { 
//     if (!containerRef.current) return; 

//     // Create the scene
//     const scene = new THREE.Scene(); 

//     // Create the renderer
//     const renderer = new THREE.WebGLRenderer(); 
//     renderer.setClearColor(0xffffff, 1); // Background color 
//     renderer.setSize(window.innerWidth, window.innerHeight); 
//     renderer.shadowMap.enabled = true; 
//     renderer.shadowMap.type = THREE.PCFSoftShadowMap; 

//     // Append renderer to the container
//     containerRef.current.appendChild(renderer.domElement); 

//     // Create the camera
//     const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000); 
//     camera.position.set(0, 5, 15); 

//     // Add ambient light
//     const light = new THREE.AmbientLight(0x404040, 50); 
//     scene.add(light); 

//     // Add directional light
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 10); 
//     directionalLight.position.set(2, 3, 10).normalize(); 
//     directionalLight.castShadow = true; 
//     scene.add(directionalLight); 

//     // Load the GLTF model
//     const loader = new GLTFLoader(); 
//     loader.load(carModel, (gltf) => { 
//       const model = gltf.scene; 
//       model.scale.set(2, 2, 2); 
//       // Set initial position directly
//       model.position.set(0, 0, 0); 
//       model.traverse((child) => { 
//         if (child.isMesh) { 
//           child.castShadow = true; 
//           child.receiveShadow = true; 
//         } 
//       }); 
//       scene.add(model);
      
//       // Save model to be updated later
//       modelRef.current = model;
//     });

//     // Add OrbitControls
//     const controls = new OrbitControls(camera, renderer.domElement); 
//     controls.enableDamping = true; 
//     controls.dampingFactor = 0.25; 

//     // Animation function
//     const animate = () => { 
//       requestAnimationFrame(animate); 
//       controls.update(); 
//       renderer.render(scene, camera); 
//     }; 
//     animate(); 

//     // Handle window resize
//     const handleResize = () => { 
//       camera.aspect = window.innerWidth / window.innerHeight; 
//       camera.updateProjectionMatrix(); 
//       renderer.setSize(window.innerWidth, window.innerHeight); 
//     }; 
//     window.addEventListener('resize', handleResize); 

//     // Handle keyboard input for moving the model
//     const handleKeyDown = (event) => {
//       if (!modelRef.current) return; // Ensure the model is loaded

//       const step = 0.5; // Step size for movement
//       switch (event.key) {
//         case 'ArrowUp': // Move model forward
//           modelRef.current.position.z -= step;
//           break;
//         case 'ArrowDown': // Move model backward
//           modelRef.current.position.z += step;
//           break;
//         case 'ArrowLeft': // Move model left
//           modelRef.current.position.x -= step;
//           break;
//         case 'ArrowRight': // Move model right
//           modelRef.current.position.x += step;
//           break;
//         case 'w': // Move model up
//           modelRef.current.position.y += step;
//           break;
//         case 's': // Move model down
//           modelRef.current.position.y -= step;
//           break;
//         default:
//           break;
//       }
//     };

//     // Add event listener for keydown
//     window.addEventListener('keydown', handleKeyDown);

//     // Cleanup function
//     return () => { 
//       window.removeEventListener('resize', handleResize); 
//       window.removeEventListener('keydown', handleKeyDown);
//       controls.dispose(); 
//       renderer.dispose(); 
//       if (containerRef.current && renderer.domElement) { 
//         containerRef.current.removeChild(renderer.domElement); 
//       } 
//     }; 
//   }, [carModel]);

//   return (
//     <div>
//       <div ref={containerRef} style={{ width: '100%', height: '80vh' }}></div>
//     </div>
//   );
// };

// export default Peugeot;





// import React, { useEffect, useRef } from 'react'; 
// import * as THREE from 'three'; 
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; 
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; 

// const Peugeot = ({ carModel }) => { 
//   const containerRef = useRef(null); 
//   const modelRef = useRef(null);
//   const lightRef = useRef(null); // Référence à la lumière

//   useEffect(() => { 
//     if (!containerRef.current) return; 

//     // Create the scene
//     const scene = new THREE.Scene(); 

//     // Create the renderer
//     const renderer = new THREE.WebGLRenderer(); 
//     renderer.setClearColor(0xffffff, 1); // Background color 
//     renderer.setSize(window.innerWidth, window.innerHeight); 
//     renderer.shadowMap.enabled = true; 
//     renderer.shadowMap.type = THREE.PCFSoftShadowMap; 

//     // Append renderer to the container
//     containerRef.current.appendChild(renderer.domElement); 

//     // Create the camera
//     const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000); 
//     camera.position.set(0, 5, 15); 

//     // Add ambient light
//     const light = new THREE.AmbientLight(0x404040, 50); 
//     scene.add(light); 

//     // Add directional light
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 10); 
//     directionalLight.position.set(2, 3, 10).normalize(); 
//     directionalLight.castShadow = true; 
//     scene.add(directionalLight); 

//     // Référence à la lumière pour pouvoir la déplacer avec la caméra
//     lightRef.current = directionalLight;

//     // Load the GLTF model
//     const loader = new GLTFLoader(); 
//     loader.load(carModel, (gltf) => { 
//       const model = gltf.scene; 
//       model.scale.set(2, 2, 2); 
//       // Set initial position directly
//       model.position.set(0, 0, 0); 
//       model.traverse((child) => { 
//         if (child.isMesh) { 
//           child.castShadow = true; 
//           child.receiveShadow = true; 
//         } 
//       }); 
//       scene.add(model);
      
//       // Save model to be updated later
//       modelRef.current = model;
//     });

//     // Add OrbitControls
//     const controls = new OrbitControls(camera, renderer.domElement); 
//     controls.enableDamping = true; 
//     controls.dampingFactor = 0.25; 

//     // Animation function
//     const animate = () => { 
//       requestAnimationFrame(animate); 
//       controls.update(); 

//       // Update light position based on camera position
//       if (lightRef.current) {
//         // Make the light follow the camera's position or adjust direction based on camera
//         lightRef.current.position.set(camera.position.x + 5, camera.position.y + 5, camera.position.z + 5);
//       }

//       renderer.render(scene, camera); 
//     }; 
//     animate(); 

//     // Handle window resize
//     const handleResize = () => { 
//       camera.aspect = window.innerWidth / window.innerHeight; 
//       camera.updateProjectionMatrix(); 
//       renderer.setSize(window.innerWidth, window.innerHeight); 
//     }; 
//     window.addEventListener('resize', handleResize); 

//     // Handle keyboard input for moving the model
//     const handleKeyDown = (event) => {
//       if (!modelRef.current) return; // Ensure the model is loaded

//       const step = 0.5; // Step size for movement
//       switch (event.key) {
//         case 'ArrowUp': // Move model forward
//           modelRef.current.position.z -= step;
//           break;
//         case 'ArrowDown': // Move model backward
//           modelRef.current.position.z += step;
//           break;
//         case 'ArrowLeft': // Move model left
//           modelRef.current.position.x -= step;
//           break;
//         case 'ArrowRight': // Move model right
//           modelRef.current.position.x += step;
//           break;
//         case 'w': // Move model up
//           modelRef.current.position.y += step;
//           break;
//         case 's': // Move model down
//           modelRef.current.position.y -= step;
//           break;
//         default:
//           break;
//       }
//     };

//     // Add event listener for keydown
//     window.addEventListener('keydown', handleKeyDown);

//     // Cleanup function
//     return () => { 
//       window.removeEventListener('resize', handleResize); 
//       window.removeEventListener('keydown', handleKeyDown);
//       controls.dispose(); 
//       renderer.dispose(); 
//       if (containerRef.current && renderer.domElement) { 
//         containerRef.current.removeChild(renderer.domElement); 
//       } 
//     }; 
//   }, [carModel]);

//   return (
//     <div>
//       <div ref={containerRef} style={{ width: '100%', height: '80vh' }}></div>
//     </div>
//   );
// };

// export default Peugeot;



// import React, { useEffect, useRef } from 'react'; 
// import * as THREE from 'three'; 
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; 
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; 

// const Peugeot = ({ carModel }) => { 
//   const containerRef = useRef(null); 
//   const modelRef = useRef(null);
//   const lightRef = useRef(null); 

//   useEffect(() => { 
//     if (!containerRef.current) return; 

//     // Create the scene
//     const scene = new THREE.Scene(); 

//     // Create the renderer
//     const renderer = new THREE.WebGLRenderer(); 
//     renderer.setClearColor(0xffffff, 1); // Background color 
//     renderer.setSize(window.innerWidth, window.innerHeight); 
//     renderer.shadowMap.enabled = true; 
//     renderer.shadowMap.type = THREE.PCFSoftShadowMap; 

//     // Append renderer to the container
//     containerRef.current.appendChild(renderer.domElement); 

//     // Create the camera
//     const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000); 
//     camera.position.set(0, 5, 15); 

//     // Add ambient light
//     const light = new THREE.AmbientLight(0x404040, 50); 
//     scene.add(light); 

//     // Add directional light
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 10); 
//     directionalLight.position.set(2, 3, 10).normalize(); 
//     directionalLight.castShadow = true; 
//     scene.add(directionalLight); 

//     // Référence à la lumière pour pouvoir la déplacer avec la caméra
//     lightRef.current = directionalLight;

//     // Load the GLTF model
//     const loader = new GLTFLoader(); 
//     loader.load(carModel, (gltf) => { 
//       const model = gltf.scene; 
//       model.scale.set(2, 2, 2); 
//       model.position.set(0, 0, 0); 
//       model.traverse((child) => { 
//         if (child.isMesh) { 
//           child.castShadow = true; 
//           child.receiveShadow = true; 
//         } 
//       }); 
//       scene.add(model);
      
//       // Save model to be updated later
//       modelRef.current = model;
//     });

//     // Add OrbitControls
//     const controls = new OrbitControls(camera, renderer.domElement); 
//     controls.enableDamping = true; 
//     controls.dampingFactor = 0.25; 

//     // Animation function
//     const animate = () => { 
//       requestAnimationFrame(animate); 
//       controls.update(); 
      
//       // Update light position based on camera position
//       if (lightRef.current) {
//         lightRef.current.position.set(camera.position.x + 5, camera.position.y + 5, camera.position.z + 5);
//       }

//       renderer.render(scene, camera); 
//     }; 
//     animate(); 

//     // Handle window resize
//     const handleResize = () => { 
//       camera.aspect = window.innerWidth / window.innerHeight; 
//       camera.updateProjectionMatrix(); 
//       renderer.setSize(window.innerWidth, window.innerHeight); 
//     }; 
//     window.addEventListener('resize', handleResize); 

//     // Handle keyboard input for moving the model
//     const handleKeyDown = (event) => {
//       if (!modelRef.current) return; 

//       const step = 0.5; // Step size for movement
//       switch (event.key) {
//         case 'ArrowUp': 
//           modelRef.current.position.z -= step;
//           break;
//         case 'ArrowDown': 
//           modelRef.current.position.z += step;
//           break;
//         case 'ArrowLeft': 
//           modelRef.current.position.x -= step;
//           break;
//         case 'ArrowRight': 
//           modelRef.current.position.x += step;
//           break;
//         case 'w': 
//           modelRef.current.position.y += step;
//           break;
//         case 's': 
//           modelRef.current.position.y -= step;
//           break;
//         default:
//           break;
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);

//     return () => { 
//       window.removeEventListener('resize', handleResize); 
//       window.removeEventListener('keydown', handleKeyDown);
//       controls.dispose(); 
//       renderer.dispose(); 
//       if (containerRef.current && renderer.domElement) { 
//         containerRef.current.removeChild(renderer.domElement); 
//       } 
//     }; 
//   }, [carModel]);

//   return (
//     <div>
//       {/* Canvas 3D */}
//       <div ref={containerRef} style={{ width: '100%', height: '80vh' }}></div>

//       {/* Carte avec la citation */}
//       <div 
//         style={{
//           position: 'absolute',
//           top: '20px',
//           left: '20px',
//           backgroundColor: 'rgba(255, 255, 255, 0.7)',  // Transparent background
//           padding: '10px',
//           borderRadius: '5px',
//           fontSize: '18px',
//           color: '#333',
//           fontWeight: 'bold',
//           boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // léger effet d'ombre
//         }}
//       >
//         Explorer Votre Modele 
//       </div>
//     </div>
//   );
// };

// export default Peugeot;



// import React, { useEffect, useRef } from 'react'; 
// import * as THREE from 'three'; 
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; 
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; 

// const Peugeot = ({ carModel }) => { 
//   const containerRef = useRef(null); 
//   const modelRef = useRef(null);
//   const lightRef = useRef(null); 

//   // Type et Description manuels
//   const carType = "Peugeot 208";
//   const carDescription = "Une citadine compacte et élégante.";

//   useEffect(() => { 
//     if (!containerRef.current) return; 

//     // Create the scene
//     const scene = new THREE.Scene(); 

//     // Create the renderer
//     const renderer = new THREE.WebGLRenderer(); 
//     renderer.setClearColor(0xffffff, 1); // Background color 
//     renderer.setSize(window.innerWidth, window.innerHeight); 
//     renderer.shadowMap.enabled = true; 
//     renderer.shadowMap.type = THREE.PCFSoftShadowMap; 

//     // Append renderer to the container
//     containerRef.current.appendChild(renderer.domElement); 

//     // Create the camera
//     const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000); 
//     camera.position.set(0, 5, 15); 

//     // Add ambient light
//     const light = new THREE.AmbientLight(0x404040, 50); 
//     scene.add(light); 

//     // Add directional light
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 10); 
//     directionalLight.position.set(2, 3, 10).normalize(); 
//     directionalLight.castShadow = true; 
//     scene.add(directionalLight); 

//     // Référence à la lumière pour pouvoir la déplacer avec la caméra
//     lightRef.current = directionalLight;

//     // Load the GLTF model
//     const loader = new GLTFLoader(); 
//     loader.load(carModel, (gltf) => { 
//       const model = gltf.scene; 
//       model.scale.set(2, 2, 2); 
//       model.position.set(0, 0, 0); 
//       model.traverse((child) => { 
//         if (child.isMesh) { 
//           child.castShadow = true; 
//           child.receiveShadow = true; 
//         } 
//       }); 
//       scene.add(model);
      
//       // Save model to be updated later
//       modelRef.current = model;
//     });

//     // Add OrbitControls
//     const controls = new OrbitControls(camera, renderer.domElement); 
//     controls.enableDamping = true; 
//     controls.dampingFactor = 0.25; 

//     // Animation function
//     const animate = () => { 
//       requestAnimationFrame(animate); 
//       controls.update(); 
      
//       // Update light position based on camera position
//       if (lightRef.current) {
//         lightRef.current.position.set(camera.position.x + 5, camera.position.y + 5, camera.position.z + 5);
//       }

//       renderer.render(scene, camera); 
//     }; 
//     animate(); 

//     // Handle window resize
//     const handleResize = () => { 
//       camera.aspect = window.innerWidth / window.innerHeight; 
//       camera.updateProjectionMatrix(); 
//       renderer.setSize(window.innerWidth, window.innerHeight); 
//     }; 
//     window.addEventListener('resize', handleResize); 

//     // Handle keyboard input for moving the model
//     const handleKeyDown = (event) => {
//       if (!modelRef.current) return; 

//       const step = 0.5; // Step size for movement
//       switch (event.key) {
//         case 'ArrowUp': 
//           modelRef.current.position.z -= step;
//           break;
//         case 'ArrowDown': 
//           modelRef.current.position.z += step;
//           break;
//         case 'ArrowLeft': 
//           modelRef.current.position.x -= step;
//           break;
//         case 'ArrowRight': 
//           modelRef.current.position.x += step;
//           break;
//         case 'w': 
//           modelRef.current.position.y += step;
//           break;
//         case 's': 
//           modelRef.current.position.y -= step;
//           break;
//         default:
//           break;
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);

//     return () => { 
//       window.removeEventListener('resize', handleResize); 
//       window.removeEventListener('keydown', handleKeyDown);
//       controls.dispose(); 
//       renderer.dispose(); 
//       if (containerRef.current && renderer.domElement) { 
//         containerRef.current.removeChild(renderer.domElement); 
//       } 
//     }; 
//   }, [carModel]);

//   return (
//     <div>
//       {/* Canvas 3D */}
//       <div ref={containerRef} style={{ width: '100%', height: '80vh' }}></div>

//       {/* Carte avec la citation */}
//       <div 
//         style={{
//           position: 'absolute',
//           top: '20px',
//           left: '20px',
//           backgroundColor: 'rgba(255, 255, 255, 0.7)',  // Transparent background
//           padding: '10px',
//           borderRadius: '5px',
//           fontSize: '18px',
//           color: '#333',
//           fontWeight: 'bold',
//           boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // léger effet d'ombre
//         }}
//       >
//          Explorer Votre Modele 
//       </div>

//       {/* Type et Description */}
//       <div 
//         style={{
//           position: 'absolute',
//           bottom: '20px',
//           left: '20px',
//           backgroundColor: 'rgba(255, 255, 255, 0.8)',
//           padding: '10px',
//           borderRadius: '5px',
//           fontSize: '16px',
//           color: '#333',
//           boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//         }}
//       >
//         <strong>Type:</strong> {carType} <br />
//         <strong>Description:</strong> {carDescription}
//       </div>
//     </div>
//   );
// };

// export default Peugeot;





import React, { useEffect, useRef } from 'react'; 
import * as THREE from 'three'; 
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; 
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; 

const Peugeot = ({ carModel }) => { 
  const containerRef = useRef(null); 
  const modelRef = useRef(null);
  const lightRef = useRef(null); 

  // Type et Description manuels
  const carType = "Peugeot 208";
  const carDescription = "Une citadine compacte et élégante.";

  useEffect(() => { 
    if (!containerRef.current) return; 

    // Create the scene
    const scene = new THREE.Scene(); 

    // Create the renderer
    const renderer = new THREE.WebGLRenderer(); 
    renderer.setClearColor(0xffffff, 1); // Background color 
    renderer.setSize(window.innerWidth, window.innerHeight); 
    renderer.shadowMap.enabled = true; 
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; 

    // Append renderer to the container
    containerRef.current.appendChild(renderer.domElement); 

    // Create the camera
    const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000); 
    camera.position.set(0, 5, 15); 

    // Add ambient light
    const light = new THREE.AmbientLight(0x404040, 50); 
    scene.add(light); 

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 10); 
    directionalLight.position.set(2, 3, 10).normalize(); 
    directionalLight.castShadow = true; 
    scene.add(directionalLight); 

    // Référence à la lumière pour pouvoir la déplacer avec la caméra
    lightRef.current = directionalLight;

    // Load the GLTF model
    const loader = new GLTFLoader(); 
    loader.load(carModel, (gltf) => { 
      const model = gltf.scene; 
      model.scale.set(2, 2, 2); 
      model.position.set(0, 0, 0); 
      model.traverse((child) => { 
        if (child.isMesh) { 
          child.castShadow = true; 
          child.receiveShadow = true; 
        } 
      }); 
      scene.add(model);
      
      // Save model to be updated later
      modelRef.current = model;
    });

    // Add OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement); 
    controls.enableDamping = true; 
    controls.dampingFactor = 0.25; 

    // Animation function
    const animate = () => { 
      requestAnimationFrame(animate); 
      controls.update(); 
      
      // Update light position based on camera position
      if (lightRef.current) {
        lightRef.current.position.set(camera.position.x + 5, camera.position.y + 5, camera.position.z + 5);
      }

      renderer.render(scene, camera); 
    }; 
    animate(); 

    // Handle window resize
    const handleResize = () => { 
      camera.aspect = window.innerWidth / window.innerHeight; 
      camera.updateProjectionMatrix(); 
      renderer.setSize(window.innerWidth, window.innerHeight); 
    }; 
    window.addEventListener('resize', handleResize); 

    // Handle keyboard input for moving the model and rotating it
    const handleKeyDown = (event) => {
      if (!modelRef.current) return; 

      const step = 0.5; // Step size for movement
      const rotationStep = 0.05; // Rotation step for rotation
      
      switch (event.key) {
        case 'ArrowUp': 
          modelRef.current.position.z -= step;
          break;
        case 'ArrowDown': 
          modelRef.current.position.z += step;
          break;
        case 'ArrowLeft': 
          modelRef.current.position.x -= step;
          break;
        case 'ArrowRight': 
          modelRef.current.position.x += step;
          break;
        case 'w': 
          modelRef.current.position.y += step;
          break;
        case 's': 
          modelRef.current.position.y -= step;
          break;
        case 'r': // Rotate left
          modelRef.current.rotation.y += rotationStep;
          break;
        case 't': // Rotate right
          modelRef.current.rotation.y -= rotationStep;
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => { 
      window.removeEventListener('resize', handleResize); 
      window.removeEventListener('keydown', handleKeyDown);
      controls.dispose(); 
      renderer.dispose(); 
      if (containerRef.current && renderer.domElement) { 
        containerRef.current.removeChild(renderer.domElement); 
      } 
    }; 
  }, [carModel]);

  return (
    <div>
      {/* Canvas 3D */}
      <div ref={containerRef} style={{ width: '100%', height: '80vh' }}></div>

      {/* Carte avec la citation */}
      <div 
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',  // Transparent background
          padding: '10px',
          borderRadius: '5px',
          fontSize: '18px',
          color: '#333',
          fontWeight: 'bold',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // léger effet d'ombre
        }}
      >
         Explorez chaque détail de votre voiture ! 
      </div>

      {/* Type et Description */}
      <div 
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '10px',
          borderRadius: '5px',
          fontSize: '16px',
          color: '#333',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <strong>Type:</strong> {carType} <br />
        <strong>Description:</strong> {carDescription}
      </div>
    </div>
  );
};

export default Peugeot;
