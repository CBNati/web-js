// Object of the Maze
const mazeElements = {
    edge: '#',
    player: 'x',
    gate: ' ',
    hole: 'O',
    block: "B",
}

const maze = [
    ["#", "#", "#", "#", "#", "#", "#"],
    ["#", " ", " ", " ", " ", " ", "#"],
    ["#", " ", "#", " ", "#", " ", "#"],
    ["#", " ", "#", "X", "#", " ", "#"],
    ["#", " ", " ", " ", " ", " ", "#"],
    ["#", " ", "#", "#", "#", " ", "#"],
    ["#", "#", "#", "#", "#", "#", "#"]
];

// function 1 - Movement
function move(direction) {

    let playerCoordinate = {X: 3, y: 3};
    switch (direction) {
        case 'w':
            playerCoordinate.y -= 1;
            break;
        case 's':
            playerCoordinate.y += 1;
            break;
        case 'd':
            playerCoordinate.x += 1;
            break;
        case 'a':
            playerCoordinate.x -= 1;
            break;
    }


}

// function 2 - Maze Design
function design() {

}

// function 3 - CheckMove
function checkMove() {

}

// funtion 4 - EndGame
function GameEnd() {
}

// function 5 - BoxMove
function BoxMove() {

}


async function getNumberInput() {
    let numberInput;
    let isInputValid = false;

    do {
        numberInput = parseFloat(prompt('Please enter a number: '));
        isInputValid = !Number.isNaN(input);
        if (!isInputValid) console.log('Invalid input');
    } while (!isInputValid);

    return numberInput;
}

const number = await getNumberInput();

