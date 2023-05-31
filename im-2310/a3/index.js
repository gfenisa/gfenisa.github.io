
let myAudio = document.getElementById("myAudio");
// the buttons for the controls
let playButton = document.getElementById("playButton");

/* PLAY/PAUSE MUSIC/AUDIO */
function playPause(){
  if (myAudio.paused || myAudio.ended) {
    
    myAudio.play();
  
    playButton.style.backgroundImage = "url('./icons/pause.svg')";
  } else {
    myAudio.pause();
    playButton.style.backgroundImage = "url('./icons/play.svg')";
  }
}

playButton.addEventListener('click', playPause);

myAudio.addEventListener('click', playPause);



/* OPEN/CLOSE COLLAPSED SIDEBAR */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }