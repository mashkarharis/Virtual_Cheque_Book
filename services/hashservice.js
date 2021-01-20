


var hashservice = {
  hashpassword:hashpassword
}

function hashpassword(password,callback){
    var crypto = require('crypto');
    var hash = crypto.createHash('md5').update(password+'').digest('hex');
    callback(hash)

}
module.exports= hashservice;
