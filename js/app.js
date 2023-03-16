let totalVotes = 5;



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
let meep = new Products('sweep','png');
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
    

    while(indexRand1 === indexRand2 === indexRand3 );{
        indexRand1 = randomPic();
        indexRand2 = randomPic();
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


function handleClick(event) {
    renderPic();
}




console.log(state);

button1.addEventListener('click', handleClick);
button2.addEventListener('click', handleClick);
button3.addEventListener('click', handleClick);

renderPic();
new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [ duck.name , bana.name , bath.name , 'anchovies', 'artichoke', 'antwerp'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });