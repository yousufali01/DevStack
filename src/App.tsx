import "./App.css";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero-Section";
import Technologies from "./Components/Technologies";
import Footer from "./Components/Footer";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
       <Hero />
       <Technologies/>
       <Footer/>
    </>
  );
}

export default App;
