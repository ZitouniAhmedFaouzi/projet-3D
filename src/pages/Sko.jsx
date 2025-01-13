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



import React, { useEffect, useRef } from 'react'; 
import * as THREE from 'three'; 
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; 
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; 

const Sko = ({ carModel }) => { 
  const containerRef = useRef(null); 
  const modelRef = useRef(null);

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
    camera.position.set(5, 3, 7); 

    // Add ambient light
    const light = new THREE.AmbientLight(0x404040, 50); 
    scene.add(light); 

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 10); 
    directionalLight.position.set(2, 3, 10).normalize(); 
    directionalLight.castShadow = true; 
    scene.add(directionalLight); 

    // Load the GLTF model
    const loader = new GLTFLoader(); 
    loader.load(carModel, (gltf) => { 
      const model = gltf.scene; 
      model.scale.set(1, 1, 1); 
      // Set initial position directly
      model.position.set(8, 0, 12); 
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

    // Handle keyboard input for moving the model
    const handleKeyDown = (event) => {
      if (!modelRef.current) return; // Ensure the model is loaded

      const step = 0.5; // Step size for movement
      switch (event.key) {
        case 'ArrowUp': // Move model forward
          modelRef.current.position.z -= step;
          break;
        case 'ArrowDown': // Move model backward
          modelRef.current.position.z += step;
          break;
        case 'ArrowLeft': // Move model left
          modelRef.current.position.x -= step;
          break;
        case 'ArrowRight': // Move model right
          modelRef.current.position.x += step;
          break;
        case 'w': // Move model up
          modelRef.current.position.y += step;
          break;
        case 's': // Move model down
          modelRef.current.position.y -= step;
          break;
        default:
          break;
      }
    };

    // Add event listener for keydown
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup function
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
      <div ref={containerRef} style={{ width: '100%', height: '80vh' }}></div>
    </div>
  );
};

export default Sko;
