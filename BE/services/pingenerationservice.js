


var pingenerationservice = {
    generatepin: generatepin
}

function generatepin(len) {
    var gpc = require('generate-pincode');
    return gpc(len);
}
module.exports = generatepin;