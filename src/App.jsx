// ------------------------------APP----------------------------------//

import React from "react";

import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Moto from "./Components/Moto";
import Initia from "./Components/Initia";
import Line from "./Components/LineChart";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";




function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Moto />
      <Initia />
      {/* <Line /> */}
      <Newsletter />
      <Footer />
      
     
    </div>




  );
}

export default App;
