const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() { // put all your codes here for user inputs
    // Euer Code kommt hier hinein
    const name = await prompt("Please enter your name: ");
    console.log('Hello', name);
    const age = await prompt("Please enter your age");
    console.log('your age: ',age);

    const ageParsed = parseInt(age);
    const ageNumber= parseFloat(age);

    let a = 3;
    const b = 6;
    const c = "12345";
    const firstName = "Peter";
    const lastName = "Müller";
    const sentence = `Hallo lieber ${firstName} ${lastName}`;
    const d = true;

    console.log(sentence);
    console.log(a,b,c,d);

    let x = 1234;
    if(x > 2000){
        console.log("x is grose",x);
    } else
        console.log("x is klein"+x);


    // Ende von eurem Code
}

execute().catch((err) => { console.error(err); }).finally(() => rl.close());



