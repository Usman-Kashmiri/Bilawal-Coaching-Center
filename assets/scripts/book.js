$(document).ready(function() {
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'assets/audios/tamal.mp3');

  $('#audio').click(function() {
      audioElement.play();
  });
});