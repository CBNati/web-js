const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() { // put all your codes here for user inputs


    const tempreature = await prompt("Please enter The Tempreature: ");

    if(tempreature >= 15){
        console.log("The tempreature is hot:");
    } else
        console.log("The tempreature is cold");

}
execute().catch((err) => { console.error(err); }).finally(() => rl.close());



