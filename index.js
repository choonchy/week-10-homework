const build = require('./src/employee-card-generator')


const init = () => {
    console.log('Welcome to the employee database generator!')
    build.createManager()
}

init()