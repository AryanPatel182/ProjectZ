const mongoose = require('mongoose')

const Schema = mongoose.Schema

const paymentSchema = new Schema(
    {
        caseId : {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Case'
        },
        paymentMethod: {
            type: String
        },
        paymentDate: {
            type: Date,
            default: Date.now
        },
        paymentDescription: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('PaymentDetail', paymentSchema) 