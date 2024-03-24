const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() { // put all your codes here for user inputs

    const print = (passedVar) => console.log(passedVar)

    print(5)

}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());



