var buttons = document.querySelectorAll(".drum");

for (i = 0; i < buttons.length;i++){
    buttons[i].addEventListener("click", handleClick)
}

function handleClick(){
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play()
}