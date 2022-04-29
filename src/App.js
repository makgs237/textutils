import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/* Need to install react router dome from: https://v5.reactrouter.com/web/guides/quick-start
https://reactrouter.com/docs/en/v6/upgrading/v5#upgrade-to-react-router-v6
https://reactrouter.com/docs/en/v6/getting-started/installation
https://create-react-app.dev/docs/deployment/
https://makgs237.github.io/textutils/
*/
function App() {
  const [mode, setMode] = useState("light");
  const colorsModes = ['light','primary','danger','success','warning'];
  const [alert, setAlert] = useState(null);
  const [btnColor, setbtnColor] = useState('primary')
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const removeBodyClasses = () =>{
    setMode("light");
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
  }
  const toogleMode = (cls = null,e = null) => {
    const checked = e !== null ? e.target.checked : '';
    removeBodyClasses();
    if(cls !== null){
      document.body.classList.add('bg-'+cls);
      setMode(cls);
      setbtnColor(cls === 'primary' ? 'secondary' : 'primary' );
    }else{
      if (colorsModes.includes(mode) && checked === true) {
        setMode("dark");
        setbtnColor("secondary");
        document.body.style.backgroundColor = "#322828";
        showAlert("Dark mode has been enabled", "success");
        document.title = "TextUtils - Dark Mode";
      } else {
        setMode("light");
        setbtnColor("primary");
        document.body.style.backgroundColor = "white";
        showAlert("Light mode has been enabled", "success");
        document.title = "TextUtils - Light Mode";
      }
      if (document.getElementById("abDm")) {
        document.getElementById("abDm").click();
      }
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Text Utiles"
          aboutText="About Us"
          mode={mode}
          toogleMode={toogleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze below"
                  mode={mode}
                  btnColor={btnColor}
                  showAlert={showAlert}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
