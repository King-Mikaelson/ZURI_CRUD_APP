// SET UP MONGOOSE STILL GOING TO MOVE THIS TO A NEW FOLDER SETUP
const mongoose = require("mongoose");
require("dotenv").config();
const { MONGO_URI} = process.env

module.exports = () => {
    mongoose.connect(MONGO_URI, {
        useNewUrlParser : true,
        useUnifiedTopology : true,
        useFindAndModify : false
    }, (err) => {
        if(err) {
            console.log(err);
        }else{console.log("Database connected remarkably")
        
        }
    });
    
}
