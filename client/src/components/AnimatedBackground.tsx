import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: 'high-performance'
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0.1);
    containerRef.current.appendChild(renderer.domElement);

    camera.position.z = 50;

    // Create floating geometric shapes with neon colors
    const shapes: THREE.Mesh[] = [];
    const neonGreen = 0x00FF41;
    const neonCyan = 0x00FFFF;

    // Create tetrahedrons
    for (let i = 0; i < 5; i++) {
      const geometry = new THREE.TetrahedronGeometry(Math.random() * 3 + 2);
      const material = new THREE.MeshPhongMaterial({
        color: i % 2 === 0 ? neonGreen : neonCyan,
        emissive: i % 2 === 0 ? neonGreen : neonCyan,
        emissiveIntensity: 0.3,
        wireframe: Math.random() > 0.5,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      scene.add(mesh);
      shapes.push(mesh);
    }

    // Create octahedrons
    for (let i = 0; i < 4; i++) {
      const geometry = new THREE.OctahedronGeometry(Math.random() * 2 + 1);
      const material = new THREE.MeshPhongMaterial({
        color: i % 2 === 0 ? neonCyan : neonGreen,
        emissive: i % 2 === 0 ? neonCyan : neonGreen,
        emissiveIntensity: 0.2,
        wireframe: true,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100
      );
      scene.add(mesh);
      shapes.push(mesh);
    }

    // Lighting
    const light1 = new THREE.PointLight(neonGreen, 1, 100);
    light1.position.set(20, 20, 20);
    scene.add(light1);

    const light2 = new THREE.PointLight(neonCyan, 1, 100);
    light2.position.set(-20, -20, 20);
    scene.add(light2);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    // Animation loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      shapes.forEach((shape, index) => {
        shape.rotation.x += (Math.random() - 0.5) * 0.01;
        shape.rotation.y += (Math.random() - 0.5) * 0.01;
        shape.rotation.z += (Math.random() - 0.5) * 0.01;

        // Gentle floating motion
        shape.position.y += Math.sin(Date.now() * 0.0001 + index) * 0.02;
        shape.position.x += Math.cos(Date.now() * 0.00008 + index) * 0.01;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 opacity-30 pointer-events-none"
      style={{ background: 'radial-gradient(ellipse at center, rgba(0,255,65,0.1) 0%, rgba(0,0,0,0.8) 100%)' }}
    />
  );
}
