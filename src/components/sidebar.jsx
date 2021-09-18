import React from "react";
import styled from "styled-components";
import Section from "./section";

const StyledSidebar = styled.div`
  border-right: 1px solid;
  width: 20%;
  height: 100%;
  position: fixed;
  background-color: white;
  padding-top: 3rem;

  > .sidebar-title {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 1rem;
    align-items: center;
    border-bottom: 1px solid;
    height: 10%;
    background-color: rgba(0, 206, 171, 1);
    color: white;
  }

  > .sidebar-content {
    position: sticky;
    overflow-y: scroll;
    height: 90%;
  }

  @media screen and (max-width: 992px) {
    width: 100%;
    border: 0;
    display: ${(props) => (props.clickIndex ? "block" : "none")};
    position: unset;

    > .sidebar-title {
      height: fit-content;
    }

    > .sidebar-content {
      position: relative;
      height: 100%;
      overflow-y: unset;
    }
  }
`;

const Sidebar = ({ data: SidebarData, clickIndex, setClickIndex }) => {
  return (
    <StyledSidebar clickIndex={clickIndex}>
      <div className="sidebar-title">
        <h3>Course Content</h3>
      </div>
      <div className="sidebar-content">
        {SidebarData.map((item, index) => {
          return (
            <Section
              clickIndex={clickIndex}
              setClickIndex={setClickIndex}
              item={item}
              key={index}
              idx={index}
            />
          );
        })}
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;
