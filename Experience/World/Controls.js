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


        GSAP.registerPlugin(ScrollTrigger)

        this.setPath()
    }

    setPath()
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
                scrub: 5
            }
        })
        this.timeline.to(this.mibBag.rotation, {
            y: 6.3,
            scrollTrigger: {
                trigger: ".second-move",
                markers: true,
                start: "top top",
                end: "bottom bottom",
                scrub: 5
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
