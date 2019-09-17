  
const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// console.log(dotenv.config()) // making sure that env variables are loaded 
const MONGO_USERNAME = 'devender';
const MONGO_PASSWORD = 'devender';
const MONGO_HOSTNAME = 'localhost';
const MONGO_PORT = '27017';
const MONGO_DB = 'test';  
console.log(MONGO_USERNAME)
console.log(MONGO_PASSWORD)
const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=test&w=1`;
console.log('url----------',url);
mongoose.connect(url);
mongoose.set('debug',true);