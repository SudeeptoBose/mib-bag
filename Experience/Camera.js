import * as THREE from 'three'
import Experience from "./Experience";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
export default class Camera{
    constructor(){
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas

        this.createPerspectiveCamera()
        // this.setOrbitControls()
    }

    createPerspectiveCamera()
    {
        this.perspectiveCamera = new THREE.PerspectiveCamera(35, this.sizes.aspectRatio, 0.1, 1000)
        this.scene.add(this.perspectiveCamera)
        this.perspectiveCamera.position.z = 5
        this.perspectiveCamera.position.x = -1
    }

    setOrbitControls()
    {
        this.controls = new OrbitControls(this.perspectiveCamera, this.canvas)
        this.controls.enableDamping = true
    }

    resize()
    {
        this.perspectiveCamera.aspect = this.sizes.aspectRatio
    }

    update()
    {
        // this.controls.update()
        this.perspectiveCamera.updateProjectionMatrix()
    }
}
