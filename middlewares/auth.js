
const services = require("../services")

function isAuth(req,res,next) {
    if(!req.headers.authorization){
        return res.status(403).send({message: "No tienes autorizaciòn"})
    }

    const  token = req.headers.authorization.split(' ')[0]

    services.decodeToken(token)
        .then(response =>{
            req.user = response
            next()
        })
        .catch(response=>{
            return res.status(403).send({message: "Token invalido"})

        })
}
module.exports = isAuth;