import React from "react";

const Note = ({ title, content }) => {
  let textContent;
  const splitContent = content.split(" ");

  const TruncateContent = () => {
    textContent = [];
    splitContent.forEach((word, index) => {
      if (index < 15 && index !== 14) {
        textContent.push(word);
      }
      if (index === 14) {
        textContent.push(word + "...");
      }
    });

    return textContent.join(" ");
  };

  splitContent.length > 15
    ? (textContent = TruncateContent(splitContent))
    : (textContent = splitContent.join(" "));

  return (
    <>
      <h1>{title}</h1>
      <p>{textContent}</p>
    </>
  );
};

export default Note;
