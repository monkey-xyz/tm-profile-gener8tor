const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const team = [];

function init() {
    console.log('Welcome to the generator.');

    beginGen();
}

function beginGen() {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'starter',
            message: 'What team member would you like to add?',
            choices: ['Add Manager', 'Add Intern', 'Add Engineer', 'Quit'],
        },
    ])
    .then ((data) => {
        if (data.starter === 'Add Manager') {
            addManager();
        } else if (data.starter === 'Add Intern') {
            addIntern();
        } else if (data.starter === 'Add Engineer') {
            addEngineer();
        } else {
            console.log('Goodbye.');
            pageBuilder(team);
        }
    });
};

function addManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is your manager's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is your manager's ID?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is your manager's email?",
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is your manager's office number?",
            },
        ])
        .then((data) => {
            const manager = new Manager(data.name, data.id, data.email, data.officeNumber);

            team.push(manager);
            // createRoleCard(manager);
            beginGen();
        })
};

function addIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is your intern's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is your intern's ID?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is your intern's email?",
            },
            {
                type: 'input',
                name: 'school',
                message: "What is your intern's school?",
            },
        ])
        .then((data) => {
            const intern = new Intern(data.name, data.id, data.email, data.school);

            team.push(intern);
            // createRoleCard(intern);
            beginGen();
        })
};

function addEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is your engineer's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is your engineer's ID?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is your engineer's email?",
            },
            {
                type: 'input',
                name: 'github',
                message: "What is your engineer's Github?",
            },
        ])
        .then((data) => {
            const engineer = new Engineer(data.name, data.id, data.email, data.github);

            team.push(engineer);
            // createRoleCard(engineer);
            beginGen();
        })
};

function pageBuilder() {
    const employeeCards = team.map(employee => {
        const role = employee.getRole();

        if (role === 'Manager') {
            return `<div class="container">
            <div class="card">
                <div class="card-header">
                    <h1>${employee.name}</h1>
                    <h2><i class="fa-solid fa-mug-hot"></i> Manager</h2>
                </div>
    
                <div class="card-info">
                    <ul>
                        <li>ID: ${employee.id}</li>
                        <li>Email: <a href='mailto:${employee.email}'>${employee.email}</a></li>
                        <li>Office Number: ${employee.officeNumber}</li>
                    </ul>
            </div>
            </div>`
        } else if (role === 'Intern') {
            return `<div class="card">
                <div class="card-header">
                    <h1>${employee.name}</h1>
                    <h2><i class="fa-solid fa-user-graduate"></i> Intern</h2>
                </div>
    
                <div class="card-info">
                    <ul>
                        <li>ID: ${employee.id}</li>
                        <li>Email: <a href='mailto:${employee.email}'>${employee.email}</a></li>
                        <li>School: ${employee.school}</li>
                    </ul>
                </div>
            </div>`
        } else if (role === 'Engineer') {
            return `<div class="card">
                <div class="card-header">
                    <h1>${employee.name}</h1>
                    <h2><i class="fa-solid fa-glasses"></i> Engineer</h2>
                </div>
    
                <div class="card-info">
                    <ul>
                    <li>ID: ${employee.id}</li>
                    <li>Email: <a href='mailto:${employee.email}'>${employee.email}</a></li>
                        <li>GitHub: <a href="https://github.com/${employee.github}">${employee.github}</a></li>
                    </ul>
                </div>
            </div>`
        } else {
            return;
        }
    }).join('');


const pageHtml = `
<!DOCTYPE html>

<html lang="en">

    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" /> 
        <title>Team Profile</title>
        <link rel="stylesheet" type="text/css" href="./style.css" />
        <script src="https://kit.fontawesome.com/5efd198a8f.js" crossorigin="anonymous"></script>
    </head>

    <body>
        <header>
            <h1>MY TEAM</h1>
        </header>

        ${employeeCards}
    </body>

</html>
`;

    fs.writeFile('./dist/index.html', pageHtml, function(err) {
        err ? console.log(err) : console.log("Your team is finished, have a look?");
    })
};

init();