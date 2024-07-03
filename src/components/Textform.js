import React, {useState} from "react";

export default function Textform(props) {
  const handleUpClick=()=>{
  // console.log("Uppercase clicked");
  let newText = text.toUpperCase();
  setText(newText);  
  props.showAlert("Converted to Uppercase", "success");
  }
  
  const handleLoClick=()=>{
  let newText = text.toLowerCase();
  setText(newText);
  props.showAlert("Converted to Lowercase", "success");
  }
   const handleClearClick=()=>{
  let newText = '';
  setText(newText);
  props.showAlert("Text is cleared", "success");
  }
   const handleCapitalizeClick=()=>{
  // let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  let newText = text.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  setText(newText);
  props.showAlert("Converted to Capitalize", "success");
  }
  const OnChangeHandle=(event)=>{
  console.log("On change" + text);
  setText(event.target.value);
  }


  const [text, setText] = useState("");
  // text = "dfsklcjk"; //Wrong way of updation of variable
  // setText("dfsklcjk"); //Correct way of updation of variable
  return (
    <>
    <div style={{color: props.mode==='dark'?'white':'#2d3339'}} >
      <h1 >{props.heading}</h1>
      <div className="mb-3 mt-3 mx-">
        <textarea className="form-control" value={text} onChange={OnChangeHandle} id="textArea" rows="9" style={{backgroundColor: props.mode==='dark'?'#2d3339':'white',color: props.mode==='dark'?'white':'#2d3339'}}></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick} >Uppercase</button>
      <button className="btn btn-primary mx-3" onClick={handleLoClick} >Lowercase</button>
      <button className="btn btn-primary" onClick={handleClearClick} >Clear</button>
      <button className="btn btn-primary ms-3" onClick={handleCapitalizeClick} >Capitalize</button>
    </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#2d3339'}}>
      <h2>Your text Summary</h2>
      <p>{text.split(" ").length-1} Words & {text.length} Characters</p> 
      <p>{0.008 * text.split(" ").length} Minutes read </p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Please type something in above text box to preview it here"}</p>
    </div>
    </>
  );
}
