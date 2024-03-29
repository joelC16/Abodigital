//////// registros de plugins ///////
gsap.registerPlugin(ScrollTrigger) 
////////////////////////////////////


////////////////////////// ANIMACION DE LOS TITULOS Y LOS PARRAFOS ////////////////////////

// Elementos que usan la animacion 
const titulo1 = document.querySelector(".titulo-1");
const titulo2 = document.querySelector(".titulo-2");
const titulo3 = document.querySelector(".titulo-3");
const titulo4 = document.querySelector(".titulo-4");
const titulo5 = document.querySelector(".titulo-5");
const titulo6 = document.querySelector(".titulo-6");


const parrafo1 = document.querySelector(".parrafo-1");
const parrafo2 = document.querySelector(".parrafo-2");
const parrafo3 = document.querySelector(".parrafo-3");
const parrafo4 = document.querySelector(".parrafo-4");
/////////////////////////////////



// Funcion que ejecuta la animacion
function GSAPAnimations1(element, trigger, delay) {
    gsap.from(element, {
        scrollTrigger: trigger,
        duration: 1.3,
        delay: delay,
        y: 70,
        opacity: 0
    })
}

GSAPAnimations1(titulo1, ".titulo-1", .4);
GSAPAnimations1(titulo2, ".titulo-2", .4);
GSAPAnimations1(titulo3, ".titulo-3", .4);
GSAPAnimations1(titulo4, ".titulo-4", .4);
GSAPAnimations1(titulo5, ".titulo-5", .4);
GSAPAnimations1(titulo6, ".titulo-6", .5);

GSAPAnimations1(parrafo1, ".parrafo-1", .7);
GSAPAnimations1(parrafo2, ".parrafo-2", .6);
GSAPAnimations1(parrafo3, ".parrafo-3", .5);
GSAPAnimations1(parrafo4, ".parrafo-4", .5);
////////////////////////////////////////////////////////////////////////////////////////












const elemento1 = document.querySelector(".bajar-1");
const elemento2 = document.querySelector(".bajar-2");
const elemento3 = document.querySelector(".bajar-3");
const elemento4 = document.querySelector(".bajar-4");

let tl = gsap.timeline()
tl.from(elemento1, {
    duration: 1,
    xPercent: 100,
    scrollTrigger: {
        trigger: ".bajar-1",
        start: "center 100%",
        end: "+=200px",
        // toggleActions: "restart pause reverse pause",
        scrub: true
    },
})
tl.from(elemento2, {
    duration: 1,
    xPercent: 100,
    scrollTrigger: {
        trigger: ".bajar-2",
        start: "center 90%",
        end: "+=200px",
        // toggleActions: "restart pause reverse pause",
        scrub: true
    },
})
tl.from(elemento3, {
    duration: 1,
    xPercent: 100,
    scrollTrigger: {
        trigger: ".bajar-3",
        start: "center 50%",
        end: "+=200px",
        // toggleActions: "restart pause reverse pause",
        scrub: true
    },
})
tl.from(elemento4, {
    duration: 1,
    xPercent: 130,
    scrollTrigger: {
        trigger: ".bajar-4",
        start: "center 30%",
        end: "+=100px",
        // toggleActions: "restart pause reverse pause",
        scrub: true
    },
    overflow: "hidden"
})













// tl.from(elemento2, {
//     duration: 0.5,
//     xPercent: 100,
//     scrollTrigger: {
//         trigger: ".grid-item-2",
//         start: "end 80%",
//         toggleActions: "restart pause reverse pause",
//         scrub: true
//     },

// })
// tl.from(elemento3, {
//     duration: 0.5,
//     xPercent: 100,
//     scrollTrigger: {
//         trigger: ".grid-item-3",
//         start: "end 40%",
//         toggleActions: "restart pause reverse pause",
//         scrub: true
//     },
// })
// tl.to(elemento4, {
//     xPercent: 100,
//     scrollTrigger: {
//         trigger: ".grid-item-4",
//         start: "top center",
//         toggleActions: "restart pause reverse pause",
//         scrub: true
//     }
// })








// function GSAPAnimations2(elemento, gatillo) {
//     gsap.to(elemento, {
//         duration: 2,
//         xPercent: 100,
//         scrollTrigger: {
//             trigger: gatillo,
//             start: "top center",
//             toggleActions: "restart pause reverse pause",
//             scrub: true
//         },
//         markers: true
//     })
// }

// GSAPAnimations2(elemento1, ".grid-item-1");
// GSAPAnimations2(elemento2, ".grid-item-2");
// GSAPAnimations2(elemento3, ".grid-item-3");
// GSAPAnimations2(elemento4, ".grid-item-4");


