const mongoose = require('mongoose')

 module.exports = function () {
     try {
          mongoose.connect(process.env.DATABASE_URI, {
             useUnifiedTopology: true,
             useNewUrlParser: true
         }).then(() => {
             console.log('Connected to MongoDB...')
         })
     } catch (err) {
         console.log(err)
     }
 }
