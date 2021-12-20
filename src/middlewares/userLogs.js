const fs = require('fs')

function userLog(req,res,next){
    fs.appendFileSync('src/log/userLogs.txt',`El usuario ${req.query.user}
    ingreso a la ruta: ${req.url}\n`)

    next()
}
module.exports = userLog;