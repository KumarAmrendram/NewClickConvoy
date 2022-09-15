gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();
tl.from(".banner-head,.block", { x: -100, duration: 1, opacity: 0 })
  .from(".navbar", { y: -50, opacity: 0, duration: 1 }, "-=1")
  .from(".banner-img", { scale: 2, duration: 1 }, "-=1")
  .from(".banner-text", { x: 100, duration: 1, opacity: 0 },"-=1")
  .from('.banner-button',{scale:0,opacity:0,duration:1},'-=1')




// gsap.from(".pub-box1,.pub-box2,.pub-box3,.pub-box4,.pub-box5", {
//   x: -100,
//   opacity: 0,
//   delay: 0.4,
//   stagger: 0.7,
//   scrollTrigger: ".pub-box1,.pub-box2,.pub-box3,.pub-box4,.pub-box5",
//   start: "top center",
// });



// gsap.from(".main-heading1,.main-heading2,.main-heading3,.main-heading4", {
//     y:-100,
//     opacity: 0,
//     scale:2,
//     duration:1,
//     scrollTrigger: ".main-heading1,.main-heading2,.main-heading3,.main-heading4",
//     start: "top bottom",
//   });

