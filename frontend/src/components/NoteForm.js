import { useState } from "react"

const NoteForm = () => {
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [error,setError] = useState(null)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const note = {title,description}
        const response = await fetch('/api/notes',{
            method:'POST',
            body:JSON.stringify(note),
            headers:{
                'Content-Type':'application/json'
            }
        })

         const json = await response.json()

         if(!response.ok)
         {
            setError(json.error)
         }
         if(response.ok)
         {
            setError(null)
            setTitle('')
            setDescription('')
            window.location.reload()
         }

    }
  return (
    <form className="create" onSubmit={handleSubmit}>
        <h3>Yeni Bir Not Ekle</h3>
        <div className="create-group">
         <div>
            <label>Not Başlığı : </label>
            <input type="text"  onChange={(e)=> setTitle(e.target.value)} value={title}/>
         </div>
         <div>
         <label>Not Açıklaması : </label>
         <input type="text"  onChange={(e)=> setDescription(e.target.value)} value={description}/>
         </div>
        </div>
        <button type="submit">EKLE</button>
        {error && <div className="error">{error}</div>}
    </form>
  )
}

export default NoteForm