import {extend, useFrame, useThree } from "@react-three/fiber"
import { useRef } from "react"
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import CustomObject from "./CustomObject"

extend({OrbitControls})

const Experience = () => {

  const {camera, gl} = useThree();
  const cubeRef = useRef();
  const groupShape = useRef();
  

  useFrame((state, delta) => 
  {
    // console.log(state.clock.elapsedTime)
    cubeRef.current.rotation.y += delta
    // const angle = state.clock.elapsedTime
    // state.camera.position.x = Math.sin(angle) * 9
    // state.camera.position.z = Math.cos(angle) * 9
    // state.camera.lookAt(0,0,0)
    // groupShape.current.rotation.y +=delta
  })

  return (
    <>
    {/* Logic Section */}
      {/* control */}
      <orbitControls args={[ camera, gl.domElement ]}/>

      {/* lighting */}
      <directionalLight position={ [1,2,3]} intensity={3.5}/>
      <ambientLight intensity={1.5} />
    {/* Logic Section */}

    <group ref={groupShape}>
      <mesh position-x={-2}>
        <sphereGeometry />
        <meshPhongMaterial color={'orange'}/>
      </mesh>

      <mesh ref={cubeRef} scale={1.5} position-x={2} rotation-y={Math.PI * 0.15}>
        {/* <sphereGeometry args={ [1.5,32,32]} /> */}
        <boxGeometry />
        <meshPhysicalMaterial color={'red'}/>
      </mesh>
    </group>
      

      <mesh  scale={10}   rotation-x={-Math.PI * 0.49} position-y={-1}>
        <planeGeometry/>
        <meshStandardMaterial color={'green'}/>
      </mesh>

      <CustomObject/>
    </>
    
  )
}

export default Experience