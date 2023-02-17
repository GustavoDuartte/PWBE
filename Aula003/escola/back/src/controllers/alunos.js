const con = require('../dao/connect')

const teste = (req, res)=>{
    res.json("Escola Respondendo").end()
}
const listar = (req,res)=>{
    con.query('SELECT * FROM aluno',(result, err)=>{
        if(err == null){
            res.json(result).end();
        }else{
            res.json(err).end();
        }
    })
}

module.exports = {
    teste,
    listar
}