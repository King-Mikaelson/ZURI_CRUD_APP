// SET UP MONGOOSE STILL GOING TO MOVE THIS TO A NEW FOLDER SETUP
const mongoose = require("mongoose");
const connectionString = "mongodb://localhost:27017/Zuriapp";

module.exports = () => {
    mongoose.connect(connectionString, {
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
