const express = require('express')
const noteRouter = require('./router/noteRouter')
const connectDB = require('./lib/db')
const dotenv = require('dotenv')
const app = express()

dotenv.config()
connectDB();

PORT = process.env.PORT

app.use(express.json())
app.use('/api/notes',noteRouter)


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})