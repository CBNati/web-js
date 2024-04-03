const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() { // put all your codes here for user inputs


    const userDay = parseInt(await prompt("Please enter A Number b/n 1-7 : "));
    day = parseInt(userDay);

    if(userDay <= 7 && userDay>0) {

        if (day === 1) {
            console.log("The day is Monday");
        } else if (day === 2)
            console.log("The day is Tuesday");
        else if (day === 3)
            console.log("The day is Wednesday");
        else if (day === 4)
            console.log("The day is Thursday ");
        else if (day === 5)
            console.log("The day is Friday ");
        else if (day === 6)
            console.log("The day is Saturday ");
        else
            console.log("The day is Sunday ");
    }
    else
    {
        console.log("Pls input a Valid no.");
    }
}
execute().catch((err) => { console.error(err); }).finally(() => rl.close());



