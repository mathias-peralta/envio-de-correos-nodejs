const controller = {};
const Mail = require('../class/Mail');
const nodemailer = require('nodemailer');
/*
NODE MAILER
*/
async function Main(mail) {
    let transproter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {

            user: 'tucorreo',
            pass: 'tucontraseña'
        }
    });
    let info = await transproter.sendMail({
        from: `${mail.name} ${mail.lastName}`,
        to: `${mail.email}`,
        subject: 'Importante',
        text: `${mail.content}`
    });
    console.log('Mensaje enviado exitosamente!', info.messageId);
}

controller.list = (req, res) => {
    res.render('index');
}

controller.sendMail = (req, res) => {
    res.send('Enviado correctamente!');
    const {name, lastName, email, content } = req.body;
    const mail = new Mail(name, lastName, email, content);
    console.log(mail);
    Main(mail);
}

module.exports = controller;