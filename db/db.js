const mongoose = require('mongoose')
const connectDB = async () => {
    await mongoose.connect("mongodb://localhost:27017/routox", {useNewUrlParser: true})
    .then(()=>{
        console.log(`MongoDB Connected`)
    }).catch((err)=>{
        console.log("err")
    })
}
module.exports = connectDB
