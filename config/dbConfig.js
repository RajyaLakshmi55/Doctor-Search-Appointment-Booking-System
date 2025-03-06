const mongoose= require('mongoose')

mongoose.connect(process.env.MONGO_URL)

const connection = mongoose.connection;
connection.on('connected', () =>{
    console.log("Mongo DB connection is Sucessfully...!")

})

connection.on('Error', (error) =>{
    console.log("error in mongodb connection", error)
    
})
module.exports=connection;