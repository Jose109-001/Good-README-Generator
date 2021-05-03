// Trims markdown
// Remove spaces at the beginning and end of each line
function cleanMarkDown(markDown) {
    return markDown.split(/\n/).map(line => line.trim()).join('\n').trim()
}

function generateMarkDown(data) {
    let markDown = `
        # README.md
        ## ${data.title}
        ### Description: ${data.description}
        ### How to install: ${data.installation}
        ### Usage: ${data.usage}
        ### Contribute: ${data.contribute}
        ### How to test: ${data.test}
        ### Licenses: ${data.license.join(', ')}
        ### Github username: ${data.username}
        ### User email: ${data.email}
    `;

    console.log('Data', data);

    return cleanMarkDown(markDown);
}

module.exports = generateMarkDown;