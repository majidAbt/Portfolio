import { Canvas } from "@react-three/fiber";
import styles from "./SkillsCanvas.module.css";
import Cloud from "./Cloud"
import { TrackballControls } from '@react-three/drei'


export default function SkillsCanvas() {
  return (
    <div className={styles.scene}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 40], fov: 90 }} className="sm:w-[450px]" >
        <fog attach="fog" args={['#202025', 0, 80]} />
        <Cloud count={20} radius={21} />
        <TrackballControls />
      </Canvas>
    </div>
  )
}