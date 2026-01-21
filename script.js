const nextBTN = document.getElementById ("nextBTN");
const landing = document.getElementById ("landing");
const letter = document.getElementById ("letter");

nextBTN.addEventListener("click", () => {
    landing.classList.add("hidden");
    letter.classList.remove("hidden");
})