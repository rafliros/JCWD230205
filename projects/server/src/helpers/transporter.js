const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'henryalvin964@gmail.com', // Email Sender
        pass: 'mqcdagrpjeegzzac' // Key Generate
    },
    tls: {
        rejectUnauthorized: false
    }
})

module.exports = transporter