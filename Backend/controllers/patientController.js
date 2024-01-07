const mongoose = require('mongoose')
const Patient = require('../models/patientModel')

// get all workouts
const getPatients = async (req, res) => {
    const patientList = await Patient.find({}).sort({ createdAt: -1 })

    res.status(200).json(patientList)
}

const createPatient = async(req, res) => {
    const { first_name, middle_name, last_name, age, gender, first_appt_date, address, contact_no } = req.body

    // add to the database
    try {
        const patient = await Patient.create({ first_name, middle_name, last_name, age, gender, first_appt_date, address, contact_no })
        res.status(200).json(patient)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { getPatients, createPatient }