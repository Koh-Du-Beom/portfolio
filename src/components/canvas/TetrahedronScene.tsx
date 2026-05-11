"use client";

import { useRef, useState, useMemo, useCallback, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Line } from "@react-three/drei";
import * as THREE from "three";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";

/* ── Constants ── */

const S = 1.6;
const vertices: [number, number, number][] = [
  [0, S, 0],
  [S * 0.9428, -S / 3, 0],
  [-S * 0.4714, -S / 3, S * 0.8165],
  [-S * 0.4714, -S / 3, -S * 0.8165],
];

const faceConfig = [
  { idx: [0, 2, 1] as const, label: "About", id: "about", icon: "about" },
  { idx: [0, 1, 3] as const, label: "Experience", id: "experience", icon: "experience" },
  { idx: [0, 3, 2] as const, label: "Projects", id: "projects", icon: "projects" },
  { idx: [1, 2, 3] as const, label: "Skills", id: "skills", icon: "skills" },
];

const edgePairs: [number, number][] = [
  [0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3],
];

/* ── Canvas texture helpers ── */

function drawIcon(ctx: CanvasRenderingContext2D, type: string, cx: number, cy: number, r: number) {
  ctx.strokeStyle = "#ffffff";
  ctx.fillStyle = "transparent";
  ctx.lineWidth = r * 0.12;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  switch (type) {
    case "about":
      ctx.beginPath();
      ctx.arc(cx, cy - r * 0.18, r * 0.22, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx - r * 0.38, cy + r * 0.42);
      ctx.quadraticCurveTo(cx - r * 0.38, cy + r * 0.08, cx, cy + r * 0.08);
      ctx.quadraticCurveTo(cx + r * 0.38, cy + r * 0.08, cx + r * 0.38, cy + r * 0.42);
      ctx.stroke();
      break;
    case "experience":
      ctx.beginPath();
      ctx.moveTo(cx - r * 0.18, cy - r * 0.38);
      ctx.lineTo(cx - r * 0.18, cy + r * 0.38);
      ctx.stroke();
      for (const dy of [-r * 0.28, 0, r * 0.28]) {
        ctx.beginPath();
        ctx.arc(cx - r * 0.18, cy + dy, r * 0.07, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(cx - r * 0.06, cy + dy);
        ctx.lineTo(cx + r * 0.32, cy + dy);
        ctx.stroke();
      }
      ctx.fillStyle = "transparent";
      break;
    case "projects":
      ctx.beginPath();
      ctx.roundRect(cx - r * 0.44, cy - r * 0.32, r * 0.88, r * 0.64, r * 0.08);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx - r * 0.44, cy - r * 0.16);
      ctx.lineTo(cx + r * 0.44, cy - r * 0.16);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx - r * 0.3, cy - r * 0.24, r * 0.04, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();
      ctx.fillStyle = "transparent";
      ctx.beginPath();
      ctx.moveTo(cx - r * 0.24, cy + r * 0.0);
      ctx.lineTo(cx - r * 0.1, cy + r * 0.1);
      ctx.lineTo(cx - r * 0.24, cy + r * 0.2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx - r * 0.02, cy + r * 0.2);
      ctx.lineTo(cx + r * 0.18, cy + r * 0.2);
      ctx.stroke();
      break;
    case "skills":
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3 - Math.PI / 2;
        const x = cx + r * 0.4 * Math.cos(angle);
        const y = cy + r * 0.4 * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3 - Math.PI / 2;
        const x = cx + r * 0.2 * Math.cos(angle);
        const y = cy + r * 0.2 * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3 - Math.PI / 2;
        ctx.beginPath();
        ctx.moveTo(cx + r * 0.2 * Math.cos(angle), cy + r * 0.2 * Math.sin(angle));
        ctx.lineTo(cx + r * 0.4 * Math.cos(angle), cy + r * 0.4 * Math.sin(angle));
        ctx.stroke();
      }
      break;
  }
}

