// Import external Node JS modules and classes
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateHtml = require('./src/generateHtml');
const {
    validateNameInput,
    validateIdInput,
    validateEmailInput,
    validateOfficeNumberInput,
    validateGithubInput,
    validateSchoolInput
} = require('./src/validateInput');
const generateCss = require('./src/generateCss');
const Employee = require('./lib/Employee');

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
        validate: validateNameInput
    },
    {
        name: "id",
        type: "input",
        message: "Enter the team manager's ID.",
        validate: validateIdInput
    },
    {
        name: "email",
        type: "input",
        message: "Enter the team manager's email address.",
        validate: validateEmailInput
    },
    {
        name: "officeNumber",
        type: "input",
        message: "Enter the team manager's office number.",
        validate: validateOfficeNumberInput
    }
];

const questionsToAddEngineer = [
    {
        name: "name",
        type: "input",
        message: "Enter the engineer's name.",
        validate: validateNameInput
    },
    {
        name: "id",
        type: "number",
        message: "Enter the engineer's Id.",
        validate: validateIdInput
    },
    {
        name: "email",
        type: "input",
        message: "Enter the engineer's email address.",
        validate: validateEmailInput
    },
    {
        name: "github",
        type: "input",
        message: "Enter the engineer's GitHub username.",
        validate: validateGithubInput
    }
];

const questionsToAddIntern = [
    {
        name: "name",
        type: "input",
        message: "Enter the intern's name.",
        validate: validateNameInput

    },
    {
        name: "id",
        type: "number",
        message: "Enter the intern's Id.",
        validate: validateIdInput

    },
    {
        name: "email",
        type: "input",
        message: "Enter the intern's email address.",
        validate: validateEmailInput
    },
    {
        name: "school",
        type: "input",
        message: "Enter the intern's School.",
        validate: validateSchoolInput
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