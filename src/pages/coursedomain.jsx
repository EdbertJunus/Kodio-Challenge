import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Course from "./course-component/course";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { SidebarData } from "../components/sidebardata";
import Navbar from "../components/navbar";

const CourseDomain = () => {
  const [clickIndex, setClickIndex] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <Navbar clickIndex={clickIndex} setClickIndex={setClickIndex} />
        <Route path="/course">
          <Sidebar
            clickIndex={clickIndex}
            setClickIndex={setClickIndex}
            data={SidebarData}
          />
        </Route>

        <Switch>
          <Redirect
            exact
            from="/course"
            to={`/course${SidebarData[0].lesson[0].path}`}
          />
          {SidebarData.map((item, index) =>
            // eslint-disable-next-line no-lone-blocks

            item.lesson.map((lessonItem, lessonIndex) => (
              <Route
                key={lessonIndex}
                path={`/course${lessonItem.path}`}
                exact={lessonItem.exact}
              >
                <Course
                  clickIndex={clickIndex}
                  title={lessonItem.title}
                  video={lessonItem.video}
                />
              </Route>
            ))
          )}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default CourseDomain;
