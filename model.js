var dbConn = require("./db");
const bcrypt = require('bcrypt');

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

// Account.findUser = function(newAccount, result) {
//     const query = "SELECT * FROM akun WHERE username = ? AND password = ?";
//     dbConn.query(query, [
//         newAccount.username, 
//         newAccount.password], function(err, res) {
//         if (err) {
//         console.log("Error: ", err);
//         result(err, null);
//         } else {
//             if (res.length > 0) {
//                 console.log("User found: ", res);
//                 result(null, res);
//             } else {
//                 console.log("No user found with the given username and password.");
//                 result(null, []);
//             }
//         }
//     });
// };

Account.findUser = function(newAccount, result) {
    const query = "SELECT * FROM akun WHERE username = ?";
    dbConn.query(query, [newAccount.username], function(err, res) {
        if (err) {
            console.log("Error: ", err);
            result(err, null);
        } else {
            if (res.length > 0) {
                // Compare the hashed password with the stored hashed password
                bcrypt.compare(newAccount.password, res[0].password, function(err, isMatch) {
                    if (err) {
                        result(err, null);
                    } else if (isMatch) {
                        console.log("User found: ", res);
                        result(null, res);
                    } else {
                        console.log("Incorrect password.");
                        result(null, []);
                    }
                });
            } else {
                console.log("No user found with the given username.");
                result(null, []);
            }
        }
    });
};

module.exports = Account;