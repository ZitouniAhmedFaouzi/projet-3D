// import React, { useEffect, useRef } from 'react'; 
// import * as THREE from 'three'; 
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; 
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; 

// const Golf = ({ carModel }) => { 
//   const containerRef = useRef(null); 
//   const modelRef = useRef(null);
//   const isMouseDown = useRef(false); // Track mouse state
//   const lastMousePosition = useRef({ x: 0, y: 0 }); // Track last mouse position

//   useEffect(() => { 
//     if (!containerRef.current) return; 

//     // Create the scene
//     const scene = new THREE.Scene(); 

//     // Create the renderer
//     const renderer = new THREE.WebGLRenderer(); 
//     renderer.setClearColor(0xffffff, 1); 
//     renderer.setSize(window.innerWidth, window.innerHeight); 
//     renderer.shadowMap.enabled = true; 
//     renderer.shadowMap.type = THREE.PCFSoftShadowMap; 

//     // Append renderer to the container
//     containerRef.current.appendChild(renderer.domElement); 

//     // Create the camera
//     const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000); 
//     camera.position.set(0, 2, 30); 

//     // Add ambient light
//     const light = new THREE.AmbientLight(0x404040, 25); 
//     scene.add(light); 

//     // Add directional light
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 1); 
//     directionalLight.position.set(2, 3, 10).normalize(); 
//     directionalLight.castShadow = true; 
//     scene.add(directionalLight); 

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

//     // Mouse interaction handlers
//     const handleMouseDown = (event) => {
//       isMouseDown.current = true;
//       lastMousePosition.current = { x: event.clientX, y: event.clientY };
//     };

//     const handleMouseMove = (event) => {
//       if (isMouseDown.current && modelRef.current) {
//         const deltaX = event.clientX - lastMousePosition.current.x;
//         const deltaY = event.clientY - lastMousePosition.current.y;

//         // Adjust rotation based on mouse movement
//         modelRef.current.rotation.y += deltaX * 0.01;
//         modelRef.current.rotation.x += deltaY * 0.01;

//         lastMousePosition.current = { x: event.clientX, y: event.clientY };
//       }
//     };

//     const handleMouseUp = () => {
//       isMouseDown.current = false;
//     };

//     // Add mouse event listeners
//     containerRef.current.addEventListener('mousedown', handleMouseDown);
//     containerRef.current.addEventListener('mousemove', handleMouseMove);
//     containerRef.current.addEventListener('mouseup', handleMouseUp);
//     containerRef.current.addEventListener('mouseleave', handleMouseUp);

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
//       containerRef.current.removeEventListener('mousedown', handleMouseDown);
//       containerRef.current.removeEventListener('mousemove', handleMouseMove);
//       containerRef.current.removeEventListener('mouseup', handleMouseUp);
//       containerRef.current.removeEventListener('mouseleave', handleMouseUp);
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

// export default Golf;










// import React, { useEffect, useRef } from 'react'; 
// import * as THREE from 'three'; 
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; 
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; 

// const Sko = ({ carModel }) => { 
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
//     camera.position.set(5, 3, 7); 

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
//       model.scale.set(1, 1, 1); 
//       // Set initial position directly
//       model.position.set(8, 0, 12); 
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

//     // Cleanup function
//     return () => { 
//       window.removeEventListener('resize', handleResize); 
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

// export default Sko;









































// import React, { useEffect, useRef } from 'react'; 
// import * as THREE from 'three'; 
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; 
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; 

// const Golf = ({ carModel }) => { 
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
//     camera.position.set(5, 6, 7); 

//     // Add ambient light
//     const light = new THREE.AmbientLight(0x404040, 140); 
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
//       model.scale.set(1, 1, 1); 
//       // Set initial position directly
//       model.position.set(8, 0, 12); 
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

// export default Golf;















// import React, { useEffect, useRef, useState } from 'react'; 
// import * as THREE from 'three'; 
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; 
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; 

// const Golf = ({ carModel }) => { 
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

