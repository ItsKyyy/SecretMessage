const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Lol, Caught In 4K bro";
    gif.src =
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftenor.com%2Fview%2Fcaught-you-in-4k-meme-gif-7952073828116424104&psig=AOvVaw28kiN0OTpzIiccsRZLSLVZ&ust=1707194771004000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOi-y6Gyk4QDFQAAAAAdAAAAABAE"; 
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
