const mongoose = require('mongoose');

const ledgerSchema = new mongoose.Schema({
    loanNumber: {
        type: Number,
        required: [true, 'A loan number is required'],
        trim: true,
        min: 1,
    },
    paymentAmount: {
        type: Number,
        required: [true, 'A payment amount is required'],
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
    principal: {
        type: Number,
        required: [true, 'A principal amount is required'],
        trim: true,
        min: 1,
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
    }
});

const Ledger = mongoose.model('Ledger', ledgerSchema);
module.exports = Ledger;