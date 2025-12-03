import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
  uniform float uTime;
  uniform float uPixelRatio;
  uniform vec2 uMouse;
  
  attribute float aScale;
  attribute float aSpeed;
  
  varying vec3 vColor;
  
  void main() {
    vec3 pos = position;
    
    // Floating motion
    float speed = aSpeed;
    pos.y += sin(uTime * speed + position.x * 2.0) * 0.3;
    pos.x += cos(uTime * speed * 0.7 + position.y * 1.5) * 0.2;
    pos.z += sin(uTime * speed * 0.5 + position.z) * 0.15;
    
    // Mouse interaction
    vec2 mousePos = (uMouse - 0.5) * 4.0;
    float dist = length(pos.xy - mousePos);
    float influence = smoothstep(2.0, 0.0, dist);
    pos.xy += normalize(pos.xy - mousePos) * influence * 0.5;
    
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    
    // Size based on distance and scale
    float sizeAtten = 300.0 / -mvPosition.z;
    gl_PointSize = aScale * uPixelRatio * sizeAtten;
    gl_PointSize = clamp(gl_PointSize, 1.0, 15.0);
    
    // Color based on position
    float colorMix = (position.y + 2.0) / 4.0;
    vec3 color1 = vec3(0.486, 0.227, 0.929);
    vec3 color2 = vec3(0.753, 0.518, 0.988);
    vColor = mix(color1, color2, colorMix);
  }
`;

const fragmentShader = `
  varying vec3 vColor;
  
  void main() {
    float dist = length(gl_PointCoord - 0.5);
    if (dist > 0.5) discard;
    
    float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
    alpha *= 0.8;
    
    // Glow effect
    vec3 color = vColor;
    color += vColor * (1.0 - dist * 2.0) * 0.3;
    
    gl_FragColor = vec4(color, alpha);
  }
`;

function Particles() {
  const pointsRef = useRef();
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  const { positions, scales, speeds } = useMemo(() => {
    const count = 500;
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);
    const speeds = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 8;
      positions[i3 + 1] = (Math.random() - 0.5) * 6;
      positions[i3 + 2] = (Math.random() - 0.5) * 4;
      scales[i] = Math.random() * 0.5 + 0.5;
      speeds[i] = Math.random() * 0.5 + 0.3;
    }

    return { positions, scales, speeds };
  }, []);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    }),
    []
  );

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.material.uniforms.uTime.value = state.clock.elapsedTime;
      pointsRef.current.material.uniforms.uMouse.value.lerp(
        new THREE.Vector2(mouseRef.current.x, mouseRef.current.y),
        0.05
      );
    }
  });

  return (
    <points
      ref={pointsRef}
      onPointerMove={(e) => {
        mouseRef.current = {
          x: (e.point.x / 4 + 0.5),
          y: (e.point.y / 3 + 0.5),
        };
      }}
    >
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-aScale"
          count={scales.length}
          array={scales}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-aSpeed"
          count={speeds.length}
          array={speeds}
          itemSize={1}
        />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function ParticleField({ className }) {
  return (
    <div className={`particles-container ${className || ''}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{
          width: '100%',
          height: '100%',
        }}
        gl={{ antialias: true, alpha: true }}
      >
        <Particles />
      </Canvas>
    </div>
  );
}

export default ParticleField;

