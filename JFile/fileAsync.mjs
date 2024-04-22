import {readFile, writeFile} from 'node:fs';
import readline from 'readline';

const myFile = './test.json';

// Check if file exists
readFile(myFile, 'utf8', async (err, data) => {
    let myData = [];

    if (err) {
        if (err.code !== 'ENOENT') {
            console.error('Error on reading File:', err);
            return;
        }
    } else {
        // Parsing if the file exists
        myData = JSON.parse(data);
    }

    let productNo = 1101;
    let prodName = "";
    let price = 1200.0;
    let quit = 'c';
    let prodArray = {
        productNumber: productNo,
        productName: prodName,
        productPrice: price
    };
    let tempArray = myData
    // Prompt user for input
    do {
        let choice = await userInput('>> \'a\' to Add new Product & \'f\' to find a product \'x\' to exit : ')//
        if (choice === "a") {
            productNo = parseInt(await userInput('Pls Enter Product Number: '));
            prodName = await userInput('Pls Enter the Product Name: ');
            price = parseFloat(await userInput('Pls Enter the Product Price: '));

            const prod = {
                productNumber: productNo,
                productName: prodName,
                productPrice: price
            }
            myData.push(prod); // Add to the array

        } else if (choice === "f") {

            productNo = parseInt(await userInput('Pls Enter Product Number: '));
            const product = myData.find(obj => obj.productNumber === productNo)
            console.log(product)
            quit = 'c'
        }
        else if(choice==='x')
            quit = 'x'
        else
            quit='c'

    } while (quit !== 'x') ;

// Convert the array to JSON
    const dataToWrite = JSON.stringify(myData, null, 2);

// Write to the file
    writeFile(myFile, dataToWrite, 'utf8', (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('File saved successfully!');
        }
    });
})
;
// Function to user for input
function userInput(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) => {
        rl.question(query, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}