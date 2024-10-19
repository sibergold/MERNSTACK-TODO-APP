const Note = require('../models/noteModel')
const mongoose = require('mongoose')

const createNote =async (req,res) => {
    const {title,description} = req.body;
    try {
     const note = await Note.create({title,description})
     res.status(200).json({message:"Not başarıyla oluşturuldu."})
    } catch (error) {
     res.status(500).json({message:`Error: ${error}`})
    }
 }

const getNotes = async (req,res) =>{
    try {
        const notes = await Note.find().sort({createdAt:-1})
     res.status(200).json({message:"Notlar başarıyla getirildi.",notes})
        
    } catch (error) {
     res.status(500).json({message:`Error: ${error}`})
        
    }
}



 module.exports = {createNote,getNotes } ;
