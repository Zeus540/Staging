import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bluemag from '../assets/images/bluemag.png'
import blueslide from '../assets/images/blueslide.png'
import blackmag from '../assets/images/mag.png'
import blackslide from '../assets/images/slide.png'
gsap.registerPlugin(Draggable, MotionPathPlugin, TextPlugin, ScrollToPlugin, ScrollTrigger);

var Break = document.getElementById('break')
var Assemble = document.getElementById('Assemble')
var reload = document.getElementById('reload')
var Blue = document.getElementById('blue')
var Black = document.getElementById('black')
var  State = true;



Break.onclick = () =>{
 
  gsap.to(".slide",  { yPercent:  -135 ,duration: 0.5,})

  gsap.to(".barrel", { yPercent: -90 ,duration: 0.5, })
 
  gsap.to(".spring", { yPercent: -100 ,duration: 0.5,})

  gsap.to(".base",   { yPercent: 0 ,duration: 0.5,})

  gsap.to(".mag",   { yPercent: -50 ,duration: 0.5,})

  gsap.to(".mag",   { xPercent: 180 ,duration: 0.5,})

  gsap.to(".glock",   { yPercent: -40 ,duration: 0.5,})

  gsap.to(".glock",   { xPercent: -80 ,duration: 0.5,})

  State = false;
}


Assemble.onclick = () =>{
  
  gsap.to(".slide",  { yPercent:  0 ,duration: 0.5,})
  gsap.to(".barrel", { yPercent: 0 ,duration: 0.5,})
  gsap.to(".spring", { yPercent: 0 ,duration: 0.5,})
  gsap.to(".base",   { yPercent: 0 ,duration: 0.5,})
  gsap.to(".mag",   { yPercent: 0 ,duration: 0.5,})
  gsap.to(".mag",   { xPercent: 0 ,duration: 0.5,})
  gsap.to(".glock",   { yPercent:  -50  ,duration: 0.5,})
  gsap.to(".glock",   { xPercent: -50 ,duration: 0.5,})
  State = true;
}



reload.onclick = () =>{

if (  State === true) {
  gsap.from(".slide",  { xPercent: 20,duration: 0.5 })

  gsap.from(".spring", { xPercent: 40,duration: 0.5 })
} else {
  alert('Assemble first')
}

}

Blue.onclick = () =>{
 
  if ( State === true) {
    document.getElementById('slideHolder').innerHTML = `

    <img src=${blueslide}  class="slide piece"  alt="slide">
    `
    document.getElementById('magholder').innerHTML = `

    <img src=${bluemag}  class="mag piece" alt="mag">
    `
  } else {
    alert('Assemble first')
  }

}

Black.onclick = () =>{
 
  if ( State === true) {
    document.getElementById('slideHolder').innerHTML = `

    <img src=${blackslide}  class="slide piece"  alt="slide">
    `
    document.getElementById('magholder').innerHTML = `

    <img src=${blackmag}  class="mag piece" alt="mag">
    `
  } else {
    alert('Assemble first')
  }

}