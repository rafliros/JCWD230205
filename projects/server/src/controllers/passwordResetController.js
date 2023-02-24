// // Import Sequelize
// const { sequelize } = require('../models')
// const { Op } = require('sequelize');

// // To generate UID
// const { v4: uuidv4 } = require('uuid');

// // Import models
// const db = require('../models/index')
// const users = db.users

// // Import Hashing
// const {hashPassword, hashMatch} = require ('../lib/hash')

// // Import Token
// const {createToken} = require ('../lib/jwt')

// module.exports = {
//     reset: async (req, res) => {
//         try {

//         // Step-1 Ambil data dari req.body
//         let { email, password, phonenumber} = req.body

//         // Step-2 Cari password di database / get data di password lalu buat password baru
//         let findEmailAndPassword = await users.findOrCreate({
//             where: {password}
//         })


//         // Step-2 Validasi
//         // if(!email.length || !password.length || !phonenumber.length) return res.status(404).send({
//         //     isError: true,
//         //     message: 'Data Not Found',
//         //     data: null
//         // })

        

//         } catch (error) {
//             res.status(500).send({
//                 isError: true, 
//                 message: error.errors[0].message, 
//                 data: null
//             }) 
//         }
//     },

// // reset: async (req, res) => {
// //     try {
// //         const schema = Joi.object({ email: Joi.string().email().required() });
// //         const { error } = schema.validate(req.body);
// //         if (error) return res.status(400).send(error.details[0].message);

// //         const user = await User.findOne({ email: req.body.email });
// //         if (!user)
// //             return res.status(400).send("user with given email doesn't exist");

// //         let token = await Token.findOne({ userId: user._id });
// //         if (!token) {
// //             token = await new Token({
// //                 userId: user._id,
// //                 token: crypto.randomBytes(32).toString("hex"),
// //             }).save();
// //         }

// //         const link = `${process.env.BASE_URL}/password-reset/${user._id}/${token.token}`;
// //         await sendEmail(user.email, "Password reset", link);

// //         res.send("password reset link sent to your email account");
// //     } catch (error) {
// //         res.send("An error occured");
// //         console.log(error);
// //     }
// // },

// // router.post("/:userId/:token", async (req, res) => {
// //     try {
// //         const schema = Joi.object({ password: Joi.string().required() });
// //         const { error } = schema.validate(req.body);
// //         if (error) return res.status(400).send(error.details[0].message);

// //         const user = await User.findById(req.params.userId);
// //         if (!user) return res.status(400).send("invalid link or expired");

// //         const token = await Token.findOne({
// //             userId: user._id,
// //             token: req.params.token,
// //         });
// //         if (!token) return res.status(400).send("Invalid link or expired");

// //         user.password = req.body.password;
// //         await user.save();
// //         await token.delete();

// //         res.send("password reset sucessfully.");
// //     } catch (error) {
// //         res.send("An error occured");
// //         console.log(error);
// //     }
// // })


// } 

const crypto = require('crypto')
const transporter = require('./../helpers/transporter')

module.exports = {
    forgotpassword: async(req, res) => {
        try {
            const {email} = req.body

            
        } catch (error) {
            
        }
    }
}