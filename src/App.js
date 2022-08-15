// import logo from './logo.svg';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';


function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode("dark")
      document.body.style.backgroundColor='#042743';
    }
    else{
      setMode("light")
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    
  <Navbar title="TextUtils" at ="About" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3">
  <TextForm heading = "Enter the text to analyze below" mode={mode}/>
  {/* <About/> */}
  </div>
  
    </>
  );
}

export default App;
