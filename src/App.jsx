import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Project_Detail from "./components/Project_Detail";
import Project_data from "./components/Project_data";
const App = () => {
  const path1 = Project_data[0].url;

  const path2 = Project_data[1].url;
  const path3 = Project_data[2].url;
  return (
    <>
      <Header />
      {console.log("PAth1 is" + path1)}
      <Routes>
        <Route exact path="" element={<Home />}></Route>
        <Route exact path="/About" element={<About />}></Route>
        <Route exact path="/Contact" element={<Home />}></Route>
        <Route exact path="/download-cv" element={<Home />}></Route>
        <Route
          exact
          path={path1}
          element={<Project_Detail my_data={Project_data[0]} />}
        ></Route>
        <Route
          exact
          path={path2}
          element={<Project_Detail my_data={Project_data[1]} />}
        ></Route>
        <Route
          exact
          path={path3}
          element={<Project_Detail my_data={Project_data[2]} />}
        ></Route>
      </Routes>
      <Footer />
    </>
  );
};
export default App;
