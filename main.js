import "./scss/main.scss";

// Hero text animation
const letters = [...document.querySelectorAll(".hero__text span")];
const heroText = document.querySelector(".hero__text h1");

function setTransitionDelay() {
    letters.forEach(function (letter, idx) {
        letter.style.transitionDelay = `${idx * 50}ms`;
    });
}
setTransitionDelay();

setTimeout(() => {
    heroText.style.opacity = 1;
    letters.forEach(function (letter) {
        letter.classList.add("reveal");
    });
}, 1000);

// Background height
const background = document.querySelector(".background");
const sections = [...document.querySelectorAll("section")];

background.style.height = `${window.innerHeight * sections.length}px`;

// Boxes
let totalNoOfBoxes;
function createBoxes() {
    const boxes = document.querySelector(".boxes");
    const windowAspectRatio = Math.floor(
        window.innerWidth > window.innerHeight
            ? window.innerWidth / window.innerHeight
            : window.innerHeight / window.innerWidth
    );

    const noOfBoxesOnXAxis = window.innerWidth < 700 ? 10 : 20;
    const boxWidth = window.innerWidth / noOfBoxesOnXAxis;

    const noOfBoxesOnYAxis =
        window.innerWidth > window.innerHeight
            ? 20 / windowAspectRatio
            : 20 * windowAspectRatio;
    totalNoOfBoxes = noOfBoxesOnXAxis * noOfBoxesOnYAxis;

    for (let i = 0; i < totalNoOfBoxes; i++) {
        const box = document.createElement("div");
        box.style.width = `${boxWidth}px`;
        box.classList.add("box");
        boxes.appendChild(box);
        // box.innerHTML = `${i + 1}`;
    }
}

createBoxes();
window.addEventListener("resize", createBoxes);

function lightUp(arg) {
    const boxes = [...document.querySelectorAll(".box")];

    if (!arg) {
        boxes.forEach((box) => {
            box.classList.remove("grow");
        });
    }

    if (arg === "first") {
        boxes.forEach((box) => {
            if (box.getBoundingClientRect().right < window.innerWidth / 2) {
                box.classList.remove("shrink");
                box.classList.add("grow");
            } else {
                box.classList.remove("grow");
                box.classList.add("shrink");
            }
        });
    } else if (arg === "second") {
        boxes.forEach((box) => {
            if (box.getBoundingClientRect().right > window.innerWidth / 2) {
                box.classList.remove("shrink");
                box.classList.add("grow");
            } else {
                box.classList.remove("grow");
                box.classList.add("shrink");
            }
        });
    } else if (arg === "third") {
        boxes.forEach((box) => {
            if (box.getBoundingClientRect().right > window.innerWidth * 0.72) {
                box.classList.remove("shrink");
                box.classList.add("grow");
            } else {
                box.classList.remove("grow");
                box.classList.add("shrink");
            }
        });
    } else if (arg === "fourth") {
        boxes.forEach((box) => {
            if (box.getBoundingClientRect().right > window.innerWidth * 0.92) {
                box.classList.remove("shrink");
                box.classList.add("grow");
            } else {
                box.classList.remove("grow");
                box.classList.add("shrink");
            }
        });
    } else if (arg === "fifth") {
        boxes.forEach((box) => {
            if (box.getBoundingClientRect().right > window.innerWidth * 0.95) {
                box.classList.remove("shrink");
                box.classList.add("grow");
            } else {
                box.classList.remove("grow");
                box.classList.add("shrink");
            }
        });
    } else if (arg === "seventh") {
        const pos = [
            8, 18, 32, 44, 63, 75, 117, 123, 135, 148, 151, 172, 181, 190,
        ];
        boxes.forEach((box, idx) => {
            if (pos.includes(idx + 1)) {
                box.classList.remove("shrink");
                box.classList.add("grow");
            } else {
                box.classList.remove("grow");
                box.classList.add("shrink");
            }
        });
    } else if (arg === "eighth") {
        const pos = [
            83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
        ];
        boxes.forEach((box, idx) => {
            if (pos.includes(idx + 1)) {
                box.classList.remove("shrink");
                box.classList.add("grow");
            } else {
                box.classList.remove("grow");
                box.classList.add("shrink");
            }
        });
    } else if (arg === "eighth-short") {
        const pos = [89, 90, 91];
        boxes.forEach((box, idx) => {
            if (pos.includes(idx + 1)) {
                box.classList.remove("shrink");
                box.classList.add("grow");
            } else {
                box.classList.remove("grow");
                box.classList.add("shrink");
            }
        });
    }
}

function watchIntersection() {
    const firstSection = document
        .querySelector("#first p")
        .getBoundingClientRect().top;
    const secondSection = document
        .querySelector("#second p")
        .getBoundingClientRect().top;
    const thirdSection = document
        .querySelector("#third p")
        .getBoundingClientRect().top;
    const fourthSection = document
        .querySelector("#fourth p")
        .getBoundingClientRect().top;
    const fifthSection = document
        .querySelector("#fifth p")
        .getBoundingClientRect().top;
    const seventhSection = document
        .querySelector("#seventh p")
        .getBoundingClientRect().top;
    const eighthSection = document
        .querySelector("#eighth p")
        .getBoundingClientRect().top;
    const tenthSection = document
        .querySelector("#tenth p")
        .getBoundingClientRect().top;

    if (
        (firstSection / window.innerHeight) * 100 > 0 &&
        (firstSection / window.innerHeight) * 100 <= 90
    ) {
        lightUp("first");
    } else if (
        (secondSection / window.innerHeight) * 100 > 0 &&
        (secondSection / window.innerHeight) * 100 <= 100
    ) {
        lightUp("second");
    } else if (
        (thirdSection / window.innerHeight) * 100 > 0 &&
        (thirdSection / window.innerHeight) * 100 <= 100
    ) {
        lightUp("third");
    } else if (
        (fourthSection / window.innerHeight) * 100 > 0 &&
        (fourthSection / window.innerHeight) * 100 <= 100
    ) {
        lightUp("fourth");
    } else if (
        (fifthSection / window.innerHeight) * 100 > 0 &&
        (fifthSection / window.innerHeight) * 100 <= 100
    ) {
        lightUp("fifth");
    } else if (
        (seventhSection / window.innerHeight) * 100 > 0 &&
        (seventhSection / window.innerHeight) * 100 <= 100
    ) {
        lightUp("seventh");
    } else if (
        (eighthSection / window.innerHeight) * 100 > 0 &&
        (eighthSection / window.innerHeight) * 100 <= 40
    ) {
        lightUp("eighth-short");
    } else if (
        (eighthSection / window.innerHeight) * 100 > 40 &&
        (eighthSection / window.innerHeight) * 100 <= 100
    ) {
        lightUp("eighth");
    } else if (
        (tenthSection / window.innerHeight) * 100 > 0 &&
        (tenthSection / window.innerHeight) * 100 <= 100
    ) {
        const cta = document.querySelector(".cta");
        cta.classList.add("show");
    } else {
        lightUp();
        document.querySelector(".cta").classList.remove("show");
    }
}

window.addEventListener("scroll", watchIntersection);
