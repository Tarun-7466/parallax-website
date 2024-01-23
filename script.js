const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#background",
        start: "top top",
        scrub: 1,
    }
});

const elem = gsap.utils.toArray('.Parallax').forEach(elem => {
    const depth = elem.dataset.depth;
    const shifitng = -(depth * (elem.offsetHeight * 1.2));
    tl.to(elem, {
        y: shifitng,
        ease: "none"
        }, 0)
        .to("#overlay", {
            opacity: 0,
            ease: "none"
        }, 0)
});

const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger:"#content",
        start:"top center",
        toggleAction: "play pause resume reverse"
    }
});

tl2.from('.grid-item',{
    stagger:.3,
    opacity:0,
    duration: 1,
    ease: 'Expo.easeInOut'
},)
.to('.grid-item h4',{
    stagger:.4,
    opacity:1,
    duration: 1,
    // z-index:0,
    ease: 'Expo.easeInOut'
})
.from('.grid-item .img',{
    stagger:.4,
    opacity:0,
    duration: 2,
    // delay:2,
    ease: 'Expo.easeInOut'
})
.from('#content p',{
    stagger:.1,
    opacity:0,
    duration: .5,
    DelayNode:1,
    ease: 'Expo.easeInOut'
    
})