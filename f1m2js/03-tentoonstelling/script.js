const myImage = document.getElementById("myImage")
const myTitle = document.getElementById("myTitle");

let paintings = [
    "img/painting0.jpg",
    "img/painting1.jpg",
    "img/painting2.jpg",
    "img/painting3.jpg",
    "img/painting4.jpg",
    "img/painting5.jpg"
];
let title = [
    "de schilderrijen van van Gogh",
    "De rode wijngaard",
    "De sterrennacht",
    "Sterrennacht boven de Rhône",
    "Zonnebloemen",
    "Boerderij in de Provence"
];


function changeimage(index){
    myTitle.innerHTML = title[index]
    myImage.src = paintings[index];
}
