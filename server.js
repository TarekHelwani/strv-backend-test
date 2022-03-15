require('dotenv').config()
const express = require('express')
const app = express()



// Connect to MongoDB
require('./startup/dbConnection')()
// Connect to Firebase
require('./startup/firebaseConnection')()
// Specify CORS
require("./startup/cors")(app);
// including routes
require("./startup/routes")(app);

const PORT = process.env.PORT || 3000

// mongoose.connection.once('open', () => {
//     app.listen(PORT, () => {
//         console.log(`Server is running on port ${ PORT }`)
//     })
// })

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${ PORT }`)
})

module.exports = server
