import React from "react";

const Note = ({ id, title, content, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-64">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-gray-600">{content}</p>
      <button
        onClick={() => onDelete(id)}
        className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
};

export default Note;
