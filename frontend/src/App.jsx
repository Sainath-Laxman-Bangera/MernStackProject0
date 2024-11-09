import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("white");
  // Praise the Lord Jesus
  document.getElementById("body").style.backgroundColor = bgColor;
  return (
    <div className="container" style={{ backgroundColor: bgColor }}>
      <Navbar bgClr={setBgColor}></Navbar>
      <Routes>
        <Route path={"/"} element={<HomePage homeBox={bgColor} />}></Route>
        <Route
          path={"/create"}
          element={<CreatePage createBox={bgColor} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
