



import React, { useEffect, useRef } from 'react'; 
import * as THREE from 'three'; 
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; 
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; 

const Fiat = ({ carModel }) => { 
  const containerRef = useRef(null); 
  const modelRef = useRef(null);
  const lightRef = useRef(null); 

  // Type et Description manuels
  const carType = "Fiat 500";
  const carDescription = "Une Fiat compacte et élégante.";

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
    camera.position.set(0, 3, 10); 

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
      model.scale.set(3, 3, 3); 
      model.position.set(-30, -10, 10); 
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

export default Fiat;
