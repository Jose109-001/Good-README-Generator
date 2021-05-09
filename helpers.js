function cleanMarkDown(markDown) {
    return markDown.split(/\n/).map(line => line.trim()).join('\n').trim()
}

const licenses = {
    "Apache": 'https://www.apache.org/img/support-apache.jpg',
    "MIT": 'https://opensource.org/files/OSIApproved_1.png',
    "ISC": 'https://upload.wikimedia.org/wikipedia/commons/8/8c/%28ISC%29%C2%B2_logo_%28vectorized%29.svg',
    "GNU GPLv3": 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/LGPLv3_Logo.svg/1920px-LGPLv3_Logo.svg.png'
};

const licensesReducer = (badges, license) => {
    const url = licenses[license];
    const badge = `![${license} License](${url} =100x)`;
    return badges + badge;
}

module.exports = {
    cleanMarkDown,
    licensesReducer
};