import React from 'react'
import NAV_home from '../../NAV_home'
// import NAV_home from './NAV_home'
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import HTML_Working from './HTML_Working';




export default function HTML_Introduction(props) {
    
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
            {/* <NAV_home /> */}
      <NAV_home siteNavs={siteNavs} right_leftionsipt ={right_leftionsipt} right_leftion={right_leftion}  />

        
            <div className='rightDisplay'>

                <h1 className='text-h1'>HTML Introduction</h1>
                <p className="text-style">Today, I'm writing this tutorial to create a resource that will help you learn HTML in less than 30 days.</p>
                <p className="text-style">Here's a recommended timeline for learning HTML, based on your educational background:</p>
                <li>High School students and younger: Around 25 days</li>
                <li>Those beyond High School: Around 20 days</li>
                <li>College students and above: Around 10-20 days</li>
                <p className="text-style">You may be wondering why I'm discussing these timelines. It's important for me to set expectations before you start your journey of learning html with me.</p>
                <p className="text-style">My name is Harry (the same CodeWithHarry guy from YouTube), and today I'm writing this comprehensive HTML tutorial for all of you. Let's jump right into HTML!</p>
                <h4>What is HTML?</h4>
                <p className="text-style">HTML (HyperText Markup Language) was created by Tim Berners-Lee in 1991 as a standard for creating web pages. It's a markup language used to structure content on the web, defining elements like headings, paragraphs, links, and images. HTML forms the backbone of web content. In layman's terms, HTML is like the skeleton of a website. It's a set of instructions that tells a web browser how to display text, images, videos, and other elements on a webpage. Think of it as the building blocks that create the structure and look of a website, similar to how bricks and mortar are used to build a house.</p>
                <p className="text-style">In a nutshell:</p>
                <li>HTML is the language of the web, used to create websites.</li>
                <li>HTML defines the barebone structure or layout of web pages that we see on the Internet.</li>
                <li>HTML consists of a set of tags contained within an HTML document, and the associated files typically have either a ".html" or ".htm" extension.</li>
                <li>There are several versions of HTML, with HTML5 being the most recent version.</li>
                <h4>Features of HTML</h4>
                <li>It is platform-independent. For example, Chrome displays the same pages identically across different operating systems such as Mac, Linux, and Windows.</li>
                <li>Images, videos, and audio can be added to a web page (For example - YouTube shows videos on their website)</li>
                <li>It can be integrated with other languages like CSS, JavaScript, etc. to show interactive (or dynamic) web pages</li>
                <h4>Why the Term HyperText & Markup Language?</h4>
                <p className="text-style">The term 'Hypertext Markup Language' is composed of two main words: 'hypertext' and 'markup language.' 'Hypertext' refers to the linking of text with other documents, while 'markup language' denotes a language that utilizes a specific set of tags.</p>
                <p className="text-style">Thus, HTML is the practice of displaying text, graphics, audio, video etc. in a certain way using special tags.</p>
                <p className="text-style">Note: Tags are meaningful texts enclosed in angle braces, like . For example, the tag. Each tag has a unique meaning and significance in building an HTML page, and it can influence the web page in various ways.</p>
                <h4>A beautiful analogy to understand HTML, CSS, and JavaScript:</h4>
                <img src="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/tutorial/html-home/html-car-example.png" style={{ "width": "100%" }} />
                <p className="text-style">In building a webpage, think of HTML, CSS, and JavaScript as different parts of a car. HTML is like the car's skeleton, forming the basic structure and frame. CSS adds the paint and finishing touches, making the car look appealing with color, style, and design. JavaScript is similar to the engine and mechanical parts, infusing the car with functionality, movement, and interactive features. Similarly, when developing a website, HTML lays out the structure, CSS enhances its visual appeal, and JavaScript provides interactivity and dynamic content</p>
                <h4>History of HTML:</h4>
                <li>In 1989, Tim Berners-Lee established the World Wide Web (www), and in 1991, he created the first version of HTML.</li>
                <li>From 1995 to 1997, further work was done to develop and refine different versions of HTML.</li>
                <li>In 1999, a committee was organized that standardized HTML 4.0, a version still used by many today.</li>
                <p className="text-style">Feel free to read more history of HTML here on the HTML Wikipedia page but I will move ahead and cover important aspects of HTML.</p>
                <p className="text-style">In the next tutorial, we'll continue our journey and understand how websites work</p>






            </div>


        </>
    )
}
