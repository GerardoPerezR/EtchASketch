
var i = 0;
//const pad = document.querySelector("#pad");
const pad = document.createElement('div');
pad.setAttribute('id', 'pad');
const body = document.querySelector('body');
body.appendChild(pad);
const p = document.querySelector('p');
const divs = document.querySelectorAll('div');
var square;


let color = "black";
const green = () => {color = "green"};
const blue = () => {color = "blue"};
const red  = () => {color='red'};
const yellow = () => {color='yellow'};
const rainbow = () => {color = 'rgb(' +  Math.random() *255 + ',' + Math.random() *255 + ',' + Math.random() *255 + ')'; console.log(color)} ;




console.log('random color', color)

//var numOfSquares = 16;
var slider = document.getElementById('numOfSquares');
const sliderValue = document.getElementById('demo');
const applyButton = document.getElementById('apply');


const greenButton = document.getElementById('green');
const redButton   = document.getElementById('red');
const blueButton  = document.getElementById('blue');
const yellowButton = document.getElementById('yellow');
const rainbowButton = document.getElementById('rainbow'); 



        applyButton.addEventListener('click', clearPad);
      
        setColorButtons();




sliderValue.innerHTML = slider.value;
slider.oninput = function() {sliderValue.innerHTML = this.value};


function setColorButtons() {
    rainbowButton.addEventListener('click', () => { window.addEventListener('mouseover', () => {color = 'rgb(' +  Math.random() *255 + ',' + Math.random() *255 + ',' + Math.random() *255 + ')'; console.log(color)}); });
    greenButton.addEventListener('click', () => { window.addEventListener('mouseover', () => {color = "green"}); });
    redButton.addEventListener('click', () => { window.addEventListener('mouseover', () => {color='red'}); });
    blueButton.addEventListener('click', () => { window.addEventListener('mouseover',  () => {color = "blue"}); });
    yellowButton.addEventListener('click', () => { window.addEventListener('mouseover', () => {color='yellow'}); });
 
}

function clearPad()     {
    pad.replaceChildren();
    generateDivs();
}



generateDivs();



function generateDivs()         {
    
var   numOfSquares = slider.value;




for (x = 0; x < numOfSquares; x++) {
   //const square = document.createElement('div'  );
    
for     (i = 1; i <= numOfSquares; i++)  {

    
    
   
    const square = document.createElement('div' + (i + numOfSquares * x));
    
   // console.log(i);
   square.setAttribute('id', 'square' + (i + numOfSquares * x)) ;
    square.classList.add('squares');
    square.style.gridColumnStart = i;
    square.style.gridColumnEnd = i + 1;
    square.style.gridRowStart = x;
    square.style.gridRowEnd =  x+1;
    
    
   square.style.backgroundColor = "blue";
    square.style.height = "auto";
    square.style.width = "auto";

     
   // console.log(square);
  
    pad.appendChild(square);
    //   square.textContent = "XXX";

  square.addEventListener('mouseover', (e) => { square.style.backgroundColor = color;

                                                console.log(color); });




}

}   



;




   
}