const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() { // put all your codes here for user inputs

    const userDay = parseInt(await prompt("Please enter A Number b/n 1-7 : "));
    day = parseInt(userDay);

    if(userDay <= 7 && userDay>0) {

        switch (day) {
            case 1:
                console.log("The day is Monday");
                break;
            case 2:
                console.log("The day is tuesday");
                break;
            case 3:
                console.log("The day is wednesday");
                break;
            case 4:
                console.log("The day is thursday");
                break;
            case 5:
                console.log("The day is Friday");
                break;
            case 6:
                console.log("The day is Saturday");
                break;
            default:
                console.log("The day is Sunday");
                break;
        }
    }
    else
    {
        console.log("Pls input a Valid no.");
    }
}
execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());



