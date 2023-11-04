import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <hr className="w-[75%] text-center mx-auto my-3  border-t-2 border-teal-500" />
      <Home />
      <Projects />
    </>
  )
}

export default App
