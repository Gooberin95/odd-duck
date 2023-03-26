'use strict';
//setting a cap on amount of times user can vote
let totalVotes = 30;


// grabbing element by id to manipulate and give data
const ctx = document.getElementById('myChart');



//state object to have a reference and keep track of the changes that have occured in the application
let state = {
  allProductsArray: [],
};

//grabbing each html div and img container we intend to render and manipulate with javascript
let imgContainer = document.getElementById('container');
let imgOne = document.getElementById('photo1');
let imgTwo = document.getElementById('photo2');
let imgThree = document.getElementById('photo3');
let button1 = document.getElementById('butt1');
let button2 = document.getElementById('butt2');
let button3 = document.getElementById('butt3');
let resultsButton = document.getElementById('buttResults');
//constructor function to manipulate data
function Products(name, fileExt = 'jpg') {
  this.name = name;
  this.views = 0;
  this.votes = 0;
  this.photo = `img/${name}.${fileExt}`;

  state.allProductsArray.push(this);
  


  
}
//implementation of local storage object
let obst = localStorage.getItem('prawns');
let obstacle = JSON.parse(obst);

if(obst) {
  state.allProductsArray = obstacle;

} else {

  //instances of our Products object for each product we desire to use
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
    
}
//random number/index generator
function randomPic() {
  return Math.floor(Math.random() * state.allProductsArray.length);
};



//rendering our pictures and ensuring they do not repeat the same picture 2 times in each round
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
  //appending view counts to out state object
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
//utilizing our chart object through our cdn link
function renderChart() {
  
  let thingNames = [];
  let thingVotes = [];
  let thingViews = [];
  
  console.log(thingVotes);
  
  

  

  //looping over our state object to pull/push data to include into chart
  for (let i = 0; i < state.allProductsArray.length; i++) {

    thingNames.push(state.allProductsArray[i].name);
    thingVotes.push(state.allProductsArray[i].votes);
    thingViews.push(state.allProductsArray[i].views);

  }

  
  //turning our data into json and setting into local storage
  let Optum = JSON.stringify(state.allProductsArray);
  localStorage.setItem('prawns', Optum)
  //our chart object
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

//handleclick function with events we want to happend if fired
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

//handleclick function with events we want to happend if fired
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


//handleclick function with events we want to happend if fired
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


//attaching event listeners to our buttons
button1.addEventListener('click', handleClick1);
button2.addEventListener('click', handleClick2);
button3.addEventListener('click', handleClick3);

//function to hold our render chart 
function handleClickDisplay(event) {
  
  renderChart();
}











//attaching event listener to our button
resultsButton.addEventListener('click', handleClickDisplay);
renderPic();






