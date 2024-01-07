const mongoose = require('mongoose')

const Schema = mongoose.Schema

const caseSchema = new Schema(
    {
        patient: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Patient'
        },
        tratment: {
            type: String,
            required: true,
            default: "GENERAL CHECKUP"
        },
        total_visits_req: { 
            type: Number 
        },
        remaining_visits: {
          type: Number  
        },
        last_appt_date: {
            type: Date
        },
        next_appt_date: {
            type: Date
        },
        expected_cost: {
            type: Number,
            required: true
        },
        case_description: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Case', caseSchema) 