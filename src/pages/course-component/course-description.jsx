import React from "react";

const CourseDescription = ({ title, children }) => {
  return (
    <div>
      <hr />
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
};

export default CourseDescription;
