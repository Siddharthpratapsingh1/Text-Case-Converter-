
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (messege , type) => {
    setAlert({
      msg: messege,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    } , 1500);

  }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-' +cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has enable", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has enable", "success")
    }
  }
  return (
    <>
    <Router>
        <Navbar title= "TextTutils" about="About" mode={mode} toggleMode={toggleMode}/>
        <Alert alert= {alert}/>
        <div className="container my-5">
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading= "Try TextUtils- Word Counter, Character Counter" mode={mode}/>}/>
        </Routes>

        </div>
    </Router>
   </>

  );
}

export default App;
