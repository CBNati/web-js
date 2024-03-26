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

    const choiceRow = parseInt(await prompt("Please Enter Row Number : "));
    let choiceColumn = await prompt("Please Enter Column Name : ");
    let choice = 7

    if (choiceColumn === "First name")
        choice = 0;
    else if (choiceColumn === "Last name")
        choice = 1;
    else if (choiceColumn === "Alter")
        choice = 2;
    else
        console.log("Revise your Input")

    if (choice === 0 || choice === 1 || choice === 2)
        console.log(`Display: ${dataBase[choiceRow][choice]}`)

}
execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());



