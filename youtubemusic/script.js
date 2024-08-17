var arr = [
    { songName: "Jale 2", url: "./songs/Jale 2.mp3", img: "./images/jale.jpg" },
    { songName: "Pehle Bhi main", url: "./songs/Pehle Bhi Main.mp3", img: "./images/animal.jpg" },
    { songName: "Ram siya ram", url: "./songs/Ram Siya Ram.mp3", img: "./images/ram.jpg" },
    { songName: "Arjan Valley", url: "./songs/Arjan Vailly Ne.mp3", img: "./images/animal.jpg" }
]
const allSongsContainer = document.querySelector("#all-songs");
const leftPart = document.querySelector("#left");

var audio = new Audio();

// display the song details
var clutter = "";
var selectedSong = 0;

function mainFunction (){
    arr.forEach(function(elem, index){
        // clutter = clutter + ``;
        clutter += `
        <div class="song-card" id=${index}>
            <div class="part1">
                <img src=${elem.img} alt="">
                <h2>${elem.songName}</h2>
            </div>
            <h6>3:56</h6>
        </div>`
    })
    audio.src = arr[selectedSong].url;
    allSongsContainer.innerHTML = clutter;
}
mainFunction();




allSongsContainer.addEventListener("click", function(details){
    selectedData = details.target.id;
    audio.play();
})