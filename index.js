#! usr/bin/env node
import inquirer from "inquirer";
async function generateTable() {
    // User Input for Number
    let numberInput = await inquirer.prompt([{
            name: "num1",
            message: "Please enter your number (positive integer):",
            type: "input",
            validate: (input) => {
                const num = parseInt(input);
                if (isNaN(num) || num <= 0) {
                    return "Please enter a positive numeric number";
                }
                else {
                    return true;
                }
            }
        }]);
    // User Input for Range
    let rangeInput = await inquirer.prompt([{
            name: "range",
            message: "Please enter the range for the multiplication table:",
            type: "input",
            validate: (input) => {
                const range = parseInt(input);
                if (isNaN(range) || range <= 0) {
                    return "Please enter a positive numeric number for the range";
                }
                else {
                    return true;
                }
            }
        }]);
    // User Input Values
    let userNumber = parseInt(numberInput.num1);
    let tableRange = parseInt(rangeInput.range);
    // Logic for Table
    console.log(`\nMultiplication Table for ${userNumber} up to ${tableRange}`);
    for (let i = 1; i <= tableRange; i++) {
        let result = userNumber * i;
        console.log(`${userNumber} x ${i} = ${result}`);
    }
    // Repeat or Exit
    let repeatInput = await inquirer.prompt([{
            name: "repeat",
            message: "Would you like to create another table? (yes/no):",
            type: "input",
            validate: (input) => {
                if (input.toLowerCase() !== 'yes' && input.toLowerCase() !== 'no') {
                    return "Please enter 'yes' or 'no'";
                }
                else {
                    return true;
                }
            }
        }]);
    if (repeatInput.repeat.toLowerCase() === 'yes') {
        await generateTable();
    }
    else {
        console.log("Thank you for using the multiplication table generator!");
    }
}
// Run the table generator
generateTable();
