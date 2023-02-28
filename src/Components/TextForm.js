import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted To Upper Case", "success");
  }
  const handleLoClick = ()=>{
    // console.log("uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted To Lower Case", "success");
  }
  const handleClearClick = ()=>{
    // console.log("uppercase was clicked" + text);
    let newText = "";
    setText(newText)
    props.showAlert("Text Cleared", "success");
  }
  const handleOnChange = (event)=>{
    // console.log("handle on change");
    setText(event.target.value);

    
  }
  const handleCopy = ()=>{
    // var text = document.getElementById("myBox")
    // text.select();
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("Text Copied", "success");
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
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark'?'#13466e':'white',color:props.mode ==='dark'?'white':'#042743'}} id="myBox" rows="7"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>       
      <h2>Your text Summary</h2>
      <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to Preview"}</p>
    </div>
    </>

  )
}