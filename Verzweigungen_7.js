const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() { // put all your codes here for user inputs

    const num1 = parseInt(await prompt("Please Enter Number 1 : "));
    const num2 = parseInt(await prompt("Please Enter Number 2 : "));
    const num3 = parseInt(await prompt("Please Enter Number 3 : "));
    const num4 = parseInt(await prompt("Please Enter Number 4 : "));

    num1>num2 && num1>num3 && num1>num4 ? console.log("Number 1 is the Largest",num1) : "";
    num2>num1 && num2>num3 && num2>num4 ? console.log("Number 2 is the Largest",num2) : "";
    num3>num1 && num3>num2 && num3>num4 ? console.log("Number 3 is the Largest",num3) : "";
    num4>num1 && num4>num2 && num4>num3 ? console.log("Number 4 is the Largest",num4) : "";

}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());



