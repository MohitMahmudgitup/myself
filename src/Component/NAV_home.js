import React from 'react'
import { Link } from 'react-router-dom'
// import '../StyleComponent/NAV_home.css';


export default function NAV_home(props) {
  
  return (
    <>
    <div className={`${props.siteNavs}`}>
    <div className="textNavicon">
                <img className={`textNaviconimg`} onClick={props.right_leftionsipt} src={`${props.right_leftion}`} alt="" />
            </div>

      <div className={` ${props.htmlNav}`}>
        <Link className={`liftNavItemText`} to="/HTML/html-home">HTML Introduction</Link>
        <Link className={`liftNavItemText`} to="/HTML/how-html-works">HTML Working</Link>
      </div>
    </div>

    </>
  )
}
