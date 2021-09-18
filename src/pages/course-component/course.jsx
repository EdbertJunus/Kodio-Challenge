import React from "react";
import styled from "styled-components";

const StyledCourse = styled.div`
  width: 80%;
  margin-left: 20%;
  display: flex;
  flex-direction: column;
  padding-top: 3rem;

  > .course-video {
    width: 100%;
    height: 500px;
  }

  @media screen and (max-width: 992px) {
    width: 100%;
    margin-left: 0;
    display: ${(props) => (props.clickIndex ? "none" : "flex")};
  }
`;

const StyledCourseDescription = styled.div`
  padding: 1rem;

  > h3 {
    margin: 0.5rem 0;
  }
`;

const Course = ({ clickIndex, title, video }) => {
  return (
    <StyledCourse clickIndex={clickIndex}>
      <iframe title="course-video" className="course-video" src={video} />
      <StyledCourseDescription>
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
      </StyledCourseDescription>
    </StyledCourse>
  );
};

export default Course;
