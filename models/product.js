const mongoose = require('mongoose')

const product = mongoose.model('Product', {
    title: { type: String },
    description: { type: String },
    price: { type: String },
    image: { type: String },
})
module.exports = product