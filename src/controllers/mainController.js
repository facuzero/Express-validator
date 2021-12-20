let controller = {
    index: (req,res) => {
        res.send("Bienvenido usuario")
    },
    admin:(req,res) =>{
        res.send("Bienvend@ admin")
    }
}

module.exports = controller