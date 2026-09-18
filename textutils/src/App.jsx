import { useState } from 'react'

import Navbar from './components/Navbar.jsx';
import Textform from './components/Textform.jsx';
import About from './components/About.jsx';
import Alert from './components/Alert.jsx';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  const [mode, setDarkMode] = useState("light");
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };


  const toggleMode = () => {

    if (mode === 'dark') {

      setDarkMode('light');

      document.body.style.backgroundColor = 'white';

      showAlert("Light mode enabled.", "success");

    } else {

      setDarkMode('dark');

      document.body.style.backgroundColor = '#042743';

      showAlert("Dark mode enabled.", "success");

    }
  };


  return (
    <>

      <Router>

        <Navbar
          title="Textutils"
          mode={mode}
          togglemood={toggleMode}
        />

        <Alert alert={alert} />

        <div className="container my-3">

          <Routes>

            <Route
              path="/"
              element={
                <Textform
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              }
            />

            <Route
              path="/about"
              element={<About />}
            />

          </Routes>

        </div>

      </Router>

    </>
  );
}

export default App;