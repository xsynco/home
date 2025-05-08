function play_pause(){
  document.getElementById("bgvid");
  if (bgvid.paused == true) {
    // Play
    bgvid.play();

    // Update Text
    playpause.innerHTML = "►";
  } else {
    // Pause
    bgvid.pause();

    // Update Text
    playpause.innerHTML = "►";
  }
}
function mute_unmute(){
  document.getElementById("bgvid");
  if (bgvid.muted == false) {
    // Mute
    bgvid.muted = true;

    // Update Text
    mutebutton.innerHTML = "♫";
  } else {
    // Unmute
    bgvid.muted = false;

    // Update Text
    mutebutton.innerHTML = "♫";
  }
}
