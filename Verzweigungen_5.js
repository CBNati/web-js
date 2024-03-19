const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() { // put all your codes here for user inputs

    const char = await prompt("Please Enter your Character /If you have multiple Chrachters the First will be checked : ");
    if (char.charCodeAt(0) > 122 &&  char.charCodeAt(0) < 97)
        console.log("Please input write Character")

    else
        switch (char) {
            case 'a':
                console.log("The Char is Vowel");
                break;
            case 'e':
                console.log("The Char is Vowel");
                break;
            case 'i':
                console.log("The Char is Vowel");
                break;
            case 'o':
                console.log("The Char is Vowel");
                break;
            case 'u':
                console.log("The Char is Vowel");
                break;
            default:
                console.log("The char is Consonant !");
                break;
        }
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());



