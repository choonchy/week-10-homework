const cardConstructor = require('./card-constructor')
const fs = require('fs')

const createHTML = () => {
    fs.writeFile('./dist/index.html',
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
            integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
            crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="container-fluid">
        <header class="jumbotron text-center">
            <h1>Team Member Database</h1>
        </header>
        <main>
            <div class="row justify-content-center">
                ${cardConstructor().join('\n')}
            </div>
        </main>
        </div>
    </body>
    </html>`, (err) => {
        if (err) throw err;
        console.log('Saved successfully!\nPlease check that your website has been updated')
    })
}

module.exports = createHTML