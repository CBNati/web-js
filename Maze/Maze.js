const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));
async function execute() {
    // The Maze Design in 2_D Array
    const maze = [
        ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
        ['#', ' ', '.', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#'],
        ['#', ' ', '@', ' ', ' ', '#', ' ', ' ', ' ', ' ', ' ', '#'],
        ['#', ' ', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', ' ', '#'],
        ['#', ' ', '#', '#', ' ', '#', ' ', '#', ' ', '#', '!', '#'],
        ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#'],
        ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#'],
        ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#'],
        ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#']
    ];

    // Game object containing essential features: player, goal, holes, boxes, and game design
    const game = {
        // Player object with Starting position
        player: {x: 1, y: 1},
        // Goal position
        goal: {x: 10, y: 4},
        // Holes position
        holes: [{x: 2, y: 2}, {x: 6, y: 6}, {x: 7, y: 7}],
        // Boxes positions
        boxes: [{x: 5, y: 2}, {x: 8, y: 8}],    //Day 01 - Maze object layout is prepared and the structure of functions....

        // Update the Maze from the Object
        designMaze: function () {
            // Clear the console before/After drawing the maze
            console.clear();

            // Iterate through the rows of the maze
            for (let i = 0; i < maze.length; i++) {
                let row = '';
                // Iterate through each column of the maze
                for (let j = 0; j < maze[i].length; j++) {
                    let char = maze[i][j];

                    // Evaluate edge, open space and so on
                    if (char === '#') {
                        row += char;
                    } else if (this.player.x === j && this.player.y === i) {
                        row += '\x1b[33mX\x1b[0m'; // this is z Player, Yellow
                    } else if (this.goal.x === j && this.goal.y === i) {
                        row += '\x1b[35m!\x1b[0m'; // this is z Goal, Purple
                    } else if (this.holes.some(hole => hole.x === j && hole.y === i)) { // some is used for multiple possibilities
                        row += '\x1b[31mH\x1b[0m'; // this is z Hole, Red
                    } else if (this.boxes.some(box => box.x === j && box.y === i)) {
                        row += '\x1b[32m@\x1b[0m'; // this is z Box, White
                    } else {
                        row += char; // this is the Empty way
                    }
                }

                // Print in Console the rows of the maze
                console.log(row);
            }
        },
        // Function to move the player
        movePlayer: async function (direction) {
            const nxtPosition = {x: this.player.x, y: this.player.y};

            // Update the position based on the user choice
            switch (direction) {
                case 'a':
                    nxtPosition.x--; // left
                    break;
                case 'd':
                    nxtPosition.x++; // right
                    break;
                case 'w':
                    nxtPosition.y--; // up
                    break;
                case 's':
                    nxtPosition.y++; // down
                    break;
                default:
                    break;
            }

            // Check if the new position is valid and update player position
            if (maze[nxtPosition.y][nxtPosition.x] !== '#') {
                if (this.holes.some(hole => hole.x === nxtPosition.x && hole.y === nxtPosition.y)) {
                    console.log('Player fall into Hole Game Over');
                }
                if (this.boxes.some(box => box.x === nxtPosition.x && box.y === nxtPosition.y)) {
                    const boxLocation = this.boxes.findIndex(box => box.x === nxtPosition.x && box.y === nxtPosition.y);
                    this.boxes.splice(boxLocation, 1); // Remove box if player pushed it
                }
                this.player.x = nxtPosition.x;
                this.player.y = nxtPosition.y;
            }
        },

        playGame: async function () {
            // Draw the first state of the Game
            this.designMaze();

            // input and update
            while (true) {
                let playerInput;
                while (!playerInput || (playerInput !== 'a' && playerInput !== 'w' && playerInput !== 's' && playerInput !== 'd' && playerInput !== 'x' && playerInput !== 'f')) {
                    playerInput = await prompt('Choose Direction [a-s-d-f] / x: Exit / f:fire: ');
                }

                if (playerInput === 'x') {
                    break;
                }
                else {
                    await this.movePlayer(playerInput);
                }

                this.designMaze();

                // Game won Condition
                if (this.player.x === this.goal.x && this.player.y === this.goal.y) {
                    console.log('-- You Won ! --');
                    break;
                }
            }
        },

    };
    // Here we start Maze Game
    await game.playGame();
}
execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());
