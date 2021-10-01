const client = require('./connection');
const express = require('express');
const app = express();

app.listen(3004,() => { 
    console.log('Server running on port 3004');
})

client.connect(err => {
    if (err) {
        console.log(err);
    }
    console.log('Connected to Postgres');
}
);
  
app.get('/', (req, res) => {
    client.query('SELECT * FROM users', (err, results) => {
        if (err) {
            console.log(err);
        }
        res.send(results.rows);
    });
    client.end();
})
