

  $("#expereince-container .left li").click(function(){
    var job = $(this).data('job');
    $("#expereince-container .left li").removeClass('active');
    $(this).addClass('active');
    $(".experience-container").hide();
    $("#" + job).fadeIn( "slow");
  });




// For Full Screen functionality
let fullscreen;
let fsEnter = document.getElementById('fullscr');
if(fsEnter !== null){
  fsEnter.addEventListener('click', function (e) {
  e.preventDefault();
  if (!fullscreen) {
      fullscreen = true;
      document.documentElement.requestFullscreen();
      fsEnter.innerHTML = "Exit Fullscreen";
  }
  else {
      fullscreen = false;
      document.exitFullscreen();
      fsEnter.innerHTML = "Go Fullscreen";
  }
  });
}


$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top -300
  }, 500);
});

gsap.registerPlugin(ScrollTrigger, CSSRulePlugin, ScrollToPlugin);


const fadeInOut = gsap.utils.toArray('.fade-in-out');
fadeInOut.forEach(element =>{
  gsap.to(element,{
    duration: 1,
    start: 'center center',
    opacity: 1,
    ease: "slow",
    scrollTrigger:{
      trigger: element,
      // markers: true,
      toggleActions: "restart reverse restart reverse",
      start: "-700",
      end: "1000",
    }
  });
});

// gsap.to(".d20",{
//     duration: 2,
//     rotation:360,
//   start: 'center center',
//     // transformOrigin:"left top",
//     y: "20vh",
//     x: "-10vw",
//     ease: "bounce.out",
//     scrollTrigger:{
//       trigger: ".d20",
//       markers: true,
//       toggleActions: "restart pause restart none"
//   },
// });
const fadeIn = gsap.utils.toArray('.fade-in');
fadeIn.forEach(element =>{
  gsap.to(element,{
    duration: 1,
    start: 'center center',
    opacity: 1,
    ease: "slow",
    scrollTrigger:{
      trigger: element,
      markers: true,
      toggleActions: "restart reverse restart reverse",
      start: "-300",
      end: "400",
    }
  });
});

gsap.to('.content', {
  duration: .5,
  ease: "slow",
  opacity: 1,
});
// gsap.to(".fade-in-2",{
//   duration: 1,
//   start: 'center center',
//   opacity: 1,
//   ease: "slow",
//   scrollTrigger:{
//     trigger: ".fade-in-2",
//     markers: true,
//     toggleActions: "restart reverse restart reverse",
//     start: "-800",
//     end: "300",
//   }
// });
gsap.to(".clouds-1",{
  duration: 5,
  ease: "slow(0.8, 0.3, false)",
  opacity: 0.3,
  scrollTrigger:{
    trigger: "#slide-1",
    // markers: true,
    start: "0",
    end: "1500",
    scrub: 5
  },
  x: 1000,
  y: 1500
});
gsap.to(".clouds-2",{
  duration: 5,
  ease: "slow(0.8, 0.3, false)",
  opacity: 0,
  scrollTrigger:{
    trigger: "#slide-1",
    // markers: true,
    start: "50",
    end: "1200",
    scrub: 10
  },
  x: -1000,
  y: 1200
});
gsap.to(".clouds-3",{
  duration: 5,
  ease: "slow(0.8, 0.3, false)",
  opacity: 0.2,
  scrollTrigger:{
    trigger: "#slide-1",
    // markers: true,
    start: "100",
    end: "1500",
    scrub: 10
  },
  x: -500,
  y: 500
});
gsap.to(".clouds-4",{
  duration: 5,
  ease: "slow(0.8, 0.3, false)",
  opacity: 0.1,
  scrollTrigger:{
    trigger: "#slide-1",
    // markers: true,
    start: "100",
    end: "1800",
    scrub: 10
  },
  x: 500,
  y: 300
});
gsap.to('#slide-1 .slide-content',{
  duration: 1,
  opacity: 1,
  scrollTrigger:{
    trigger: "#slide-1 .slide-content",
    start: "-100",
    end: "500",
    // markers: true,
    toggleActions: "restart reverse restart reverse",
},
});


gsap.to('#intro',{
  duration: 1,
  opacity: 0,
  scrollTrigger:{
    trigger: "#intro",
    start: "-90vh",
    end: "200",
    // markers: true,
    toggleActions: "restart reverse restart reverse",
},
});




function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const clouds = gsap.utils.toArray('.clouds');
fadeIn.forEach(element =>{

  let movement = (1 + getRandomInt(200));
  // console.log(movement);
  gsap.to(element,{
    duration: 1,
    ease: "slow",
    x: movement,
  });
});







gsap.to('.underline',{
  width: "100%",
  duration: 1,
  scrollTrigger:{
    trigger: ".underline",
    // markers: true,
    toggleActions: "restart none none none"
},
});

gsap.utils.toArray(".panel").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top", 
    scrub: true,
    // pin: true, 
    // pinSpacing: false
  });
});


// let sections = gsap.utils.toArray(".panel");

// function goToSection(i) {
//   gsap.to(window, {
//     scrollTo: { y: i * innerHeight, autoKill: false, ease: "Power3.easeInOut" },
//     duration: 0.85
//   });
// }

// ScrollTrigger.defaults({
//   // markers: true
// });

// sections.forEach((eachPanel, i) => {
//   // const mainAnim = gsap.timeline({ paused: true });

//   ScrollTrigger.create({
//     trigger: eachPanel,
//     onEnter: () => goToSection(i)
//   });

//   ScrollTrigger.create({
//     trigger: eachPanel,
//     start: "bottom bottom",
//     onEnterBack: () => goToSection(i)
//   });
// });

// $(document).ready(function() {
//     $("h1").lettering();
//   });
  
//   $(document).ready(function() {
//     animation();
//   }, 1000);
  
//   function animation() {
//     var title1 = new TimelineMax();
//     title1.staggerFromTo("h1 span", 0.5, 
//     {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
//     {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05); 
//   }

//     gsap.from(".mountain",{
//         scrollTrigger:{
//             trigger: ".mountain",
//             toggleActions: "restart none none restart"
//         },
//         duration: .75,
//         delay: .3,
//         stagger: .5,
//         y: "100%",
//         opacity: 0,
//         ease: "circ.out",
//     });
//     gsap.from(".trees",{
//         scrollTrigger:{
//             trigger: ".trees",
//             toggleActions: "restart none none restart"
//         },
//         duration: .8,
//         delay: .5,
//         stagger: .5,
//         y: "100%",
//         opacity: 0,
//         ease: "circ.out",
//     });
//     gsap.from(".slide h1",{
//         scrollTrigger:{
//             trigger: ".slide h1",
//             toggleActions: "restart none none restart"
//         },
//         duration: 1,
//         delay: 2.5,
//         opacity: 0,
//         ease: "slow(0.7, 0.7, false)",
//     });
//     gsap.from(".slide h2",{
//         scrollTrigger:{
//             trigger: ".slide h2",
//             toggleActions: "restart none none restart"
//         },
//         duration: 1,
//         delay: 2.5,
//         opacity: 0,
//         ease: "slow(0.7, 0.7, false)",
//     });
//     gsap.from(".slide p",{
//         scrollTrigger:{
//             trigger: ".slide p",
//             toggleActions: "restart none none restart"
//         },
//         duration: 1,
//         delay: 2.75,
//         opacity: 0,
//         ease: "slow(0.7, 0.7, false)",
//     });




    // const timeline = gsap.timeline( {defaults: {duration: 1}});
    // timeline.from()
