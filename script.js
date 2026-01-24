const nextBTN = document.getElementById ("nextBTN");
const landing = document.getElementById ("landing");
const letter = document.getElementById ("letter");
const letterContent = document.querySelector(".letter-content");

nextBTN.addEventListener("click", () => {

  const revealHeart = document.createElement("div");
  revealHeart.classList.add("heart-reveal");
  revealHeart.textContent=("❤️");
  document.body.appendChild(revealHeart);

  revealHeart.addEventListener("animationend", () =>{

    landing.classList.add("hidden");
    letter.classList.remove("hidden")
    letterContent.style.opacity ="1"
    revealHeart.remove();
  });
});

const hearts = document.querySelectorAll('.heart');

hearts.forEach((heart) => {

  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 3 + Math.random() * 4 + 's';
  heart.style.fontSize = 80 + Math.random() * 100 + 'px';
});
