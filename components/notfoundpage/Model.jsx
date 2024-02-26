import { useGLTF, Text, Float, MeshTransmissionMaterial } from '@react-three/drei'
import React from 'react'
import { useThree } from '@react-three/fiber'
import { useControls } from 'leva'

export default function Model() {
    const { viewport } = useThree()
    const { nodes } = useGLTF('/medias/shards.glb')
    
    return (
            <group scale={viewport.width / 1.5} >
                {
                    nodes.Scene.children.map( (mesh, i) => {
                        return <Mesh data={mesh} key={i}/>
                    })
                }
                <Font />
            </group>
    )
}

function Font() {
    const src = '/fonts/PPNeueMontreal-Bold.otf'
    const textOption = {
        color: "white",
        anchorX: "center",
        anchorY: "middle"
    }
    return (
        <group>
            <Text font={src} position={[0, 0, -.1]} fontSize={0.4} {...textOption}>
            404
            </Text>
            <Text font={src} position={[0, -.15, -.1]} fontSize={0.03} {...textOption}>
            The link is broken
            </Text>
        </group>
    )
}

function Mesh({data}) {

    const materialProps = useControls({
        thickness: { value: 0.275, min: 0, max: 1, step: 0.01 },
        ior: { value: 1.8, min: 0, max: 3, step: 0.1 },
        chromaticAberration: { value: 0.75, min: 0, max: 1},
        resolution: {value: 300},
    })

    return (
        <Float>
            <mesh {...data}>
                <MeshTransmissionMaterial roughness={0} transmission={0.99} {...materialProps}/>
            </mesh>
        </Float>
    )
}