const Account = require("../models/model");

exports.findUser = function (req, res) {
    // Extract username and password from the request body
    const newAccount = {
        username: req.body.username,
        password: req.body.password
    };

    // Call the model's findUser method
    Account.findUser(newAccount, function (err, account) {
        console.log("controller");
        if (err) {
            // Handle the error by sending an error response
            res.status(500).send({ error: 'Internal server error' });
        } else if (account.length === 0) {
            // Handle the case where no user is found
            res.status(404).send({ message: 'User not found' });
        } else {
            // Send the found user data as the response
            res.json(account);
        }
    });
};

exports.create = function (req, res){
    const new_account = new Account(req.body);

    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({error : true, message: "Please provider all required field"});
    } else {
        Account.create(new_account, function(err,account){
            if (err) res.send(err);
            res.json({
                error: false,
                message: "task added successfully!",
                data: account,
            });
        });
    }
};