const express = require('express');

const { getCases, createCase } = require('../controllers/caseController')

const router = express.Router()

// GET all cases
router.get('/', getCases)


// POST(CREATE) a new case
router.post('/', createCase)


module.exports = router