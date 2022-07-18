const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

function init() {
    console.log('Welcome to the generator.');

    beginQuestions();
}

inquirer
    .prompt([
        {
            
        }

    ])
    .then (function (data) {

    })

function pageBuilder() {
`
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

        <div class="container">
            
        </div>
    </body>

</html>
`
}

init();