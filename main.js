const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Lol, Caught In 4K bro";
    gif.src =
    "https://media1.tenor.com/m/bltxA8iPZagAAAAC/caught-you-in-4k-meme.gif"; 
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect(); 
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random()* maxX);
    const randomy = Math.floor(Math.random()* maxY);
    
    noBtn.style.left = randomX+ "px";
    noBtn.style.top = randomy + "px";
});
