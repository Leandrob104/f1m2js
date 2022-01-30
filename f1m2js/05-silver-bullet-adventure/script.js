const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");
const myInput = document.getElementById("myInput"); 

let directionButtons = {
    "noord": document.getElementById('knopNoord'),
    "oost": document.getElementById('knopOost'),
    "zuid": document.getElementById('knopZuid'),
    "west": document.getElementById('knopWest')
}


let current_index = 0;


let locaties = [
    {
        "titel":"0 ingang silver bullet",
        "image":"img/0.jpg",
        "directions":{
            "zuid": 1
        }
    },
    {
        "titel":"1 gang bij docentenkamer",
        "image":"img/1.jpg",
        "directions":{
            "noord": 0,
            "west": 2,
            "oost": 5,
            "zuid": 4
        }
    },
    {
        "titel":"2 gang voor de trap",
        "image":"img/2.jpg",
        "directions":{
            "oost": 1,
            "zuid": 3
            
        }
    },
    {
        "titel":"plaats 33 vergaderkamer",
        "image":"img/3.jpg",
        "directions":{
            "noord": 2
        }
    },
    {
        "titel":"4 docentenkamer",
        "image":"img/4.jpg",
        "directions":{
            "noord": 1
        }
    },
    {
        "titel":"5 gang bij lokaal 0.90",
        "image":"img/5.jpg",
        "directions":{
            "noord": 10,
            "west": 1,
            "oost": 6
        }
    },
    {
        "titel":"6 gang bij het toilet",
        "image":"img/6.jpg",
        "directions":{
            "west": 5,
            "oost": 7,
            "zuid": 11
        }
    },
    {
        "titel":"7 gang bij lokaal 0.92 en 0.93",
        "image":"img/7.jpg",
        "directions":{
            "noord": 9,
            "west": 6,
            "zuid": 8
        }
    },
    {
        "titel":"8 klaslokaal 0.93",
        "image":"img/8.jpg",
        "directions":{
            "noord": 7
        }
    },
    {
        "titel":"9 klaslokaal 0.92",
        "image":"img/9.jpg",
        "directions":{
            "west": 10,
            "zuid": 7
        }
    },
    {
        "titel":"10 klaslokaal 0.90",
        "image":"img/10.jpg",
        "directions":{
            "oost": 9,
            "zuid": 5
        }
    },
    {
        "titel":"11 het toilet",
        "image":"img/11.jpg",
        "directions":{
            "noord": 6
        }
    },
];

function show(index){
    myTitle.innerHTML = locaties[index].titel;
    myImage.src = locaties[index].image;
    current_index = index;

    updateDirections();
}
function updateDirections(){

    let possible = locaties[current_index].directions;

    let possible_keys = Object.keys(possible);

    let button_keys = Object.keys(directionButtons);
    console.log(possible_keys)

    for(const key of button_keys){
        directionButtons[key].style.visibility = "hidden";
    }

    for(const key of possible_keys){
        directionButtons[key].style.visibility = "visible";
    }
}
function getInput(){
    show(myInput.value)
    myInput.value = "";
    myInput.focus();
}
function goDirection(richting){
    let punt_index = locaties[current_index].directions[richting];
    show(punt_index);
}
show(0)