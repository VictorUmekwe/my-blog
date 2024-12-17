import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import { useState } from "react";
import Footer from "./components/Footer";

const App = () => {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#494F55";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <BrowserRouter>
      <Header mode={mode} toggleMode={toggleMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={<About mode={mode} toggleMode={toggleMode} />}
        />
        <Route
          path="/sign-up"
          element={<SignUp mode={mode} toggleMode={toggleMode} />}
        />
        <Route
          path="/sign-in"
          element={<SignIn mode={mode} toggleMode={toggleMode} />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard mode={mode} toggleMode={toggleMode} />}
        />
        <Route
          path="/projects"
          element={<Projects mode={mode} toggleMode={toggleMode} />}
        />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
