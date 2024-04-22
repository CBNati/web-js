import {readFile, writeFile} from 'node:fs/promises';
import readlineSync from 'readline-sync';

const myFile = './test.json';
console.log("The Loading Bar continues after Saving a file / x Command is pressed")
// Check if file exists
readFile(myFile, 'utf8')
    .then(data => {
        let myData = [];

        if (data) {
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
        // User Input
        return new Promise(resolve => {
            async function promptUser() {
                let choice = await userInput('>> \'a\' to Add new Product & \'f\' to find a product \'x\' to exit : ');
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

                resolve({myData, quit});
            }

            promptUser();
        });
    })
    .then(({myData, quit}) => {
        if (quit !== 'x') {
            // Convert the array to JSON
            const dataToWrite = JSON.stringify(myData, null, 2);

            // Write to the file
            return writeFile(myFile, dataToWrite, 'utf8');
        }
    })
    .then(() => {
        console.log('File saved successfully!');
    })
    .catch(err => {
        console.error('Error:', err);
    });

// Function to get user input
function userInput(query) {
    return new Promise(resolve => {
        resolve(readlineSync.question(query));
    });
}

function pause(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}
async function loading() {
    let Bar = '[               ]';
    console.log(Bar);

    // Substring manipulation
    for (let i = 1; i <= 15; i++) {
        await pause(2000); //
        console.clear(); //
        Bar = Bar.substr(0, i) + '#' + Bar.substr(i + 1);
        console.log(Bar);
    }
}

loading();
