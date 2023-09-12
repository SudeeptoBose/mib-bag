import * as THREE from 'three'
import Experience from '../Experience'

import Model from './Model'

export default class Environment{
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.resources.on('ready', () =>{
            this.model = new Model()
        })

        // this.setSunlight()
        // this.setAmbientLight()
    }

    setSunlight()
    {
        this.sunLight = new THREE.DirectionalLight('#ffffff', 1)
        this.sunLight.castShadow = true
        this.sunLight.shadow.camera.far = 20
        this.sunLight.shadow.mapSize.set(1024, 1024)
        this.sunLight.shadow.normalBias = 0.05
        this.sunLight.position.set(1.5, 7, 3)
        this.scene.add(this.sunLight)
    }
    
    setAmbientLight()
    {
        this.ambientLight = new THREE.AmbientLight('#ffffff', 1)
        this.scene.add(this.ambientLight)
    }

    resize()
    {

    }

    update()
    {

    }
}
