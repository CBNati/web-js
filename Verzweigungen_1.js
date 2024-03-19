const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() { // put all your codes here for user inputs

    const passWord = 3636;
    const passWordTry = await prompt("Please enter The Password: ");

    if(passWord === passWordTry){
        console.log("Password is Correct:",passWordTry);
    } else
        console.log("Password is Incorrect",passWordTry);

}
execute().catch((err) => { console.error(err); }).finally(() => rl.close());



