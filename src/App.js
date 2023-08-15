import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Work from "./components/Work/Work";

import AboutOverview from "./components/AboutOverview/AboutOverview";
import About1 from "./components/About1/About1";
import About2 from "./components/About2/About2";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />}>
            <Route index element={<AboutOverview />} />
            <Route path="1" element={<About1 />} />
            <Route path="2" element={<About2 />} />
          </Route>
          <Route path="/work" element={<Work />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}
export default App;
