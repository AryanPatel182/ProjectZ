const mongoose = require('mongoose')

const Schema = mongoose.Schema

const patientSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    middle_name: {
        type: String,
        required: false
    },
    last_name: {
        type: String,
        required: false
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    first_appt_date: {
        type: Date,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    contact_no: {
        type: Number,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Patient', patientSchema)