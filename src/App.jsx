import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <>
    <ParallaxProvider>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
      <Footer></Footer>
      </ParallaxProvider>
    </>
  );
}

export default App;
