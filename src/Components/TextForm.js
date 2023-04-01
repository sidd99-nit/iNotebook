import React,{useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
      console.log("Upper Case");
      let newText=text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to Upper Case","success");
  }

  const handleLoClick=()=>{
      console.log("Lower Case");
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lower Case","success");

  }

  const handleClrClick = ()=>{
    console.log("Upper Case");
    let newText="";
    setText(newText);
    props.showAlert("Cleared ","success");
}

  const handleOnChange = (event)=>{
    console.log("OnChange Called");
    setText(event.target.value);
}

  const [text,setText]= useState(''); 

  return (
    <>
    <div className="container" style={{color:props.formAr}}>
      <h3>{props.heading}</h3>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">Enter the Text</label>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.textAr, color:props.formAr}} id="myBox" rows="6"></textarea> 
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Upper Case</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Lower Case</button>
      <button className="btn btn-primary mx-1" onClick={handleClrClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color:props.formAr}}>
        <h5>Text Summary</h5>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Mintues to read</p>
        <h5>Preview</h5>
        <p>{text}</p>
    </div>
    </>
  )
}
