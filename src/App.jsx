import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    if (!newNote.title.trim() || !newNote.content.trim()) {
      alert("Please fill in both fields before adding!");
      return;
    }
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note, index) => index !== id));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <CreateArea onAdd={addNote} />
      <div className="flex flex-wrap gap-4 justify-center p-4">
        {notes.map((note, index) => (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;

