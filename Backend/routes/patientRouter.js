const express = require('express');

const { getPatients, createPatient } = require('../controllers/patientController')

const router = express.Router()

// GET all patients
router.get('/', getPatients)


// POST(CREATE) a new patient
router.post('/', createPatient)


module.exports = router