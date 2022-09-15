gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();
tl.from(".banner-head,.block", { x: -100, duration: 1, opacity: 0 })
  .from(".navbar", { y: -50, opacity: 0, duration: 1 }, "-=1")
  .from(".banner-img", { scale: 2, duration: 1 }, "-=1")
  .from(".banner-text", { x: 100, duration: 1, opacity: 0 },"-=1")
  .from('.banner-button',{scale:0,opacity:0,duration:1},'-=1')


{//offer boxes
  gsap.from(".offer-box1", {
    y: -100,
    opacity: 0,
    delay: 1,
    duration: 0.5,
    scrollTrigger: ".offer-box1",
    start: "top top",
  });
  gsap.from(".offer-box2", {
    y: -100,
    opacity: 0,
    delay: 1,
    duration: 1,
    scrollTrigger: ".offer-box2",
    start: "top top",
  });
  gsap.from(".offer-box3", {
    y: -100,
    opacity: 0,
    delay: 1,
    duration: 1,
    scrollTrigger: ".offer-box3",
    start: "top top",
  });
  gsap.from(".offer-box4", {
    y: -100,
    opacity: 0,
    delay: 1,
    duration: 1,
    scrollTrigger: ".offer-box4",
    start: "top top",
  });
}

{//adv boxes8
  gsap.from(".adv-box1", {
    y: -100,
    opacity: 0,
    delay: 0.5,
    duration: 1,
    scrollTrigger: ".adv-box1",
    start: "top top",
  });
  gsap.from(".adv-box2", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 1,
    scrollTrigger: ".adv-box2",
    start: "top top",
  });
  gsap.from(".adv-box3", {
    y: -100,
    opacity: 0,
    delay: 0.5,
    duration: 1,
    scrollTrigger: ".adv-box3",
    start: "top top",
  });
  gsap.from(".adv-box4", {
    y: -100,
    opacity: 0,
    delay: 0.5,
    duration: 1,
    scrollTrigger: ".adv-box4",
    start: "top top",
  });
  gsap.from(".adv-box5", {
    y: -100,
    opacity: 0,
    delay: 0.5,
    duration: 1,
    scrollTrigger: ".adv-box5",
    start: "top top",
  });
}


{//pub boxes8
  gsap.from(".pub-box1", {
    x: -100,
    opacity: 0,
    delay: 0.5,
    duration: 1,
    scale:0.3,
    scrollTrigger: ".pub-box1",
    start: "top center",
  });
  gsap.from(".pub-box2", {
    x: 100,
    opacity: 0,
    delay: 0.5,
    duration: 1,
    scale:0.3,
    scrollTrigger: ".pub-box2",
    start: "top center",
  });
  gsap.from(".pub-box3", {
    x: -100,
    opacity: 0,
    delay: 0.5,
    duration: 1,
    scale:0.3,
    scrollTrigger: ".pub-box3",
    start: "top center",
  });
  gsap.from(".pub-box4", {
    x: 100,
    opacity: 0,
    delay: 0.5,
    duration: 1,
    scale:0.3,
    scrollTrigger: ".pub-box4",
    start: "top center",
  });
  gsap.from(".pub-box5", {
    x: -100,
    opacity: 0,
    delay: 0.5,
    duration: 1,
    scale:0.3,
    scrollTrigger: ".pub-box5",
    start: "top center",
  });

  // mission para
gsap.from('.para',{
  scale:0,
  y:-100,
  duration:1,
  scrollTrigger:'.para'
})

gsap.from('.mis-img',{
  scale:0,
  // y:100,
  duration:1,
  stagger:0.2,
  scrollTrigger:'.mis-img'
})
}




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

