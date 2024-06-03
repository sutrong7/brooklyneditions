let mm = gsap.matchMedia()

window.onload = function () {
  setTimeout(introMotionAni, 2000)
}

/**
 * @intro
 *
 **/

function introMotionAni() {
  const tl = gsap.timeline({})

  tl.addLabel('a')
    .fromTo(
      '.header .logo',
      { opacity: 0 },
      { opacity: 1, visibility: 'visible', delay: -0.2 },
      'a',
    )
    .fromTo(
      '.letters-item img',
      { opacity: 0, y: 200 },
      { opacity: 1, y: 0, visibility: 'visible', stagger: 0.1 },
      'a',
    )
}

/**
 * scroll Down
 * **/

$('.btn-down').click(function (e) {
  e.preventDefault()
  $('html, body').animate(
    {
      scrollTop: $('.sc-introduction').offset().top,
    },
    600,
  )
})
/**
 * scroll Trigger
 */

gsap.set('.sc-introduction .link-more', { x: -500, opacity: 0 })
gsap.to('.sc-introduction .link-more', {
  scrollTrigger: {
    trigger: '.sc-introduction .link-more',
    start: '0% 90%',
    end: '100% 100%',
    scrub: 1,
  },
  x: 0,
  opacity: 1,
})

gsap.set('.sc-photographs .link-more', { x: -500, opacity: 0, duration: 1.4 })
gsap.to('.sc-photographs  .link-more', {
  scrollTrigger: {
    trigger: '.sc-photographs .link-more',
    start: '0% 90%',
    end: '100% 100%',
    scrub: 1,
  },
  x: 0,
  opacity: 1,
})

/**
 * service stickey area effect
 */
let serviceList = document.querySelectorAll('.services-item.absolute')
let pinSection;

mm.add('(min-width:479px)', () => {
  pinSection = gsap.timeline({
    scrollTrigger: {
      trigger: '.sc-services',
      start: '0 0',
      end: '100% 100%',
      // markers: true,
      scrub: 0,
    },
  })

  serviceList.forEach((element) => {
    let itemLine = element.querySelector('.header-line')
    pinSection
      .to(element, { xPercent: -100 })
      .from(itemLine, { scaleX: 1, duration: 0.25, stagger: 1.15 })
      .to(itemLine, { scaleX: 0.22, duration: 0.25, stagger: 1.15 })
  })
})

let serviceslide = document.querySelectorAll('.services-item.absolute');
mm.add('(max-width:478px)', () => {
  pinSection = gsap.timeline({
    scrollTrigger: {
      trigger: '.sc-services',
      // pin:true,
        scrub:1,
        start:'top top',
      end: '+=200%',
      
        // refreshPriority:8
    },
  })

  pinSection
    .to({}, { duration: 0.15})
    .from(serviceslide, { autoAlpha: 0, duration: 0.32, stagger: 1.15 })
    .to('.services-item .header-line', { scaleX: 0.22, duration: 0.5, stagger: 1.15 }, 0.35)
    .from('.services-item.absolute h3', { yPercent: 20, autoAlpha: 0, duration: 0.5, stagger: 1.15 }, 0.35)
    .from('.services-item.absolute .paragraph', { yPercent: 20, autoAlpha: 0, duration:0.5, stagger: 1.15 }, 0.40)
    .from('.services-item.absolute .img-wrap', { yPercent: 20, autoAlpha: 0, duration: 0.5, stagger: 1.15 }, 0.45)
})

/**
 * photos stickey area effect
 */

const photoList = document.querySelectorAll('.photographers-item')

let tl_photosanimate = gsap.timeline({
  scrollTrigger: {
    trigger: '.sc-photographs',
    refreshPriority: 6,
    scrub: 1.6,
    start: 'top top',
    end: 'bottom bottom',
  },
})

tl_photosanimate.fromTo(
  '.photographers-wrap',
  { yPercent: 45 },
  { yPercent: 0, duration: 2 },
)

photoList.forEach((element) => {
  yVal = element.dataset.y
  tl_photosanimate.to(element, { yPercent: yVal, duration: 2 }, '<')
})

tl_photosanimate.to({}, { duration: 0.15 })

/**
 * best print stickey area effect
 */

