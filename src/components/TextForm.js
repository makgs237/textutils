import React, { useState } from "react";
import PropTypes from "prop-types";
export default function TextForm(props) {
  const handleUpClicks = () => {
    //console.log("Uppercase was clicks");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleUpChange = (event) => {
    //console.log("Uppercase was change");
    setText(event.target.value);
  };
  const handleLpClicks = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const newLineConverPtag = (arr) => {
    let new_arr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] !== "") new_arr.push(arr.pop());
      else arr.pop();
    }
    return new_arr.reverse();
  };

  const replaceBreaksWithParagraphs = (data) => {
    //console.log("content length "+data.length);
    let preview = document.getElementById("prevw");
    if (data.length) {
      data = newLineConverPtag(data.split("\n")).join("</p><p>");
      preview.innerHTML = "<p>" + data + "</p>";
    } else {
      //preview.innerHTML = "Enter something in the textbox above to preview here";
    }
  };

  const intoTitleCase = () => {
    let newText = text.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });

    setText(newText);
    props.showAlert("Converted to titlecase!", "success");
  };
  const handleClearText = () => {
    let preview = document.getElementById("prevw");
    preview.innerHTML = "";
    setText("");
    props.showAlert("text cleared!", "success");
  };
  const handleCopyText = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges(); // This is function that removed selected text when you copied.
    props.showAlert("copied to clipbord!", "success");
  };
  const [text, setText] = useState("");
  //text = 'new text'; // wrong way to set state
  //setText("new text"); // correct way to set state

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleUpChange}
            style={{
              color: props.mode === "dark" ? "white" : "black",
              backgroundColor: props.mode === "dark" ? "#322828" : "white",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className={`btn btn btn-${
            props.mode === "light" ? "primary" : "secondary"
          } mx-1 my-1`}
          onClick={handleUpClicks}
        >
          Conver to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn btn-${
            props.mode === "light" ? "primary" : "secondary"
          } mx-1 my-1`}
          onClick={handleLpClicks}
        >
          Conver to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn btn-${
            props.mode === "light" ? "primary" : "secondary"
          } mx-1 my-1`}
          onClick={intoTitleCase}
        >
          Conver to Titlecase
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn btn-${
            props.mode === "light" ? "primary" : "secondary"
          } mx-1 my-1`}
          onClick={handleCopyText}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn btn-${
            props.mode === "light" ? "primary" : "secondary"
          } mx-1`}
          onClick={handleClearText}
        >
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text
              .replace(/\n/g, " ")
              .split(" ")
              .filter((x) => x !== "").length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text
              .replace(/\n/g, " ")
              .split(" ")
              .filter((x) => x !== "").length}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <div className="preview" id="prevw">
          {replaceBreaksWithParagraphs(text)}
        </div>
      </div>
    </>
  );
}

TextForm.defaultProps = {
  heading: "Please add here title",
};
