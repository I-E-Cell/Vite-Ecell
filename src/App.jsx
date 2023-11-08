// ------------------------------APP----------------------------------//

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Moto from "./Components/Moto";
import Initia from "./Components/Initia";
// import Line from "./Components/LineChart";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";
import CarouselDisplay from "./Components/CarouselDisplay";
import Team from "./Components/Team";
import Gallery from "./Components/Gallery";
import Internship from "./Components/Internship";
import AlumniCard from "./Components/AlumniCard";
import Alumni from "./Components/Alumni";
import CardEcell from "./Components/CardEcell";


function LandingPage() {
  return (
    <div>
      <Nav />
      <Hero />
      <Moto />
      <Initia />
      {/* <Line /> */}
      <Newsletter />
      <CarouselDisplay />
      <Footer />
      <CardEcell />
      
    </div>
  );
}




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/internship" element={<Internship />} />
        <Route path='/alumni' element={<Alumni />} />
        

      </Routes>
    </Router>




  );
}

export default App;
