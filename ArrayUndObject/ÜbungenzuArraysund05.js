const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() { // put all your codes here for user inputs

    const dataBase = [
        {firstName: "his", lastName: "MÜller", age: 22},
        {firstName: "Georg", lastName: "Fritz", age: 37},
        {firstName: "Huber", lastName: "Mayr", age: 19}

    ]

    const choiceRow = parseInt(await prompt("Please Enter Line Number (0,1,2) : "));
    let choiceColumn = await prompt("Please Enter Column Name (first_name|last_name|age) : ");

    console.log(`Display: ${dataBase[choiceRow][choiceColumn]}`);


}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());



