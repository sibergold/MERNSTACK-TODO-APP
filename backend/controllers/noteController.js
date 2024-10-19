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

const getNoteById = async (req,res) =>{
    const {id} = req.params;
    try {
        if(!mongoose.Types.ObjectId.isValid(id))   res.status(500).json({message:`${id} id'li not bulunamadı.}`})
        const note = await Note.findById(id)
        if(!note) return res.status(400).json({message:`${id} id'li not bulunamadı`})
    
            res.status(200).json({message:'Not başarıyla getirildi.',note})
    } catch (error) {
     res.status(500).json({message:`Error: ${error}`})
        
    }
}

const deleteNote = async (req,res) =>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return  res.status(500).json({message:"ID geçersiz"})

        const note = await Note.findOneAndDelete({_id:id})

        if(!note) return res.status(400).json({message:"Not bulunamadı"})

            res.status(200).json({message:"Not başarıyla silindi."})
}

const updateNote = async (req,res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return  res.status(500).json({message:"ID geçersiz"})
        const note = await Note.findOneAndUpdate({_id:id},{
       ...req.body
        },{new:true})
        
        if(!note) return res.status(400).json({message:"Not bulunamadı"})

            res.status(200).json({message:"Not başarıyla güncellendi."})
}


 module.exports = {createNote,getNotes,getNoteById,deleteNote, updateNote } ;