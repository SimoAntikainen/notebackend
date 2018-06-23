const mongoose = require('mongoose')

const url = 'mongodb://simoa:spagettikoodari1337@ds161520.mlab.com:61520/hymooc_simo_tutorial'

mongoose.connect(url)

const Note = mongoose.model('Note', {
  content: String,
  date: Date,
  important: Boolean
})

module.exports = Note