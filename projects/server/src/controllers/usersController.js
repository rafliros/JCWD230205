// Import Sequelize
const { sequelize } = require('./../models')
const { Op } = require('sequelize');

// To generate UID
const { v4: uuidv4 } = require('uuid');
const fs = require('fs').promises
const handlebars = require('handlebars')
// Import models
const db = require('./../models/index')
const users = db.users

// Import Hashing
const {hashPassword, hashMatch} = require ('./../lib/hash')

// Import Token
const {createToken} = require ('./../lib/jwt')

const transporter = require( '../helpers/transporter')

module.exports = {
    register: async(req, res) => {
        try {
            // To rollback transactions
            const t = await sequelize.transaction() 
            // Step-1 Ambil data dari req.body
            let {name, email, password, phonenumber} = req.body

            // Step-2 Validasi
            if(!name.length || !email.length || !password.length || !phonenumber.length) return res.status(404).send({
                isError: true,
                message: 'Data Not Found',
                data: null
            })

            // Step-3 Check ke database, name & email nya exist?
            let findPhoneAndEmail = await users.findOne({
                where: {
                    [Op.and]: [
                        { phonenumber: phonenumber },
                        { email: email }
                    ]
                }
            }, {transaction: t})

            if(findPhoneAndEmail) return res.status(404).send({
                isError: true,
                message: 'Phone number and Email already exist',
                data: null
            })

            console.log(findPhoneAndEmail)

            // Step-4 Simpan data ke dalam database
            let resCreateUsers = await users.create({id: uuidv4(), name, email, password: await hashPassword (password), phonenumber },{transaction: t})
            console.log(resCreateUsers.dataValues.id)

            // 
            const template = await fs.readFile('./template/confirmation.html', 'utf-8')
            const tempalteToCompile = await handlebars.compile(template)
            const newTemplate = tempalteToCompile({email, url: `http://localhost:3000/activation${resCreateUsers.dataValues.id}`})
            await transporter.sendMail({
                from: 'PWD Property',
                to: email,
                subject: 'Account Activation',
                html: newTemplate
            })

            
            // Step-5 Kirim response
            await t.commit()
            res.status(201).send({
                isError: false, 
                message: 'Register Success',
                data: null
            })
        } catch (error) {
            res.status(500).send({
                isError: true, 
                message: error, 
                data: null
            })
            console.log(error)
        }
    },

    login: async(req, res) => {
        let {usernameOrPassword, password} = req.query
        try {
        let response = await users.findOne({
            where: {
                [Op.or]:[{username: usernameOrEmail}, {email:usernameOrEmail}]
            }
        })
        // Step-2 Cari email di database / get data di email
        let findEmailAndPassword = await users.findOne({
            where: {email}
        })
         if(!response) return res.status(404).send({
            isError: true,
            message: "password not match",
            data: null
         })

        let hashMatchResult = await hashMatch(password, response.password)
        if(hashMatchResult === false)return res.status(404).send({
            isError: true,
            message: "password not match",
            data: null
        })

        const token = createToken({id: findEmailAndPassword.id, email: findEmailAndPassword.email, phonenumber: findEmailAndPassword.phonenumber})
        console.log(token)
        // Step-3 Kirim response
        res.status(201).send({
            isError: false, 
            message: 'Login Success',
            data: {token, name: findEmailAndPassword.dataValues.name}
        })
        } catch (error) {
            res.status(500).send({
                isError: true, 
                message: error.message, 
                data: null
            })
        }
    },

    keepLogin: (req, res) => {
        try {
            console.log(req.dataToken)

            // Get data user by id 
            res.status(201).send({
                isError: false, 
                message: 'Token Valid',
                data: req.dataToken.email
            })
        } catch (error) {
            res.status(500).send({
                isError: true, 
                message: error.errors[0].message, 
                data: null
            })
        }
    },

    // logout: ('/users/:id', (req, res) => {
    //     try {
    //         // Step-1 Ambil value dari req.body
    //         let body = req.body

    //         // Step-2 Get Data
    //         // let getData =

    //         //step 3 Manipulasi Data
    // // let dataToDelete
    // // getData.products.forEach((value, index) => {
    // //     if (value.id === id) {
    // //         dataToDelete = index
    // //     }
    // // })
    
    // // if(dataToDelete === undefined) return res.status(401).send({ isError: true, message: 'Id Not Found', data: null })

    // // getData.products.splice(dataToDelete,1)

    // // // Step-4 Save
    // // fs.writeFileSync('./db/db.json', JSON.stringify(getData))

    // //  // Step-5 Kirim Response
    // // res.status(201).send({
    // //     isError: false,
    // //     message: "data delete success",
    // //     data: null
    // //     })
    
            
    //     } catch (error) {
    //         res.status(500).send({
    //             isError: true, 
    //             message: error.errors[0].message, 
    //             data: null
    //         })
    //     }
    // }),
    
    activation: async(req, res) => {
        try {
            let id = req.params.id

            await users.update(
                {notfications: "confirmed"},
                {
                    where: {id}
                }
            )

            res.status(401).send({
                isError: false,
                message: "account activated",
                data: null
            })
        } catch (error) {
            
        }
    }


}   


