import React, { Component } from "react";
import Section from "./section";
import "./styles/sidebar.css";
import { SidebarData } from "./sidebardata";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-title">
          <h5>Course Content</h5>
        </div>
        <div className="sidebar-content">
          {SidebarData.map((item, index) => {
            return <Section item={item} key={index} idx={index} />;
          })}
        </div>
      </div>
    );
  }
}

export default Sidebar;
