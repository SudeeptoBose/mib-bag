import * as THREE from 'three'
import Experience from '../Experience'
import GSAP from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default class Controls{
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.camera = this.experience.camera
        this.mibBag = this.experience.world.model.mibBag
        this.renderer = this.experience.renderer

        GSAP.registerPlugin(ScrollTrigger)

        this.setRotationAnimation()
    }

    setRotationAnimation()
    {
        console.log(this.mibBag)
        this.timeline = new GSAP.timeline()
        this.timeline.to(this.mibBag.rotation, {
            y: 6.3,
            scrollTrigger: {
                trigger: ".first-move",
                markers: true,
                start: "top top",
                end: "bottom bottom",
                scrub: 5,
                invalidateOnRefresh: true
            }
        })

        // GSAP.to(this.scene, {
        //     background:(new THREE.Color(0x0ffff0)),
        //     scrollTrigger: {
        //         trigger: ".first-move",
        //         markers: true,
        //         start: "top top",
        //         end: "bottom bottom",
        //         scrub: 5,
        //         invalidateOnRefresh: true
        //     }
        // })
        
        this.timeline.to(this.mibBag.rotation, {
            y: 6.3,
            scrollTrigger: {
                trigger: ".second-move",
                markers: true,
                start: "top top",
                end: "bottom bottom",
                scrub: 5,
                invalidateOnRefresh: true
            }
        })
    }

    resize()
    {

    }

    update()
    {

    }
}
