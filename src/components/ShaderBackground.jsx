import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  
  void main() {
    vUv = uv;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  
  varying vec2 vUv;
  varying vec3 vPosition;
  
  #define PI 3.14159265359
  
  // Simplex noise functions
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  
  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    
    i = mod289(i);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
            
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }
  
  float fbm(vec3 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    
    for (int i = 0; i < 6; i++) {
      value += amplitude * snoise(p * frequency);
      amplitude *= 0.5;
      frequency *= 2.0;
    }
    return value;
  }
  
  void main() {
    vec2 uv = vUv;
    vec2 p = uv * 2.0 - 1.0;
    p.x *= uResolution.x / uResolution.y;
    
    float t = uTime * 0.15;
    
    // Create flowing noise layers
    vec3 pos1 = vec3(p * 1.5, t * 0.5);
    vec3 pos2 = vec3(p * 2.0 + 10.0, t * 0.3);
    vec3 pos3 = vec3(p * 0.8 - 5.0, t * 0.7);
    
    float n1 = fbm(pos1);
    float n2 = fbm(pos2);
    float n3 = fbm(pos3);
    
    // Mouse interaction
    vec2 mouseEffect = (uMouse - 0.5) * 0.3;
    float mouseDist = length(p - mouseEffect * 2.0);
    float mouseInfluence = smoothstep(1.5, 0.0, mouseDist) * 0.3;
    
    // Combine noise layers
    float noise = n1 * 0.5 + n2 * 0.3 + n3 * 0.2;
    noise += mouseInfluence;
    
    // Color palette - deep purples and violets
    vec3 color1 = vec3(0.486, 0.227, 0.929); // Primary purple #7c3aed
    vec3 color2 = vec3(0.659, 0.333, 0.969); // Secondary #a855f7
    vec3 color3 = vec3(0.753, 0.518, 0.988); // Tertiary #c084fc
    vec3 color4 = vec3(0.067, 0.043, 0.122); // Deep dark
    vec3 color5 = vec3(0.298, 0.133, 0.667); // Mid purple
    
    // Create aurora-like color mixing
    float colorMix1 = smoothstep(-0.5, 0.5, noise + sin(t + uv.x * 3.0) * 0.2);
    float colorMix2 = smoothstep(-0.3, 0.7, n2 + cos(t * 0.7 + uv.y * 2.0) * 0.3);
    float colorMix3 = smoothstep(0.0, 1.0, n3);
    
    vec3 col = mix(color4, color5, colorMix1);
    col = mix(col, color1, colorMix2 * 0.6);
    col = mix(col, color2, pow(colorMix1 * colorMix2, 2.0) * 0.8);
    col = mix(col, color3, pow(noise * 0.5 + 0.5, 3.0) * 0.4);
    
    // Add glow effect
    float glow = pow(max(noise * 0.5 + 0.5, 0.0), 2.0);
    col += color2 * glow * 0.15;
    
    // Vignette
    float vignette = 1.0 - smoothstep(0.3, 1.5, length(p * 0.7));
    col *= vignette * 0.7 + 0.3;
    
    // Add subtle grain
    float grain = fract(sin(dot(uv * 1000.0, vec2(12.9898, 78.233))) * 43758.5453);
    col += (grain - 0.5) * 0.02;
    
    // Fade to background at edges
    vec3 bgColor = vec3(0.039, 0.039, 0.059);
    float edgeFade = smoothstep(0.0, 0.5, min(uv.x, min(uv.y, min(1.0 - uv.x, 1.0 - uv.y))));
    col = mix(bgColor, col, edgeFade * 0.8 + 0.2);
    
    gl_FragColor = vec4(col, 1.0);
  }
`;

function ShaderPlane() {
  const meshRef = useRef();
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    }),
    []
  );

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.uTime.value = state.clock.elapsedTime;
      meshRef.current.material.uniforms.uMouse.value.lerp(
        new THREE.Vector2(mouseRef.current.x, mouseRef.current.y),
        0.05
      );
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerMove={(e) => {
        mouseRef.current = {
          x: (e.point.x + 1) / 2,
          y: (e.point.y + 1) / 2,
        };
      }}
    >
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

function ShaderBackground() {
  return (
    <div className="shader-container">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        gl={{ antialias: true, alpha: false }}
      >
        <ShaderPlane />
      </Canvas>
    </div>
  );
}

export default ShaderBackground;

