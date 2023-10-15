// ------------------------------APP----------------------------------//


import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Vision from "./Components/Vision";
import Initiatives from "./Components/Initiatives";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Team from "./Components/Team";


function App() {
  return (
    <div>
     <Navbar />
     <Home />
     <Vision />
     <Initiatives />
     <Team />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
