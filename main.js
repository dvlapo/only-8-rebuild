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

    const noOfBoxesOnXAxis = 20;
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
    } else if (arg === "ninth") {
        const pos = [
            1, 2, 3, 4, 5, 6, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 36,
            37, 38, 39, 40, 41, 42, 43, 44, 57, 58, 59, 60, 61, 62, 63, 78, 79,
            80, 81, 82, 99, 100, 101, 102, 119, 120, 121, 122, 123, 138, 139,
            140, 141, 142, 143, 144, 157, 158, 159, 160, 161, 162, 163, 164,
            165, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 195,
            196, 197, 198, 199, 200,
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
    const ninthSection = document
        .querySelector("#ninth p")
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
        (ninthSection / window.innerHeight) * 100 > 0 &&
        (ninthSection / window.innerHeight) * 100 <= 100
    ) {
        lightUp("ninth");
    } else if (
        (tenthSection / window.innerHeight) * 100 > 0 &&
        (tenthSection / window.innerHeight) * 100 <= 100
    ) {
        lightUp();
        const cta = document.querySelector(".cta");
        cta.classList.add("show");
    } else {
        lightUp();
        document.querySelector(".cta").classList.remove("show");
    }
}

window.addEventListener("scroll", watchIntersection);
