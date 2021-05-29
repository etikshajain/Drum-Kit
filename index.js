// document.querySelector(".drum").addEventListener("click",function(){
//   alert("I got clicked!");
// });

for(i=0;i<7;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var letter=this.innerHTML;
    // console.log(event);
    makeSound(letter);
    makeFlash(letter);
  });
}

  function makeSound(word){
  // this.style.color="purple";
  if(word=="w"){
    var crash=new Audio('sounds/crash.mp3');
    crash.play();
  }
  else if(word=="a"){
    var kick=new Audio('sounds/kick-bass.mp3');
    kick.play();
  }
  else if(word=="s"){
    var snare=new Audio('sounds/snare.mp3');
    snare.play();
  }
  else if(word=="d"){
    var tom1=new Audio('sounds/tom-1.mp3');
    tom1.play();
  }
  else if(word=="j"){
    var tom2=new Audio('sounds/tom-2.mp3');
    tom2.play();
  }
  else if(word=="k"){
    var tom3=new Audio('sounds/tom-3.mp3');
    tom3.play();
  }
  else if(word=="l"){
    var tom4=new Audio('sounds/tom-4.mp3');
    tom4.play();
  }
  else{
    console.log(word);
  }
}

function makeFlash(alph){
  document.querySelector("."+alph).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+alph).classList.remove("pressed");
  },100);
 }

document.addEventListener("keydown",function(event){
  makeSound(event.key);
  makeFlash(event.key);
});
