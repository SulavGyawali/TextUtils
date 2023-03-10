// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggelMode = () => {
    if (mode === "light") {
      setMode("info");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
        <Router>
          <Navbar title="TextUtils" mode={mode} toggleMode={toggelMode} />
          <Alert alert={alert} />
            <div className="container my-3">
          <Routes>
            <Route
              path="/TextUtils"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              }
              />
            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
              </div>
        </Router>
    </>
  );
}

export default App;
