const naam = document.getElementById('naam');
const omschrijving = document.getElementById('omschrijving');
const afbeelding = document.getElementById('afbeelding');
const richtingen = document.getElementById('richtingen');
const mijnActie = document.getElementById('');

let position = 1;


const nodes =
[ 
    {
        "naam": "buiten",
        "omschrijving":"je staat voor een gebouw",
        "afbeelding": "0.jpg",
        "mogelijkheden": [
            {"richting":"noord","doel":2},
            {"richting":"zuid","doel":3}
        ]
    }
];

gotoPosition(position);

function gotoPosition(pos){
    naam.innerText = nodes[pos].naam;
    omschrijving.innerText = nodes[pos].omschrijving;
    afbeelding.src = "img/" + nodes[pos].afbeelding;
    richtingen.innerText = "u kunt kiezen uit:";
    nodes[pos].mogelijkheden.map((r)=>{
        richtingen.innerHTML += r.richting + "&nbsp;";
    })
};