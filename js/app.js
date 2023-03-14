let totalVotes = 5;

const state = {
    allProductsArray: [],
};

let imgOne = document.getElementById('photo1');
let imgTwo = document.getElementById('photo2');
let imgThree = document.getElementById('photo3');
let button1 = document.getElementById('butt1');
let button2 = document.getElementById('butt2');
let button3 = document.getElementById('butt3');
let resultsButton = document.getElementById('buttResults');

class Products {
    constructor(name, fileExt = 'jpg') {
        this.name = name;
        this.views = 0;
        this.votes = 0;
        this.photo = `img/${name}.${fileExt}`;

        state.allProductsArray.push(this);
    }
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
let taunt = new Products('tauntaun');
let uni = new Products('unicorn', "png");
let wat = new Products('water-can');
let wine = new Products('wine-glass.jpg');



function handleClick(event);
voteCount --; 



function randomPic() {
    return Math.floor(Math.random() * state.allProductsArray.length);
  };

function imgRender() {
    let indexRand1 = randomPic();
    let indexRand2 = randomPic();
    let indexRand3 = randomPic();
    
    while(indexRand1 === indexRand2 && indexRand1 === indexRand3);
    indexRand3 = randomPic();
}


imgOne.src = state.allProductsArray[indexRand3].photo;
imgOne.alt = state.allProductsArray[indexRand3].name;
imgTwo.src = state.allProductsArray[indexRand1].photo;
imgTwo.alt = state.allProductsArray[indexRand1].name;
imgThree.src = state.allProductsArray[indexRand2];
imgThree.src = state.allProductsArray[indexRand2];



imgContainer.addEventListener('click',handleClick);
resultsButton.addEventListener('click', handleClick);
renderPic();