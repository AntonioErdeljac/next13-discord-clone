'use client';
import { Canvas } from '@react-three/fiber'
import Model from './Model'
import { Environment, CameraControls } from '@react-three/drei'
export default function Scene() {

    return (
        <Canvas orthographic style={{background: "black"}} camera={{position: [0, 0, 1], zoom: 800}}>
            <Model />
            <directionalLight intensity={3} position={[0, 0.1, 1]} />
            <Environment preset="city"/>
        </Canvas>
    )
}
