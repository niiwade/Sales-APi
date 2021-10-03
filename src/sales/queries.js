const getSale = "SELECT * FROM allsale";
const getSalebyId = "SELECT * FROM allsale WHERE id = $1";
const addSale = "INSERT INTO allsale( name, amount, date) VALUES ($1, $2, $3)";
//const checkNameExists = "SELECT s FOM sale s WHERE s.name = $1";
const dailySale = "SELECT SUM(amount) FROM allsale ";

//SELECT amount  FROM allsale GROUP BY amount

module.exports = {
    getSale,getSalebyId,addSale, //checkNameExists, 
} 