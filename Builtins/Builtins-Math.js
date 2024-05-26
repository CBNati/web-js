const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));
async function execute() { // put all your codes here for user inputs
    //No. 1 Builtin for Math functions
    function generateRandomNumber(min, max, Decimal = true) {

        const number = Math.floor(Math.random() * (max - min + 1)) + min;

        // for avoiding decimal nos.
        if (!Decimal) {
            return number;
        }
        else
            return number+ Math.random();
    }

    const example = generateRandomNumber(1, 24);
    console.log('Random number between 1 and 24:', example);

}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());



