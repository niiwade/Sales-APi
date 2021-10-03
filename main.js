const express = require('express');
const saleRoute = require('./src/sales/routes')
const app = express();
const PORT = 3000;

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello')
});

app.use('/api/v1/sale', saleRoute)

app.listen(PORT,() => console.log(`app is listening on ${PORT}`));




























//const client = require('./connection.js')
//const express = require('express');
//const bodyParser = require("body-parser");
//const swaggerUI = require('swagger-ui-express')
//const swaggerJsDoc = require('swagger-jsdoc')
//const app = express();
//
//
//const port = process.env.PORT || 3000;
//
//app.listen(port, () => {
//    console.log(`Listening on port ${port}`)
//})
//
//app.use(bodyParser.json())
//
//client.connect();

//const options = {
//    swaggerDefinition: {
//        info: {
//            title: 'Sale API',
//            description: 'Sale Information'
//        },
//        servers: ['http://localhost/3000']
//    },
//    apis: ['api.js']
//}
//
//
//const swaggerDocs = swaggerJsDoc(options)
//
//app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
//
////Routes
//
///**
//// * @swagger
//// * /sale:
//// *  get:
//// *    description: Use to request all customers
//// *    responses:
//// *      '200':
// *        description: A successful response
// */
//
//app.get('/sale', (req, res) => {
//    client.query(`Select * from sale`, (err, result) => {
//        if (!err){
//            res.send(result.rows)
//        }
//    }); 
//    client.end();
//});
//
///**
// * @swagger
// * /sale/:id:
// *  get:
// *    description: Use to request all customers
// *    responses:
// *      '200':
// *        description: A successful response
// */
//
//app.get('/sale/:id', (req, res) => {
//    client.query(`Select * from sale where id=${req.params.id}`, (err, result) => {
//        if (!err){
//            res.send(result.rows )
//        }
//    }); 
//    client.end();
//});
//
//
///**
// * @swagger
// * /sale:
// *  post:
// *    description: Use to request all customers
// *    responses:
// *      '200':
// *        description: A successful response
// *        content:
// *          application/json:
// *           schema:
// *              type: array
// *              items:
// *                type:string
// */
////app.post('/sale', (req, res)=> {
//    const sales = req.body;
//    let insertQuery = `insert into sale(id, userName, amount, date) 
//                       values(${sales.id}, '${sales.userName}', '${sales.amount}', '${sales.date}')`
//
//    client.query(insertQuery, (err, result)=>{
//        if(!err){
//            res.send('Insertion was successful')
//        }
//        else{ console.log(err.message) }
//    })
//    client.end;
//})
//
//
///**
// * @swagger
// * /sale:
// *  put:
// *    description: Use to request all customers
// *    responses:
// *      '200':
// *        description: A successful response
// */

 //app.put('/sale/:id', (req, res)=> {
 //   let sales = req.body;
 //   let updateQuery = `update users
 //                      userName = '${sales.userName}',
 //                      amount = '${sales.amount}',
 //                      date = '${sales.date}'
 //                      where id = ${sales.id}`
//
 //   client.query(updateQuery, (err, result)=>{
 //       if(!err){
 //           res.send('Update was successful')
 //       }
 //       else{ console.log(err.message) }
 //   })
 //   client.end;
 //})


///**
// * @swagger
// * /sale:
// *  delete:
// *    description: Use to request all customers
// *    responses:
// *      '200':
// *        description: A successful response
// */
//
// app.delete('/sale/:id', (req, res)=> {
//    let insertQuery = `delete from sale where id=${req.params.id}`
//
//    client.query(insertQuery, (err, result)=>{
//        if(!err){
//            res.send('Deletion was successful')
//        }
//        else{ console.log(err.message) }
//    })
//    client.end;
//})


//
//const swaggerUI = require ('swagger-ui-express')
//const swaggerJsDoc = require ('swagger-jsdoc')
//const client = require('./connection.js');
//const express = require('express');
//
//const app = express();
//
//const PORT = process.env.PORT || 3301

//
//const options = {
//    definition: {
//        openapi: '3.0',
//        info: {
//            title: 'library API',
//            version: '1.0.0',
//            description: 'A simple Express Library API'
//        },
//        servers: [
//            {
//                url: 'http://localhost/8000'
//            }
//        ],
//    },
//    apis: ['./api/*.js']
//}
//
//const spec = swaggerJsDoc(options)
//
//app.listen(PORT,() => { 
//    console.log(`Server running on port ${PORT}`);
//})
//
//client.connect(err => {
//    if (err) {
//        console.log(err);
//    }
//    console.log('Connected to Postgres');
//}
//);
//  
//app.get('/Sales', (req, res) => {
//    client.query('SELECT * FROM users', (err, result) => {
//        if (!err) {
//            res.send(result.rows);;
//        }
//        else
//        {
//            console.log('Data not sent')
//        }
//    });
//    client.end;
//})
//
//
////app.use ('./api-docs', swaggerUI.serve,swaggerUI.setup(spec))