import React from 'react'

export default function Tutorials(props) {
  return (
    <>
      <h2 className={`${props.mode==="lightmode"?"lightcolor":"darkcolor"} `}>{ props.titel}</h2>
      <div className="container">
        <div className="maincover">



          <div className={`card ${props.mode}`}>
            <div className="cardimage">
              <img src="https://w1.pngwing.com/pngs/835/530/png-transparent-python-logo-programming-language-computer-programming-python-programming-basics-for-absolute-beginners-scripting-language-source-code-php-code-climate-inc-thumbnail.png"/>
            </div>
            <div className="cardText">
              <h3>Python Tutorial</h3>
              <button className='btn' alt="https://docs.python.org/3/library/string.html">Start Learning!</button>
            </div>
          </div>
          <div className={`card ${props.mode}`}>
            <div className="cardimage">
              <img src="https://i.pinimg.com/originals/6e/46/e7/6e46e7dbe2bb73dacc055e5dbd85c3ad.png" alt="" />
            </div>
            <div className="cardText">
              <h3>C Tutorial</h3>
              <button className='btn'>Start Learning!</button>
            </div>
          </div><div className={`card ${props.mode}`}>
            <div className="cardimage">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjHyaGWQgA6lHSYxlGHDdZAtSZ0y_FcK71dQ&usqp=CAU" alt="" />
            </div>
            <div className="cardText">
              <h3>C++ Tutorial</h3>
              <button className='btn'>Start Learning!</button>
            </div>
          </div><div className={`card ${props.mode}`}>
            <div className="cardimage">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLPNI3O044e31OifJI0bBkOH71oeo5K5VcNg&usqp=CAU" alt="" />
            </div>
            <div className="cardText">
              <h3>Java Tutorial</h3>
              <button className='btn'>Start Learning!</button>
            </div>
          </div><div className={`card ${props.mode}`}>
            <div className="cardimage">
              <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png" alt="" />
            </div>
            <div className="cardText">
              <h3>HTML Tutorial</h3>
              <button className='btn'>Start Learning!</button>
            </div>
          </div><div className={`card ${props.mode}`}>
            <div className="cardimage">
              <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" alt="" />
            </div>
            <div className="cardText">
              <h3>CSS Tutorial</h3>
              <button className='btn'>Start Learning!</button>
            </div>
          </div><div className={`card ${props.mode}`}>
            <div className="cardimage">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png" alt="" />
            </div>
            <div className="cardText">
              <h3>JavaScript Tutorial</h3>
              <button className='btn'>Start Learning!</button>
            </div>
          </div><div className={`card ${props.mode}`}>
            <div className="cardimage">
              <img src="https://d1zviajkun9gxg.cloudfront.net/user/prod/2020/01/05/fastpages-244f2d28-b2ce-4c69-a443-4c5d5b6e62eb.png" alt="" />
            </div>
            <div className="cardText">
              <h3>PHP Tutorial</h3>
              <button className='btn'>Start Learning!</button>
            </div>
          </div><div className={`card ${props.mode}`}>
            <div className="cardimage">
              <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" />
            </div>
            <div className="cardText">
              <h3>React JS Tutorial</h3>
              <button className='btn'>Start Learning!</button>
            </div>
          </div>




















        </div>
      </div>

    </>


  )
}
