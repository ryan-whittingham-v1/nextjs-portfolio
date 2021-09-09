import { Suspense, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import styles from '../styles/reactThreeFiber.module.css';
import Model from '../components/astronaut';
import * as THREE from 'three';
import Image from 'next/image';

export default function ReactThreeFiber() {
  function Rig() {
    return useFrame((state) => {
      state.camera.position.x = THREE.MathUtils.lerp(
        state.camera.position.x + 0.05,
        state.mouse.x,
        0.075
      );
      state.camera.position.y = THREE.MathUtils.lerp(
        state.camera.position.y + 0.32,
        state.mouse.y,
        0.075
      );
    });
  }

  return (
    <div className={styles.parent}>
      <Image
        priority
        src="/images/space2.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className={styles.background}
      />
      <div className={styles.animation}>
        <Canvas shadows camera={{ fov: 30 }}>
          <ambientLight intensity={0.1} />
          <directionalLight position={[0, 0, 5]} />
          <Suspense fallback={null}>
            <Model position={[0, 0, 0]} />
            <Environment preset="night" />
          </Suspense>

          <Rig />
        </Canvas>
      </div>
      <p className={styles.title}>Ryan Whittingham</p>
    </div>
  );
}
