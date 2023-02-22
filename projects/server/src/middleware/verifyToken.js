const { validateToken } = require('./../lib/jwt')

module.exports = {
    tokenVerify: (req, res, next) => {
        let {token} = req.body

        if(!token){
            return res.status(401).send({
                error: true,
                message: 'Token not found',
                isData: false,
                data: null
            })
        }

        try {

            // console.log(token.token) // Untuk Check dapat tokennya

            const validateTokenResult = validateToken(token)

            // console.log(validateTokenResult) // Untuk Check expired at tokennya
            req.dataToken = validateTokenResult
            
            next()
        } catch (error) {
            console.log(error)
            res.status(401).send({
                isError: true,
                message: 'Invalid Token',
                data: null
            })
        }
    }
}