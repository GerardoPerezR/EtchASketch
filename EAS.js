
var i = 0;
//const pad = document.querySelector("#pad");
const pad = document.createElement('div');
pad.setAttribute('id', 'pad');
const body = document.querySelector('body');
body.appendChild(pad);
const p = document.querySelector('p');
const divs = document.querySelectorAll('div');


const color = window.prompt("color");

//var numOfSquares = 16;
var slider = document.getElementById('numOfSquares');
const sliderValue = document.getElementById('demo');
const applyButton = document.getElementById('apply');





applyButton.addEventListener('click', clearPad);

sliderValue.innerHTML = slider.value;
slider.oninput = function() {sliderValue.innerHTML = this.value};


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
    
    console.log(i);
   square.setAttribute('id', 'square' + (i + numOfSquares * x)) ;
    square.classList.add('squares');
    square.style.gridColumnStart = i;
    square.style.gridColumnEnd = i + 1;
    square.style.gridRowStart = x;
    square.style.gridRowEnd =  x+1;
    
    square.style.color = "red";

   square.style.backgroundColor = "blue";
    square.style.height = "auto";
    square.style.width = "auto";
     
    console.log(square);
  
    pad.appendChild(square);
    //   square.textContent = "XXX";

  square.addEventListener('mouseover', (e) => {square.style.backgroundColor = color;
                                                console.log(e);});

}

  

}   





}