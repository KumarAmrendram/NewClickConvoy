gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();
tl
.from('.banner-head,.block',{x:-100, duration:1,opacity:0})
.from('.navbar',{y:-50,opacity:0,duration:1},'-=1')
.from('.banner-img',{scale:2,duration:1},'-=1') 


gsap.from('.offer-box1,.offer-box2,.offer-box3,.offer-box4',{
    y:-100,opacity:0,delay:0.4,stagger:0.7,
    scrollTrigger: '.offer-box1,.offer-box2,.offer-box3,.offer-box4',
    start:'top bottom'})