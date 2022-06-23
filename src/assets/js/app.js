console.log("Bijour Bank !");
/**
 * init foundation
 */
$(document).ready(function () {
  $(document).foundation();
});

//  import  user  from "./user.js"; 
//  let prenom = user.firstname;
//  let nom=user.name;

// console.log(prenom);
// console.log(nom);


let tauxlivre= 0.86211785;
let tauxdollar=1.0515722;
let symbol="€";
let euro=solde;
let dollard= solde * tauxdollar;
let livre=solde*tauxlivre;

let arrondi=0.00;
let pourcent=0;
let total= parseFloat(document.getElementById('solde').innerText);
let tampon=document.getElementById("symbol").value;
let elem = document.getElementById("symbol");




      elem.addEventListener("click", e =>{
          symbol=(e.target.value);   
switch (symbol) {

  case "$":
    if(tampon="€"){
        total=dollard;   
    }else{

      total=euro;
    }
    break;
    case "€":
      if(tampon="$"){
        total=euro;  
    }else{
      total=euro;
    }
    break;
    case "£":
      if(tampon="€"){
        total=livre;
    }else{
      total=dollard;
    }
    break;
}
 total=Math.round(total * 100) / 100
          document.getElementById("solde").innerHTML = total+symbol;
      });
    


// alert(document.cookie);
// console.log(dataSet.push({
//   operator: "credit",
//   titre: "test1",
//   desc: "fgdggd",
//   montant: 800,
// }, {
//   operator: "credit",
//   titre: "test2",
//   desc: "la mairie",
//   montant: 800,
// },));
// console.log(dataSet);

function operationRetour(action) {
  if (action["operator"] === "credit") {
    pourcent=(action["montant"]/solde) *100;
  
    return (
      '<div class="operation credit">' +
      '<div class="grid-x grid-padding-x align-middle">' +
      '<div class="cell shrink">' +
      '<div class="picto">' +
      '<img src="./assets/images/sac-dargent.png" alt="credit" />' +
      "</div>" +
      "</div>" +
      '<div class="cell auto">' +
      "<div>" +
      "<h2>" +
      action["titre"] +
      "</h2>" +
      "<small>" +
      action["desc"]  +" "+ action["date"] +
      "</small>" +
      "</div>" +
      "</div>" +
      '<div class="cell small-3 text-right">' +
      "<div>" +
      '<p class="count">' +
      action["montant"] +
      "</p>" +
      "<small>"+( arrondi=Math.round(pourcent * 100) / 100)+
      "%"+
      "</small>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>"
    );
  } else if (action["operator"] === "debit") {
    pourcent=(action["montant"]/solde) *100;
 
    return (
      '<div class="operation debit">' +
      '<div class="grid-x grid-padding-x align-middle">' +
      '<div class="cell shrink">' +
      '<div class="picto">' +
      '<img src="./assets/images/depenses.png" alt="credit" />' +
      "</div>" +
      "</div>" +
      '<div class="cell auto">' +
      "<div>" +
      "<h2>" +
      action["titre"] +
      "</h2>" +
      "<small>" +
      action["desc"] +" "+ action["date"] +
      "</small>" +
      "</div>" +
      "</div>" +
      '<div class="cell small-3 text-right">' +
      "<div>" +
      '<p class="count">' +
      action["montant"] +
      "</p>" +
      "<small>"+( arrondi=Math.round(pourcent * 100) / 100)+
      "%"+
      "</small>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>"
    );
    
  }
}
//modification
function initLocalStorage() {
  if (localStorage.getItem("data") === null) {
    localStorage.setItem("data", JSON.stringify(dataSet));
    location.reload();
  }
}
initLocalStorage();
function setLocalStorage(data){
  if (localStorage.getItem("data") !== null) {
     localStorage.clear();
    localStorage.setItem("data", JSON.stringify(data));
   location.reload();
  }else{
    initLocalStorage();
  }
}
console.log(tmpData);
// y=tmpData[5].titre;
// console.log(y);
const mesOperations = document.getElementById("mesOperations");
if (title === "index") {
  tmpData.forEach((op) => {
    let operation = operationRetour(op);
    mesOperations.insertAdjacentHTML("beforeend", operation);
  });
} else if (title === "credit") {
  
  tmpData.forEach((op) => {
    if (op["operator"] === "credit") {
      let operation = operationRetour(op);
      mesOperations.insertAdjacentHTML("beforeend", operation);
  
    }
  });
} else if (title === "debit") {
  
  tmpData.forEach((op) => {
    if (op["operator"] === "debit") {
      let operation = operationRetour(op);
      mesOperations.insertAdjacentHTML("beforeend", operation);
    }
  });
}
const form = document.querySelector("form");
const buttonSubmit = document.getElementById("btSubmit");

