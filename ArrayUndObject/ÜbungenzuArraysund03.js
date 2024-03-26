const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() { // put all your codes here for user inputs

    const dataBase = [
        ["his", "Georg", "Fritz"],
        ["MÜller", "Huber", "Mayr"],
        [22, 37, 19]
    ]

    const choiceRow = parseInt(await prompt("Please Enter Row Number : "));
    const choiceColumn = parseInt(await prompt("Please Enter Column Number : "));

    console.log(`Display: ${dataBase[choiceRow][choiceColumn]}`)

}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());



