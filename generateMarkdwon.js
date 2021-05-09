// Trims markdown
// Remove spaces at the beginning and end of each line
const { cleanMarkDown, licensesReducer } = require('./helpers.js')

function generateMarkDown(data) {
    let markDown = `
        # README.md
        # ${data.title}

        ## Description
        ${data.description}
        
        ## Instructions
        |Action|Description
        |-|-|
        |Install|${data.installation}
        |Test|${data.test}

        ## How would you like your application to be sued
        ${data.sued}

        ## Contributed to this project
        ${data.contribute}

        ## Licenses
        ${data.license.reduce(licensesReducer, '')}

        ## Github username
        ${data.username}
        
        ## User email
        ${data.email}
    `;

    console.log('Data', data);

    return cleanMarkDown(markDown);
}

module.exports = generateMarkDown;