const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");

let seizoenen = [
  {
        "titel":"seizoenen",
        "image":"img/seasons.jpg",
        "backGround":"gray"
  },
  {
        "titel":"lente",
        "image":"img/spring.jpg",
        "backGround":"green"
  },
  {
        "titel":"zomer",
        "image":"img/summer.jpg",
        "backGround":"yellow"
  },
  {
        "titel":"herfst",
        "image":"img/autumn.jpg",
        "backGround":"orange"
  },
  {
        "titel":"winter",
        "image":"img/winter.jpg",
        "backGround":"white"
  }
];


function show(index){
          myTitle.innerHTML = seizoenen[index].titel;
          myImage.src = seizoenen[index].image;
          document.body.style.backgroundColor = seizoenen[index].backGround;
}