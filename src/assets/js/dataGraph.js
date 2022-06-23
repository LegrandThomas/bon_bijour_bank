// Ficher graphe


let log=document.getElementById("log").innerHTML;
const title = document.title;
let myData = JSON.parse(localStorage.getItem("data"));
let solde = 0;
let datapoints = [];
let y ="";
let tmpData = JSON.parse(localStorage.getItem("data"));
let dataSet = [
  {
    operator: "credit",
    titre: "Salaire",
    desc: "mois de septembre",
    montant: 1200,
    date : "22-06-2022 9:57",
  },
  {
    operator: "debit",
    titre: "Loyer",
    desc: "mois d'août",
    montant: 450,
    date : "11-03-2021 17:12",
  },
  {
    operator: "credit",
    titre: "Vente Boncoin",
    desc: "jeu ps5",
    montant: 25,
    date : "17-04-2022 16:01",
  },
  {
    operator: "debit",
    titre: "Restaurant",
    desc: "Mac Do",
    montant: 15,
    date : "11-06-2022 14:57",
  },
  {
    operator: "credit",
    titre: "Realisation site web",
    desc: "la mairie",
    montant: 800,
    date : "28-05-2022 11:57",
    
  },
];
log=(user.name)+" "+(user.firstname);
document.getElementById("log").innerHTML=log;
console.log(log);

if (title === "index") {
  myData.forEach((obj) => {

    if (obj["operator"] === "credit") {
      solde = solde + parseInt(obj["montant"]);
      datapoints.push(solde);
      //  labels.push(obj["titre"]);
    }
    if (obj["operator"] === "debit") {
      solde = solde - parseInt(obj["montant"]);
      datapoints.push(solde);
      // labels.push(obj["titre"])
    }

  });

} else if (title === "credit") {
  myData.forEach((obj) => {
    if (obj["operator"] === "credit") {
      solde = solde + parseInt(obj["montant"]);
      datapoints.push(solde);
      // labels.push(obj["titre"])
    }
  });

} else if (title === "debit") {
  myData.forEach((obj) => {
    if (obj["operator"] === "debit") {
      solde = solde + parseInt(obj["montant"]);
      datapoints.push(solde);
      // labels.push(obj["titre"])
    }
  });

}



// <block:setup:1>

 

const DATA_COUNT = datapoints.length + 5;

let labels = [];

let data = {

  labels: labels,

  datasets: [

    {
      label: "Compte",
      data: datapoints,
      borderColor: "purple",
      //   fill: true,
      cubicInterpolationMode: "monotone",

    },

  ],

};

for (let i = 0; i < DATA_COUNT; ++i) {

 if (i<5){
  console.log(dataSet[i].titre)
  labels.push(dataSet[i].titre);
 }else if(i==5){
  y=tmpData[5].titre;
  console.log(y);
   labels.push(y);
   console.log(y);
 }
}

  
 

 
// let x=document.getElementById("body");

// if(x!==null){
// let nodelist=x.getElementsByTagName("h2");
//   if (nodelist.length>0){
//     for (let i=0;i<nodelist.length;i++){
//       console.log(nodelist[i].innerText);
//       labels.push(nodelist[i].innerText);
//     }
//   }
// }




// </block:setup>

 

// <block:config:0>

const config = {

  type: "line",

  data: data,

  options: {

    elements: {

      point: {

        radius: 0,

      },

    },

    responsive: true,

    plugins: {

      legend: false,

      //   title: {

      //     display: true,

      //     text: "Chart.js Line Chart - Cubic interpolation mode",

      //   },

    },

    interaction: {

      intersect: false,

    },

    scales: {

      x: {

        display: false,

      },

      y: {

        display: false,

      },

    },

  },

};

 

/*Le contexte du canevas HTML */

if (title === "index") {

  context = document.getElementById("myChart").getContext("2d");

 

} else if (title === "credit") {

  context = document.getElementById("myChartCredit").getContext("2d");

 

} else if (title === "debit") {

  context = document.getElementById("myChartDebit").getContext("2d");


}




/* Création du graphique */

chart = new Chart(context, config);

 

