import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Course from "./Course";

import "./Courses.css";

const Courses = () => {

    const coursesAPI = "http://localhost:3010/courses";

    const [ courses, setCourses ] = useState([])

    useEffect(() => {
        fetch(coursesAPI)
            .then(res => res.json())
            .then(res => {
                setCourses(res)
            })
    }, []) 

    return (
        <div>
            <h3>Courses</h3>
            <div className="courses-container">
                {courses.map(course => 
                    <Course key={course.id} course={course}/>)
                }
            </div>

            <div>
                {courses.length > 0 ? 
                    <>
                        <hr />
                        <Link to="/enquiries">
                            <button>Current Enquiries</button>
                        </Link>
                    </>
                    : 
                    <></>}
            </div>
        </div>
    )

}

export default Courses;
