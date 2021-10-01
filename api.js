const client = require('./connection');
const express = require('express');
const app = express();

app.listen(3000,() => { 
    console.log('Server running on port 3000');
})

client.connect(err => {
    if (err) {
        console.log(err);
    }
    console.log('Connected to Postgres');
}
);
