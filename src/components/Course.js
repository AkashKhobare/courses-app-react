import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({course}) => {

  return (
    <div> 
      <h2>{course.title}</h2>
      <h6>{course.description}</h6>
      <Link to={`/courses/enquire/${course.id}`}>
        <input type="button" value="Enquire" />
      </Link>
    </div>
  )
}

export default Course;