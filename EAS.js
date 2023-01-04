
var i = 0;
const pad = document.querySelector("#container");
const p = document.querySelector('p');
const divs = document.querySelectorAll('div');
const squares = document.querySelectorAll('square');


var numOfSquares = window.prompt('Number of Squares');




generateDivs();



function generateDivs()         {
    



for (x = 0; x < numOfSquares; x++) {
   //const square = document.createElement('div'  );
    
for     (i = 1; i <= numOfSquares; i++)  {
   
    const square = document.createElement('div' + (i + numOfSquares * x));
    
    console.log(i);
   square.setAttribute('id', (i + numOfSquares * x)) ;
    square.style.gridColumnStart = i;
    square.style.gridColumnEnd = i + 1;
    square.style.gridRowStart = x;
    square.style.gridRowEnd =  x+1;
    
    square.style.color = "red";
    //square.style.borderBlockStyle = "solid";
    //square.style.borderBlockColor = "white";
   square.style.backgroundColor = "blue";
    square.style.height = "auto";
    square.style.width = "auto";
     
    console.log(square);
  
    pad.appendChild(square);
    //   square.textContent = "XXX";

  square.addEventListener('mousedown', (e) => {square.style.backgroundColor = 'black'});

}

  

}   





}