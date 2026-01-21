const nextBTN = document.getElementById ("nextBTN");
const landing = document.getElementById ("landing");
const letter = document.getElementById ("letter");
const flap = document.querySelector(".flap");
const letterContent = document.querySelector(".letter-content");

nextBTN.addEventListener("click", () => {
    landing.classList.add("hidden");
    letter.classList.remove("hidden");

    setTimeout(() => {
     flap.style.transform = "rotateX(180deg)";
    }, 50); 

    setTimeout(() => {})
    letterContent.style.opacity = "1";
  },600);

    

const hearts = document.querySelectorAll('.heart');

hearts.forEach((heart) => {

  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 3 + Math.random() * 4 + 's';
  heart.style.fontSize = 80 + Math.random() * 100 + 'px';
});
