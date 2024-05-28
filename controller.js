const Account = require("./model");

exports.findUser = function (req, res){
    Account.findUser(req.params.id, function(err,account){
        console.log("controller");
        if(err) res.send(err);
        res.json(account);
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