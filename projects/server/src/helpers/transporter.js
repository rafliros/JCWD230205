const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'patriciamadelinek1@gmail.com', // Email Sender
        pass: 'iwxzscjenxaqhpnt' // Key Generate
    },
    tls: {
        rejectUnauthorized: false
    }
})

module.exports = transporter