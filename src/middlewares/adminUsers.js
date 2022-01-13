const ADMIN_USERS = ["Ada", "Greta", "Vim", "Tim"]
let path = require('path')

function adminUsers( req, res, next){
    if(req.query.user == "Ada" ||req.query.user == "Greta" ||req.query.user == "Tim" ||req.query.user == "Vim"){
        res.send("Bienvenido admin: "+ req.query.user)
        next()
    }
    else {
        res.send("Quien te conoce papá...No estas autorizado/a/e")
    }
}
module.exports = adminUsers;