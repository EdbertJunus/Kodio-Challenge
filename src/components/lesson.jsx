import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LessonLink = styled(NavLink)`
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: black;
  background-color: white;
  font-size: 0.8rem;

  &:hover {
    background-color: rgba(0, 206, 171, 1);
  }

  &.${(props) => props.activeClassName} {
    background-color: rgba(0, 206, 171, 1);
    color: white;
    font-weight: 500;
  }

  @media screen and (max-width: 992px) {
    display: block;
    width: 100%;
  }
`;

const Lesson = ({ item, clickIndex, setClickIndex }) => {
  const handleLessonClick = () => {
    setClickIndex(!clickIndex);
  };

  return (
    <LessonLink
      to={`/course${item.path}`}
      exact
      activeClassName
      onClick={handleLessonClick}
    >
      <p>{item.title}</p>
      <p>| {item.duration} min</p>
    </LessonLink>
  );
};

export default Lesson;
