import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [darkMode,setDarkMode]=useState('light');
  const [togMode,setTogMode]=useState('dark');
  const [textAr,setTextAr]=useState('white');
  const [formAr,setFormAr]=useState('black');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })

      setTimeout(()=>{
         setAlert(null);
      },2000)
  }

  const toggleMode=()=>{
    if(darkMode==='light')
    {
      setDarkMode('dark');
      setTogMode('light');
      setTextAr('#6c757d')
      setFormAr('white')
      document.body.style.backgroundColor='#6c757d';
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setDarkMode('light');
      setTogMode('dark');
      setTextAr('white');
      setFormAr('black')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success")
    }
  }
  return (
    <>
    <Router>
     <Navbar title="iNotebook" togMode={togMode} mode={darkMode} toggleMode={toggleMode} />
     <Alert alert={alert}/> 
     <div className="container my-3">
     <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm heading="Text Analyse"  showAlert={showAlert} textAr={textAr} formAr={formAr} mode={darkMode}/>
          </Route>
        </Switch>
          {/* <About /> */}
     </div>
     </Router>
    </>
  );
}

export default App;
