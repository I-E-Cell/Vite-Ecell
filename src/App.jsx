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
import TeamScrap from "./Components/TeamScrap";
import Credits from "./Components/Credits";
import Udyamita from "./Components/Udyamita";
import Startups from "./Components/Startups";
import Popup from "./Components/Popup";
import Docs from "./Components/Docs";
import Documents from "./Components/Documents";

// import LineChart from "./Components/LineChart";
import mixpanel from 'mixpanel-browser';
mixpanel.init('b2ff7ac9e3348a34108ce514efef85ce', { debug: true, track_pageview: true, persistence: 'localStorage' });


function LandingPage() {
  mixpanel.track('HomePage loaded');
  return (
    <div>
      <Nav />
      <Hero />
      <Moto />
      <Initia />
      <Udyamita />
      <Docs />
      <Newsletter />
      <CarouselDisplay />
      <Footer />
      {/* <Popup /> */}
      {/* <LineChart /> */}

    </div>
  );
}




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/team" element={<TeamScrap />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/internship" element={<Internship />} />
        <Route path='/alumni' element={<Alumni />} />
        <Route path='/credits' element={<Credits />} />
        <Route path='/startups' element={<Startups />} />
        <Route path='/document' element={<Documents />} />



      </Routes>
    </Router>




  );
}

export default App;
