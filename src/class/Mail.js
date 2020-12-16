const controller = require("../controller/indexController");

class Mail {
    constructor(name, lastName, email, content) {
        this.name = name,
        this.lastName = lastName,
        this.email = email;
        this.content = content
    }
}

module.exports = Mail;