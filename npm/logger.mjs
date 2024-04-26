import chalk from "chalk";
async function logMessage(message, color) {
    try {
        const logger = await import('./logger.mjs');
        logger.log(message);
    } catch (error) {
        console.error('Error ');
    }
}
function logRed(message) {
    console.log(chalk.red(message));
}
function logGreen(message) {
    console.log(chalk.green(message));
}
function logBlue(message) {
    console.log(chalk.blue(message));
}

logBlue('*  *  *  *  *');
logBlue('blue');
logRed('*  *  *  *  *');
logRed('red');
logGreen('*  *  *  *  *');
logGreen('green');




