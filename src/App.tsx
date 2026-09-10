import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero-Section";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
       <Hero />
    </>
  );
}

export default App;
