import React, { useState } from 'react'
import PropTypes from 'prop-types'
export default function TextForm(props) {
    const handleUpClicks = () => {
        //console.log("Uppercase was clicks");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleUpChange = (event) => {
        //console.log("Uppercase was change");
        setText(event.target.value);
    }
    const handleLpClicks = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const newLineConverPtag = (arr) => {
        let new_arr = [];
        for (let i = arr.length-1; i >= 0; i--)
        {
            if (arr[i] !== "")
                new_arr.push(arr.pop());
            else
                arr.pop();
        }
        return new_arr.reverse();
    }

    const replaceBreaksWithParagraphs = (data) =>{
        //console.log("content length "+data.length);
        if( data.length ){
            data = newLineConverPtag(data.split('\n')).join('</p><p>');
            let preview = document.getElementById("prevw");
            preview.innerHTML = '<p>' + data + '</p>';
        }
    }
    const [text, setText] = useState('');
    //text = 'new text'; // wrong way to set state
    //setText("new text"); // correct way to set state

    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleUpChange}></textarea>
                </div>
                <button className="btn btn btn-primary me-3" onClick={handleUpClicks}>Conver to Uppercase</button>
                <button className="btn btn btn-primary" onClick={handleLpClicks}>Conver to Lowercase</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.replace(/\n/g, " ").split(" ").filter((x) => x !== "").length} words and {text.length} characters</p>
                <p>{0.008 * text.replace(/\n/g, " ").split(" ").filter((x) => x !== "").length} Minutes read</p>
                <h2>Preview</h2>
                <div className='preview' id="prevw">
                    {replaceBreaksWithParagraphs(text)}
                </div>
            </div>
        </>
    )
}

TextForm.defaultProps = {
    heading: 'Please add here title'
}
