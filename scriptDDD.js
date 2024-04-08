const h1 = document.querySelector("h1")

h1.addEventListener("click", click)

function click(){
    let buttonpress = new Audio("audio/button_press.mp3")
    buttonpress.play()

}