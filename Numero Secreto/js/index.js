let modoJ=document.getElementById("easy")
let bloco=document.getElementsByClassName("bloco")
let back=new Audio();
back.src="../audios/Gaming Lofi.mp3"
function DisplayE (){
    back.play()
    modoJ.style.display="none"
    bloco[0].style.display="block" 
    bloco[1].style.display="block"
    bloco[2].style.display="block"
    bloco[3].style.display="block"
 }


modoJ.addEventListener("click",DisplayE)
