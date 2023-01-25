// Import external Node JS modules and classes
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateHtml = require('./src/generateHtml');
const validateInput = require('./src/validateInput');
const generateCss = require('./src/generateCss');

// The writeToFile function creates HTML and CSS files.
const writeToFile = function (data) {
    fs.writeFile(path.join(__dirname, "/dist/team-profile.html"), generateHtml(data), (err) =>
        err ? console.error(err) : console.log('HTML file has been successfully crated.'));

    fs.writeFile(path.join(__dirname, "/dist/style.css"), generateCss(), (err) =>
        err ? console.error(err) : console.log('CSS file has been successfully crated.'))
};

const questionsToAddManager = [
    {
        name: "name",
        type: "input",
        message: "Enter the team manager's name.",
        // validate: validateInput()
    },
    {
        name: "id",
        type: "number",
        message: "Enter the team manager's ID."
    },
    {
        name: "email",
        type: "input",
        message: "Enter the team manager's email address."
    },
    {
        name: "officeNumber",
        type: "input",
        message: "Enter the team manager's office number."
    }
];

const questionsToAddEngineer = [
    {
        name: "name",
        type: "input",
        message: "Enter the engineer's name."
    },
    {
        name: "id",
        type: "number",
        message: "Enter the engineer's Id."
    },
    {
        name: "email",
        type: "input",
        message: "Enter the engineer's email address."
    },
    {
        name: "github",
        type: "input",
        message: "Enter the engineer's GitHub username."
    }
];

const questionsToAddIntern = [
    {
        name: "name",
        type: "input",
        message: "Enter the intern's name."
    },
    {
        name: "id",
        type: "number",
        message: "Enter the intern's Id."
    },
    {
        name: "email",
        type: "input",
        message: "Enter the intern's email address."
    },
    {
        name: "school",
        type: "input",
        message: "Enter the intern's School."
    }
];

const questionToAddMember = [
    {
        name: "addOrFinish",
        type: "list",
        message: "Add a team member or finish building the team",
        choices: [
            "Add an engineer",
            "Add an intern",
            "Finish building a team"
        ]
    }
];

// The init function prompts user to enter information to be displayed on the HTML file.
const init = function () {
    inquirer
        .prompt(questionsToAddManager)
        .then(async (newManager) => {
            let team = [];
            newManager.position = "manager";
            team.push(newManager);

            let isFinished = false;
            while (!isFinished) {
                const addMember = await inquirer.prompt(questionToAddMember);

                if (addMember.addOrFinish === "Add an engineer") {
                    await inquirer.prompt(questionsToAddEngineer)
                        .then((newEngineer) => {
                            newEngineer.position = "engineer";
                            team.push(newEngineer);
                        });
                }
                else if (addMember.addOrFinish === "Add an intern") {
                    await inquirer.prompt(questionsToAddIntern)
                        .then((newIntern) => {
                            newIntern.position = "intern";
                            team.push(newIntern);
                        });
                }
                else {
                    isFinished = true;
                }
            }
            writeToFile(team);
        });
}

// Initialize the app in node.js.
init();