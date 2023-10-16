import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("UPPERCASE was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to UpperCase", "success")
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to LowerCase", "success")
        
    }
    const clearText = ()=>{
        let newText = '';
        setText(newText);
    }
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }


    const [text, setText] = useState('');

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
      <textarea
        className="form-control"
        value={text}
        onChange={handleOnChange}
        style={{backgroundColor:props.mode==='dark'?'#13466e':'white' , color:props.mode==='dark'?'white':'#042743'}}
        id="exampleFormControlTextarea1"
        rows={8}>
      </textarea>
    </div>
    <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to lowercase</button>
    <button className="btn btn-primary mx-2 my-2" onClick={clearText}>clearText</button>
    </div>
    <div className="container my-4" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the box above to Preview it here"}</p>

    </div>
  </>
  
  )
}
