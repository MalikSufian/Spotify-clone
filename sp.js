console.log("Welcome To Spotify");

// Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs = [
    { songName: "Aj Kal Ve", filePath: "songs/1.mp3", coverPath: "ajkl cover.jpg" },
    { songName: "SHUBH - Cheques", filePath: "songs/2.mp3", coverPath: "chcovers.jpg" },
    { songName: "INVINCIBLE", filePath: "songs/3.mp3", coverPath: "incover.jpg" },
    { songName: "Tere Hawaale", filePath: "songs/4.mp3", coverPath: "thcover.jpg" },
    { songName: "4x4 - Nirvair Pannu", filePath: "songs/5.mp3", coverPath: "4x4cover.jpg" },
    { songName: "Players", filePath: "songs/6.mp3", coverPath: "placover.jpg" },
    { songName: "Apna Bana Le", filePath: "songs/7.mp3", coverPath: "apnacover.jpg" },
    { songName: "Dil Sambhal Ja Zara", filePath: "songs/8.mp3", coverPath: "dilcover.jpg" },
];

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update seekbar
    const progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value / 100) * audioElement.duration;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
    });
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        const index = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = songs[index - 1].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    });
});
