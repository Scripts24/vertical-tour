const cursor = document.querySelector(".cursor");


function onMouseMove(e) {
    gsap.to(cursor, 0.0125, {
        x: e.pageX - 5,
        y: e.pageY - 5,
    });
}

let blocks = document.querySelectorAll(".block");
let duration = 1;
let stagger = duration;
let repeatDelay = 0.075 * (blocks.length - 1);

gsap.from(".block", 5, {
    scale: 1,
    top: "50%",
    left: "50%",
    transform: "translateZ(-200px)",
    stagger: {
        each: duration,
        repeat: -1,
        repeatDelay: repeatDelay,
    },
});



        