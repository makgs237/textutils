import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";                                                                                                          

/* Need to install react router dome from: https://v5.reactrouter.com/web/guides/quick-start
https://reactrouter.com/docs/en/v6/upgrading/v5#upgrade-to-react-router-v6
https://reactrouter.com/docs/en/v6/getting-started/installation
https://create-react-app.dev/docs/deployment/
*/
function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) =>{
        setAlert({
          message: message,
          type: type
        })

        setTimeout(() => {
          setAlert(null);
        }, 1500);
  }
  const toogleMode = () => {
     if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#322828';
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtils - Dark Mode';
     }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = 'TextUtils - Light Mode';
     }
     if( document.getElementById('abDm') ){
        document.getElementById('abDm').click();
     }
     
  }
  return (
    <>
    <Router>
      <Navbar title="Text Utiles" aboutText="About Us" mode={mode} toogleMode={toogleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>}/>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;