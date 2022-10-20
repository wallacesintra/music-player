// dedclaring variables
const prevBtn = document.querySelector('.prev');
const playBtn = document.querySelector('.play');
const pauseBtn = document.querySelector('.fa.fa-pause');
const nextBtn = document.querySelector('.next');

const cover = document.querySelector('.cover');
const title = document.querySelector('.title');
const artist = document.querySelector('.artist');
const audio = document.querySelector('audio');

// create an array containing objects of the songs
const songs = [
    {
        albumCover: 'images/avici.jpg',
        title: 'You Be Love',
        artist: 'Avicii',
        song: 'music/youBeLove.mp3'
    },
    {
        albumCover: 'images/good drank.jpg',
        title: 'Good Drank',
        artist: '2 Chainz',
        song: 'music/goodDrank.mp3'
    },
    {
        albumCover: 'images/kids in love.jpg',
        title: 'Permanent',
        artist: 'Kygo',
        song: 'music/permanent.m4a'
    },
    {
        albumCover: 'images/lsd.jpg',
        title: 'Genius',
        artist: 'LSD',
        song: 'music/genius.mp3'
    }
]
let counter = 0;

function load(){
    cover.src = songs[counter].albumCover;
    title.innerText = songs[counter].title;
    artist.innerText = songs[counter].artist;
    audio.src = songs[counter].song;
}
load();

// the functions
function previous(){
    if(counter <0){
        counter = songs.length -1;
    }else{
        counter--;
    }
    load();
    playSong()
}

function nextSong(){
    // console.log(counter);
    counter++;
    if(counter >songs.length-1){
        counter = 0;
    }
    load();
    playSong()
}

function playSong(){
    playBtn.classList.add('playing');
    playBtn.querySelector('i.fa').classList.remove('fa-play');
    playBtn.querySelector('i.fa').classList.add('fa-pause');
    audio.play();
}

function pauseSong(){
    playBtn.classList.remove('playing');
    playBtn.querySelector('i.fa').classList.remove('fa-pause');
    playBtn.querySelector('i.fa').classList.add('fa-play');
    audio.pause();
}
audio.addEventListener('ended',nextSong);

// events
prevBtn.addEventListener('click',previous);
nextBtn.addEventListener('click',nextSong);
playBtn.addEventListener('click',() => {
    const playing = playBtn.classList.contains('playing');
    if(playing){
        pauseSong();
    }else{
        playSong();
    }
});


// for(counter;counter<songs.length;counter++){
//     const li = document.createElement('li');
//     const node = document.createTextNode(songs[counter].title);
//     li.appendChild(node);
//     const ul = document.querySelector('ul');
//     ul.appendChild(li);
// }
