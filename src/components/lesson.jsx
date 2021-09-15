import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./styles/lesson.css";

class Lesson extends Component {
  render() {
    const { item } = this.props;

    return (
      <NavLink
        to={item.path}
        className="lesson"
        exact
        activeClassName="active-lesson"
      >
        <p>{item.title}</p>
        <span>| {item.duration} min</span>
      </NavLink>
    );
  }
}

export default Lesson;
