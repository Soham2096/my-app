import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = ()=>{
    // console.log("uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleClearClick = ()=>{
    // console.log("uppercase was clicked" + text);
    let newText = "";
    setText(newText)
  }
  const handleOnChange = (event)=>{
    // console.log("handle on change");
    setText(event.target.value);
  }
  const handleCopy = ()=>{
    var text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);
  }
    const [text, setText] = useState('');
    // setText("new text") // correct way to change the state
    // text = "new text"  // wrong way to change the state
  return (
    <>
    <div className='container'style={{color:props.mode ==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <label htmlFor="myBox" className="form-label"></label>
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark'?'grey':'light',color:props.mode ==='dark'?'white':'#042743'}} id="myBox" rows="7"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color:props.mode ==='dark'?'white':'#042743'}}>
      <h2>Your text Summary</h2>
      <p>{text.split(" ").length} Words and {text.length} Characters</p>
      <p>{0.008*text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Some Text First"}</p>
    </div>
    </>

  )
}