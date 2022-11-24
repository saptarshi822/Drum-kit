var i;
var butt=document.querySelectorAll("button")
for( i = 0 ; i<butt.length ; i++){
    butt[i].addEventListener("click",function () {
        handleclick(this.innerHTML);
        animation(this.innerHTML);
    });
}
var aud = new Audio('/sounds/crash.mp3');
var aud1=new Audio("/sounds/kick-bass.mp3")
var aud2=new Audio("/sounds/snare.mp3")
var aud3 = new Audio("/sounds/tom-1.mp3")
var aud4=new Audio("/sounds/tom-2.mp3")
var aud5=new Audio("/sounds/tom-3.mp3")
var aud6=new Audio("/sounds/tom-4.mp3")
function handleclick ( hello ) {
    
    switch (hello){
        case 'w': aud.play()
            break;
        case 'a':aud1.play()
            break;
        case 's':aud2.play()
            break;
        case 'd':aud3.play()
            break;
        case 'j':aud4.play()
            break;
        case 'k':aud5.play()
            break;
        case 'l':aud6.play()
            break;
        default: console.log();
            break;
    }
    
}

document.addEventListener("keypress",function (hmm){
           handleclick(hmm.key)
           animation(hmm.key)
    }
   

);
function animation(key){
   var ani= document.querySelector("."+key);
   ani.classList.add("pressed");
   setTimeout(function(){
    ani.classList.remove("pressed");
   },200)
}




