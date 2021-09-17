import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/lesson.css";

const Lesson = ({ item, clickIndex, setClickIndex }) => {
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
};

export default Lesson;
