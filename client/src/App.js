import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import {BroserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Footer />
    </div>
  );
}

export default App;


// import Navbar from './components/Navbar';

// function App() {
//   return (
//     <div className="App">
//       < Navbar/>    
//       </div>
//   );
// }

// export default App;