var h = '<audio controls src="./assets/audios/Salam Alaikum.mp3"></audio>'

$(document).ready(function() {
    $('.image-popup-no-margins').magnificPopup({
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {
            verticalFit: false
        },
        zoom: {
            enabled: true,
            duration: 300
        }
    });
    $('#app').html(h)

    maudio({
        obj: 'audio',
        fastStep: 10
    })

    $('audio').on('abort', function() {
        console.log('abort')
    })

    $('audio').on('canplay', function() {
        console.log('canplay')
    })

    $('audio').on('canplaythrough', function() {
        console.log('canplaythrough')
    })

    $('audio').on('durationchange', function() {
        console.log('durationchange')
    })

    $('audio').on('emptied', function() {
        console.log('emptied')
    })

    $('audio').on('ended', function() {
        console.log('ended')
    })

    $('audio').on('error', function() {
        console.log('error')
    })

    $('audio').on('loadeddata', function() {
        console.log('loadeddata')
    })

    $('audio').on('loadedmetadata', function() {
        console.log('loadedmetadata')
    })

    $('audio').on('loadstart', function() {
        console.log('loadstart')
    })

    $('audio').on('pause', function() {
        console.log('pause')
    })

    $('audio').on('play', function() {
        console.log('play')
    })

    $('audio').on('playing', function() {
        console.log('playing')
    })

    $('audio').on('progress', function() {
        console.log('progress')
    })

    $('audio').on('ratechange', function() {
        console.log('ratechange')
    })

    $('audio').on('seeked', function() {
        console.log('seeked')
    })

    $('audio').on('seeking', function() {
        console.log('seeking')
    })

    $('audio').on('stalled', function() {
        console.log('stalled')
    })

    $('audio').on('suspend', function() {
        console.log('suspend')
    })

    $('audio').on('timeupdate', function() {
        console.log('timeupdate')
    })

    $('audio').on('volumechange', function() {
        console.log('volumechange')
    })

    $('audio').on('waiting', function() {
        console.log('waiting')
    })
});