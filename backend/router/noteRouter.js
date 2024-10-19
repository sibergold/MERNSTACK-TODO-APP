const express = require('express')
 const Note = require('../models/noteModel')
 const {createNote,getNotes } = require('../controllers/noteController')
const router = express.Router();

router.get('/',getNotes)


router.post('/',createNote)


module.exports = router;
