import "./css/App.css";
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, Bounds } from '@react-three/drei';
import { Suspense } from 'react';
import Model from './components/3DObjects/MisteryShack';

function App() {
  return (
    <div className="App">
      <Canvas camera={{ position: [0, 0, 50], fov: 50 }}>
        
        <OrbitControls />
        <Suspense fallback={null}>
          <Environment preset="city" background />
          <Bounds>
            <Model scale={[0.1, 0.1, 0.1]} position={[0, -5, 0]} />
          </Bounds>
          
        </Suspense>
      </Canvas>
    </div>
  );
}

function FallbackComponent() {
  return <mesh><boxGeometry args={[1, 1, 1]} /><meshStandardMaterial color="red" /></mesh>;
}

export default App