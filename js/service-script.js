gsap.registerPlugin(ScrollTrigger);

const gup = gsap.utils.toArray('.g-up');
gup.forEach(item => {
    gsap.fromTo(item, {
        y: 100,
        autoAlpha: 0,
    },
    {
        y:0,
        autoAlpha: 1,
        scrollTrigger: {
            trigger: item,
            start: "top 90%",
            // markers: true,
        },
        ease: "sine.out",
    })
})


// Intro Section 
const t2 = gsap.timeline({
    scrollTrigger: {
        trigger: '#intro',
        start: "top 90%",
        // markers: true
      }
})
t2
    .from('.catchphrase', {
        scale: 0,
        duration: 1,
        ease: 'power2.easeOut'
    })
    .from('.intro_point', {
        y: 100,
        autoAlpha: 0,
        duration: 1,
        ease: 'sine.out'
    },
    '<1'
    )


// TABLE LOLOLOL
// gsap.from(".maintenance-table td", {
//     scrollTrigger: {
//         trigger: ".maintenance-table", 
//         start: "top 80%",
//     },
//     y: 100,
//     autoAlpha: 0,
//     stagger: {
//         amount: 3,
//         from: "random",
//         repeat: -1,
//     },
//     ease: "sine.out",
//     duration: 1
// })


// Concerns Section Timeline
const t1 = gsap.timeline({
    scrollTrigger: {
        trigger: '#concerns',
        start: "top 90%",
        // markers: true
      }
})
t1
    .from('#concerns h2', {
        scale: 0,
        duration: 1,
        ease: 'sine.out'
    })
    .from('.scream-image', {
        autoAlpha: 0,
        duration: 1,
        ease: 'sine.out'
    },
    '<1'
    )
    .from('.bubble', {
        autoAlpha: 0,
        stagger: 0.3,
        ease: "power2.easeOut"
    })
    