// const Engineer = require('./lib/Engineer');
// const Intern = require('./lib/Intern');
// const Manager = require('./lib/Manager');

function renderManagerCard (member) {
    return `
    <div class="card manager-card">
    <div class="card-header">
        <h2>${member.name}</h2>
        <h3>${member.position}</h3>
    </div>
    <div class="card-body">
        <ul>
            <li>ID: ${member.id}</li>
            <li>Email: ${member.email}</li>
            <li>OfficeNumber: ${member.officeNumber}</li>
        </ul>
    </div>
</div>`
};

function renderEngineerCard (member) {
    return `
    <div class="card manager-card">
    <div class="card-header">
        <h2>${member.name}</h2>
        <h3>${member.position}</h3>
    </div>
    <div class="card-body">
        <ul>
            <li>ID: ${member.id}</li>
            <li>Email: ${member.email}</li>
            <li>GitHub: ${member.github}</li>
        </ul>
    </div>
</div>`

};

function renderInternCard (member) {
    return `
    <div class="card manager-card">
    <div class="card-header">
        <h2>${member.name}</h2>
        <h3>${member.position}</h3>
    </div>
    <div class="card-body">
        <ul>
            <li>ID: ${member.id}</li>
            <li>Email: ${member.email}</li>
            <li>School: ${member.school}</li>
        </ul>
    </div>
</div>`

};

function renderCardSection (data) {
    let cardSection = "";
    data.map((member) => {
        if (member.position === "manager") {
            cardSection += `${renderManagerCard(member)};`
        }
        else if (member.position === "engineer") {
            cardSection += `${renderEngineerCard(member)};`
        }
        else if (member.position === "intern") {
            cardSection += `${renderInternCard(member)};`
        }
    })
    return cardSection;
}

function generateHtml (data) {
    return `<!DOCTYPE html>
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
            <section>
                ${renderCardSection(data)}
            </section>
        </main>

    </body>

    </html>
    `
}

module.exports = generateHtml;