const mongoose = require('mongoose');
require('dotenv').config();
const connectionParams = {
    useUnifiedTopology: true
}

const uri = `mongodb://javadamin:pass123@ac-pyeimm2-shard-00-00.kavi2bj.mongodb.net:27017,ac-pyeimm2-shard-00-01.kavi2bj.mongodb.net:27017,ac-pyeimm2-shard-00-02.kavi2bj.mongodb.net:27017/?ssl=true&replicaSet=atlas-5hjofd-shard-0&authSource=admin&retryWrites=true&w=majority`

const connextion = mongoose.connect(uri,connectionParams).then(()=>{
    console.log('connected to DB')
}).catch((err)=>{
    console.log(err)
});

module.exports = connextion