import React, { useState, useEffect } from "react";
import "./Sass/style.scss";
import MarkDownInput from "./Components/MarkdownInput/index";
import NotesViewer from "./Components/NotesViewer/index";

// handleUpdate -> markdown input (props on update)

const App = () => {
  const [notes, setNotes] = useState([]);

  const handleSave = (note) => {
    const save = [...notes, note];
    setNotes(save);
    localStorage.setItem("notes", JSON.stringify(save));
  };

  useEffect(() => {
    let storedValues = localStorage.getItem("notes");
    storedValues = JSON.parse(storedValues);
    console.log(storedValues)
    setNotes(storedValues);
  }, [setNotes]);

  return (
    <>
      <MarkDownInput handleSave={handleSave} />
      <NotesViewer notes={notes} />
    </>
  );
};

export default App;
