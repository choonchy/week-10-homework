const inquirer = require('inquirer');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const fs = require('fs');
const employees = require('./employees');
const createHTML = require('./create-html')

var employeeQuestions = [
    {
        name: "name",
        type: "input",
        message: "What is the employee's name?"
    },
    {
        name: "email",
        type: "input",
        message: "What is the employee's email address?"
    }
]

const anotherEmployee = () => {
    inquirer
        .prompt([
            {
                name: "another",
                message: "Would you like to add another employee?",
                type: "list",
                choices: [
                    "Yes",
                    "No"
                ]
            }
        ])
        .then(answer => {
            if(answer.another === "Yes"){
                typeSelector()
            } else {
                createHTML()
            }
        })
}

const typeSelector = () => {
    inquirer
        .prompt([
            {
            name: "employeeType",
            message: "What type of employee are you entering?",
            type: "list",
            choices: [
                "Intern",
                "Engineer",
            ]
            }
        ])
        .then(answer => {
            switch(answer.employeeType) {
                case "Intern":
                    createIntern()
                    break
                case "Engineer":
                    createEngineer()
            }
        })
}

const createIntern = () => {
    console.log('Intern selected')
    var internQuestions = employeeQuestions.map(x => x)
    internQuestions.push({
        name: "school",
        type: "input",
        message: "What school does the intern attend?"
    })
    inquirer
        .prompt(internQuestions)
        .then(answers => {
            let intern = new Intern(answers.name, employees().length + 1, answers.email, answers.school)
            employees().push(intern)
            const employeesData = `const employees = ${JSON.stringify(employees())}

module.exports = () => {
    return employees
}`

                fs.writeFileSync('./src/employees.js', employeesData, 'utf8', (err) => {
                    if (err) throw err
                    console.log('Saved successfully!')
                })
            anotherEmployee()
        })
}

const createEngineer = () => {
    console.log('Engineer selected')
    var engineerQuestions = employeeQuestions.map(x => x)
    engineerQuestions.push({
        name: "github",
        type: "input",
        message: "What is the employee's GitHub username?"
    })
    inquirer
        .prompt(engineerQuestions)
        .then(answers => {
            let engineer = new Engineer(answers.name, employees().length + 1, answers.email, answers.github)
            employees().push(engineer)
            const employeesData = `const employees = ${JSON.stringify(employees())}

module.exports = () => {
    return employees
}`

                fs.writeFileSync('./src/employees.js', employeesData, 'utf8', (err) => {
                    if (err) throw err
                    console.log('Saved successfully!')
                })
            anotherEmployee()
        })
}

const createManager = () => {
    var managerQuestions = employeeQuestions.map(x => x)
    managerQuestions.push({
        name: "officeNumber",
        type: "input",
        message: "What is the manager's office number?"
    })
    inquirer
        .prompt(managerQuestions)
        .then(answers => {
            let manager = new Manager(answers.name, employees().length + 1, answers.email, answers.officeNumber)
            employees().push(manager)
            const employeesData = `const employees = ${JSON.stringify(employees())}

module.exports = () => {
    return employees
}`
                fs.writeFileSync('./src/employees.js', employeesData, 'utf8', (err) => {
                    if (err) throw err
                    console.log('Saved successfully!')
                })
            typeSelector()
        })
}

module.exports = {
    createIntern,
    createEngineer,
    createManager
}
