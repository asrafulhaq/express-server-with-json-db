 const dotenv = require('dotenv').config();
 const express = require('express');
 const app = express();   
 
 // environment variables init
 const PORT = process.env.SERVER_PORT;

 // Request body init 
 app.use(express.json());
 app.use(express.urlencoded({ extended : false }));

 // Student Route use 
 app.use('/api/students', require('./routes/student'));

 
 // Add express server listener with port
 app.listen(PORT, () => console.log(`server is running on port ${ PORT }`));
