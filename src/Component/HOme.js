import React from 'react'
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion"

export default function HOme(props) {

    return (
        <>
            <div className='containerHome'>
                <div className='containtCardHome'>
                    <h1 className={`${props.mode === "lightmode" ? "lightcolor" : "darkcolor"}`}>
                    {props.titel}</h1>
                    {/* <h3>I,m a</h3> */}
                    <Typewriter  options={{ strings: ["'With the world's largest web developer site."], autoStart: true, loop: true, }}  style={{ color: 'black' }} />
                    <p id='typewriter'>{props.subtitel}</p>
                    <div className="btnHome">
                    <a className='btn' href="https://www.youtube.com/results?search_query=free+course"> Free Course</a> 
                        <button className='btn'> Expore Bolog</button>
                    </div>
                </div>
            </div>


            <h2 className={`${props.CoursesTextColor}  `}>Recommended Courses</h2>




            <div className="mainDisplay">
                <div className='outLockCart'>

                    <div className={`mainCard ${props.CoursesCardMode} ${props.mode === "lightmode" ? "lightcolor" : "darkcolor"}`}>
                        <div className="cardImg">
                            <img className="imgCourses"  src="https://i.ytimg.com/vi/lD1lk8YRXpw/maxresdefault.jpg" alt="" />
                        </div>
                        <div className="textCard">
                            <h6 className={`${props.CoursesTextColor} `}>FREE COURSE</h6>
                            <h4 className={`${props.CoursesTextColor} `}>Python Tutorials - 100 Days of Code</h4>
                            <p className={`${props.CoursesTextColor} `}>Python is one of the most demanded programming languages in the job market. Surprisingly, it is equally easy to learn and master Python. Let's commit our 100 days of code to python!</p>
                            <a className='btn' href="https://www.youtube.com/watch?v=i3-PQ4CkU8s&list=PLSzsOkUDsvdvGZ2fXGizY_Iz9j8-ZlLqh">Watch video!</a>
                        </div>
                    </div>         
                     <div className={`mainCard ${props.CoursesCardMode} ${props.mode === "lightmode" ? "lightcolor" : "darkcolor"}`}>
                        <div className="cardImg">
                            <img className="imgCourses" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh9p-Bt3hpwCqIout8x9aIZP1yhHkHflJokQ&usqp=CAU" alt="" />
                        </div>
                        <div className="textCard">
                            <h6 className={`${props.CoursesTextColor} `}>FREE COURSE</h6>
                            <h4 className={`${props.CoursesTextColor} `}>Tailwind Course In Hindi</h4>
                            <p className={`${props.CoursesTextColor} `}>Complete Tailwind CSS Course by CodeWithHarry in Hindi - Learn Tailwind CSS from scratch for free!</p>
                            <a className='btn' href="https://www.youtube.com/watch?v=6LhRLZ5_IgI&list=PLjVLYmrlmjGfpwYhVAbiGAhFl6h8XWDV_">Watch video!</a>
                        </div>
                    </div>          <div className={`mainCard ${props.CoursesCardMode} ${props.mode === "lightmode" ? "lightcolor" : "darkcolor"}`}>
                        <div className="cardImg">
                            <img className="imgCourses" src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230310153232/ReactJS-Tutorial.jpg" alt="" />
                        </div>
                        <div className="textCard">
                            <h6 className={`${props.CoursesTextColor} `}>FREE COURSE</h6>
                            <h4 className={`${props.CoursesTextColor} `}>React Js Tutorials For Beginners</h4>
                            <p className={`${props.CoursesTextColor} `}>React is a free and open-source front-end JavaScript library. This series will cover React from starting to the end. We will learn react from the ground up</p>
                            <a className='btn' href="https://www.youtube.com/watch?v=LX4JUscM9Sk&list=PLjVLYmrlmjGdnIQKgnTeR1T9-1ltJEaJh">Watch video!</a>
                        </div>
                    </div>



                </div>
            </div>





            <h2 className={`${props.CoursesTextColor}  `}>Testimonials</h2>

            <div className="outLockHome">
                <div className="readBoxHome">


                    <div className={`arountBoxHome ${props.mode}`}>
                        <div className="mainReadHome">
                            I don't have words to thank this man, I'm really grateful to have this channel and website in my daily routine. If you're a mere beginner, then you can trust this guy and can put your time into his content. I can assure you that it'll be worth it.
                        </div>
                        <div className="titelReadHome">
                            <h4>Mohit Mahmud</h4>
                            <h6>Web Developer</h6>
                        </div>
                    </div>
                    <div className={`arountBoxHome ${props.mode}`}>
                        <div className="mainReadHome">
                        For everyone who wants to level up their #Coding and #Dev skills - seriously, this channel is for you! Both basic and advanced stacks are covered on this channel, and one can learn according to his skill levels. And the icing on the cake is, everything is available for free.
                        </div>
                        <div className="titelReadHome">
                            <h4>Rakesh Shetty</h4>
                            <h6>Web Developer</h6>
                        </div>
                    </div>







                </div>
            </div>
        </>
    )
}
