const songs = [

{
title:"Map Sabala - Injustice",
artist:"Map Sabala",
cover:"covers/song1.jpg",
link:"https://github.com/flamesentertainment/flames-entertainment-music/releases/download/v1.0/Map-Sabala-INJUSTICE-True-Story-Prod-By-Exclusive-5ifty.mp3"
},

{
title:"Umublack Nomusung,10 Pa 10, Bad Boys ft Blood Kid - Bondi Bakomekofye",
artist:"Umublack Nomusungu",
cover:"covers/song2.jpg",
link:"https://github.com/flamesentertainment/flames-entertainment-music/releases/download/v1.0/Umublack.Nomusungu.ft.Blood.kid.x.10pa10.x.Bad.boys.-.BONDI.BAKOMEKOFYE.official.audio.MP3_160K.mp3"
},

{
title:"Umublack Nomusungu ft Mr How(4na5) - Ubuchushi Bumobwibwine",
artist:"Umublack nomusungu",
cover:"covers/song3.jpg",
link:"https://github.com/flamesentertainment/flames-entertainment-music/releases/download/v1.0/4.na.5.Mr.How.x.Umublack.Nomusungu.big.teafer._.hash.PC.-.UBUCHUSHI.BUMOBWINE.official.audio.MP3_128K.mp3"
}

];

let songsContainer = document.getElementById("songs");

function displaySongs(songList){

songsContainer.innerHTML="";

songList.forEach(song => {

songsContainer.innerHTML += `

<div class="song-card">

<img src="${song.cover}">

<div class="song-info">

<h3>${song.title}</h3>

<p>${song.artist}</p>

<a href="${song.link}" class="download-btn" download>
Download
</a>

</div>

</div>

`

});

}

displaySongs(songs);

let searchInput = document.getElementById("search");

searchInput.addEventListener("keyup", function(){

let value = searchInput.value.toLowerCase();

let filtered = songs.filter(song =>
song.title.toLowerCase().includes(value)
);

displaySongs(filtered);

});
