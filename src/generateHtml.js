// The renderManagerCard function returns a card for manager to be inserted in the HTML file.
function renderManagerCard (employee) {
    return (
        `<div class="card manager-card">
    <div class="card-header">
        <h2>${employee.getName()}</h2>
        <h3>${employee.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul>
            <li>ID: ${employee.getId()}</li>
            <li>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
            <li>OfficeNumber: ${employee.officeNumber}</li>
        </ul>
    </div>
</div>`
    )
};

// The renderEngineerCard function returns a card for engineer to be inserted in the HTML file.
function renderEngineerCard (employee) {
    return (
        `<div class="card engineer-card">
    <div class="card-header">
        <h2>${employee.getName()}</h2>
        <h3>${employee.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul>
            <li>ID: ${employee.getId()}</li>
            <li>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
            <li>GitHub: <a href="http://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a></li>
        </ul>
    </div>
</div>`
    )
};

// The renderInternCard function returns a card for intern to be inserted in the HTML file.
function renderInternCard (employee) {
    return (
        `<div class="card intern-card">
    <div class="card-header">
        <h2>${employee.getName()}</h2>
        <h3>${employee.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul>
            <li>ID: ${employee.getId()}</li>
            <li>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
            <li>School: ${employee.getSchool()}</li>
        </ul>
    </div>
</div>`
    )
};

// The renderCardSection function returns a section for employee cards to be inserted in the HTML file.
function renderCardSection (data) {
    let cardSection = "";

    data.sort((a, b) => {
        if (a.getRole() === "Engineer" && b.getRole() === "Intern") {
            return -1;
        }
        if (a.getRole() === "Intern" && b.getRole() === "Engineer") {
            return 1;
        }
        return 0;
    });

    data.map((employee) => {
        if (employee.getRole() === "Manager") {
            cardSection += `${renderManagerCard(employee)}`
        }
        else if (employee.getRole() === "Engineer") {
            cardSection += `${renderEngineerCard(employee)}`
        }
        else if (employee.getRole() === "Intern") {
            cardSection += `${renderInternCard(employee)}`
        }
        // if (employee.getRole() === "Manager") {
        //     cardSection += `${renderManagerCard(employee)}`
        // }
        // else if (employee.getRole() === "Engineer") {
        //     cardSection += `${renderEngineerCard(employee)}`
        // }
        // else if (employee.getRole() === "Intern") {
        //     cardSection += `${renderInternCard(employee)}`
        // }
    })
    return cardSection;
}

// The generateHTML function generates the content for HTML file.
function generateHTML (data) {
    return (
        `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <h1>My Team</h1>
    </header>

    <main>
        <section class="card-section">
            ${renderCardSection(data)}
        </section>
    </main>

</body>

</html>`
    )
}

module.exports = generateHTML;