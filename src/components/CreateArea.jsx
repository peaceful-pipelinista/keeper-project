import React, { useState } from "react";

const CreateArea = ({ onAdd }) => {
  const [note, setNote] = useState({ title: "", content: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitNote = (e) => {
    e.preventDefault();
    onAdd(note);
    setNote({ title: "", content: "" });
  };

  return (
    <form
      onSubmit={submitNote}
      className="flex flex-col gap-2 p-4 max-w-sm mx-auto"
    >
      <input
        name="title"
        onChange={handleChange}
        value={note.title}
        placeholder="Title"
        className="border p-2 rounded"
      />
      <textarea
        name="content"
        onChange={handleChange}
        value={note.content}
        placeholder="Take a note..."
        rows="3"
        className="border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded"
      >
        Add
      </button>
    </form>
  );
};

export default CreateArea;
