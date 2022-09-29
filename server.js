const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./db/db')
connectDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static('sex'))
// app.use(express.json({ limit: "5mb" }));


app.use('/car', require('./router/carRoutes'))
app.use('/exel', require('./router/exeRoutes'))
app.use('/video', require('./router/videoRoutes'))
app.use('/like', require('./router/likeRoutes'))
app.use('/total', require('./router/totalRoutes'))
app.use('/client', require('./router/ClientRoutes'))
app.use('/order', require('./router/orderRoutes'))
app.use('/auth', require('./router/adminRoutes'))
app.use('/xodim', require('./router/editorRoutes'))
app.use('/user', require('./router/userRoutes'))
app.use('/bank', require('./router/bankRoutes'))




app.listen(process.env.PORT || 5000, console.log('run server 5000 port'))
