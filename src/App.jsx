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
    </div>
  );
}




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/team" element={<Team />} />

      </Routes>
    </Router>




  );
}

export default App;
