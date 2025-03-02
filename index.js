let btnRight = document.querySelector(".btn-right");
let btnLeft = document.querySelector(".btn-left");

let slides = document.querySelectorAll(".slides p");

let i = 0;

btnRight.addEventListener("click", Vpered)
console.log(btnRight);

btnLeft.addEventListener("click", Nazad)


function Vpered() {
    ++i;

    if (i >= slides.length) {
        slides[i - 1].classList.remove("block");

        i = 0;

        slides[i].classList.add("block");
    } else {
        slides[i - 1].classList.remove("block");

        slides[i].classList.add("block");
    }
}

function Nazad() {
    --i;

    if (i < slides.length) {
        slides[i + 1].classList.remove("block");

        i = slides.length - 1;

        slides[i].classList.add("block");
    } else {
        slides[i + 1].classList.remove("block");

        slides[i].classList.add("block");
    }
}