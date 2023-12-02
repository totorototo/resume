import { Canvas } from "@react-three/fiber";
import { Model } from "../../misc";
import { Float } from "@react-three/drei";
import { Suspense } from "react";

export const Scene = ({ width = 200, height = 200 }) => {
  return (
    <Canvas
      style={{ width, height }}
      camera={{ position: [10, 15, 100], fov: 50 }}
      dpr={[1, 2]}
    >
      <Suspense fallback={null}>
        <Float>
          <Model />
        </Float>
      </Suspense>
    </Canvas>
  );
};
