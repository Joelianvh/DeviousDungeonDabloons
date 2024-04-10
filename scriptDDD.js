const h1 = document.querySelector("h1")
const links = document.querySelector("a")
const flipcontainer = Array.from(document.querySelectorAll(".flip_container"))
h1.addEventListener("click", click)
links.addEventListener("click",click)

flipcontainer.forEach(function(playercard) {

    playercard.addEventListener("click", function() {
        const flippedvalue = parseInt(this.getAttribute("data-flipped"))
        if (flippedvalue === 1) {
            console.log(flippedvalue)
            this.setAttribute("data-flipped", "0")
            this.classList.add("flipclass")
        } else {
            console.log(flippedvalue);
            this.setAttribute("data-flipped", "1")
            this.classList.remove("flipclass")
        }
    });
    playercard.addEventListener("mouseover", function(){
        let hover_sound = new Audio("audio/hover_sound.mp3")
        hover_sound.play()
        console.log("soundplay")
})
});

function click(){
    let buttonpress = new Audio("audio/button_press.mp3")
    buttonpress.play()
}
