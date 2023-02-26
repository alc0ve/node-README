// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of the project.',
    },
    {
        type :'input',
        name: 'installation',
        message: 'How was the project created/installed?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How does the application work?',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please choose a license.',
        choices: ['MIT', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'List contributing info here.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Would you like to include tests for your application?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub profile link.',
    },
    {
        type: 'input',
        name: 'contact',
        message: 'Enter your email address.',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
