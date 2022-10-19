import React from 'react';
import "./Course.css";
import { Button } from 'react-bootstrap';


const Course = (props) => {
  const{name,instructor,price,image}=props.course;
    return (
        <div className="course">
          <div>
          <img src={image} alt=""/>
          </div>
          <div>
          <h3>Name:{name}</h3>
          <h5>Instructor:{instructor}</h5>
          <h5>Price:{price}</h5>
          <Button variant="warning" onClick={()=>(props.handleButton(props.course))}>Enroll Now</Button>
          </div>
      </div>
    );
};

export default Course;