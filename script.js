const nextBTN = document.getElementById ("nextBTN");
const landing = document.getElementById ("landing");
const letter = document.getElementById ("letter");
const flap = document.querySelector(".flap");
const letterContent = document.querySelector(".letter-content");

nextBTN.addEventListener("click", () => {
    landing.classList.add("hidden");
    letter.classList.remove("hidden");


    flap.style.transform = "rotateX(180deg)";
    letterContent.style.opacity = "1";
})

const hearts = document.querySelectorAll('.heart');

hearts.forEach((heart) => {
  // Random horizontal position
  heart.style.left = Math.random() * 100 + 'vw';
  // Random animation duration
  heart.style.animationDuration = 3 + Math.random() * 4 + 's';
  // Optional: random scale
  heart.style.fontSize = 45 + Math.random() * 50 + 'px';
});
