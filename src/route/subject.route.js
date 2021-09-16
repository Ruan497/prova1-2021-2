const express = require('express')

const router = express.Router()

const subjectController = require('../controller/subject.controller')

router.get('/', subjectController.listAll)
router.get('/:id', subjectController.listSpec)
router.post('/', subjectController.create)
router.delete('/:id', subjectController.remove)
router.put('/:id', subjectController.updt)

module.exports = router