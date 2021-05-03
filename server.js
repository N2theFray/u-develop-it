const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql2')

//Express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json())

//connect to database
const db = mysql.createConnection(
    {
        host:'localhost',
        //Your MySQL username
        user: 'root',
        password: '061483Love!',
        database: 'election'
    },
    console.log('Connected to the election database')
)









//Default response for any other request (not found)
app.use((req,res) => {
    res.status(404).end()
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})