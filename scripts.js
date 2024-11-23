//Etch a Sketch Buildout



//Create a 16x16 Grid of square divs = div containers
var container = document.querySelector('.container')

function grid () {
// calculate the size of each square
    var squareSize = 500 / size
//Loop in to start creating the grid
    for ( i=0; i < size *size ;i++) {
        var square =document.createElement('div') // creates a square div
        square.classList.add('grid-square') // DOM stuff to add a class
        square.style.width = `${squareSize}px`; // The square size will be dynamically changing, based on the square size chosen
        square.style.length = `${squareSize}px`;

        //add this to the container in loop
        container.appendChild(square);
    }



}



//add hover effect on the grids via listeners. Change either using new class in divs or to alter background color via JS on-hover

//Button to generate new grid. Is a pop-up
