const inquirer = require("inquirer");

const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

const fs = require("fs");

// employee 
function runInquirer() {
    const promptArray = [{
        type: "input",
        message: "What is your employeeName?",
        employeeName: "employeeName"
    }, {
        type: "input",
        message: "What is your ID number?",
        employeeName: "id"
    }, {
        type: "input",
        message: "What is your emailAddress address?",
        employeeName: "emailAddress"
    }, {
        type: "list",
        message: "What is your job title",
        choices: ["Manager", "Engineer", "Intern", "Employee"],
        employeeName: "title"
    }];

    return inquirer
        .prompt(promptArray);
}

// manager office number
function runInquirerManager() {
    const promptArray = [{
        type: "input",
        message: "What is your office number?",
        employeeName: "officeNumber"
    }];

    return inquirer
        .prompt(promptArray);
}

function runInquirerEngineer() {
    const promptArray = [{
        type: "input",
        message: "What is your github?",
        employeeName: "github"
    }];

    return inquirer
        .prompt(promptArray);
}
// intern
function runInquirerIntern() {
    const promptArray = [{
        type: "input",
        message: "What school do you attend?",
        employeeName: "school"
    }];

    return inquirer
        .prompt(promptArray);
}


async function run() {
    let employeeArray = [];
    const maxTimes = 4;
    for (i = 0; i < maxTimes; i++) {
        const promise = new Promise((resolve, reject) => {
            runInquirer()
                .then(function ({ employeeName, id, emailAddress, title }) {
                     if (title === "Manager") {
                        runInquirerManager().then(function ({ officeNumber }) {
                            this.employee = new Manager(employeeName, id, emailAddress, officeNumber, title);
                            console.log(officeNumber);
                            employeeArray.push(employee);
                            resolve("done");
                        });

                    } else if (title === "Engineer") {
                        runInquirerEngineer().then(function ({ github }) {
                            this.employee = new Engineer(employeeName, id, emailAddress, github, title);
                            console.log(github);
                            employeeArray.push(employee);
                            resolve("done");
                        });
                    } else if (title === "Intern") {
                        runInquirerIntern().then(function ({ school }) {
                            this.employee = new Intern(employeeName, id, emailAddress, school, title);
                            console.log(school);
                            employeeArray.push(employee);
                            resolve("done");
                        });
                    }

                }).catch(function (err) {
                    console.log("There was an error.");
                    console.log(err);
                });
        });

        const result = await promise;
        console.log(result);
    }

    // console.log(employeeArray.length);

    function displayTitle(employee) {
        if (employee.title === "Manager") {
            console.log(employee.officeNumber);
            return `office number: ${employee.officeNumber}`;
        }

        if (employee.title === "Intern") {
            return `school: ${employee.school}`;
        }

        if (employee.title === "Engineer") {
            return `gitHub: ${employee.github}`;
        }

    }
    function getCardHtml() {
        let html = "";
        for (j = 0; j < maxTimes; j++) {
            console.log(employeeArray[j])
            html += `<div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
                <div class="header">
                    <h4>${employeeArray[j].employeeName}</h4>
                </div>
                <div class="header">
                    <h4>${employeeArray[j].title}</h4 >
                </div >
                <ul class="info">
                    <li class="item-1">ID: ${employeeArray[j].id}</li>
                    <li class="item-2">emailAddress: ${employeeArray[j].emailAddress}</li>
                    <li class="item-3"> ${displayTitle(employeeArray[j])}</li>
                </ul>
            </div > `;
        }
        return html;
    }



    let html = `< !DOCTYPE html >
            <html lang="en">
             <head>
                 <meta charset="UTF-8">
                     <meta employeeName="viewport" content="width=device-width, initial-scale=1.0">
                        <meta http-equiv="X-UA-Compatible" content="ie=edge">
                            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
                                // integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
                                <link rel="stylesheet" href="style.css">
                                </link>
                                <link rel="preconnect" href="https://fonts.googleapis.com">
                                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                                <link href="https://fonts.googleapis.com/css2?family=Otomanopee+One&display=swap" rel="stylesheet">
                                </head>
                                    <title>Team</title>
                                        <style>
                                            .row {
                                                display: flex;
                                                flex-wrap: wrap;
                                                justify-content: center;
                                                margin-top: 25px;
                                                margin-bottom: 25px;
                                            }
                                            .card {
                                                padding: 15px;
                                                border-radius: 6px;
                                                background-color: yellow;
                                                color: black;
                                                margin: 20px;
                                            }
                                            .text {
                                                padding: 15px;
                                                border-radius: 6px;
                                                background-color: blue;
                                                color: black;
                                                margin: 20px;
                                            }
                                            .col {
                                                flex: 1;
                                                text-align: center;
                                            }
                                     </style>
                    </head>
                                    <body>
                                        <nav class="navbar navbar-dark bg-dark justify-content-center align-items-center">
                                            <span class="navbar-brand mb-0 h1">
                                                <h1>Team Members</h1>
                                            </span>
                                        </nav>
                                        <div class="row">
                                            ${getCardHtml()}
                                        </div>
                                    </body>
    
    </html>
    `;




    console.log(html);
    // const fs = require("fs");
    fs.writeFile('newfile.html', html, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });
}