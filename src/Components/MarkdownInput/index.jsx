import React, { useState, useEffect } from "react";
import Field from "../../Helpers/Field";
import TextArea from "../../Helpers/TextArea";
import NoteDisplay from "../NoteDisplay";
import Showdown from "showdown";
import Button from "../Button";

const MarkDownInput = () => {
  const useStateLocalStorage = (localStorageKey) => {
    const [element, setElement] = useState(
      localStorage.getItem(localStorageKey) || ""
    );
    useEffect(() => {
      localStorage.setItem(localStorageKey, element);
    }, [element]);

    return [element, setElement];
  };

  const [title, setTitle] = useStateLocalStorage("noteTitle");
  const [content, setContent] = useStateLocalStorage("noteContent");

  const handleClick = () => {
    let notes = localStorage.getItem("notes");
    notes = JSON.parse(notes);
    const note = { title, content };
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
  };

  const handleChange = (e) => {
    const { value } = e.target;
    if (e.target.name === "title") {
      setTitle(value);
    } else {
      setContent(value);
    }
  };

  const markDownTranslate = (content) => {
    let converter = new Showdown.Converter();
    return converter.makeHtml(content);
  };

  return (
    <>
      <NoteDisplay title={title} content={markDownTranslate(content)} />
      <Field name="title" value={title} onChange={handleChange} type="text" />
      <TextArea content={content} onChange={handleChange} />
      <Button content="Sauvegarder" onClick={handleClick} />
      <hr />
    </>
  );
};

export default MarkDownInput;
