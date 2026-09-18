import React, {useState} from 'react'

export default function Textform(props) {
  const handleupClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }
   const handleOnChange = (event) => {
    console.log("onchange");
    setText(event.target.value);
  }
const handleClearClick = () => {
    setText(" ");
  }
  const [text, setText] = useState('');

  let words = 0;
   if (text.trim() !== "") {
    words = text.trim().split(/\s+/).length;
   };

   let char = 0;
   if (text.replace() !== "") {
    char = text.replace(/\s/g, "").length;
   }


  return (
    <>
    <div className="container">
      <h2>{props.heading}</h2>
  <div className="mb-3">
    <textarea className="form-control" id="exampleFormControlTextarea1" 
    style={{backgroundColor: props.mode === 'dark' ?
     '#343a40' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} rows="6"
      value={text} onChange={handleOnChange}></textarea>
    <button type="uppercase" className="btn btn-primary my-3 mx-1" onClick={handleupClick}>Convert to Uppercase</button>
    <button type="uppercase" className="btn btn-primary my-3 mx-1" onClick={handleClearClick}>Clear text</button>
    

  </div>
  </div>
  <div className="container">
    <h1>Your text summary</h1>
    <p>{words} words and {char} characters</p>
    <p>{0.008 * text.length} minutes to read</p>
  </div>
  </>
  )
}