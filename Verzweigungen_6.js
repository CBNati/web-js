const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() { // put all your codes here for user inputs

    const num1 = parseFloat(await prompt("Please Enter Number 1 : "));
    const num2 = parseFloat(await prompt("Please Enter Number 2 : "));
    const operator = await prompt("Please Enter Operator +-/* : ");

    switch (operator) {
        case '+':
            console.log("The Sum is: ", num1 + num2);
            break;
        case '-':
            console.log("The Subtraction is: ", num1 - num2);
            break;
        case '/':
            console.log("The Division is: ", num1 / num2);
            break;
        case '*':
            console.log("The Multiplication is: ", num1 * num2);
            break;
        default:
            console.log("Incorrect Operation !");
            break;
    }
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());



