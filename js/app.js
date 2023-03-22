'use strict';

let totalVotes = 2;



const ctx = document.getElementById('myChart');




let state = {
  allProductsArray: [],
};


let imgContainer = document.getElementById('container');
let imgOne = document.getElementById('photo1');
let imgTwo = document.getElementById('photo2');
let imgThree = document.getElementById('photo3');
let button1 = document.getElementById('butt1');
let button2 = document.getElementById('butt2');
let button3 = document.getElementById('butt3');
let resultsButton = document.getElementById('buttResults');

function Products(name, fileExt = 'jpg') {
  this.name = name;
  this.views = 0;
  this.votes = 0;
  this.photo = `img/${name}.${fileExt}`;

  state.allProductsArray.push(this);
  


  
}

let obst = localStorage.getItem('prawns');
let obstacle = JSON.parse(obst);

if(obst) {
  state.allProductsArray = obstacle;
  
}


let bana = new Products('banana');
let bag = new Products('bag');
let bath = new Products('bathroom');
let boot = new Products('boots');
let breakf = new Products('breakfast');
let bubb = new Products('bubblegum');
let chair = new Products('chair');
let thulu = new Products('cthulhu');
let duck = new Products('dog-duck');
let drag = new Products('dragon');
let pen = new Products('pen');
let sweep = new Products('pet-sweep');
let sciss = new Products('scissors');
let shark = new Products('shark');
let meep = new Products('sweep', 'png');
let taunt = new Products('tauntaun');
let uni = new Products('unicorn');
let wat = new Products('water-can');
let wine = new Products('wine-glass');
  


function randomPic() {
  return Math.floor(Math.random() * state.allProductsArray.length);
};




function renderPic() {
  let indexRand1 = randomPic();
  let indexRand2 = randomPic();
  let indexRand3 = randomPic();


  while (indexRand1 === indexRand2) {
    indexRand1 = randomPic(); 
  }
  while (indexRand2 === indexRand3) {
    indexRand2 = randomPic();
  }
  while (indexRand3 === indexRand1) {
    indexRand3 = randomPic();

  }

  imgOne.src = state.allProductsArray[indexRand3].photo;
  imgOne.alt = state.allProductsArray[indexRand3].name;
  state.allProductsArray[indexRand3].views++


  imgTwo.src = state.allProductsArray[indexRand1].photo;
  imgTwo.alt = state.allProductsArray[indexRand1].name;
  state.allProductsArray[indexRand1].views++


  imgThree.src = state.allProductsArray[indexRand2].photo;
  imgThree.alt = state.allProductsArray[indexRand2].name;
  state.allProductsArray[indexRand2].views++



}

function renderChart() {
  
  let thingNames = [];
  let thingVotes = [];
  let thingViews = [];
  
  console.log(thingVotes);
  
  

  

  
  for (let i = 0; i < state.allProductsArray.length; i++) {

    thingNames.push(state.allProductsArray[i].name);
    thingVotes.push(state.allProductsArray[i].votes);
    thingViews.push(state.allProductsArray[i].views);

  }

  

  let Optum = JSON.stringify(state.allProductsArray);
  localStorage.setItem('prawns', Optum);
  let inside = {


    type: 'bar',
    data: {
      labels: thingNames,
      datasets: [{
        label: '# of Views',
        data: thingViews,
        borderWidth: 1
      }, {
        label: '# of Votes',
        data: thingVotes,
        borderWidth: 1

      }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };

  new Chart(ctx, inside);
}


function handleClick1(event) {
  
  totalVotes--;
  let tag = imgOne.alt;
  console.log(imgOne.alt);
  for(let i = 0; i < state.allProductsArray.length; i++){
    if(tag === state.allProductsArray[i].name){
      state.allProductsArray[i].votes++
    }
  }
  renderPic();
  if (totalVotes === 0) {
    button3.removeEventListener('click', handleClick3)
    button2.removeEventListener('click', handleClick2)
    button1.removeEventListener('click', handleClick1)
  
  }


};


function handleClick2(event) {
  totalVotes--;
  let tag = imgTwo.alt;
  console.log(imgTwo.alt);
  for(let i = 0; i < state.allProductsArray.length; i++){
    if(tag === state.allProductsArray[i].name){
      state.allProductsArray[i].votes++
  
    }
  }
  renderPic();
  if (totalVotes === 0) {
    button3.removeEventListener('click', handleClick3)
    button2.removeEventListener('click', handleClick2)
    button1.removeEventListener('click', handleClick1)
    let Optum = JSON.stringify(state.allProductsArray);
    localStorage.setItem('prawns', Optum);
  }


};



function handleClick3(event) {
  totalVotes--;
  let tag = imgThree.alt;
  console.log(imgThree.alt);
  for(let i = 0; i < state.allProductsArray.length; i++){
    if(tag === state.allProductsArray[i].name){
      state.allProductsArray[i].votes++
  
    }
  }
  renderPic();
  if (totalVotes === 0) {
    button3.removeEventListener('click', handleClick3)
    button2.removeEventListener('click', handleClick2)
    button1.removeEventListener('click', handleClick1)

    let Optum = JSON.stringify(state.allProductsArray);
    localStorage.setItem('prawns', Optum);
  }


};



button1.addEventListener('click', handleClick1);
button2.addEventListener('click', handleClick2);
button3.addEventListener('click', handleClick3);


function handleClickDisplay(event) {
  
  renderChart();
}












resultsButton.addEventListener('click', handleClickDisplay);
renderPic();






