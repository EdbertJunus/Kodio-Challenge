import React, { Component } from "react";
import "./styles/lesson.css";

class Lesson extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="lesson">
        <p>{item.title}</p>
        <span>{item.duration}</span>
      </div>
    );
  }
}

export default Lesson;
