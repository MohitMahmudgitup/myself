import React from 'react'
import NAV_home from '../../NAV_home'
import { useState } from 'react';

export default function HTML_Working(props) {
  const [siteNavs, setSiteNavs] = useState("liftNav")
  const [right_leftion, setright_leftion] = useState("https://www.svgrepo.com/show/325437/nav-arrow-right.svg")
  


  const right_leftionsipt =()=>{
    if(right_leftion === "https://www.svgrepo.com/show/325437/nav-arrow-right.svg"){
      setright_leftion("https://www.svgrepo.com/show/325435/nav-arrow-left.svg")
    }
    else{
      setright_leftion("https://www.svgrepo.com/show/325437/nav-arrow-right.svg")
      
    }
  }
  return (
    <>
<NAV_home siteNavs={siteNavs} right_leftionsipt ={right_leftionsipt} right_leftion={right_leftion}  />
<div className="textNavicon">
    <img className={`textNaviconimg `} onClick={props.right_leftionsipt}src={props.right_leftion} alt="" />
</div>
<div className='rightDisplay'>
<h1 className='text-h1'>HTML Working</h1>
<p className="text-style">You must have heard of frontend and backend. Frontend refers to the visible part of a website or app that users interact with, like the tables, images, and buttons. It's built using languages like HTML, CSS, and JavaScript. The backend, on the other hand, handles behind-the-scenes operations like storing and processing data when users interact with the frontend. It uses languages like Python, Ruby, and Java. In essence, frontend is what users see, while backend manages the functionality.</p>
<h4>How do websites work?</h4>
<p className="text-style">When we want to access any information on the internet, we search for it using a web browser. The web browser retrieves the content from web servers, where it is stored in the form of HTML documents.An HTML document is created by writing code with specific tags in a code editor of your choice. The document is then saved with the '.html' extension. Once saved, the browser interprets the HTML document, reads it, and renders the web page.</p>
<img className='textinimg' src="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/tutorial/how-html-works/how%20html%20homeworks.png" alt="Image preview" style={{"height" : "150px", "width" : "100%"}}/>



           </div>
    </>
  )
}
