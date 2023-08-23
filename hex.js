const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function () {
    //each hex color must begin with #, followed by 6 appended values
    let hexColor = '#';

    /*iterate 6 times through the hex array, choose a random value, then add it to the end of the hexColor variable as a string. */
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]
    }

    // display the hexColor value as a string in the element (span) with the class name color 
    color.textContent = hexColor;

    //set the background color to the value of the hexColor variable
    document.body.style.backgroundColor = hexColor;
});


// This function is used in the for loop to generate the 6 hex values.
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
    // get a random number (from 0 to 1), multiply by the length of the hex array, and round down to the lowest integer.
}