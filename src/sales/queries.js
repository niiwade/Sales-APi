const getSale = "SELECT * FROM allsale";
const getSalebyId = "SELECT * FROM allsale WHERE id = $1";
const addSale = "INSERT INTO allsale( name, amount, date) VALUES ($1, $2, $3)";
//const checkNameExists = "SELECT s FOM sale s WHERE s.name = $1";
const dailySale = "SELECT date AS day, id, SUM(amount)  AS daily_sale FROM allsale GROUP BY day,id";
const weeklySale = "SELECT date AS week, id, SUM(amount) AS weekly_sale FROM allsale GROUP BY week,id";
const monthlySale = "SELECT date as month, id, SUM(amount) AS monthly_sale FROM allsale GROUP BY month,id";

//SELECT amount  FROM allsale GROUP BY amount

module.exports = {
    getSale,getSalebyId,addSale, dailySale, weeklySale, monthlySale, //checkNameExists, 
} 