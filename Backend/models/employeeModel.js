const  mongoose=require('mongoose');


const employeeSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: [true,"Please enter email"]
    },
    phone: {
        type: String,
        required: [true,"Please enter phone number"],
        trim: true,
        maxLength:10
    },   
    position: {
        type: String,
        required:[true,"Enter the postion"],
    
    },
    department: {
        type: String,
        required: [true,"Enter the Department"],
        
    },
    dateOfJoining: {
        type: Date,
        required: [true,"Enter the Date of joining"],
        default: Date.now
    },
    salary: {
        type: Number,
        required: [true,"Enter the Salary"],
        min: 0
    },   
    address: {
        street: {
            type: String,
            trim: true
        },
        city: {
            type: String,
            trim: true
        },
        state: {
            type: String,
            trim: true
        },
        zipCode: {
            type: String,
            trim: true
        }
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})
let Employee=mongoose.model('Employee',employeeSchema);
module.exports = Employee;