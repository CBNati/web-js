const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() { // put all your codes here for user inputs
    function log (){

        for (i=0; i<arguments.length; i++)
        {
            console.log(arguments[i]);
        }

    }

    console.log(5,2)

}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());



