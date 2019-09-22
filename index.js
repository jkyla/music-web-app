window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.queurySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#f8B195",
        "#f67280",
        "#c06c84",
        "#d36060",
        "#6c5b7b",    
        "#355c7d"
    ];

    console.log(sounds[0]);

    //Let's get going with the sound here
    pads.forEach(pad, index) => {
        pad.addEventListener("click", function() { 
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        });
    });

    //create a function that makes bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener("animationend", function(){
            visual.removeChild(this);
         });
    });
});
