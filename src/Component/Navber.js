import React from 'react';
import { NavLink } from 'react-router-dom'
export default function Navber(props) {
  return (
    <>

      <nav className={`navber ${props.mode}`}>

        <div className="Logo">
          <h3 className="Logo" >{props.logo}</h3>
        </div>
        <div className={`${props.NavNames} ${props.mode}`}>
          <NavLink className={`${props.mode === "lightmode" ? "lightcolor" : "darkcolor"}`} to="/">Home</NavLink>
          <NavLink className={`${props.mode === "lightmode" ? "lightcolor" : "darkcolor"}`} to='/MyGear'>My Gear</NavLink>
          <NavLink className={`${props.mode === "lightmode" ? "lightcolor" : "darkcolor"}`} to='/Courses'>Courses</NavLink>
          <NavLink className={`${props.mode === "lightmode" ? "lightcolor" : "darkcolor"}`} to='/Tutorials'>Tutorials</NavLink>
        </div>
        <div className="mblnaviconset">
        <div className="form-check form-switch">
          <img className={`darkmodeicon ${props.filtericon}`} src="https://www.svgrepo.com/show/432507/light-mode.svg" onClick={props.toggleMode} alt="" />
        </div>
        <div className='nav-icon'>
          <img className={`nav-icon-img  ${props.filtericon} ${props.mode === "lightmode" ? "lightcolor" : "darkcolor"}`} onClick={props.clickNavIcon} src={`${props.NavClick}`} alt="" />
        </div>
        </div>
      </nav>
      
    </>
  )
}
