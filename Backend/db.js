const mongoose = require('mongoose');

// const mongoUri='mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false';


const mongoUri='mongodb+srv://authMern:authMern12@cluster0.tcqvqxt.mongodb.net/?retryWrites=true&w=majority';
const connectToMongo=()=>{
    mongoose.connect(mongoUri, ()=>{console.log('Connection estabilished')});
}

module.exports = connectToMongo;
