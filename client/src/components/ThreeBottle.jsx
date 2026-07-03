import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBottle() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || 300;
    let height = container.clientHeight || 320;

    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    container.appendChild(renderer.domElement);

    // Create a stylized 3D Glass Bottle / Flask (representing formulation)
    const bottleGroup = new THREE.Group();

    // Glass material
    const glassMat = new THREE.MeshPhongMaterial({ 
      color: 0xffffff, 
      transparent: true, 
      opacity: 0.25, 
      shininess: 120,
      specular: 0xffffff
    });

    // Bottle body
    const bodyGeo = new THREE.CylinderGeometry(0.6, 0.8, 2.2, 32);
    const body = new THREE.Mesh(bodyGeo, glassMat);
    bottleGroup.add(body);

    // Bottle neck
    const neckGeo = new THREE.CylinderGeometry(0.25, 0.6, 0.6, 32);
    const neck = new THREE.Mesh(neckGeo, glassMat);
    neck.position.y = 1.4;
    bottleGroup.add(neck);

    // Liquid inside
    const liquidGeo = new THREE.CylinderGeometry(0.55, 0.75, 1.6, 32);
    const liquidMat = new THREE.MeshPhongMaterial({ 
      color: 0xab3600, // Matches secondary terracotta/burnt orange color
      shininess: 80,
      specular: 0x3d2b1f
    }); 
    const liquid = new THREE.Mesh(liquidGeo, liquidMat);
    liquid.position.y = -0.3;
    bottleGroup.add(liquid);

    // Cork/Stopper on top
    const corkGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.3, 16);
    const corkMat = new THREE.MeshPhongMaterial({ color: 0x5a463a });
    const cork = new THREE.Mesh(corkGeo, corkMat);
    cork.position.y = 1.75;
    bottleGroup.add(cork);

    scene.add(bottleGroup);

    // Lights
    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xfdd6b34, 0.5); // Warm terracotta backlight
    dirLight2.position.set(-5, -2, -5);
    scene.add(dirLight2);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Interaction State
    let isDragging = false;
    let previousPointerPosition = { x: 0, y: 0 };
    let rotationVelocityX = 0;
    let rotationVelocityY = 0;
    const damping = 0.95;

    const onPointerDown = (e) => {
      isDragging = true;
      // Capture pointer position
      previousPointerPosition = { x: e.clientX, y: e.clientY };
      // Prevent browser scroll or drag behaviors on touch
      if (e.pointerType === 'touch') {
        container.style.touchAction = 'none';
      }
    };

    const onPointerMove = (e) => {
      if (!isDragging) return;
      
      const deltaX = e.clientX - previousPointerPosition.x;
      const deltaY = e.clientY - previousPointerPosition.y;

      // Add rotation velocity based on swipe/drag distance
      rotationVelocityY = deltaX * 0.005;
      rotationVelocityX = deltaY * 0.005;

      previousPointerPosition = { x: e.clientX, y: e.clientY };
    };

    const onPointerUp = () => {
      isDragging = false;
      container.style.touchAction = 'auto';
    };

    // Attach pointer event listeners
    container.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    let animationFrameId;

    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      
      if (isDragging) {
        // Apply immediate mouse/touch movement
        bottleGroup.rotation.y += rotationVelocityY;
        bottleGroup.rotation.x += rotationVelocityX;
      } else {
        // Apply inertia decay
        bottleGroup.rotation.y += rotationVelocityY;
        bottleGroup.rotation.x += rotationVelocityX;

        rotationVelocityX *= damping;
        rotationVelocityY *= damping;

        // Apply slow continuous idle spin if user isn't interacting and friction took place
        if (Math.abs(rotationVelocityY) < 0.001) {
          bottleGroup.rotation.y += 0.01;
        }

        // Return X tilt back to upright position gently
        bottleGroup.rotation.x += (0 - bottleGroup.rotation.x) * 0.05;
      }
      
      // Gentle bobbing effect
      bottleGroup.position.y = Math.sin(Date.now() * 0.0015) * 0.12;
      
      renderer.render(scene, camera);
    }

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);
    
    // Create an observer to check when the container changes size
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    return () => {
      // Cleanup
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();

      // Clean up pointer listeners
      container.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      
      // Dispose materials/geometries
      bodyGeo.dispose();
      neckGeo.dispose();
      liquidGeo.dispose();
      corkGeo.dispose();
      glassMat.dispose();
      liquidMat.dispose();
      corkMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full min-h-[250px] cursor-grab active:cursor-grabbing" 
      style={{ touchAction: 'none' }}
    />
  );
}
