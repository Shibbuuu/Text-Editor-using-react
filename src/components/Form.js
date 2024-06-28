import React, { useState } from 'react';

export default function Form(props) {
  const [text,setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const handleclear= (event) => {
    event.preventDefault();
    setText('');
    props.showAlert(" Clearing Completed","Success:")
  };

  const handleSubmit= (event) => {
    event.preventDefault();
    setText(text.toUpperCase());
    props.showAlert(" Converted to Uppercase","Success:")

  };
  const handleDownSubmit= (event) => {
    event.preventDefault();
    setText(text.toLowerCase());
    props.showAlert(" Converted to Lowercase","Success:")

  };
 
  return (
    <form onSubmit={handleSubmit}  style={{
      // backgroundColor:props.mode==='light'?'white':'black',
      color:props.mode==='light'?'blue':'red'
    }} >
      <h1>{props.heading}</h1>
      <div className="form-group">
        <textarea
          name="box"
          className='form-control'
          id="textbox"
          rows={8}
          value={text}
          onChange={handleTextChange}
          style={{
            backgroundColor:props.mode==='light'?'white':'black',
            color:props.mode==='light'?'blue':'red'
          }}
        ></textarea>
      </div>
      <button type="submit"  className="btn btn-primary m-4" onClick={handleSubmit}>
        Convert to Uppercase
      </button>
      <button  className="btn btn-primary m-4" onClick={handleDownSubmit}>
        Convert to Lowercase
      </button>
      <button  className="btn btn-primary m-4" onClick={handleclear}>
        Clear Text
      </button>
      <h2 m-3>Your Text Summary</h2>
      <p>{text.split(" ").length>0?text.split(" ").length:0} words and {text.length} characters.</p>
      <p>{0.008*text.split(" ").length} minute takes to read the text.</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to see preview in textform"}</p>
    </form>
  );
}
