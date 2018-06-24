const mongoose = require('mongoose')
//environment variable
if ( process.env.NODE_ENV !== 'production' ) {
  require('dotenv').config()
  console.log("This should not happen in production")
}

const url = 'mongodb://simoa:koodari1337@ds261660.mlab.com:61660/tuotantotutoriaali'

console.log("URI is", url)

mongoose.connect(url)
mongoose.Promise = global.Promise

const Note = mongoose.model('Note', {
  content: String,
  date: Date,
  important: Boolean
})

module.exports = Note