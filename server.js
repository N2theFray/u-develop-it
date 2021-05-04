const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes')



//Express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json())

//ensure this is after the middleware
app.use('/api', apiRoutes)





//Default response for any other request (not found)
app.use((req,res) => {
    res.status(404).end()
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})