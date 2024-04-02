#! /usr/bin/env node

import inquirer from "inquirer";

let todos = [];
let condition = true;


while(condition)
{
let addTask = await inquirer.prompt([
    {
        name: "todo",
        message:"what do you want to add in your todos?",
        type:"input",
    },
    {
        name: "addMore",
        message:"what do you want to add more?",
        type:"confirm", 
        default:"false"
    }
]);
console.log(addTask);

todos.push(addTask.todo);
condition = addTask.addMore
console.log(todos);
}