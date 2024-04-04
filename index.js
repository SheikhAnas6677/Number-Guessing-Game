#! /usr/bin/env node
import inquirer from "inquirer";
const Randomnumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "Userguessednumber",
        type: "number",
        message: "please guessed a number between 1-10 : ",
    },
]);
if (answer.Userguessednumber === Randomnumber) {
    console.log("Congratulations! You Guessed a right number");
}
else {
    console.log("Sorry! You Guessed a wrong number");
}
