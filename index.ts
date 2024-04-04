#! /usr/bin/env node 

import inquire from "inquirer";

const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquire.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess a number between 1-10",
  },
]);

if(answers.userGuessedNumber === randomNumber){
  console.log('Congratulations! You guessed the right number.');
  
}else{
  console.log('You guessed the wrong number.');
}
