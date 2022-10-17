const mysql = require('../config');

exports.getAllEmployee = (req,res,next) =>{
    const obra = req.body.obra

    try{
        mysql.connect(() =>{
            mysql.query(`SELECT Nome FROM ativos WHERE Obra = "${obra}"`, (err, empResult,fields) =>{

                return res.status(200).send({
                    employee: empResult
                })
            })
        })
    } catch (error) {
        return res.status(404).send({
            error: error.name,
            message: 'Catch error on getAllEmployee Controller.'
        })
    }
}