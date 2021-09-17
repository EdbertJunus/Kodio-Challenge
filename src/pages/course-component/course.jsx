import React from "react";
import "../styles/course.css";

const Course = ({ title, video }) => {
  return (
    <div className="course">
      <iframe title="course-video" className="course-video" src={video} />
      <div className="course-description">
        <hr />
        <h3>{title}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          reiciendis, omnis magni voluptate tempora laudantium eos. Voluptates
          facere unde veniam hic! Nesciunt excepturi nemo est libero impedit
          esse voluptate nobis.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Error reiciendis, omnis magni voluptate tempora
          laudantium eos. Voluptates facere unde veniam hic! Nesciunt excepturi
          nemo est libero impedit esse voluptate nobis.Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Error reiciendis, omnis magni
          voluptate tempora laudantium eos. Voluptates facere unde veniam hic!
          Nesciunt excepturi nemo est libero impedit esse voluptate nobis.Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Error reiciendis,
          omnis magni voluptate tempora laudantium eos. Voluptates facere unde
          veniam hic! Nesciunt excepturi nemo est libero impedit esse voluptate
          nobis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          reiciendis, omnis magni voluptate tempora laudantium eos. Voluptates
          facere unde veniam hic! Nesciunt excepturi nemo est libero impedit
          esse voluptate nobis.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Error reiciendis, omnis magni voluptate tempora
          laudantium eos. Voluptates facere unde veniam hic! Nesciunt excepturi
          nemo est libero impedit esse voluptate nobis.Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Error reiciendis, omnis magni
          voluptate tempora laudantium eos. Voluptates facere unde veniam hic!
          Nesciunt excepturi nemo est libero impedit esse voluptate nobis.Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Error reiciendis,
          omnis magni voluptate tempora laudantium eos. Voluptates facere unde
          veniam hic! Nesciunt excepturi nemo est libero impedit esse voluptate
          nobis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          reiciendis, omnis magni voluptate tempora laudantium eos. Voluptates
          facere unde veniam hic! Nesciunt excepturi nemo est libero impedit
          esse voluptate nobis.
        </p>
      </div>
    </div>
  );
};

export default Course;
