// CSS PART

import './App.css';
import './StyleComponent/Navber.css';
import './StyleComponent/Home.css';
import './StyleComponent/Courses.css';
import './StyleComponent/Tutorials.css';
import './StyleComponent/Footer.css';
import './StyleComponent/MyGrear.css';
import './StyleComponent/Subject.css';
import './StyleComponent/NAV_home.css';
import './StyleComponent/HTML_Introduction.css';
//JS PART

import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import Navber from './Component/Navber';
// import MyGear  from './Component/My Gear';
import Home from './Component/HOme';
import Courses from './Component/Courses';
import Tutorials from './Component/Tutorials';
import Footer from './Component/Footer';
import MyGear from './Component/MyGear';
import Subject from './Component/Subject';
// import HTML_Introduction from './Component/Subject/HTML/HTML_Introduction';
import HTML_Working from './Component/Subject/HTML/HTML_Working';
// import Nav_home from './Component/NAV_home';
import HTML_Introduction from './Component/Subject/HTML/HTML_Introduction';

// import Subject from './Component/Subject';


function App() {
  const [mode, setMode] = useState("lightmode")
  const [CoursesCardMode, setCoursesCardMode] = useState("mainCardLightMode")
  const [CoursesTextColor, setCoursesTextColor] = useState("lightcolor")
  const [NavClick, setNavClick] = useState("https://www.svgrepo.com/show/394297/nav-icon-a.svg")
  const [NavNames, setNavNames] = useState("navItam")
  const [filtericon, setfiltericon] = useState("filtericonblack")

 const mobileNavoff =()=>{
  if(NavNames === NavNames){
    setNavNames("closeNav")
    setNavClick("https://www.svgrepo.com/show/394297/nav-icon-a.svg")
  }
 }


  const clickNavIcon = () => {
    if (NavClick === "https://www.svgrepo.com/show/394297/nav-icon-a.svg") {
      setNavClick("https://www.svgrepo.com/show/500512/close-bold.svg")
      setNavNames("navItamclose")
    }

    else {
      setNavClick("https://www.svgrepo.com/show/394297/nav-icon-a.svg")
      setNavNames("navItam")
    }
  }


  const toggleMode = () => {
    if (mode === "darkmode") {
      setMode("lightmode")
      document.body.style.backgroundColor = "#ffffff"
      setCoursesCardMode("mainCardLightMode")
      setCoursesTextColor("lightcolor")
      setfiltericon("filtericonblack")

    }
    else {
      setMode("darkmode")
      document.body.style.backgroundColor = "black"
      setCoursesCardMode("mainCardDarkMode")
      setCoursesTextColor("darkcolor")
      setfiltericon("filtericonlight")

    }
  }


  return (
    <>

      <Navber logo="Titel C# " mode={mode} toggleMode={toggleMode} NavClick={NavClick} clickNavIcon={clickNavIcon} NavNames={NavNames} filtericon={filtericon} mobileNavoff={mobileNavoff}/>
      {/* <Subject/> */}
      <Subject mode={mode} CoursesTextColor={CoursesTextColor} SubjectNav ='SubjectNav'/>

      
      <Routes>
        <Route path='/' element={<Home titel="Learn to Code" CoursesCardMode={CoursesCardMode} CoursesTextColor={CoursesTextColor} mode={mode} />} />
        <Route path='/MyGear' element={<MyGear CoursesCardMode={CoursesCardMode} CoursesTextColor={CoursesTextColor} />} />
        <Route path='/Courses' element={<Courses titel="Premium Courses" footer="More Courses" mode={mode} CoursesCardMode={CoursesCardMode} CoursesTextColor={CoursesTextColor} />} />
        <Route path='/Tutorials' element={<Tutorials titel="Tutorials" mode={mode} />} />
      </Routes>


      
      <Footer name="Mohit Mahmud" />
    </>
  );
}

export default App;
