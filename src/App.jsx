import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      {/* Future sections: Skills, Projects, Contact */}
    </div>
  );
}

export default App;