function gererEnter() {

let d = new Date();
let date = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
let hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
console.log(hours);
console.log(date);

  return {
    operator: form.operator.value,
    titre: form.titre.value,
    desc: form.desc.value,
    montant: form.montant.value,
    date: date+" "+hours,
  };
}

buttonSubmit.addEventListener("click", (event) => {
  myData = gererEnter();
  console.log(solde);
  dataSet.push(myData);
  setLocalStorage(dataSet);
  console.log(dataSet);
  event.preventDefault();
});

console.log(solde);
 solde = 0;
 total=0;
if(title === "index"){
tmpData.forEach((op) => {


  if (op["operator"] === "credit") {
    solde = ((solde) + (parseFloat(op["montant"])));
    total =  (parseFloat(total)+(solde));
  } else if (op["operator"] === "debit") {
    solde = (solde - (op["montant"]));
   total = total-solde;
  }
 
});
}else if(title === "credit"){
tmpData.forEach((op) => {
  if (op["operator"] === "credit") {
    solde = ((solde) + (parseFloat(op["montant"])));
    total = (parseFloat(total)+(solde));
  } 
});
}else if (title === "debit") {
  tmpData.forEach((op) => {
    if (op["operator"] === "debit") {
      solde = (solde - parseFloat(op["montant"]));
      total= total-solde;
    }
  });
} 
console.log(solde);
console.log(total);
document.getElementById("solde").innerHTML = solde+symbol;
//let searchParams = new URLSearchParams(window.location.search);
let pathArray = window.location.pathname.split( "/" );
console.log(pathArray);
// if(searchParams.has('index')){
// console.log("tout");
// }else if(searchParams.has('credit')){
//   console.log("credit");
// }else if(searchParams.has('debit')){
//   console.log("debit");
// }
if(pathArray[3]=='index.html' || pathArray[7]=='index.html' ){
  if (solde > 2000) {
    document.getElementById("commentaire").innerHTML =
      "T'es riche mec ✨, beau pactole!!";
  } else if (solde > 1000 && solde < 2000) {
    document.getElementById("commentaire").innerHTML = "ça va, ça va 😎";
  } else if (solde > 500 && solde < 1000) {
    document.getElementById("commentaire").innerHTML =
      "Heu y'a plus grand chose, c'est la dèche ";
  } else if (solde > 50 && solde < 500) {
    document.getElementById("commentaire").innerHTML =
      "aie aie aie, tu vas manger des pâtes";
  } else if (solde < 50) {
    document.getElementById("commentaire").innerHTML = "faut remettre du pognon";
  }else if (solde<0){
    document.getElementById("commentaire").innerHTML = "c'est la merde ALERTE, ALERTE";
    }
  }else if(pathArray[3]=='credit.html'|| pathArray[7]=='credit.html' ){

    if (solde > 2000) {
      document.getElementById("commentaire").innerHTML =
        "T'as palpé man ! ✨";
    } else if (solde > 1000 && solde < 2000) {
      document.getElementById("commentaire").innerHTML = "c'est 'maman' qui va être contente 😎";
    } else if (solde > 500 && solde < 1000) {
      document.getElementById("commentaire").innerHTML =
        "Pas gagné grand chose...... ";
    } else if (solde > 50 && solde < 500) {
      document.getElementById("commentaire").innerHTML =
        "feignant";
    } else if (solde < 50) {
      document.getElementById("commentaire").innerHTML = "Mais go Pôle emploi direct";
    }else if (solde<0){
      document.getElementById("commentaire").innerHTML = "ok j'espére que t'as bien fait travaillé ta femme...";
      }
   
  }else if(pathArray[3]=='debit.html' || pathArray[7]=='debit.html'){
    if (solde < (-2000)) {
      document.getElementById("commentaire").innerHTML =
        "ta femme s'est payé un poney 🦄 ou quoi !!";
    } else if ((solde < (-1000)) && (solde > (-2000))) {
      document.getElementById("commentaire").innerHTML = "Et ça brûle du billet 🔥 ";
    } else if ((solde < (-500) && solde > (-1000))) {
      document.getElementById("commentaire").innerHTML =
        "Heu tu flambes là ..🤘🏻 ";
    } else if ((solde < (-200)) && (solde > (-500))) {
      document.getElementById("commentaire").innerHTML =
        "faut quand même penser à lever un peu le pied";
    } else if ((solde < (-100)) && (solde > (-200))) {
      document.getElementById("commentaire").innerHTML = "Ca va bien géré";
    }else if ((solde < (-100))) {
      document.getElementById("commentaire").innerHTML = "Cool pas trop dépensé 😎";
      }
  }
console.log(solde);
total = solde;
console.log(tmpData);


 


