
var i = 0;
const pad = document.querySelector("#container");
const p = document.querySelector('p');

const squareArray=[];

var numOfSquares = window.prompt('Number of Squares');

generateDivs();



function generateDivs()         {
    
for (x = 1; x <= numOfSquares; x++) {
   const square = document.createElement('div'  + x);
    
for     (i = 1; i <= numOfSquares; i++)  {
   
    const square = document.createElement('div' +  i);
    
    console.log(i);
   
    square.style.gridColumnStart = i;
    square.style.gridColumnEnd = i + 1;
    square.style.gridRowStart = x;
    square.style.gridRowEnd =  x+1;
    
    square.style.color = "red";
    //square.style.borderBlockStyle = "solid";
    //square.style.borderBlockColor = "white";
   // square.style.backgroundColor = "blue";
    square.style.height = "auto";
    square.style.width = "auto";
 
    
    pad.appendChild(square);
    //   square.textContent = "XXX";
}

}   




}