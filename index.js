const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const newStaffMemberData = [];

const questions = async () => {
    const answers = await inquirer.promt([
        {
            type: "input",
            message: "What is your name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is your ID number?",
            name: "ID",
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email",
        },
        {
            type: "list",
            message: "What is your role?",
            name: "role",
            choices: [ "Engineer", "Intern", "Manager"],
        },
    ])
}