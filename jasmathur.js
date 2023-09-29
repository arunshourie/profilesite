gsap.registerPlugin(ScrollTrigger, ScrollSmoother,SplitText);

$(document).ready(function(){

/* Hover Function */







var hero = $('#hero');
var qoute = $('#quote');
gsap.from(hero, {duration: 1, x: 60, delay:.5, autoAlpha: 0});
 // create the smooth scroller FIRST!
let smoother = ScrollSmoother.create({
  wrapper: "#wrapper",
  content: "#content",
  smooth: 2,
  effects: true,
});



var tl = gsap.timeline(),
  mySplitText = new SplitText("#quote", { type: "words,chars" }),
  chars = mySplitText.chars; //an array of all the divs that wrap each character

gsap.set("#quote", { perspective: 400 });

console.log(chars);

tl.from(chars, {
  duration: 0.8,
  opacity: 0,
  scale: 0,
  y: 80,
  rotationX: 180,
  transformOrigin: "0% 50% -50",
  ease: "back",
  stagger: 0.2
});

gsap.to('.herotitle',{
scrollTrigger:{
trigger:'.maverick-container',
scrub:2,
toggleActions:"restart none none reverse",
pin:".maverick-pin"

},
y:500,
duration:2

});

gsap.to('#mavline',{
scrollTrigger:{
trigger:'#mavheading',
scrub:2,
markers:true,
start:"top center",
toggleActions:"restart none none reverse"

},
width:"0%",
duration:2
});

gsap.to('#buildingline',{
scrollTrigger:{
trigger:'#buildingheading',
scrub:2,
markers:true,
start:"top center",
toggleActions:"restart none none reverse"

},
width:"100%",
duration:2

});
/*
var options = {
  "animate": true,
  "patternWidth": 100,
  "patternHeight": 100,
  "grainOpacity": 0.1,
  "grainDensity": 1,
  "grainWidth": 1,
  "grainHeight": 1
}
grained("#grain", options);
*/

});
