const pool = require('../../connection');
const queries = require('./queries')

const getSale = (req, res) => {
    pool.query(queries.getSale, (error, results) => {
        if (error)throw error;
        res.status(200).json(results.rows)
    });
}

const dailySale = (req, res) => {
    pool.query(queries.dailySale, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    
    })
}

const weeklySale = (req, res) => {
    pool.query(queries.weeklySale, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    
    })
}

const monthlySale = (req, res) => {
    pool.query(queries.monthlySale, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    
    })
}

const getSalebyId = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getSalebyId, [id],(error, results) => {
        if (error)throw error;
        res.status(200).json(results.rows)
    });
}

const addSale = (req, res) => {
    const { name, amount, date } = req.body; 
//     // check if name exists
//    pool.query(queries.checkNameExists, [name], (error, results) => {
//        if (results.rows.length)
//        {
//            res.send('name exists')
//        }
//    });
    pool.query(queries.addSale, [name, amount, date], (error, results) => {
        if (error) throw error;
        res.status(201).send('Sale added successfully')
    })
}


module.exports = {
    getSale,getSalebyId,addSale, dailySale,weeklySale, monthlySale,
}