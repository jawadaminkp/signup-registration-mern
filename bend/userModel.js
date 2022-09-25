const mongoose = require('mongoose');
const schema  = mongoose.Schema(
    {
        "name": {type: String},
        "email": {type: String},
        "password": {type: Number}
    }
)

const user = mongoose.model('user', schema);

module.exports = user;