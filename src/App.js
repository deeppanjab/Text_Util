import "./App.css";
import "./index.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import About from "./components/About";
// import { Routes } from "react-router-dom";
import React, { useState } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";

// import Textform from './components/Textform'    //To add this automatically First type componenet name like this <CompoName then click on suggestion >

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2d3339";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing';

      // }, 4000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils';

      // }, 2200);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = 'TextUtils - Light Mode';
    }
  };

  // return (
  //   <>
  //     <Router>
  //       {/* <Navbar title="TextUtils" aboutText="About Me" /> */}
  //       <Navbar
  //         title="TextUtils"
  //         aboutText="About Me"
  //         mode={mode}
  //         toggleMode={toggleMode}
  //       />
  //       <Alert alert={alert} />
  //       <div className="container">
  //         {/* Using exact path
  //         /user ----> Component 1
  //         /user/home ----> Component 2 */}

  //         {/* without exact path
  //         /user ----> Component 1
  //         /user/home ----> Component 2 It will be used as Component 1*/}

  //         <Routes>
  //           <Route exact path="/about" element={<About />}>

  //           </Route>
  //           <Route exact path="/" element={<Textform
  //               heading="Enter your text here"
  //               mode={mode}
  //               showAlert={showAlert} />}>

  //           </Route>
  //         </Routes>
  //       </div>
  //     </Router>
  //   </>
  // );

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About Me" /> */}
      <Navbar
        title="TextUtils"
        aboutText="About Me"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container">
        {/* Using exact path
          /user ----> Component 1
          /user/home ----> Component 2 */}
        {/* without exact path
          /user ----> Component 1
          /user/home ----> Component 2 It will be used as Component 1*/}
        <Textform
          heading="Enter your text here"
          mode={mode}
          showAlert={showAlert}
        />
        
      </div>
    </>
  );
}

export default App;
