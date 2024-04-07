const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() { // put all your codes here for user inputs

    const binaryNumber = '1001110100';

    // Convert to decimal number
    const decimalNumber = parseInt(binaryNumber, 2);

    console.log('Decimal Number:', decimalNumber);

}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());



