import React, { useState, useEffect } from "react";
import Button from "../Button";
import Note from "../Note";

const NotesViewer = () => {

  const useStickyState = (defaultValue, key) => {
    const [value, setValue] = useState(() => {
      const stickyValue = localStorage.getItem(key);
      return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
    });
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
  };

  const notes = useStickyState([], "notes");
  console.log(notes);
  console.log(notes[0]);

  return (
    <>
      <Button content="Nouvelle note" />
      {notes &&
        notes[0].length > 0 &&
        notes[0].map(({ title, content }, index) => (
          <Note title={title} content={content} key={`${index}, ${title}`} />
        ))}
    </>
  );
};

export default NotesViewer;
