const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));
async function execute() { // put all your codes here for user inputs

    //No. 1 Builtin to display the Date and time
    const now = new Date();
    const format = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    };
    const formattedDateAndTime = now.toLocaleDateString('de', format);
    console.log('Current Date and Time:', formattedDateAndTime);
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());



