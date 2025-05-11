const { errorMonitor } = require('form-data');
const mongoose = require('mongoose');
const clientOptions = {
    dbName          : 'apinode'
};


exports.initClientDbConnection = async () =>{
    try {
          await mongoose.connect(process.env.MONGODB_URI,clientOptions)
          console.log('connected');
      }catch(error){
        console.log(error);
        throw error;
      }
}

