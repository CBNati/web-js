const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() { // put all your codes here for user inputs

    const dataBase = [
        ["his", "MÜller", 22],
        ["Georg", "Huber", 37],
        ["Fritz", "Mayr", 19]
    ]

    const choiceRow = parseInt(await prompt("Please Enter Row Number (0,1,2) : "));
    let choiceColumn = await prompt("Please Enter Column Name (First name | Last name | Age): ");

    const changer = {
        "First name": 0,
        "Last name": 1,
        "age":2
    }

    let choice = changer[choiceColumn];
    console.log(`Display: ${dataBase[choiceRow][choice]}`)

}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());



