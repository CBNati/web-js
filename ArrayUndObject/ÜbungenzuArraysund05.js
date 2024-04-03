const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() { // put all your codes here for user inputs

    const dataBase = {
        first_name: ["his", "Georg", "Fritz"],
        last_name: ["MÜller", "Huber", "Mayr"],
        alter: [22, 37, 19],

    }

    const choiceRow = parseInt(await prompt("Please Enter Line Number (0,1,2) : "));
    let choiceColumn = await prompt("Please Enter Column Name (first_name|last_name|age) : ");

    if (choiceColumn === "first_name")
        console.log(`Display: ${dataBase.first_name[choiceRow]}`)

    else if (choiceColumn === "last_name")
        console.log(`Display: ${dataBase.last_name[choiceRow]}`)
    else if (choiceColumn === "age")
        console.log(`Display: ${dataBase.alter[choiceRow]}`)

    else
        console.log("Revise your Input")


}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());



