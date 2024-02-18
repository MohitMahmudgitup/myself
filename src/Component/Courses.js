import React from 'react'

export default function Courses(props) {
  return (
    <>
      <h2 className={`${props.CoursesTextColor}  `}>{props.titel}</h2>
      <div className="mainDisplay">
        <div className='outLockCart'>











          <div className={`mainCard ${props.CoursesCardMode} `}>
            <div className="cardImg">
              <img className ="imgCourses"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh1n1I_zvcYuDFcFHpNhe6LtzOkn-W5jBIY5FEZw_wghLP0yDSFYMa5k4cW_LQtWlEANI&usqp=CAU" alt="https://cssgradient.io/" />
            </div>
            <div className={`textCard `}>
              <h6 className={`${props.CoursesTextColor} `} >FREE COURSE</h6>
              <h4 className={`${props.CoursesTextColor} `}>Ultimate JavaScript Course</h4>
              <p className={`${props.CoursesTextColor} `}>This latest JavaScript course comes with premium curriculum that covers everything from basics to advance. On top of that, you will get my handwritten notes of JS for completely free. What are you waiting for? Just Enroll Buddy</p>
            </div>
          </div>
          <div className={`mainCard ${props.CoursesCardMode}`}>
            <div className="cardImg">
              <img className ="imgCourses"  src="https://cdn.sanity.io/images/81pocpw8/production/2dec86b1e9c10f3a2a407b5d10fbf9d59aa40069-1200x758.png?rect=0,4,1200,750&w=800&h=500&fit=clip&auto=format" alt="" />
            </div>
            <div className="textCard">
              <h6 className={`${props.CoursesTextColor} `}>FREE COURSE</h6>
              <h4 className={`${props.CoursesTextColor} `}>Sanity.io Tutorials in Hindi</h4>
              <p className={`${props.CoursesTextColor} `}>Sanity.io is the platform for structured content. This course will not only cover Sanity from starting to the end, but it has projects for hands-on experience.</p>
            </div>
          </div>          <div className={`mainCard ${props.CoursesCardMode} ${props.mode === "lightmode" ? "lightcolor" : "darkcolor"}`}>
            <div className="cardImg">
              <img className ="imgCourses"  src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Strapi_Custom_Plugin_8_815c98f03f.jpg" alt="" />
            </div>
            <div className="textCard">
              <h6 className={`${props.CoursesTextColor} `}>FREE COURSE</h6>
              <h4 className={`${props.CoursesTextColor} `}>Strapi Tutorial For Beginners</h4>
              <p className={`${props.CoursesTextColor} `}>This course contains everything that you should know about Strapi. It is an open-source, Headless CMS that saves lot of time for developers by giving them freedom to use their favorite tools and frameworks</p>
            </div>
          </div>          <div className={`mainCard ${props.CoursesCardMode} ${props.mode === "lightmode" ? "lightcolor" : "darkcolor"}`}>
            <div className="cardImg">
              <img className ="imgCourses"  src="https://i.ytimg.com/vi/lD1lk8YRXpw/maxresdefault.jpg" alt="" />
            </div>
            <div className="textCard">
              <h6 className={`${props.CoursesTextColor} `}>FREE COURSE</h6>
              <h4 className={`${props.CoursesTextColor} `}>Python Tutorials - 100 Days of Code</h4>
              <p className={`${props.CoursesTextColor} `}>Python is one of the most demanded programming languages in the job market. Surprisingly, it is equally easy to learn and master Python. Let's commit our 100 days of code to python!</p>
            </div>
          </div>          <div className={`mainCard ${props.CoursesCardMode} ${props.mode === "lightmode" ? "lightcolor" : "darkcolor"}`}>
            <div className="cardImg">
              <img className ="imgCourses"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh9p-Bt3hpwCqIout8x9aIZP1yhHkHflJokQ&usqp=CAU" alt="" />
            </div>
            <div className="textCard">
              <h6 className={`${props.CoursesTextColor} `}>FREE COURSE</h6>
              <h4 className={`${props.CoursesTextColor} `}>Tailwind Course In Hindi</h4>
              <p className={`${props.CoursesTextColor} `}>Complete Tailwind CSS Course by CodeWithHarry in Hindi - Learn Tailwind CSS from scratch for free!</p>
            </div>
          </div>          <div className={`mainCard ${props.CoursesCardMode} ${props.mode === "lightmode" ? "lightcolor" : "darkcolor"}`}>
            <div className="cardImg">
              <img className ="imgCourses"  src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230310153232/ReactJS-Tutorial.jpg" alt="" />
            </div>
            <div className="textCard">
              <h6 className={`${props.CoursesTextColor} `}>FREE COURSE</h6>
              <h4 className={`${props.CoursesTextColor} `}>React Js Tutorials For Beginners</h4>
              <p className={`${props.CoursesTextColor} `}>React is a free and open-source front-end JavaScript library. This series will cover React from starting to the end. We will learn react from the ground up</p>
            </div>
          </div>












        </div>
      </div>

      <h2 className={`${props.mode === "lightmode" ? "lightcolor" : "darkcolor"} `}>{props.footer}</h2>




      <div className="mainDisplay">
        <div className='outLockCart'>

          <div className={`mainCard ${props.CoursesCardMode} ${props.mode === "lightmode" ? "lightcolor" : "darkcolor"}`}>
            <div className="cardImg">
              <img className ="imgCourses"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8v9y4NlnTi4ypQP073fmU3nnV4VqPTiJcxVSP2zB1PAk_xAEfQBmjGrDye9DZBmIx_UI&usqp=CAU" alt="" />
            </div>
            <div className="textCard">
              <h6 className={`${props.CoursesTextColor} `}>FREE COURSE</h6>
              <h4 className={`${props.CoursesTextColor} `}>General Python Errors</h4>
              <p className={`${props.CoursesTextColor} `}>Being a coder, I can understand the pain and excitement while finding a bug or error in a code. This course contains some of the most famous or common errors in the Python language.</p>
            </div>
          </div>
          <div className={`mainCard ${props.CoursesCardMode} ${props.mode === "lightmode" ? "lightcolor" : "darkcolor"}`}>
            <div className="cardImg">
              <img className ="imgCourses"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8v9y4NlnTi4ypQP073fmU3nnV4VqPTiJcxVSP2zB1PAk_xAEfQBmjGrDye9DZBmIx_UI&usqp=CAU" alt="" />
            </div>
            <div className="textCard">
              <h6 className={`${props.CoursesTextColor} `}>FREE COURSE</h6>
              <h4 className={`${props.CoursesTextColor} `}>C Language Practice Programs</h4>
              <p className={`${props.CoursesTextColor} `}>This series contains programs for you to practice C Programming and related concepts. It has videos that will provide you with a proper explanation of the program and its logic.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