function createIconTexture(type: string): THREE.CanvasTexture {
  const size = 320;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  drawIcon(ctx, type, size / 2, size / 2, size * 0.38);
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

function createTextTexture(text: string): THREE.CanvasTexture {
  const scale = 2;
  const canvas = document.createElement("canvas");
  canvas.width = 300 * scale;
  canvas.height = 56 * scale;
  const ctx = canvas.getContext("2d")!;
  ctx.font = `600 ${30 * scale}px Pretendard, system-ui, -apple-system, sans-serif`;
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

/* ── Face ── */

function Face({
  indices,
  label,
  iconType,
  onSelect,
  isLight,
}: {
  indices: readonly [number, number, number];
  label: string;
  iconType: string;
  onSelect: () => void;
  isLight: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const iconMatRef = useRef<THREE.MeshBasicMaterial>(null);
  const textMatRef = useRef<THREE.MeshBasicMaterial>(null);

  const colorBright = useMemo(
    () => new THREE.Color(isLight ? 0x09090b : 0xffffff),
    [isLight]
  );
  const colorDim = useMemo(
    () => new THREE.Color(isLight ? 0x52525b : 0x888888),
    [isLight]
  );

  const { geometry, centroid, quaternion, normalVec, centroidVec, iconTex, textTex } =
    useMemo(() => {
      const [i0, i1, i2] = indices;
      const A = new THREE.Vector3(...vertices[i0]);
      const B = new THREE.Vector3(...vertices[i1]);
      const C = new THREE.Vector3(...vertices[i2]);

      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array([...vertices[i0], ...vertices[i1], ...vertices[i2]]);
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      geo.computeVertexNormals();

      const cent: [number, number, number] = [
        (A.x + B.x + C.x) / 3,
        (A.y + B.y + C.y) / 3,
        (A.z + B.z + C.z) / 3,
      ];
      const cVec = new THREE.Vector3(...cent);

      const e1 = new THREE.Vector3().subVectors(B, A);
      const e2 = new THREE.Vector3().subVectors(C, A);
      const n = new THREE.Vector3().crossVectors(e1, e2).normalize();
      if (n.dot(cVec) < 0) n.negate();

      const up = new THREE.Vector3()
        .subVectors(new THREE.Vector3(...vertices[indices[0]]), cVec)
        .normalize();
      const target = cVec.clone().sub(n);
      const mat = new THREE.Matrix4();
      mat.lookAt(cVec, target, up);
      const quat = new THREE.Quaternion().setFromRotationMatrix(mat);

      return {
        geometry: geo,
        centroid: cent,
        quaternion: quat,
        normalVec: n,
        centroidVec: cVec,
        iconTex: createIconTexture(iconType),
        textTex: createTextTexture(label),
      };
    }, [indices, iconType, label]);

  const facingRef = useRef(true);

  // Immediately snap material colors when theme switches
  useEffect(() => {
    if (iconMatRef.current) iconMatRef.current.color.copy(colorDim);
    if (textMatRef.current) textMatRef.current.color.copy(colorBright);
  }, [isLight, colorDim, colorBright]);

  useFrame(({ camera }) => {
    const toCamera = camera.position.clone().sub(centroidVec).normalize();
    const facing = normalVec.dot(toCamera) > 0;
    facingRef.current = facing;

    if (!facing && hovered) {
      setHovered(false);
      document.body.style.cursor = "auto";
    }

    const show = hovered && facing;

    if (iconMatRef.current) {
      iconMatRef.current.color.lerp(show ? colorBright : colorDim, 0.14);
    }

    if (textMatRef.current) {
      textMatRef.current.color.lerp(colorBright, 0.14);
      const targetOpacity = show ? 1 : isLight ? 0.7 : 0.5;
      textMatRef.current.opacity += (targetOpacity - textMatRef.current.opacity) * 0.14;
    }
  });

  const handlePointerOver = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (e: any) => {
      e.stopPropagation();
      if (!facingRef.current) return;
      setHovered(true);
      document.body.style.cursor = "pointer";
    },
    []
  );

  const handlePointerOut = useCallback(() => {
    setHovered(false);
    document.body.style.cursor = "auto";
  }, []);

  const handleClick = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (e: any) => {
      e.stopPropagation();
      if (!facingRef.current) return;
      onSelect();
    },
    [onSelect]
  );

  return (
    <group>
      {/* Invisible triangle hover area */}
      <mesh
        geometry={geometry}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
      >
        <meshBasicMaterial
          color={isLight ? "#000000" : "#ffffff"}
          transparent
          opacity={hovered ? 0.12 : 0}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      <group position={centroid} quaternion={quaternion}>
        {/* Icon – also clickable */}
        <mesh
          position={[0, 0.04, 0.02]}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          onClick={handleClick}
        >
          <planeGeometry args={[0.4, 0.4]} />
          <meshBasicMaterial
            ref={iconMatRef}
            map={iconTex}
            transparent
            color={colorDim}
            side={THREE.DoubleSide}
            depthWrite={false}
          />
        </mesh>
        {/* Text label – also clickable */}
        <mesh
          position={[0, -0.24, 0.02]}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          onClick={handleClick}
        >
          <planeGeometry args={[0.65, 0.12]} />
          <meshBasicMaterial
            ref={textMatRef}
            map={textTex}
            transparent
            color={colorBright}
            opacity={isLight ? 0.7 : 0.5}
            side={THREE.DoubleSide}
            depthWrite={false}
          />
        </mesh>
      </group>
    </group>
  );
}

/* ── Depth faces (for edge + label occlusion) ── */

function DepthFaces() {
  const geometries = useMemo(() => {
    return faceConfig.map((face) => {
      const geo = new THREE.BufferGeometry();
      const [i0, i1, i2] = face.idx;
      const pos = new Float32Array([...vertices[i0], ...vertices[i1], ...vertices[i2]]);
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      geo.computeVertexNormals();
      return geo;
    });
  }, []);

  return (
    <>
      {geometries.map((geo, i) => (
        <mesh key={i} geometry={geo} renderOrder={0}>
          <meshBasicMaterial colorWrite={false} side={THREE.FrontSide} />
        </mesh>
      ))}
    </>
  );
}

/* ── Edges ── */

function DashedEdges({ isLight }: { isLight: boolean }) {
  const ref = useRef<THREE.LineSegments>(null);

  const geometry = useMemo(() => {
    const pos = new Float32Array(edgePairs.length * 6);
    edgePairs.forEach(([a, b], i) => {
      pos.set(vertices[a], i * 6);
      pos.set(vertices[b], i * 6 + 3);
    });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return geo;
  }, []);

  useEffect(() => {
    ref.current?.computeLineDistances();
  }, []);

  return (
    <lineSegments ref={ref} geometry={geometry} renderOrder={1}>
      <lineDashedMaterial
        color={isLight ? "#3f3f46" : "#a1a1aa"}
        transparent
        opacity={isLight ? 0.5 : 0.35}
        dashSize={0.1}
        gapSize={0.08}
        depthTest={false}
        depthWrite={false}
      />
    </lineSegments>
  );
}

function SolidEdge({ a, b, color }: { a: number; b: number; color: string }) {
  const ref = useRef<THREE.Object3D>(null);
  useEffect(() => {
    if (ref.current) ref.current.renderOrder = 2;
  }, []);
  return (
    <Line
      ref={ref as React.RefObject<never>}
      points={[vertices[a], vertices[b]]}
      color={color}
      lineWidth={3.5}
    />
  );
}

function SolidEdges({ isLight }: { isLight: boolean }) {
  const color = isLight ? "#27272a" : "#d4d4d8";
  return (
    <>
      {edgePairs.map(([a, b], i) => (
        <SolidEdge key={i} a={a} b={b} color={color} />
      ))}
    </>
  );
}

function VertexDots({ isLight }: { isLight: boolean }) {
  return (
    <>
      {vertices.map((v, i) => (
        <mesh key={i} position={v} renderOrder={3}>
          <sphereGeometry args={[0.05, 10, 10]} />
          <meshBasicMaterial color={isLight ? "#27272a" : "#d4d4d8"} />
        </mesh>
      ))}
    </>
  );
}

/* ── Twinkling starfield ── */

const starVert = /* glsl */ `
  attribute float aSize;
  attribute float aPhase;
  varying float vPhase;
  uniform float uTime;
  void main() {
    vPhase = aPhase;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    float twinkle = aSize * (0.3 + 0.7 * sin(uTime * (1.5 + aPhase * 4.0) + aPhase * 6.283));
    gl_PointSize = twinkle * (55.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`;

const starFrag = /* glsl */ `
  uniform float uTime;
  uniform float uIsLight;
  varying float vPhase;
  void main() {
    float d = length(gl_PointCoord - vec2(0.5));
    if (d > 0.5) discard;
    float core = smoothstep(0.5, 0.05, d);
    float glow = smoothstep(0.5, 0.2, d);
    float twinkle = 0.2 + 0.8 * sin(uTime * (2.0 + vPhase * 5.0) + vPhase * 6.283);
    vec3 darkCol = mix(vec3(0.55, 0.7, 1.0), vec3(0.9, 0.93, 1.0), core);
    vec3 lightCol = mix(vec3(0.15, 0.25, 0.5), vec3(0.3, 0.35, 0.55), core);
    vec3 col = mix(darkCol, lightCol, uIsLight);
    gl_FragColor = vec4(col, glow * twinkle);
  }
`;

function Starfield({ isLight }: { isLight: boolean }) {
  const matRef = useRef<THREE.ShaderMaterial>(null);
  const count = 800;

  const { positions, sizes, phases } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    const ph = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 5 + Math.random() * 6;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      sz[i] = 0.8 + Math.random() * 2.2;
      ph[i] = Math.random();
    }
    return { positions: pos, sizes: sz, phases: ph };
  }, []);

  useFrame((state) => {
    if (matRef.current) {
      matRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      matRef.current.uniforms.uIsLight.value = isLight ? 1.0 : 0.0;
    }
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aSize" args={[sizes, 1]} />
        <bufferAttribute attach="attributes-aPhase" args={[phases, 1]} />
      </bufferGeometry>
      <shaderMaterial
        ref={matRef}
        transparent
        depthWrite={false}
        uniforms={{ uTime: { value: 0 }, uIsLight: { value: 0 } }}
        vertexShader={starVert}
        fragmentShader={starFrag}
      />
    </points>
  );
}

