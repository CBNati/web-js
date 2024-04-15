const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() { // put all your codes here for user inputs

    const jet = {
        Model: "NR007",
        ManufactureDate: 1999,
        Awards: ["Best of 1990s", "2002 Climate friendly"],
        DepreciationRate : "5%",
        Insured : false,
}

        console.log("- Jet Summary -")
        for(let k in jet)
            console.log(`${k} : ${jet[k]}`)


}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());



