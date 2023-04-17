const mongoose = require('mongoose');
const Loan = require('./loanSchema').schema;
const Ledger = require('./ledgerSchema').schema;

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'You must provide a name'],
        unique: true,
        trim: true,
        maxlength: [20, 'The name cannot be more than 20 characters'],
        minlength: [10, 'The name cannot be less than 10 characters'],
    },
    firstName: {
        type: String,
        required: [true, 'You must provide a first name'],
        trim: true,
        maxlength: [20, 'First name cannot be more than 20 characters']
    },
    middleName: {
        type: String,
        required: [true, 'You must provide a middle name'],
        trim: true,
        maxlength: [20, 'Middle name cannot be more than 20 characters']
    },
    lastName: {
        type: String,
        required: [true, 'You must provide a last name'],
        trim: true,
        maxlength: [20, 'Last name cannot be more than 20 characters']
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value),
            message: (props) => `${props.value} is not a valid email address`,
        },
    },
    phone: {
        type: String,
        required: true,
        validate: {
            validator: (value) => /^\d{3}-\d{3}-\d{4}$/.test(value),
            message: (props) => `${props.value} is not a valid phone number`,
        },
    },
    dateOfBirth: {
        type: Date,
        required: [true, 'You must provide date of birth as (YYYY-MM-DD)'],
        trim: true,
        validate: {
            validator: (value) => value <= Date.now(),
            message: 'Date of Birth must be in the past'
        }
    },
    gender: {
        type: String,
        enum: ['male', 'Male', 'female', 'Female'],
        required: [true, 'You must list your gender']
    },
    createdDate: {
        type: Date,
        default: Date.now,
    },
    modifiedDate: {
        type: Date,
        default: Date.now,
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    loan: [Loan],
    ledger: [Ledger],
});

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;


