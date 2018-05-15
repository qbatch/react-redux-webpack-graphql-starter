const mongoose = require( 'mongoose' ); 
const dbURI = 'mongodb://localhost/amazon_inventory'; 

mongoose.connect(dbURI); 

mongoose.connection.on('connected', () => {  
  console.log('Mongoose default connection open to ' + dbURI);
}); 

mongoose.connection.on('error', (err) => {  
  console.log('Mongoose default connection error: ' + err);
}); 

mongoose.connection.on('disconnected', () => {  
  console.log('Mongoose default connection disconnected'); 
});

process.on('SIGINT', function() {  
  mongoose.connection.close( () => { 
    console.log('Mongoose default connection disconnected through app termination'); 
    process.exit(0); 
  }); 
}); 
