import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase", "success");
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase", "success");
  };

  const handleCamClick = () => {
    setText(camelize(text.toLowerCase()));
    props.showAlert("Converted to camelcase", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearClick = () => {
    setText(" ");
    props.showAlert("Cleared text", "success");
  };

  const camelize = (str) => {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, "");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text );
    props.showAlert("Copied text", "success");
  };

  const handleSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces", "success");
  };

  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <div className="mb-3 container">
          <h1>{props.heading}</h1>

          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              color: props.mode === "light" ? "black" : "white",
              backgroundColor: props.mode === "light" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <div className="container ">
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleUpClick}
          >
            Convert to UPPERCASE
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleLowClick}
          >
            Convert to lowercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleClearClick}
          >
            Clear Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleCamClick}
          >
            Convert to camelCase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleCopy}
          >
            Copy Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleSpaces}
          >
            Remove Extra Spaces
          </button>
        </div>

        <div className="container my-3">
          <h1>Your Text Summary</h1>
          <p>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            } {' '}
            Words and {text.split(/[ ]+/).join(" ") === " " ? 0 : text.length}{" "}
            characters
          </p>
          <p>
            {0.008 *
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length} {' '}
            Minutes read
          </p>
          <h2>Text Preview</h2>
          <p>
            {text === "Enter text here"
              ? " "
              : text.length > 0
              ? text
              : "Nothing to preview"}
          </p>
        </div>
      </div>
    </>
  );
}
