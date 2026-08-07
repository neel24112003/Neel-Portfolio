import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Layers, Wind, Building, Droplets, MapPin } from 'lucide-react';

export const GisGlobeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeLayer, setActiveLayer] = useState<'lulc' | 'wind' | 'buildings' | 'flood'>('lulc');

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 14);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Globe Mesh (Wireframe + Glow)
    const globeGeo = new THREE.SphereGeometry(4, 36, 36);
    const globeMat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const globe = new THREE.Mesh(globeGeo, globeMat);
    scene.add(globe);

    // Inner Atmosphere Core
    const innerGeo = new THREE.SphereGeometry(3.9, 32, 32);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x052e16,
      transparent: true,
      opacity: 0.6,
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerCore);

    // Satellite Orbit Ring
    const orbitGeo = new THREE.TorusGeometry(5.8, 0.04, 16, 100);
    const orbitMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.5,
    });
    const orbit = new THREE.Mesh(orbitGeo, orbitMat);
    orbit.rotation.x = Math.PI / 2.5;
    scene.add(orbit);

    // Satellite Mesh
    const satGeo = new THREE.BoxGeometry(0.3, 0.3, 0.5);
    const satMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const satellite = new THREE.Mesh(satGeo, satMat);
    scene.add(satellite);

    // Gujarat Marker Node (Lat/Long mapped to sphere)
    const gujaratGroup = new THREE.Group();
    
    // Lat ~ 22.25, Long ~ 71.19 -> converted to 3D point on R=4 sphere
    const lat = 22.25 * (Math.PI / 180);
    const lon = 71.19 * (Math.PI / 180);
    const radius = 4.05;
    const x = radius * Math.cos(lat) * Math.cos(lon);
    const y = radius * Math.sin(lat);
    const z = radius * Math.cos(lat) * Math.sin(lon);

    const pinGeo = new THREE.SphereGeometry(0.15, 16, 16);
    const pinMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });
    const pin = new THREE.Mesh(pinGeo, pinMat);
    pin.position.set(x, y, z);
    gujaratGroup.add(pin);

    // Pulse Ring around Gujarat pin
    const pulseGeo = new THREE.RingGeometry(0.2, 0.4, 32);
    const pulseMat = new THREE.MeshBasicMaterial({
      color: 0xef4444,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.6,
    });
    const pulseRing = new THREE.Mesh(pulseGeo, pulseMat);
    pulseRing.position.set(x, y, z);
    pulseRing.lookAt(0, 0, 0);
    gujaratGroup.add(pulseRing);

    scene.add(gujaratGroup);

    // Layer Feature Points (Wind Turbines, Buildings, Flood Contours)
    const layerPointsGroup = new THREE.Group();
    scene.add(layerPointsGroup);

    // Function to generate scatter nodes on sphere based on active layer
    const populateLayerPoints = (layerType: string) => {
      // Clear existing
      while (layerPointsGroup.children.length > 0) {
        const obj = layerPointsGroup.children[0];
        layerPointsGroup.remove(obj);
      }

      const count = layerType === 'wind' ? 25 : layerType === 'buildings' ? 60 : 40;
      const layerGeo = new THREE.BufferGeometry();
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);

      let colorHex = 0x10b981; // LULC Green
      if (layerType === 'wind') colorHex = 0x38bdf8; // Cyan
      if (layerType === 'buildings') colorHex = 0xf59e0b; // Amber
      if (layerType === 'flood') colorHex = 0x6366f1; // Blue

      const c = new THREE.Color(colorHex);

      for (let i = 0; i < count; i++) {
        // Distribute points in a region near Gujarat
        const theta = (70 + (Math.random() - 0.5) * 40) * (Math.PI / 180);
        const phi = (90 - (22 + (Math.random() - 0.5) * 30)) * (Math.PI / 180);
        const r = 4.08;

        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.cos(phi);
        positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);

        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
      }

      layerGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      layerGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const mat = new THREE.PointsMaterial({
        size: layerType === 'buildings' ? 0.15 : 0.25,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
      });

      const pSystem = new THREE.Points(layerGeo, mat);
      layerPointsGroup.add(pSystem);
    };

    populateLayerPoints(activeLayer);

    // Mouse Controls / Rotation
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      globe.rotation.y += deltaX * 0.008;
      globe.rotation.x += deltaY * 0.008;
      innerCore.rotation.y += deltaX * 0.008;
      gujaratGroup.rotation.y += deltaX * 0.008;
      layerPointsGroup.rotation.y += deltaX * 0.008;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const domElem = renderer.domElement;
    domElem.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId: number;
    let t = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      t += 0.01;

      if (!isDragging) {
        globe.rotation.y += 0.003;
        innerCore.rotation.y += 0.003;
        gujaratGroup.rotation.y += 0.003;
        layerPointsGroup.rotation.y += 0.003;
      }

      // Orbit Satellite
      const satAngle = t * 0.8;
      const satR = 5.8;
      satellite.position.x = satR * Math.cos(satAngle);
      satellite.position.z = satR * Math.sin(satAngle);
      satellite.position.y = Math.sin(satAngle) * 2;

      // Pulse ring scaling
      const scale = 1 + Math.sin(t * 3) * 0.3;
      pulseRing.scale.set(scale, scale, 1);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      domElem.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);

      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }

      globeGeo.dispose();
      globeMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      orbitGeo.dispose();
      orbitMat.dispose();
      satGeo.dispose();
      satMat.dispose();
      pinGeo.dispose();
      pinMat.dispose();
      renderer.dispose();
    };
  }, [activeLayer]);

  return (
    <div className="relative w-full h-[450px] rounded-2xl glass-panel overflow-hidden border border-white/10 flex flex-col justify-between p-4">
      {/* Top Header Overlay */}
      <div className="z-10 flex flex-wrap items-center justify-between gap-2 bg-surface-50/80 backdrop-blur-md p-3 rounded-xl border border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
            GEOSPATIAL SPATIAL ENGINE • GUJARAT FOCUS
          </span>
        </div>
        <div className="text-xs text-text-secondary font-mono">
          [DRAG TO ROTATE 3D GLOBE]
        </div>
      </div>

      {/* 3D Canvas */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Bottom Interactive Layer Controls */}
      <div className="z-10 bg-surface-50/90 backdrop-blur-md p-3 rounded-xl border border-white/10 flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs font-mono text-text-muted">ACTIVE SPATIAL LAYER:</span>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveLayer('lulc')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all ${
              activeLayer === 'lulc'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-glow-sm'
                : 'bg-surface-100 text-text-secondary hover:text-white border border-white/5'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            LULC Classification
          </button>
          <button
            onClick={() => setActiveLayer('wind')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all ${
              activeLayer === 'wind'
                ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-glow-sm'
                : 'bg-surface-100 text-text-secondary hover:text-white border border-white/5'
            }`}
          >
            <Wind className="w-3.5 h-3.5" />
            Wind Turbines
          </button>
          <button
            onClick={() => setActiveLayer('buildings')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all ${
              activeLayer === 'buildings'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-glow-sm'
                : 'bg-surface-100 text-text-secondary hover:text-white border border-white/5'
            }`}
          >
            <Building className="w-3.5 h-3.5" />
            Building Segmentation
          </button>
          <button
            onClick={() => setActiveLayer('flood')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all ${
              activeLayer === 'flood'
                ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 shadow-glow-sm'
                : 'bg-surface-100 text-text-secondary hover:text-white border border-white/5'
            }`}
          >
            <Droplets className="w-3.5 h-3.5" />
            Flood Simulation
          </button>
        </div>
      </div>
    </div>
  );
};
