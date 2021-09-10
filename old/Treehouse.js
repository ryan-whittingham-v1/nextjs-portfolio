/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from '@react-three/drei';
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Treehouse(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/Tree House.glb');

  useFrame(() => {
    group.current.rotation.y -= 0.001;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_1.geometry}
        material={nodes.node_1.material}
        position={[14, -24.5, 9]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_3.geometry}
        material={nodes.node_3.material}
        position={[14, -24.5, -7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_5.geometry}
        material={nodes.node_5.material}
        position={[14, -24.5, -23]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_7.geometry}
        material={nodes.node_7.material}
        position={[-2, 7.5, -7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_9.geometry}
        material={nodes.node_9.material}
        position={[-2, 7.5, -23]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_11.geometry}
        material={nodes.node_11.material}
        position={[-2, -8.5, -7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_13.geometry}
        material={nodes.node_13.material}
        position={[-2, -8.5, -23]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_15.geometry}
        material={nodes.node_15.material}
        position={[-2, -24.5, 9]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_18.geometry}
        material={nodes.node_18.material}
        position={[-2, -24.5, -7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_21.geometry}
        material={nodes.node_21.material}
        position={[-2, -24.5, -23]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_23.geometry}
        material={nodes.node_23.material}
        position={[-18, 7.5, -7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_25.geometry}
        material={nodes.node_25.material}
        position={[-18, 7.5, -23]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_27.geometry}
        material={nodes.node_27.material}
        position={[-18, -8.5, -7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_29.geometry}
        material={nodes.node_29.material}
        position={[-18, -8.5, -23]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_31.geometry}
        material={nodes.node_31.material}
        position={[-18, -24.5, 9]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_34.geometry}
        material={nodes.node_34.material}
        position={[-18, -24.5, -7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_36.geometry}
        material={nodes.node_36.material}
        position={[-18, -24.5, -23]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_2.geometry}
        material={nodes.node_2.material}
        position={[14, -24.5, 9]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_4.geometry}
        material={nodes.node_4.material}
        position={[14, -24.5, -7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_6.geometry}
        material={nodes.node_6.material}
        position={[14, -24.5, -23]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_8.geometry}
        material={nodes.node_8.material}
        position={[-2, 7.5, -7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_10.geometry}
        material={nodes.node_10.material}
        position={[-2, 7.5, -23]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_12.geometry}
        material={nodes.node_12.material}
        position={[-2, -8.5, -7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_14.geometry}
        material={nodes.node_14.material}
        position={[-2, -8.5, -23]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_16.geometry}
        material={nodes.node_16.material}
        position={[-2, -24.5, 9]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_19.geometry}
        material={nodes.node_19.material}
        position={[-2, -24.5, -7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_22.geometry}
        material={nodes.node_22.material}
        position={[-2, -24.5, -23]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_24.geometry}
        material={nodes.node_24.material}
        position={[-18, 7.5, -7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_26.geometry}
        material={nodes.node_26.material}
        position={[-18, 7.5, -23]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_28.geometry}
        material={nodes.node_28.material}
        position={[-18, -8.5, -7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_30.geometry}
        material={nodes.node_30.material}
        position={[-18, -8.5, -23]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_32.geometry}
        material={nodes.node_32.material}
        position={[-18, -24.5, 9]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_35.geometry}
        material={nodes.node_35.material}
        position={[-18, -24.5, -7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_37.geometry}
        material={nodes.node_37.material}
        position={[-18, -24.5, -23]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_38.geometry}
        material={nodes.node_38.material}
        position={[-8.41, -14.41, -3.3]}
        rotation={[-0.57, -0.38, 2.91]}
        scale={[0.05, 0.05, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_39.geometry}
        material={nodes.node_39.material}
        position={[-8.42, -14.41, -3.3]}
        rotation={[-0.57, -0.38, 2.91]}
        scale={[0.05, 0.05, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_40.geometry}
        material={nodes.node_40.material}
        position={[-8.41, -14.41, -3.3]}
        rotation={[-0.57, -0.38, 2.91]}
        scale={[0.05, 0.05, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_41.geometry}
        material={nodes.node_41.material}
        position={[-8.41, -14.41, -3.3]}
        rotation={[-0.52, -0.26, 2.7]}
        scale={[0.05, 0.05, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_42.geometry}
        material={nodes.node_42.material}
        position={[-8.41, -14.41, -3.3]}
        rotation={[-0.59, -0.51, 3.13]}
        scale={[0.05, 0.05, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_44.geometry}
        material={nodes.node_44.material}
        position={[-8.41, -14.41, -3.3]}
        rotation={[-0.57, -0.38, 2.91]}
        scale={[0.05, 0.05, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_48.geometry}
        material={nodes.node_48.material}
        position={[-8.86, -14.79, -2.37]}
        rotation={[0, -0.44, -Math.PI]}
        scale={[0.05, 0.05, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_49.geometry}
        material={nodes.node_49.material}
        position={[-8.26, -15.06, -3.11]}
        rotation={[0, -0.44, -3.14]}
        scale={[0.05, 0.05, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_50.geometry}
        material={nodes.node_50.material}
        position={[-8.26, -15.06, -3.11]}
        rotation={[0, -0.44, -3.14]}
        scale={[0.05, 0.05, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_51.geometry}
        material={nodes.node_51.material}
        position={[-8.26, -14.68, -3.11]}
        rotation={[0, -0.44, -3.14]}
        scale={[0.05, 0.05, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_52.geometry}
        material={nodes.node_52.material}
        position={[-8.66, -15.06, -3.29]}
        rotation={[-0.01, -0.44, 3.14]}
        scale={[0.05, 0.05, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_53.geometry}
        material={nodes.node_53.material}
        position={[-8.66, -15.06, -3.29]}
        rotation={[-0.01, -0.44, 3.14]}
        scale={[0.05, 0.05, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_54.geometry}
        material={nodes.node_54.material}
        position={[-8.66, -14.68, -3.29]}
        rotation={[0, -0.44, 3.14]}
        scale={[0.05, 0.05, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_55.geometry}
        material={nodes.node_55.material}
        position={[-8.71, -15.06, -2.17]}
        rotation={[0, -0.44, 3.14]}
        scale={[0.05, 0.05, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_56.geometry}
        material={nodes.node_56.material}
        position={[-8.71, -15.06, -2.17]}
        rotation={[0, -0.44, 3.14]}
        scale={[0.05, 0.05, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_57.geometry}
        material={nodes.node_57.material}
        position={[-8.71, -14.68, -2.18]}
        rotation={[0, -0.44, 3.14]}
        scale={[0.05, 0.05, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_58.geometry}
        material={nodes.node_58.material}
        position={[-9.1, -15.06, -2.36]}
        rotation={[0, -0.44, -3.14]}
        scale={[0.05, 0.05, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_59.geometry}
        material={nodes.node_59.material}
        position={[-9.1, -15.06, -2.36]}
        rotation={[0, -0.44, -3.14]}
        scale={[0.05, 0.05, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_60.geometry}
        material={nodes.node_60.material}
        position={[-9.1, -14.68, -2.36]}
        rotation={[0, -0.44, -3.14]}
        scale={[0.05, 0.05, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_61.geometry}
        material={nodes.node_61.material}
        position={[-9.69, -14.65, -2.31]}
        rotation={[-0.71, -0.7, 2.64]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_62.geometry}
        material={nodes.node_62.material}
        position={[-9.69, -14.65, -2.31]}
        rotation={[-0.71, -0.7, 2.64]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_63.geometry}
        material={nodes.node_63.material}
        position={[-9.69, -14.65, -2.31]}
        rotation={[-0.71, -0.7, 2.64]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_64.geometry}
        material={nodes.node_64.material}
        position={[-9.69, -14.65, -2.31]}
        rotation={[-0.62, -0.59, 2.46]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_65.geometry}
        material={nodes.node_65.material}
        position={[-9.69, -14.65, -2.31]}
        rotation={[-0.78, -0.82, 2.81]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_67.geometry}
        material={nodes.node_67.material}
        position={[-9.74, -14.62, -2.27]}
        rotation={[-0.71, -0.7, 2.64]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_71.geometry}
        material={nodes.node_71.material}
        position={[-10.13, -14.81, -1.92]}
        rotation={[0, -0.83, -Math.PI]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_72.geometry}
        material={nodes.node_72.material}
        position={[-9.71, -15.14, -2.15]}
        rotation={[0, -0.83, 3.14]}
        scale={[0.03, 0.04, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_73.geometry}
        material={nodes.node_73.material}
        position={[-9.71, -15.14, -2.15]}
        rotation={[0, -0.83, 3.14]}
        scale={[0.03, 0.04, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_74.geometry}
        material={nodes.node_74.material}
        position={[-9.71, -14.85, -2.15]}
        rotation={[0, -0.83, 3.14]}
        scale={[0.03, 0.04, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_75.geometry}
        material={nodes.node_75.material}
        position={[-9.85, -15.14, -2.32]}
        rotation={[0, -0.83, -3.14]}
        scale={[0.03, 0.04, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_76.geometry}
        material={nodes.node_76.material}
        position={[-9.85, -15.14, -2.32]}
        rotation={[0, -0.83, -3.14]}
        scale={[0.03, 0.04, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_77.geometry}
        material={nodes.node_77.material}
        position={[-9.85, -14.85, -2.32]}
        rotation={[0, -0.83, -3.14]}
        scale={[0.03, 0.04, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_78.geometry}
        material={nodes.node_78.material}
        position={[-10.1, -15.14, -1.8]}
        rotation={[0, -0.83, -3.14]}
        scale={[0.03, 0.04, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_79.geometry}
        material={nodes.node_79.material}
        position={[-10.1, -15.14, -1.8]}
        rotation={[0, -0.83, -3.14]}
        scale={[0.03, 0.04, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_80.geometry}
        material={nodes.node_80.material}
        position={[-10.1, -14.85, -1.8]}
        rotation={[0, -0.83, -3.14]}
        scale={[0.03, 0.04, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_81.geometry}
        material={nodes.node_81.material}
        position={[-10.24, -15.14, -1.96]}
        rotation={[0, -0.83, 3.14]}
        scale={[0.03, 0.04, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_82.geometry}
        material={nodes.node_82.material}
        position={[-10.24, -15.14, -1.96]}
        rotation={[0, -0.83, 3.14]}
        scale={[0.03, 0.04, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_83.geometry}
        material={nodes.node_83.material}
        position={[-10.24, -14.85, -1.96]}
        rotation={[0, -0.83, 3.14]}
        scale={[0.03, 0.04, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_43.geometry}
        material={nodes.node_43.material}
        position={[-8.41, -14.41, -3.3]}
        rotation={[-0.57, -0.38, 2.91]}
        scale={[0.05, 0.05, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_45.geometry}
        material={nodes.node_45.material}
        position={[-8.97, -14.35, -2.12]}
        rotation={[1.56, 0, -2.7]}
        scale={[0.05, 0.05, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_46.geometry}
        material={nodes.node_46.material}
        position={[-8.97, -14.35, -2.12]}
        rotation={[1.33, -0.11, -2.71]}
        scale={[0.05, 0.05, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_47.geometry}
        material={nodes.node_47.material}
        position={[-8.97, -14.35, -2.12]}
        rotation={[1.33, -0.11, -2.71]}
        scale={[0.05, 0.05, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_66.geometry}
        material={nodes.node_66.material}
        position={[-9.74, -14.62, -2.27]}
        rotation={[-0.71, -0.7, 2.64]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_68.geometry}
        material={nodes.node_68.material}
        position={[-10.23, -14.59, -1.82]}
        rotation={[1.57, 0, -2.31]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_69.geometry}
        material={nodes.node_69.material}
        position={[-10.23, -14.59, -1.82]}
        rotation={[1.39, -0.19, -2.32]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_70.geometry}
        material={nodes.node_70.material}
        position={[-10.23, -14.59, -1.82]}
        rotation={[1.39, -0.19, -2.32]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_84.geometry}
        material={nodes.node_84.material}
        position={[-10.64, -15.15, 5.09]}
        rotation={[-Math.PI, 0.83, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_85.geometry}
        material={nodes.node_85.material}
        position={[-10.8, -15.15, 4.9]}
        rotation={[-Math.PI, 0.83, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_88.geometry}
        material={nodes.node_88.material}
        position={[-10.72, -15.24, 4.99]}
        rotation={[-Math.PI / 2, 0, -0.83]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_89.geometry}
        material={nodes.node_89.material}
        position={[-10.81, -15.24, 5.08]}
        rotation={[-Math.PI, 0.81, 0]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_90.geometry}
        material={nodes.node_90.material}
        position={[-10.81, -15.24, 5.08]}
        rotation={[-Math.PI, 0.81, 0]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_91.geometry}
        material={nodes.node_91.material}
        position={[-10.81, -15.24, 5.08]}
        rotation={[-Math.PI, 0.81, 0]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_86.geometry}
        material={nodes.node_86.material}
        position={[-10.68, -15.34, 5]}
        rotation={[-3, 0.82, -0.1]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_87.geometry}
        material={nodes.node_87.material}
        position={[-10.74, -15.34, 4.93]}
        rotation={[3, 0.82, 0.1]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_17.geometry}
        material={nodes.node_17.material}
        position={[-2, -24.5, -7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_20.geometry}
        material={nodes.node_20.material}
        position={[-2, -24.5, -23]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_33.geometry}
        material={nodes.node_33.material}
        position={[-18, -24.5, -7]}
      />
    </group>
  );
}

useGLTF.preload('/Tree House.glb');