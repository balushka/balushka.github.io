let colorTitle = document.querySelector("#the-color");
let squares = document.querySelectorAll(".square");
let message = document.querySelector(".message");
let isColorFound = false;
let jumbotron = document.querySelector(".jumbotron");
let newColorsBtn = document.querySelector("#new-colors-btn");
let easyBtn = document.querySelector("#easy-btn");
let hardBtn = document.querySelector("#hard-btn");
let secondRow = document.querySelector("#second-row");

let randomInInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// default number of boxes is 6
let numberOfBoxes = 6;
// by default the hard button is selected
hardBtn.classList.add("selected");
// function that will create as many colors as the number of boxes
let createColors = (numberOfBoxes) => {
    let colors = [];
    for (let i = 0; i < numberOfBoxes; i++) {
        let redValue = randomInInterval(0, 255);
        let greenValue = randomInInterval(0, 255);
        let blueValue = randomInInterval(0, 255);

        colors[i] = "rgb(" + redValue + ", " + greenValue + ", " + blueValue + ")";
    }
    return colors;
}
// create the colors
let colors = createColors(numberOfBoxes);
// assign the colors to the squares
let setColorOfSquares = (numberOfBoxes) => {
    for (let i = 0; i < numberOfBoxes; i++) {
        squares[i].style.background = colors[i];
    }
}
setColorOfSquares(numberOfBoxes);

// select the color to be guessed and display it in the jumbotron
let colorToGuess = colors[randomInInterval(0, numberOfBoxes - 1)];
colorTitle.textContent = colorToGuess;

//adding event listeners to squares
for (let i = 0; i < numberOfBoxes; i++) {
    squares[i].addEventListener("click", function () {
        if (!isColorFound) { //set the message, jumbotron, and all square background color
            if (this.style.background === colorToGuess) {
                message.textContent = "Grats! You won!";
                jumbotron.style.background = colorToGuess;
                jumbotron.classList.remove("bg-info");
                jumbotron.style.transition = "background 1000ms";
                squares.forEach(element => {
                    element.style.background = colorToGuess;
                    element.style.transition = "background 1000ms";
                    isColorFound = true;
                });
            }
            else { //set the background color of square to body background
                message.textContent = "Try again!";
                this.style.background = "#232323";
                this.style.transition = "background 1000ms";
            }
        }
    });
}
// this initializes the squares
let init = () => {
    isColorFound = false;
    message.textContent = "";
    jumbotron.classList.add("bg-info");
    jumbotron.style.transition = "background 1000ms";
    colors = createColors(numberOfBoxes);
    colorToGuess = colors[randomInInterval(0, numberOfBoxes - 1)];
    colorTitle.textContent = colorToGuess;
    setColorOfSquares(numberOfBoxes);
}
// listeners of 'New Colors', 'Easy' and 'Hard' buttons
newColorsBtn.addEventListener("click", init);

easyBtn.addEventListener("click", function () {
    numberOfBoxes = 3;
    init();
    secondRow.classList.add("invisible");
    this.classList.add("selected");
    hardBtn.classList.remove("selected");

})

hardBtn.addEventListener("click", function () {
    numberOfBoxes = 6;
    init();
    secondRow.classList.remove("invisible");
    this.classList.add("selected");
    easyBtn.classList.remove("selected");
})