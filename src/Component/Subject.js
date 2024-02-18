import React from 'react'
import { NavLink } from 'react-router-dom'
import HTML_Working from './Subject/HTML/HTML_Working'
import HTML_Introduction from './Subject/HTML/HTML_Introduction'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
   








export default function Subject(props) {




  return (
    <>
      <div className={`subjectBoder ${props.NavNames} ${props.CoursesCardMode} ${props.mode}`}>
        <NavLink className={`${props.SubjectNav} ${props.CoursesTextColor}`} to="/HTML/html-home">HTML</NavLink>
      </div>
      <Routes>
        <Route path='/HTML/html-home' element={<HTML_Introduction/>} />
        <Route path='/HTML/how-html-works' element={< HTML_Working/>} />
      </Routes>

    </>
  )
}
