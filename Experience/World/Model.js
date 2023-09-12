import * as THREE from 'three'
import Experience from '../Experience'

export default class Model{
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.assets = this.resources.items
        this.duck = this.assets.model.scene
        this.mibBagPlane = this.assets.mibBag
        this.mibBag = this.mibBagPlane.scene
        this.time = this.experience.time
        this.mibTexture = this.assets.mibTexture
        this.mibTexture.flipY = false
        console.log(this.mibBag.children)
        this.setModel()
        // this.setMesh()
        // this.setMeshAnimation()

    }

    setModel()
    {
        this.scene.add(this.mibBag)
        this.mibBag.position.z = -9
        this.mibBag.children.forEach((child)=>{
            child.material = new THREE.MeshBasicMaterial()
            child.material.map = this.mibTexture
        })
        
    }

    setMesh()
    {
        const geometry = new THREE.OctahedronGeometry(1, 30);
        const material = new THREE.MeshStandardMaterial( { 
            map: this.assets.baseColor,
            aoMap: this.assets.ambientOcclusion,
            displacementMap: this.assets.heightMap,
            displacementScale: 0.1,
            normalMap: this.assets.normalMap,
            roughnessMap:this.assets.roughnessMap,
            color: 0x00ff00 
        } );
        this.mesh = new THREE.Mesh( geometry, material );
        this.scene.add( this.mesh );
        this.mesh.position.x = -1
    }
    
    setMeshAnimation()
    {
        
    }

    resize()
    {

    }

    update()
    {
        // this.mesh.rotation.y += 0.01
    }
}
