const db = require("../models/index.js");
const Users = db.users;
const Op = db.Sequelize.Op;
const crypto = require("crypto");

exports.register = (req, res) => {
    if(!req.body.username) {
        res.status(400).send({
            "message": "Username can't be empty!",
        });

        return;
    }

    const user = {
        nama: req.body.nama,
        username: req.body.username,
        password: crypto.createHash("md5").update(req.body.password).digest("hex"),
    };

    Users.create(user)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                "message": err.message || "Error while registering user",
            });
        });
};

exports.login = (req, res) => {

};
