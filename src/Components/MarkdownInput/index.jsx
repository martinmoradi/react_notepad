import React, { useState } from "react";
import Field from "../../Helpers/Field";
import TextArea from "../../Helpers/TextArea";
import NoteDisplay from "../NoteDisplay";
import Button from "../Button";

const MarkDownInput = ({ handleSave }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleClick = () => {    
    const note = { title, content };
    handleSave(note)    
  };

  return (
    <>
      <NoteDisplay title={title} content={content} />
      <Field
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
      />
      <TextArea
        content={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button content="Sauvegarder" onClick={handleClick} />
      <hr />
    </>
  );
};

export default MarkDownInput;