mm.add('(min-width:479px)', () => {
  let tl_thebest = gsap.timeline({
    scrollTrigger: {
      trigger: '.thebest-wrap',
      pin: true,
      scrub: 1.4,
      start: '0 0',
      end: '+=450%',
      refreshPriority: 4,
    },
  })

  tl_thebest
    .to({}, { duration: 0.2 })
    .to('.bg-gradient', { yPercent: -100 })
    .to('.sc-thebest .thebest-paragraph', { autoAlpha: 0, duration: 0.25 }, '<') // autoAlpha투명도와 가시성을 동시 제어
    .to(
      '.sc-thebest .grid-wrap.thebest',
      { color: '#171616', duration: 0.25 },
      '<',
    )
    .from(
      '.prints-item',
      {
        autoAlpha: 0,
        duration: 0.1,
      },
      '<',
    )
    .from('.prints-item', {
      rotate: 0,
      y: '100vh',
      stagger: 0.3,
      translateX: 0,
      delay: 0.15,
    })
    .from(
      '.title-item .img-credits',
      {
        autoAlpha: 0,
        duration: 0.3,
        yPercent: 10,
        stagger: 0.3,
        delay: 0.15,
      },
      '<',
    )
    .to(
      '.title-item .img-credits',
      {
        autoAlpha: 0,
        duration: 0.1,
        stagger: 0.3,
      },
      '<0.3',
    )
})
mm.add('(max-width:478px)', () => {
  let tl_thebest = gsap.timeline({
    scrollTrigger: {
      trigger: '.sc-thebest',
      pin: true,
      scrub: 1.2,
      start: '0 0',
      end: '+=340%',
      refreshPriority: 4,
    },
  })

  tl_thebest
    .to({}, { duration: 0.2 })
    .to('.sc-thebest .thebest-paragraph-1', { autoAlpha: 0, duration: 0.2 })
    .fromTo(
      '.sc-thebest .thebest-paragraph-2',
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 0.2 },
      '<0.1',
    )
    .to({}, { duration: 0.25 })
    .to('.sc-thebest .thebest-paragraph', { autoAlpha: 0, duration: 0.2 }, '<') // autoAlpha투명도와 가시성을 동시 제어
    .to('.bg-gradient', { yPercent: -100 }, '<')
    .to(
      '.sc-thebest .grid-wrap.thebest',
      { color: '#171616', duration: 0.3 },
      '<',
    )
    .from(
      '.prints-item',
      {
        autoAlpha: 0,
        duration: 0.1,
      },
      '<',
    )
    .from('.prints-item', {
      rotate: 0,
      y: '100vh',
      stagger: 0.3,
      translateX: 0,
      delay: 0.15,
    })
    .from(
      '.title-item .img-credits',
      {
        autoAlpha: 0,
        duration: 0.3,
        yPercent: 10,
        stagger: 0.3,
        delay: 0.15,
      },
      '<',
    )
    .to(
      '.title-item .img-credits',
      {
        autoAlpha: 0,
        duration: 0.1,
        stagger: 0.3,
      },
      '<0.3',
    )
})

/**
 * sc-testimonials slide
 */

var testimonials = new Swiper('.sc-testimonials .swiper', {
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

/**
 *  toggle effect
 */

gsap.utils.toArray('[data-gsap]').forEach((item) => {
  let tl_scrollTop = gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      toggleActions: 'play none none reverse',
      start: 'top 80%',
      scrub: false,
      // markers: true,
      refreshPriority: -15,
    },
    duration: 0.8,
    autoAlpha: 0,
    yPercent: 10,
  })

  tl_scrollTop.to(item, { autoAlpha: 1 })
})

gsap.to('.newsletter-wrap', {
  scrollTrigger: {
    trigger: '.newsletter-wrap',
    start: '0% 0%',
    end: '100% 100%',
    scrub: 1,
  },
  yPercent: 100,
  opacity: 1,
})

/**
 * slide left effect
 */

gsap.utils.toArray("[gsap-data-animation='slide-left']").forEach((item) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      toggleActions: 'play none none none',
      start: 'top 80%',
      scrub: false,
      refreshPriority: -15,
    },
    duration: 0.8,
    ease: 'power3',
    autoAlpha: 0,
    xPercent: 10,
  })
})
