import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
const AnimatedBox =()=>{
    const machRef = useRef<THREE.Mesh>(null);
    useFrame(()=>{
     console.log("chutyo");
     if ( machRef.current){
      machRef.current.rotation.x+=0.01
      machRef.current.rotation.y+=0.01
     }
    
  
    });
    return(
      <mesh scale={[1,1,1]} ref={machRef}>
      <boxGeometry />
       <meshStandardMaterial/>
    </mesh>
    ); 
};


    export default AnimatedBox