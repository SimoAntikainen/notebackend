const mongoose = require('mongoose')
//environment variable
if ( process.env.NODE_ENV !== 'production' ) {
  require('dotenv').config()
  console.log("This should not happen in production")
}

const url = "mongodb://simoa:spagettikoodari1337@ds161520.mlab.com:61520/hymooc_simo_tutorial"

console.log("URI is", url)

mongoose.connect(url)
mongoose.Promise = global.Promise

const Note = mongoose.model('Note', {
  content: String,
  date: Date,
  important: Boolean
})

module.exports = Note