const express = require('express')
 const Note = require('../models/noteModel')
 const {createNote,getNotes,getNoteById,deleteNote, updateNote } = require('../controllers/noteController')
const router = express.Router();

router.get('/',getNotes)

router.get('/:id',getNoteById)

router.post('/',createNote)

router.delete('/:id',deleteNote)

router.patch('/',updateNote)

module.exports = router;