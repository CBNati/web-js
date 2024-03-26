const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() { // put all your codes here for user inputs

    const dayArray = [ "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday" ]

    const choice = parseInt(await prompt("Please Enter Number 1-7 : "));

    if(choice>=1 && choice<=7)
        console.log(dayArray[(choice-1)])
    else
        console.log("Re-enter Your Number")


}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());



