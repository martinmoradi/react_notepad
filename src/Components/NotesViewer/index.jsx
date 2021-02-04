import React, { useState, useEffect } from "react";
import Button from "../Button";
import Note from "../Note";

const NotesViewer = ({ notes }) => {

  // const notes = useStickyState([], "notes");

  return (
    <>
      <Button content="Nouvelle note" />
      {notes &&
        notes.map(({ title, content }, index) => (
          <Note title={title} content={content} key={index} />
        ))}
    </>
  );
};

export default NotesViewer;