//   // Handle keyboard events for position change
//   const handleKeyDown = (e) => {
//     const step = 0.1; // Define how much to move per key press
//     switch (e.key) {
//       case 'ArrowUp': // Move the model up along the Y axis
//         setPosition((prev) => ({ ...prev, y: prev.y + step }));
//         break;
//       case 'ArrowDown': // Move the model down along the Y axis
//         setPosition((prev) => ({ ...prev, y: prev.y - step }));
//         break;
//       case 'ArrowLeft': // Move the model left along the X axis
//         setPosition((prev) => ({ ...prev, x: prev.x - step }));
//         break;
//       case 'ArrowRight': // Move the model right along the X axis
//         setPosition((prev) => ({ ...prev, x: prev.x + step }));
//         break;
//       case 'w': // Move the model forward along the Z axis
//         setPosition((prev) => ({ ...prev, z: prev.z + step }));
//         break;
//       case 's': // Move the model backward along the Z axis
//         setPosition((prev) => ({ ...prev, z: prev.z - step }));
//         break;
//       default:
//         break;
//     }
//   };

//   // Add event listener for keyboard input
//   useEffect(() => {
//     window.addEventListener('keydown', handleKeyDown);

//     // Cleanup event listener on component unmount
//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);

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

// export default Golf;


// import React, { useEffect, useRef, useState } from 'react'; 
// import * as THREE from 'three'; 
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; 
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; 

// const Golf = ({ carModel }) => { 
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

//     // Add OrbitControls (mouse control for camera)
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

//     // Handle keyboard events for model movement
//     const handleKeyDown = (e) => {
//       const step = 0.1; // Define how much to move per key press
//       switch (e.key) {
//         case 'ArrowUp': // Move the model up along the Y axis
//           setPosition((prev) => ({ ...prev, y: prev.y + step })); break;
//         case 'ArrowDown': // Move the model down along the Y axis
//           setPosition((prev) => ({ ...prev, y: prev.y - step })); break;
//         case 'ArrowLeft': // Move the model left along the X axis
//           setPosition((prev) => ({ ...prev, x: prev.x - step })); break;
//         case 'ArrowRight': // Move the model right along the X axis
//           setPosition((prev) => ({ ...prev, x: prev.x + step })); break;
//         case 'w': // Move the model forward along the Z axis
//           setPosition((prev) => ({ ...prev, z: prev.z + step })); break;
//         case 's': // Move the model backward along the Z axis
//           setPosition((prev) => ({ ...prev, z: prev.z - step })); break;
//         default: break;
//       }
//     };

//     // Add event listener for keyboard input
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
//     <div style={{ display: 'flex', flexDirection: 'row' }}>
//       <div ref={containerRef} style={{ width: '70%', height: '80vh' }}></div>

//       {/* Descriptive Card */}
//       <div style={{
//         width: '30%', 
//         padding: '20px', 
//         backgroundColor: '#f4f4f4', 
//         marginLeft: '20px', 
//         borderRadius: '8px', 
//         boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
//       }}>
//         <h2>Model Description</h2>
//         <p>Car Model: Golf</p>
//         <p>This is a 3D representation of the Golf car model loaded from a GLTF file. You can use the arrow keys and the "W" and "S" keys to move the model in 3D space.</p>
//         <p><strong>Controls:</strong></p>
//         <ul>
//           <li>Arrow Up/Down: Move along Y axis</li>
//           <li>Arrow Left/Right: Move along X axis</li>
//           <li>W/S: Move along Z axis</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Golf;






import React, { useEffect, useRef } from 'react'; 
import * as THREE from 'three'; 
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; 
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; 

const Golf = ({ carModel }) => { 
  const containerRef = useRef(null); 
  const modelRef = useRef(null);
  const lightRef = useRef(null); 

  // Type et Description manuels
  const carType = "Golf";
  const carDescription = "Une Golf élégante.";

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
      model.position.set(9, -2, 0); 
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
        Plongez dans l'expérience de votre voiture !
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

export default Golf;
