const mongoose = require('mongoose')
const Case = require('../models/caseModel')

// get all case
const getCases = async (req, res) => {
    const caseList = await Case.find({}).sort({ createdAt: -1 })

    res.status(200).json(caseList)
}

const createCase = async (req, res) => {
    const { patient, treatment, expected_cost, case_description } = req.body

    // add to the database
    try {
        const tcase = await Case.create({ patient, treatment, expected_cost, case_description })
        res.status(200).json(tcase)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { getCases, createCase }