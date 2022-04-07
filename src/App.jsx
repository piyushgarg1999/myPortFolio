import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="" element={<Home />}></Route>
        <Route exact path="/About" element={<About />}></Route>
        <Route exact path="/Contact" element={<Home />}></Route>
        <Route exact path="/download-cv" element={<Home />}></Route>
      </Routes>
      <Footer />
    </>
  );
};
export default App;
