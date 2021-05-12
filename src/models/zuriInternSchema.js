const mongoose = require("mongoose")
// Create Schema here
const schema = mongoose.Schema;
const zuriSchema = new schema({
    name : String,
    email : String,
    country : String
});

const Intern = mongoose.model("Intern", zuriSchema);
module.exports = Intern