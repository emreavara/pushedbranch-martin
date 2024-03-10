import "dotenv/config";
import nodemailer from "nodemailer";




async function sendEmail(pReciver,pSubject,pText) {
    let emailOptions = {
        from: process.env.MAIL_SENDER,
        to: pReciver,
        subject: pSubject,
        text: pText
    };

    mailTransporter.sendMail(emailOptions, (err, info) => {
        if (err) {
            console.log(err)
        }
        else
            console.log(info)
            return info
    })

}

const mailTransporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465, //587
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.MAIL_SENDER,
        pass: process.env.MAIL_PASS
    }
});

export default sendEmail;