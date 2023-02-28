// import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
          setAlert(null);
    },1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode("dark")
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode is enabled", "success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled", "success")
    }
  }
  return (
    <>
  
  <Navbar title="TextUtils" at ="About" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3">
  <Router>
      <div>
        <nav>
          <ul>
            
            
              <Link to="/"></Link>
            
            
            
              <Link to="/about"></Link>
            
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About mode={mode}/>} />
          <Route path="/" element={ <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}/>
        </Routes>
      </div>
    </Router>
  
  {/* <About /> */}
  </div>
  
  
  
  
  
  
    </>
  );
}

export default App;

