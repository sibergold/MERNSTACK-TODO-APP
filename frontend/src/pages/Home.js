import { useEffect, useState } from "react";
import NoteDetail from "../components/NoteDetail";
import NoteForm from "../components/NoteForm";

const Home = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const response = await fetch('/api/notes');
    const json = await response.json();

    if (response.ok) {
      setNotes(json.notes); // Notlar listesini güncelle
    } else {
      setNotes([]);
      console.error('Failed to fetch notes:', json);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="home">
      <div className="not-form">
        <NoteForm onNoteAdded={fetchNotes} /> {/* Not eklendiğinde fetchNotes çağır */}
      </div>
      <div className="notlar">
        {notes.length > 0 ? (
          notes.map((note) => (
            <NoteDetail key={note._id} note={note} />
          ))
        ) : (
          <p>No notes found</p>
        )}
      </div>
    </div>
  );
};

export default Home;
