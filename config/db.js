const mongoose = require('mongoose');

const connectBD = async () => {
    try {
 
        const connect = await mongoose.connect('mongodb+srv://haq47:1234567890@facebook-database.zziwp.mongodb.net/facebook-data?retryWrites=true&w=majority'); 
        console.log(`MongoDB Database connect : ${ connect.connection.host }`.yellow);  
    } catch (error) {
        console.log(`${error}`.red);
    }
}
module.exports = connectBD;  