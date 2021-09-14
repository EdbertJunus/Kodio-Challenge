import React, { useState } from "react";
import Lesson from "./lesson";
import "./styles/section.css";

const Section = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeLesson, setActiveLesson] = useState(false);
  const { item, idx } = props;

  const showActiveLesson = () => setActiveLesson(!activeLesson);

  const onTitleClick = (index) => {
    setActiveIndex(index);
    showActiveLesson();
  };

  const iconClass =
    idx !== activeIndex
      ? "fas fa-chevron-down"
      : activeLesson === false
      ? "fas fa-chevron-down"
      : "fas fa-chevron-up";

  return (
    <React.Fragment>
      <div
        className="section"
        onClick={() => {
          onTitleClick(idx);
        }}
      >
        <div className="section-title">
          <h5>{item.sectionTitle}</h5>
          <i class={iconClass}></i>
        </div>
        <p className="section-info">{item.lesson.length} courses | 58 min</p>
      </div>
      <div
        className={
          idx !== activeIndex
            ? "section-lessons"
            : activeLesson === false
            ? "section-lessons"
            : "section-lessons active"
        }
      >
        {item.lesson.map((item, index) => {
          return <Lesson item={item} key={index} />;
        })}
      </div>
    </React.Fragment>
  );
};

export default Section;
