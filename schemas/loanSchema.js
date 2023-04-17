const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
    loanType: {
        type: String,
        required: [true, 'The type of loan is required (ex: Home, Auto, Medical, Life)'],
        trim: true,
        enum: ['Auto', 'Home', 'Life', 'Medical'],
    },
    loanNumber: {
        type: Number,
        required: [true, 'A loan number is required'],
        trim: true,
    },
    loanAmount: {
        type: Number,
        required: [true, 'A loan amount is required'],
        trim: true,
        min: 1,
    },
    interestRate: {
        type: Number,
        required: [true, 'An interest amount is required'],
        trim: true,
        enum: {
            values: [3, 5, 8],
            message: '{VALUE} is not supported'
        }
    },
    loanTermYears: {
        type: Number,
        required: [true, 'The length of the loan is required'],
        trim: true,
        min: 1,
        max: 35,
    },
    startDate: {
        type: Date,
        required: [true, 'You must provide a start date as (YYYY-MM-DD)'],
        trim: true,
        validate: {
            validator: (value) => value <= Date.now(),
            message: 'Start Date must be in the past'
        },
    },
    createdDate: {
        type: Date,
        default: Date.now,
    },
    insertedDate: {
        type: Date,
        default: Date.now,
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
});

const Loan = mongoose.model('Loan', loanSchema);
module.exports = Loan;
