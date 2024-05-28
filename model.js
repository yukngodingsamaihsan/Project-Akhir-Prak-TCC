var dbConn = require("./db");

var Account = function(user){
    this.username = user.username;
    this.password = user.password;
};

Account.create = function(newAccount, result){
    dbConn.query("INSERT INTO akun (username, password) values (?,?)",[
        newAccount.username, 
        newAccount.password
    ]), function(err, res){
        if(err){
            console.log("error broo : ", err);
            result(err, null);
        } else{
            console.log(res.insertedId)
            result(null, res.insertedId)
        }
    }
}

Account.findUser = function(newAccount, result) {
    const query = "SELECT * FROM akun WHERE username = ? AND password = ?";
    dbConn.query(query, [
        newAccount.username, 
        newAccount.password], function(err, res) {
        if (err) {
        console.log("Error: ", err);
        result(err, null);
        } else {
            if (res.length > 0) {
                console.log("User found: ", res);
                result(null, res);
            } else {
                console.log("No user found with the given username and password.");
                result(null, []);
            }
        }
    });
};

module.exports = Account;