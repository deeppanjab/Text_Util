import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';


export default function Navbar(props) {
  const [btnText, setBtnText]= useState("Dark Mode");
  const [myStyle, setMyStyle]= useState({
    backgroundColor:'white'
  })
  const toggleStyle=() =>{
    if (myStyle.backgroundColor==="white") {
      setMyStyle({
        color:'black'
      })
      setBtnText("Light Mode");
    } else {
      setMyStyle({
        color:'white'
      })
      setBtnText("Dark Mode");
    }
  }

  return (
    <nav className={`navbar navbar-expand-lg  bg-${props.mode}`} data-bs-theme={props.mode}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" href="/about">About</Link>
        </li> */}
        
      </ul>
      
      <div className={`form-check form-switch secondary-switch text-${props.mode==='light'?'black':'white'} mx-2`}>
      <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault" toggleStyle={toggleStyle}>{btnText}</label>
    </div>
    </div>
  </div>
</nav>
  )
}


Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
}
/*
Navbar.defaultProps ={
  title: "Set title here",
  aboutText: "About text here"
}
*/