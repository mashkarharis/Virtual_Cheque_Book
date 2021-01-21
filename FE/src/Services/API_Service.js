var axios=require('axios');
var proxy='http://localhost:3084/';
var API_Service = {
    authUser:authUser,
    getAllDataCustomer:getAllDataCustomer
}

function authUser(uname,password,callback) {
    console.log(uname);
    console.log(password);
    var url=proxy+'user/authUser/';
    console.log(url);
    axios.post(url, {
        login_username: uname,
        login_pwd: password
      })
      .then(function (response) {
        console.log(response);
        callback(response);
      })
      .catch(function (error) {
        console.log(error);
        callback("error");
      });
    
}
function getAllDataCustomer(id,callback) {
    console.log(id);
    var url=proxy+'customer/getAllData/'+id;
    console.log(url);
    axios.get(url)
      .then(function (response) {
        console.log(response);
        callback(response);
      })
      .catch(function (error) {
        console.log(error);
        callback("error");
      });
    
}

module.exports = API_Service;