import React, { useState } from 'react';

import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';
import Alert from './components/Alert';
import './App.css';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggle = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Enabled dark mode", "Success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Enabled light mode", "Success");
    }
  };

  return (
    <>
      <Navbar mode={mode} toggle={toggle} />
      <Alert alert={alert} />
      <div className="container"><Form heading="Enter your text" showAlert={showAlert} mode={mode} />
      </div>
      <About/>
    </>
  );
}

export default App;
