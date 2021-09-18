import React, { useState } from "react";
import styled from "styled-components";
import Lesson from "./lesson";

const StyledSection = styled.div`
  padding: 1rem;
  background-color: rgba(0, 206, 171, 0.25);

  > .section-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  > .section-info {
    font-size: 0.8rem;
  }

  & :hover {
    cursor: pointer;
  }
`;

const StyledLesson = styled.div`
  display: ${(props) =>
    props.idx !== props.activeIndex
      ? "none"
      : !props.activeLesson
      ? "none"
      : "flex"};
  flex-direction: column;
`;

const Section = ({ item, idx, clickIndex, setClickIndex }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeLesson, setActiveLesson] = useState(false);

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

  let totalDuration = 0;
  item.lesson.forEach((item) => {
    totalDuration += item.duration;
  });

  return (
    <>
      <StyledSection
        onClick={() => {
          onTitleClick(idx);
        }}
      >
        <div className="section-title">
          <h5>{item.sectionTitle}</h5>
          <i className={iconClass}></i>
        </div>
        <p className="section-info">
          {item.lesson.length} courses | {totalDuration} min
        </p>
      </StyledSection>
      <StyledLesson
        idx={idx}
        activeIndex={activeIndex}
        activeLesson={activeLesson}
      >
        {item.lesson.map((item, index) => {
          return (
            <Lesson
              clickIndex={clickIndex}
              setClickIndex={setClickIndex}
              item={item}
              key={index}
            />
          );
        })}
      </StyledLesson>
    </>
  );
};

export default Section;
