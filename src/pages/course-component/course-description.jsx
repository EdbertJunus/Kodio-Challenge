import React, { Component } from "react";

class CourseDescription extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <div>
        <hr />
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    );
  }
}

export default CourseDescription;
