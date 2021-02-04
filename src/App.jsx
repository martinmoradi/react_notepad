import React, { useState, useEffect } from "react";
import "./Sass/style.scss";
import MarkDownInput from "./Components/MarkdownInput/index";
import NotesViewer from "./Components/NotesViewer/index";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [viewNote, setViewNote] = useState(false)
  
  const handleSave = (note) => {
    let save;
    if (notes) {
      save = [...notes, note];
    } else {
      save = [note];
    }
    setNotes(save);
    localStorage.setItem("notes", JSON.stringify(save));
  };

  useEffect(() => {
    const storedValues = JSON.parse(localStorage.getItem("notes"));
    setNotes(storedValues);
  }, []);

  return (
    <>
      <MarkDownInput handleSave={handleSave} />
      <NotesViewer notes={notes} />
    </>
  );
};

export default App;
