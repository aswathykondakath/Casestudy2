var Mongoose = require('mongoose');
const employeeSchema = Mongoose.Schema(
    {
        name:String,
        position:String,
        location:String,
        salary:Number
        
    }
);
var employeeModel=Mongoose.model("employee",employeeSchema);
module.exports = {employeeModel};