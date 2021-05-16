const employees = require('./employees')

const cardArray = []

const internCard = (index) => {
    return `<div class="card col-s3 m-3">
        <div class="card-header">
            <h3>${index.name}</h3>
            <h4>${index.role}</h4>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${index.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${index.email}">${index.email}</a></li>
                <li class="list-group-item">School: ${index.school}</li>
            </ul>
        </div>
    </div>`
}

const engineerCard = (index) => {
    return `<div class="card col-s3 m-3">
        <div class="card-header">
            <h3>${index.name}</h3>
            <h4>${index.role}</h4>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${index.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${index.email}">${index.email}</a></li>
                <li class="list-group-item">Github: <a href="https://github.com/${index.github}/" target="blank">${index.github}</a></li>
            </ul>
        </div>
    </div>`
}

const managerCard = (index) => {
    return `<div class="card col-s3 m-3">
        <div class="card-header">
            <h3>${index.name}</h3>
            <h4>${index.role}</h4>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${index.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${index.email}">${index.email}</a></li>
                <li class="list-group-item">Office Number: ${index.officeNumber}</li>
            </ul>
        </div>
    </div>`
}


const cardConstructor = () => {
    employees().forEach(index => {
        switch(index.role) {
            case 'Intern':
                cardArray.push(internCard(index))
                break
            case 'Engineer':
                cardArray.push(engineerCard(index))
                break
            case 'Manager':
                cardArray.push(managerCard(index))
        }
    })

    return cardArray
}

module.exports = cardConstructor