/* ── Scene ── */

function SceneContent({
  onSelect,
  controlsRef,
  isLight,
}: {
  onSelect: (id: string) => void;
  controlsRef: React.RefObject<OrbitControlsImpl | null>;
  isLight: boolean;
}) {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={0.4} />

      <DepthFaces />
      <DashedEdges isLight={isLight} />
      <SolidEdges isLight={isLight} />

      {faceConfig.map((face) => (
        <Face
          key={face.id}
          indices={face.idx}
          label={face.label}
          iconType={face.icon}
          onSelect={() => onSelect(face.id)}
          isLight={isLight}
        />
      ))}

      <VertexDots isLight={isLight} />
      <Starfield isLight={isLight} />

      <OrbitControls
        ref={controlsRef}
        autoRotate
        autoRotateSpeed={0.4}
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI * 0.2}
        maxPolarAngle={Math.PI * 0.8}
      />
    </>
  );
}

export default function TetrahedronScene({
  onSelect,
  isLight,
}: {
  onSelect: (id: string) => void;
  isLight: boolean;
}) {
  const controlsRef = useRef<OrbitControlsImpl | null>(null);
  const handleReset = useCallback(() => {
    controlsRef.current?.reset();
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0.5, 4.2], fov: 50 }}
      dpr={typeof window !== "undefined" && window.innerWidth < 768 ? [1, 1] : [1, 1.5]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
      onPointerMissed={handleReset}
    >
      <SceneContent onSelect={onSelect} controlsRef={controlsRef} isLight={isLight} />
    </Canvas>
  );
}
