const mongoose = require('mongoose')


const url = `mongodb+srv://ahmedosigbeleme112:Kali_rash_manti@cluster0.zdax35m.mongodb.net/?retryWrites=true&w=majority`;


mongoose.connect(url)
  .then(() => {
    console.log(`connecting to database`)
  })
 .catch((e) => {
    console.log( e )
 })