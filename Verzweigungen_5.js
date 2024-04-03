const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() { // put all your codes here for user inputs

    let char = await prompt("Please Enter your Character /If you have multiple Characters the First will be checked : ");

    char = char.charAt(0).toLowerCase();

    if (char.charAt(0) >= 122 &&  char.charAt(0) < 97)
        console.log("Please input right Character")

    else {
        switch (char) {
            case 'a':

            case 'e':

            case 'i':

            case 'o':

            case 'u':
                console.log("The Char is Vowel");
                break;

            default:
                console.log("The char is Consonant !");
                break;
        }
    }

}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());



