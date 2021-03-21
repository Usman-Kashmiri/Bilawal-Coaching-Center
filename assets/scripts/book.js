$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'assets/audios/Bruh.mp3');

    $('#audio').click(function() {
        audioElement.play();
    });
});