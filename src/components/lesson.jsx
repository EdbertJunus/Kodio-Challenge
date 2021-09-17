import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./styles/lesson.css";

class Lesson extends Component {
  render() {
    const { item, clickIndex, setClickIndex } = this.props;

    const handleLessonClick = () => {
      setClickIndex(!clickIndex);
    };

    return (
      <NavLink
        to={`/course${item.path}`}
        className="lesson"
        exact
        activeClassName="active-lesson"
        onClick={handleLessonClick}
      >
        <p>{item.title}</p>
        <span>| {item.duration} min</span>
      </NavLink>
    );
  }
}

export default Lesson;
