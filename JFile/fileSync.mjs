import {readFileSync, writeFileSync} from 'node:fs';
import readlineSync from 'readline-sync';

const myFile = './test.json';

// Check if file exists
try {
    const data = readFileSync(myFile, 'utf8');
    let myData = [];

    if (data) {
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
        } else if (choice === 'x')
            quit = 'x'
        else
            quit = 'c'

    } while (quit !== 'x') ;

    // Convert the array to JSON
    const dataToWrite = JSON.stringify(myData, null, 2);

    // Write to the file
    writeFileSync(myFile, dataToWrite, 'utf8');
    console.log('File saved successfully!');
} catch (err) {
    console.error('Error:', err);
}

// Function to get user input
function userInput(query) {
    return readlineSync.question(query);
}
