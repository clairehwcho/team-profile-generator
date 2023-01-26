// Import external Node JS modules and classes
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const generateCSS = require('./src/generateCSS');
const validateInput = require('./src/validateInput');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// The writeToFile function creates HTML and CSS files.
const writeToFile = function (data) {
    fs.writeFile("./dist/index.html", generateHTML(data), (err) =>
        err ? console.error(err) : console.log('HTML file has been successfully created.'));

    fs.writeFile("./dist/style.css", generateCSS(), (err) =>
        err ? console.error(err) : console.log('CSS file has been successfully created.'));
};

// List of questions to prompt user to answer to add manager
const questionsToAddManager = [
    {
        name: "name",
        type: "input",
        message: "Enter the team manager's name.",
        validate: validateInput.validateNameInput
    },
    {
        name: "id",
        type: "input",
        message: "Enter the team manager's employee ID.",
        validate: validateInput.validateIdInput
    },
    {
        name: "email",
        type: "input",
        message: "Enter the team manager's email address.",
        validate: validateInput.validateEmailInput
    },
    {
        name: "officeNumber",
        type: "input",
        message: "Enter the team manager's office number.",
        validate: validateInput.validateOfficeNumberInput
    }
];

// List of questions to prompt user to answer to add engineer
const questionsToAddEngineer = [
    {
        name: "name",
        type: "input",
        message: "Enter the engineer's name.",
        validate: validateInput.validateNameInput
    },
    {
        name: "id",
        type: "input",
        message: "Enter the engineer's employee Id.",
        validate: validateInput.validateIdInput
    },
    {
        name: "email",
        type: "input",
        message: "Enter the engineer's email address.",
        validate: validateInput.validateEmailInput
    },
    {
        name: "github",
        type: "input",
        message: "Enter the engineer's GitHub username.",
        validate: validateInput.validateGithubInput
    }
];

// List of questions to prompt user to answer to add intern
const questionsToAddIntern = [
    {
        name: "name",
        type: "input",
        message: "Enter the intern's name.",
        validate: validateInput.validateNameInput

    },
    {
        name: "id",
        type: "input",
        message: "Enter the intern's employee Id.",
        validate: validateInput.validateIdInput

    },
    {
        name: "email",
        type: "input",
        message: "Enter the intern's email address.",
        validate: validateInput.validateEmailInput
    },
    {
        name: "school",
        type: "input",
        message: "Enter the intern's School.",
        validate: validateInput.validateSchoolInput
    }
];

// Question to prompt user to answer if user wants to add members or finish building a team
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
    let employees = [];

    // Prompt user to enter manager's information.
    inquirer
        .prompt(questionsToAddManager)
        .then(async (answers) => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            employees.push(manager);

            // Prompt user to add team members or finish building a team.
            let isFinished = false;
            while (!isFinished) {
                const addMember = await inquirer.prompt(questionToAddMember);

                // If "Add an engineer" is chosen, prompt user to enter engineer's information.
                if (addMember.addOrFinish === "Add an engineer") {
                    await inquirer.prompt(questionsToAddEngineer)
                        .then((answers) => {
                            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                            employees.push(engineer);
                        });
                }
                // If "Add an intern" is chosen, prompt user to enter intern's information.
                else if (addMember.addOrFinish === "Add an intern") {
                    await inquirer.prompt(questionsToAddIntern)
                        .then((answers) => {
                            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                            employees.push(intern);
                        });
                }
                // If "Finish building a team" is chosen, exit the application.
                else {
                    isFinished = true;
                }
            }
            writeToFile(employees);
        });
}

// Initialize the app in node.js.
init();