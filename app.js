

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]; //colors represents the colors we'll use

const btn = document.getElementById('btn'); //retrieves the button with id 'btn'
const color = document.querySelector(".color"); //gets class name "color"

btn.addEventListener('click', function(){ //anonymous callback function
    // console.log(document.body);
    
    
    //get random number between 0 and 3 (indexes of the array, which has a length of 4)
    const randomNumber = getRandomNumber();//2 to getRandomNumber() to randomly generate an index each time the button is clicked.
    console.log(randomNumber);
    
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber] 
    //starts with the hardcoded number ("2") to test, then is randomized with getRandomNumber() function as the index to retrieve from the colors array, and assigns this color to the background and text. 
    


});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
    //math.floor rounds down to nearest integer, math.random gives all numbers between 0 and 1, colors.length is 4)
}