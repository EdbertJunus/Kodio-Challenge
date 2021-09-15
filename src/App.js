import "./App.css";
import Sidebar from "./components/sidebar";
import Course from "./pages/course";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { SidebarData } from "./components/sidebardata";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar data={SidebarData} />
        <Switch>
          {SidebarData.map((item, index) =>
            // eslint-disable-next-line no-lone-blocks

            item.lesson.map((lessonItem, lessonIndex) => (
              <Route
                key={lessonItem.title}
                path={lessonItem.path}
                exact={lessonItem.exact}
              >
                <Course title={lessonItem.title} video={lessonItem.video} />
              </Route>
            ))
          )}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
