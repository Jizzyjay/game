import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setTheme(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
    );
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${theme} ${theme == "dark" ? "bg-[#121212]" : null} min:h-[100vh]`}>
        <Navbar />
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
