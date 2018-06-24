const mongoose = require('mongoose')
//environment variable
if ( process.env.NODE_ENV !== 'production' ) {
  require('dotenv').config()
  console.log("This should not happen in production")
}

const url = process.env.MONGODB_URI

console.log("URI is", url)

mongoose.connect(url)

const Note = mongoose.model('Note', {
  content: String,
  date: Date,
  important: Boolean
})

module.exports = Note